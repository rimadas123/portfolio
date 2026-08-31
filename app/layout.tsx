import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Rima Das — Product Designer",
  description: "Product design portfolio — UX, UI and digital experiences.",
  openGraph: {
    title: "Rima Das — Product Designer",
    description: "Product design portfolio — UX, UI and digital experiences.",
    url: "https://rima-das.vercel.app/",
    siteName: "Rima Das Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile-1.png",
        width: 1200,
        height: 630,
        alt: "Rima Das — Product Designer Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} h-full antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
