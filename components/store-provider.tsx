"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";
import {
  getProduct,
  getShipping,
  getUnitPrice,
  getMOQ,
  type Role
} from "@/lib/catalog";

export type CartLine = { productId: string; quantity: number };
export type Session = { role: Role; name: string };

type StoredData = {
  version: 2;
  session: Session | null;
  wishlist: string[];
  carts: { customer: CartLine[]; business: CartLine[] };
};

type StoreContextValue = {
  ready: boolean;
  session: Session | null;
  wishlist: string[];
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  notice: string;
  storageWarning: string;
  signIn: (role: Role, name?: string) => void;
  signOut: () => void;
  toggleWishlist: (id: string) => void;
  addToCart: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "sri-opticals:commerce:v2";
const StoreContext = createContext<StoreContextValue | null>(null);

function readStoredData(raw: string): StoredData {
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("version" in parsed) ||
    (parsed as { version: unknown }).version !== 2
  ) {
    throw new Error("Unsupported saved data");
  }
  const value = parsed as Record<string, unknown>;

  const sessionRaw = value.session as Record<string, unknown> | null;
  const session: Session | null =
    sessionRaw &&
    (sessionRaw.role === "customer" || sessionRaw.role === "business")
      ? {
          role: sessionRaw.role as Role,
          name:
            typeof sessionRaw.name === "string" ? sessionRaw.name.slice(0, 32) : ""
        }
      : null;

  const wishlist = Array.isArray(value.wishlist)
    ? [
        ...new Set(
          value.wishlist.filter(
            (id): id is string => typeof id === "string" && Boolean(getProduct(id))
          )
        )
      ]
    : [];

  function readCart(raw: unknown): CartLine[] {
    const quantities = new Map<string, number>();
    if (Array.isArray(raw)) {
      for (const item of raw) {
        if (typeof item !== "object" || item === null) continue;
        const line = item as Record<string, unknown>;
        if (typeof line.productId !== "string") continue;
        if (typeof line.quantity !== "number" || !Number.isFinite(line.quantity)) continue;
        const product = getProduct(line.productId);
        if (!product || product.stock === 0) continue;
        const q = Math.floor(line.quantity);
        if (q < 1) continue;
        const existing = quantities.get(product.id) ?? 0;
        quantities.set(product.id, Math.min(existing + q, product.stock));
      }
    }
    return [...quantities].map(([productId, quantity]) => ({ productId, quantity }));
  }

  const cartsRaw = value.carts as Record<string, unknown> | null;
  return {
    version: 2,
    session,
    wishlist,
    carts: {
      customer: readCart(cartsRaw?.customer),
      business: readCart(cartsRaw?.business)
    }
  };
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [carts, setCarts] = useState<{ customer: CartLine[]; business: CartLine[] }>({
    customer: [],
    business: []
  });
  const [notice, setNotice] = useState("");
  const [storageWarning, setStorageWarning] = useState("");
  const canPersist = useRef(true);
  const announcementTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function announce(message: string) {
    if (announcementTimer.current) clearTimeout(announcementTimer.current);
    setNotice("");
    announcementTimer.current = setTimeout(() => setNotice(message), 30);
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = readStoredData(raw);
        setSession(saved.session);
        setWishlist(saved.wishlist);
        setCarts(saved.carts);
      }
    } catch {
      canPersist.current = false;
      setStorageWarning(
        "Saved data could not be loaded. Shopping still works, but this session may not persist."
      );
    }
    setReady(true);
    return () => {
      if (announcementTimer.current) clearTimeout(announcementTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!ready || !canPersist.current) return;
    try {
      const data: StoredData = { version: 2, session, wishlist, carts };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      canPersist.current = false;
      setStorageWarning(
        "Browser storage is unavailable. Your changes will remain in this session only."
      );
    }
  }, [ready, session, wishlist, carts]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 4200);
    return () => clearTimeout(timer);
  }, [notice]);

  const role = session?.role ?? null;
  const cart = role === "business" ? carts.business : carts.customer;

  const subtotal = useMemo(
    () =>
      cart.reduce((sum, line) => {
        const product = getProduct(line.productId);
        return sum + (product ? getUnitPrice(product, role) * line.quantity : 0);
      }, 0),
    [cart, role]
  );

  function signIn(newRole: Role, name = "") {
    setSession({ role: newRole, name: name.slice(0, 32) });
    announce(
      newRole === "business"
        ? "Signed in to the business (wholesale) workspace."
        : "Signed in to your customer account."
    );
  }

  function signOut() {
    setSession(null);
    announce("Signed out. You are browsing as a guest.");
  }

  function toggleWishlist(id: string) {
    const product = getProduct(id);
    if (!product) return;
    const wasSaved = wishlist.includes(id);
    setWishlist((current) =>
      current.includes(id) ? current.filter((i) => i !== id) : [...current, id]
    );
    announce(
      wasSaved
        ? `${product.name} removed from your wishlist.`
        : `${product.name} saved to your wishlist.`
    );
  }

  function activeCartKey(): "customer" | "business" {
    return role === "business" ? "business" : "customer";
  }

  function addToCart(id: string, quantity?: number) {
    if (!ready) return;
    const product = getProduct(id);
    if (!product || product.stock === 0) {
      announce("This frame is currently unavailable.");
      return;
    }

    const moq = getMOQ(role);
    const q = quantity ?? moq;

    if (!Number.isInteger(q) || q < moq) {
      announce(`Minimum order for this account is ${moq} units.`);
      return;
    }

    const max = Math.min(product.stock, product.limit * 100);
    const key = activeCartKey();
    const existing = carts[key].find((l) => l.productId === id)?.quantity ?? 0;

    if (existing + q > max) {
      announce(`You can add up to ${max} of this frame.`);
      return;
    }

    setCarts((current) => {
      const lines = current[key];
      const line = lines.find((l) => l.productId === id);
      const currentQty = line?.quantity ?? 0;
      if (currentQty + q > max) return current;
      const next = line
        ? lines.map((l) => (l.productId === id ? { ...l, quantity: l.quantity + q } : l))
        : [...lines, { productId: id, quantity: q }];
      return { ...current, [key]: next };
    });

    announce(`${product.name} added to your cart.`);
  }

  function setQuantity(id: string, quantity: number) {
    const product = getProduct(id);
    if (!product) return;
    const moq = getMOQ(role);
    const max = Math.min(product.stock, product.limit * 100);
    if (!Number.isInteger(quantity) || quantity < moq || quantity > max) {
      announce(`Choose a quantity between ${moq} and ${max}.`);
      return;
    }
    const key = activeCartKey();
    setCarts((current) => ({
      ...current,
      [key]: current[key].map((l) =>
        l.productId === id ? { ...l, quantity } : l
      )
    }));
    announce(`${product.name} quantity updated to ${quantity}.`);
  }

  function removeFromCart(id: string) {
    const key = activeCartKey();
    setCarts((current) => ({
      ...current,
      [key]: current[key].filter((l) => l.productId !== id)
    }));
    announce("Frame removed from your cart.");
  }

  function clearCart() {
    const key = activeCartKey();
    setCarts((current) => ({ ...current, [key]: [] }));
  }

  return (
    <StoreContext.Provider
      value={{
        ready,
        session,
        wishlist,
        cart,
        cartCount: cart.reduce((sum, l) => sum + l.quantity, 0),
        subtotal,
        shipping: getShipping(subtotal),
        notice,
        storageWarning,
        signIn,
        signOut,
        toggleWishlist,
        addToCart,
        setQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider.");
  return context;
}
