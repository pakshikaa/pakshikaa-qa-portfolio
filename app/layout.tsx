import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeFab from "@/components/ResumeFab";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pakshikaa Elango | Associate QA Engineer",
  description:
    "Portfolio of Pakshikaa Elango, Associate QA Engineer — manual & API testing, defect tracking and Agile QA. Proof-of-work QA artifacts, case studies and measurable impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider>
          <BackgroundFX />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ResumeFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
