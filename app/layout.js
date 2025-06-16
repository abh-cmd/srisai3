import Header from "@/components/Header";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "SRI SAI INTERIORS | Luxury Interior Design",
  description: "Transform your space with SRI SAI INTERIORS - Premier interior design services for residential and commercial spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSans.variable} ${notoSerif.variable} bg-amber-50/95 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
