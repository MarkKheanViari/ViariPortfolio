import "./globals.css";
import "lenis/dist/lenis.css";
import { LenisProvider } from "./components/providers/LenisProvider";
import { ReducedMotionProvider } from "./components/providers/ReducedMotionProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { siteConfig } from "./data/portfolio";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Mark Khean Viari",
    "Project Manager",
    "Full-Stack Developer",
    "Game Developer",
    "BSIT",
    "Portfolio",
    "React",
    "Python",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body className="bg-white text-[#323b4c] antialiased overflow-x-hidden dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <ReducedMotionProvider>
            <LenisProvider>
              {children}
            </LenisProvider>
          </ReducedMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
