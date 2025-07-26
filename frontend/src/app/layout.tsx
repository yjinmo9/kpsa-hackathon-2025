import type { Metadata } from "next";
import localFont from 'next/font/local'

import { TooltipProvider } from "@/components/ui/tooltip";
import QueryClientProvider from '@/provider/QueryClient';
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});


export const metadata: Metadata = {
  title: "KPSA Hackathon 2025",
  description: "KPSA Hackathon 2025 Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-sans antialiased`}
      >
        <TooltipProvider>
          <QueryClientProvider>
            {children}
          </QueryClientProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
