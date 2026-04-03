import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet EchoSensing's team of Ph.D.-level domain experts from KARI, KIOST, and ETRI — covering the full satellite system spectrum.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
