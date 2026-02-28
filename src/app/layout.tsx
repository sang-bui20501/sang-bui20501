import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SANG BUI | Full Stack Engineer",
  description: "Full Stack Engineer with 5+ years experience. Specializing in React, TypeScript, Ruby on Rails, Java, Kubernetes. Former GDSC Chapter Lead. Competitive Programming champion.",
  keywords: ["Sang Bui", "full stack engineer", "portfolio", "developer", "react", "typescript", "ruby", "java", "kubernetes"],
  authors: [{ name: "Sang Bui" }],
  creator: "Sang Bui",
  openGraph: {
    title: "SANG BUI | Full Stack Engineer",
    description: "Full Stack Engineer. Building impactful products with clean, scalable code.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANG BUI | Full Stack Engineer",
    description: "Full Stack Engineer. Building impactful products with clean, scalable code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${pressStart2P.variable} ${vt323.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a2e1a" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen relative">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Fireflies background — fixed, persists across full scroll */}
          <div className="fireflies" aria-hidden="true">
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
          </div>
          {/* Floating leaf particles */}
          <div className="floating-particles" aria-hidden="true">
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
            <div className="leaf-particle" />
          </div>
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
