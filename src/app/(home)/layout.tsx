import type { Metadata } from "next";
import { Inter as FontSans, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import { EdgeStoreProvider } from "@/lib/edgestore";
import NavBar from "@/components/NavBar";
import MyChatbot from "../chatbot/page";
import { ThemeProvider } from "@/components/elisa/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KT wiz | We Are Great Magic",
  description: "WINNING KT | We Are Great Magic",
  icons: {
    icon: "/ktwiz-bi-symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <EdgeStoreProvider>
            <div className="h-screen pt-[110px]">{children}</div>
          </EdgeStoreProvider>
          {/* <MyChatbot /> */}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
