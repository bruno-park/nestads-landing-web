import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/molecule/header";
import Footer from "@/components/molecule/footer";
import { siteMeta } from "@/data/site-meta";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.metadata.title,
  description: siteMeta.metadata.description,
  icons: {
    icon: `${process.env.BASE_PATH || ""}/images/favicon.svg`,
  },
  openGraph: {
    title: siteMeta.metadata.title,
    description: siteMeta.metadata.description,
    url: siteMeta.siteUrl,
    type: "website",
    images: [
      {
        url: siteMeta.siteLogo,
        width: 200,
        height: 200,
        alt: siteMeta.siteName,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>
        {siteMeta.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteMeta.googleAnalyticsId} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
