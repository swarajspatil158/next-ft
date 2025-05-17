import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next-FT",
  description: "Next.js Frontend Template",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background w-screen overflow-x-hidden font-sans antialiased",
          inter.variable
        )}
      >
          <div className="min-h-screen w-full flex flex-col font-[family-name:var(--font-sans)] relative bg-gradient-to-br from-background via-background to-background">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            {children}
          </div>
      </body>
    </html>
  );
}
