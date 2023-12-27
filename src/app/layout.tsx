import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Expert Front-End Developer | ReactJS, NextJS, Tailwind | Web Enthusiast",
  description:
    "Explore Sophie Smith's frontend developer portfolio, featuring a mastery of responsive web design, sleek UI/UX, and cutting-edge technologies. Elevate your digital projects with a developer committed to creating visually stunning and seamlessly functional websites. Contact Sophie for collaborative opportunities in bringing your web presence to the forefront of innovation.",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [
    {
      name: "Expert Front-End Developer | ReactJS, NextJS, Tailwind | Web Enthusiast",
      url: "https://nextjs.org",
    },
  ],
  creator: "Shiv Kumar Prajapat",
  metadataBase: new URL("https://acme.com"),
  openGraph: {
    siteName: "Next.js",
    title:
      "Expert Front-End Developer | ReactJS, NextJS, Tailwind | Web Enthusiast",
    description:
      "Explore Sophie Smith's frontend developer portfolio, featuring a mastery of responsive web design, sleek UI/UX, and cutting-edge technologies. Elevate your digital projects with a developer committed to creating visually stunning and seamlessly functional websites. Contact Sophie for collaborative opportunities in bringing your web presence to the forefront of innovation.",
    url: "https://shivprajapat.vercel.app",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    countryName: "india",
    
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
          </html>
  );
}
