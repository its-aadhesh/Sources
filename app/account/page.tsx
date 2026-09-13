import type { Metadata } from "next";
import { AccountEntry } from "@/components/account";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <div className="page-container account-page">
      <header className="page-heading">
        <p className="eyebrow">YOUR ACCOUNT</p>
        <h1>Choose how you shop.</h1>
        <p className="muted">
          Retail for individual frames, or wholesale for store orders. This is a demo
          account experience — no real account is created.
        </p>
      </header>
      <AccountEntry />
    </div>
  );
}
