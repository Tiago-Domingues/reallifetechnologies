import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { I18nProvider } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ICT integrator`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Real Life Technologies — ICT integrator since 2008. Software, infrastructure, consulting and support.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${sans.variable} site-root`}>
        <I18nProvider>
          <Header />
          <Reveal />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
