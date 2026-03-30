import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay informed about EchoSensing's latest developments, partnerships, and global activities in SAR satellite technology.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
