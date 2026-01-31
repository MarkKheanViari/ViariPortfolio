import "./globals.css";
import "lenis/dist/lenis.css";
import { LenisProvider } from "./components/providers/LenisProvider";
import { ReducedMotionProvider } from "./components/providers/ReducedMotionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-white text-[#323b4c] antialiased overflow-x-hidden">
        <ReducedMotionProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
