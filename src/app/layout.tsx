import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "דירת אולפן להשכרה בפתח תקווה | 4,500 ₪/חודש",
  description:
    "דירת אולפן יוקרתית להשכרה בפתח תקווה, 3.5 חדרים, מרוהטת במלואה, חניה, משופצת. נחמן מברסלב 20.",
  openGraph: {
    title: "דירת אולפן להשכרה בפתח תקווה",
    description: "3.5 חדרים, מרוהטת, חניה, 4,500 ₪/חודש",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
