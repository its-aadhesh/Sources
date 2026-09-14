import type { Metadata } from "next";
import { ComingSoon } from "@/components/placeholder";

const names: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  whatsapp: "WhatsApp"
};

export function generateStaticParams() {
  return Object.keys(names).map((platform) => ({ platform }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform } = await params;
  return { title: names[platform] ?? "Social" };
}

export default async function SocialPage({
  params
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform } = await params;
  const name = names[platform] ?? "Social";
  return (
    <ComingSoon
      title={`${name}.`}
      body={`Our ${name} page is a placeholder for now. It will link to the real Sri Opticals profile once it is provided.`}
    />
  );
}
