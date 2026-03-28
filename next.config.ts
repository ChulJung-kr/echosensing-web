import type { NextConfig } from "next";

const securityHeaders = [
  // XSS 방어: 브라우저 XSS 필터 활성화
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // 클릭재킹 방어: iframe 삽입 차단
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // MIME 타입 스니핑 방지
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 리퍼러 정보 제한
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // HTTPS 강제 (1년, 서브도메인 포함)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // 브라우저 기능 접근 제한
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // CSP: 스크립트/리소스 로딩 제한
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://script.google.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
