import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { portfolioData } from "@/data/portfolio";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhanasri.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhana Sri Rongali | Software Engineer — Dev Terminal Neon Portfolio",
    template: "%s | Dhana Sri Rongali",
  },
  description:
    "Portfolio of Dhana Sri Rongali, Software Engineer with 2+ years of Node.js & React.js experience, pursuing an MSc in Computer Science at EPITA Paris. Specializing in full-stack engineering, cloud systems, and distributed architectures.",
  keywords: [
    "Dhana Sri Rongali",
    "Dhana Sri",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "EPITA Paris",
    "Cloud Engineer",
    "AWS",
    "TypeScript",
    "Next.js Portfolio",
    "Creative Developer",
  ],
  authors: [{ name: "Dhana Sri Rongali", url: siteUrl }],
  creator: "Dhana Sri Rongali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dhana Sri Rongali | Software Engineer",
    description:
      "Bold code, better systems. 2+ years Node.js & React.js experience. MSc Software Engineering at EPITA Paris.",
    siteName: "Dhana Sri Rongali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhana Sri Rongali | Software Engineer",
    description:
      "Bold code, better systems. Software Engineer with 2+ years experience. MSc at EPITA Paris.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.title,
    url: siteUrl,
    description: portfolioData.personal.shortBio,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "France",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "EPITA: School of Engineering and Computer Science",
      location: "Paris, France",
    },
    sameAs: [portfolioData.social.github, portfolioData.social.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Node.js",
      "React.js",
      "TypeScript",
      "Next.js",
      "Cloud Architecture",
      "Amazon Web Services",
      "System Design",
      "Distributed Systems",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${inter.className} ${jetbrainsMono.variable} ${inter.variable} bg-[#05060A] text-[#E6EAF0] antialiased selection:bg-[#C6FF3D] selection:text-[#05060A] min-h-screen relative font-sans`}
      >
        {/* Subtle radial lime glow top-left, blue-violet glow right */}
        <div className="glow-lime-top-left" aria-hidden="true" />
        <div className="glow-violet-right" aria-hidden="true" />
        <div className="glow-bottom-subtle" aria-hidden="true" />

        {/* Dev terminal background grid */}
        <div
          className="fixed inset-0 terminal-grid pointer-events-none z-0 opacity-70"
          aria-hidden="true"
        />

        <SmoothScroll>
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
