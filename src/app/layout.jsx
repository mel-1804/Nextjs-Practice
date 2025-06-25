import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Curso Next.js",
  description: "Esto es un curso de Next.js",
  image: "https://example.com/image.png",
  url: "https://example.com",
  type: "website",
  creator: "Melissa",
  keywords: ["Next.js", "Curso", "Web Development"],
  locales: "es_ES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex gap-2 justify-center bg-black text-white">
            <li className="hover:bg-slate-500 rounded-md">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-slate-500 rounded-md">
              <Link href="/ingresar">Ingresar</Link>
            </li>
            <li className="hover:bg-slate-500 rounded-md">
              <Link href="/articulos">Articulos</Link>
            </li>
            <li className="hover:bg-slate-500 rounded-md">
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
