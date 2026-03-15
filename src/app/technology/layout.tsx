import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore EchoSensing's three-phase technology roadmap — Edge AI Board, SAR Payload, and InSAR Constellation delivering real-time intelligence from orbit.",
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
