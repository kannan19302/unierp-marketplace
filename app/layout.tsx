import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthShell } from "@/components/AuthShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UniERP Marketplace",
  description: "App, connector and extension marketplace — browse, install, manage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0, fontFamily: "var(--font-sans, system-ui, sans-serif)", backgroundColor: "#0f1117", color: "#e2e8f0" }}>
        <AuthShell>{children}</AuthShell>
      </body>
    </html>
  );
}
