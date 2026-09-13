"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Briefcase, LogOut, UserRound } from "lucide-react";
import { useStore } from "@/components/store-provider";
import type { Role } from "@/lib/catalog";

export function AccountEntry() {
  const { ready, session, signIn, signOut } = useStore();
  const [name, setName] = useState("");
  const [pending, setPending] = useState<Role | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // When a role is chosen, auto-scroll to the details form and focus its input.
  useEffect(() => {
    if (pending) {
      const t = setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        document.getElementById("demo-name")?.focus();
      }, 60);
      return () => clearTimeout(t);
    }
  }, [pending]);

  if (!ready) {
    return <div className="loading-state" role="status">Loading…</div>;
  }

  if (session) {
    return (
      <div className="session-panel">
        <p className="eyebrow">SIGNED IN</p>
        <h2>
          {session.role === "business" ? "Business workspace" : "Customer account"}
        </h2>
        {session.name && (
          <p className="muted">Welcome, {session.name.split(" ")[0]}.</p>
        )}
        <div className="session-actions">
          <Link href="/shop" className="button button-primary">
            Open shop <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button className="button button-secondary" onClick={signOut}>
            <LogOut size={17} aria-hidden="true" /> Sign out
          </button>
        </div>
        <p className="fine-print">
          {session.role === "business"
            ? "Wholesale pricing (60% off retail) and a 20-unit minimum apply."
            : "Retail pricing with individual-unit purchasing."}
        </p>
      </div>
    );
  }

  return (
    <div className="role-grid">
      <article className="role-card">
        <div className="role-icon"><UserRound size={26} aria-hidden="true" /></div>
        <h2>Sign in as a Customer</h2>
        <p className="muted">
          Browse and buy individual frames at retail prices. Save favourites and
          build a cart.
        </p>
        <ul>
          <li>Men, women &amp; children</li>
          <li>Tax-inclusive retail prices</li>
          <li>Buy a single frame</li>
        </ul>
        <button
          className="button button-primary"
          onClick={() => setPending("customer")}
        >
          Continue as customer <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </article>

      <article className="role-card">
        <div className="role-icon"><Briefcase size={26} aria-hidden="true" /></div>
        <h2>Sign in as a Business</h2>
        <p className="muted">
          Browse the same range with wholesale pricing and minimum order quantities.
          For store orders.
        </p>
        <ul>
          <li>Wholesale price — 60% off retail</li>
          <li>Minimum 20 units per frame</li>
          <li>Separate wholesale cart</li>
        </ul>
        <button
          className="button button-primary"
          onClick={() => setPending("business")}
        >
          Continue as business <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </article>

      {pending && (
        <div className="name-form" ref={formRef} role="dialog" aria-label="Enter demo name">
          <p className="eyebrow">OPTIONAL DISPLAY NAME</p>
          <h2>Start your {pending} demo session.</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signIn(pending, name);
            }}
          >
            <label htmlFor="demo-name">Name</label>
            <input
              id="demo-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex"
              maxLength={32}
              autoComplete="off"
            />
            <div className="session-actions">
              <button className="button button-primary" type="submit">
                {pending === "business" ? "Enter business workspace" : "Enter customer account"}
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => setPending(null)}
              >
                Cancel
              </button>
            </div>
          </form>
          <p className="fine-print">
            Demo account experience. No real account, email, or password is used.
          </p>
        </div>
      )}
    </div>
  );
}
