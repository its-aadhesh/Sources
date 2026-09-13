import type { Metadata } from "next";
import { ComingSoon } from "@/components/placeholder";

export const metadata: Metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <ComingSoon
      title="FAQs."
      body="Answers about frames, ordering, and this demo experience."
    />
  );
}
