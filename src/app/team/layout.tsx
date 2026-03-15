import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet EchoSensing's team of Ph.D.-level domain experts from KARI, ETRI, and KAIST — covering the full satellite system spectrum.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
