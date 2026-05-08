import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://shuin.jp";
const SITE_TITLE = "朱印 — 令和の朱印船。";
const SITE_DESCRIPTION =
  "異国の武器を、日本の事業主に授ける。海外で実証済みのAI/SaaSを「完成コードと販売権（朱印状）」として副業層に授ける思想ブランド。毎週金曜21:00、1週間限定販売。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | 朱印",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "朱印",
    "Shuin",
    "副業",
    "SaaS",
    "海外SaaS",
    "AI",
    "事業主",
    "令和の朱印船",
    "副業SaaS輸入便",
  ],
  authors: [{ name: "朱印" }],
  creator: "朱印",
  publisher: "朱印",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "朱印",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "@shuin_official",
    creator: "@shuin_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/shuin-seal.png",
    apple: "/shuin-seal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sumi text-washi">{children}</body>
    </html>
  );
}
