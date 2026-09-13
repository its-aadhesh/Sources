import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import { StoreProvider } from "@/components/store-provider";
import { Feedback, Footer, Header } from "@/components/shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sri Opticals — A new perspective",
    template: "%s | Sri Opticals"
  },
  description:
    "Distinctive frames, considered details. A Sri Opticals frontend prototype."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <Feedback />
        </StoreProvider>
      </body>
    </html>
  );
}
