import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#323b4c] antialiased">
        {children}
      </body>
    </html>
  );
}
