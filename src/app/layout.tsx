import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });
const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fieldhouse-forge.vercel.app"),
  title: {
    default: "Fieldhouse Forge | Athletic Equipment & Systems",
    template: "%s | Fieldhouse Forge",
  },
  description:
    "An Indiana manufacturer of institutional athletic equipment and fieldhouse systems for education and public-use facilities.",
  openGraph: {
    title: "Fieldhouse Forge",
    description:
      "Built where teams are made—athletic equipment and fieldhouse systems from Hickory, Indiana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
