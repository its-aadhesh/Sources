import type { Metadata } from "next";
import { ComingSoon } from "@/components/placeholder";

export const metadata: Metadata = { title: "Milestones" };

export default function MilestonesPage() {
  return (
    <ComingSoon
      title="Milestones."
      body="Our journey, one considered step at a time. No invented history — this page will carry real milestones when provided."
    />
  );
}
