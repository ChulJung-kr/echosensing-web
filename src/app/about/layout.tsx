import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EchoSensing — founded in 2017, pioneering the convergence of SAR satellite technology and artificial intelligence for real-time Earth observation.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
