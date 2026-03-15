import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "EchoSensing — 지구를 보다. 더 스마트하게. 더 빠르게.",
    template: "%s | EchoSensing",
  },
  description:
    "EchoSensing은 온보드 AI 프로세서를 탑재한 SAR 위성을 개발하여, 궤도에서 직접 지구 데이터를 분석하고 지상국에 의존하지 않는 실시간 정보를 제공합니다.",
  keywords: [
    "SAR 위성",
    "온보드 AI",
    "지구 관측",
    "합성개구레이더",
    "엣지 컴퓨팅",
    "우주 기술",
  ],
  openGraph: {
    title: "EchoSensing — 지구를 보다. 더 스마트하게. 더 빠르게.",
    description:
      "실시간 지구 정보를 제공하는 차세대 온보드 AI 탑재 SAR 위성.",
    url: "https://echosensing.com/ko",
    siteName: "EchoSensing",
    type: "website",
    locale: "ko_KR",
  },
};

export default function KoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="ko">{children}</div>;
}
