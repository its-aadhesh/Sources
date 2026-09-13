import type { Metadata } from "next";
import { ComingSoon } from "@/components/placeholder";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact us."
      body="Ways to reach Sri Opticals. No fabricated contact details — this page will carry real channels when provided."
    />
  );
}
