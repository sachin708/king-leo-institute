import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kingleotattooz.com";
const siteName = "Kingleo Tattooz Institute";
const logo = "/icons/kingInstitute.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kingleo Tattooz & Institute | Best Tattoo Studio in Indore",
  description:
    "Express yourself in ink with the best tattoo studio and institute in Indore. Certified tattoo training, custom tattoos, and master artistry.",
  applicationName: siteName,
  keywords: [
    "tattoo studio in Indore",
    "tattoo training institute",
    "tattoo course in Indore",
    "tattoo artist course",
    "piercing course",
    "Kingleo Tattooz",
  ],
  icons: {
    icon: logo,
    shortcut: logo,
    apple: logo,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    title: "Kingleo Tattooz & Institute | Best Tattoo Studio in Indore",
    description:
      "Certified tattoo training, custom tattoos, and master artistry at Kingleo Tattooz in Indore.",
    images: [{ url: logo, alt: siteName }],
  },
  twitter: {
    card: "summary",
    title: "Kingleo Tattooz & Institute | Best Tattoo Studio in Indore",
    description:
      "Certified tattoo training, custom tattoos, and master artistry at Kingleo Tattooz in Indore.",
    images: [logo],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
