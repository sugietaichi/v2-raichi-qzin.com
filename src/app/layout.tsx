import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header/Header";
import { FavoriteProvider } from "@/features/favorite/providers/FavoriteProvider/FavoriteProvider";
import { Footer } from "@/components/layouts/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FavoriteProvider>
      <html lang="ja">
        <body className={`flex flex-col items-center justify-center bg-pink-200 ont-sans`}>
          <main className='w-full max-w-xl mt-2'>
            <Header menuList={[
              {
                label: "TOP",
                href: "/"
              },
              {
                label: "案件を探す",
                href: "/jobs"
              },
              {
                label: "よくあるご質問",
                href: "/faq"
              },
              {
                label: "お問い合わせ",
                href: "/contact"
              },
            ]} />
            <div className='w-full bg-gray-200 shadow-md rounded-lg'>
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </FavoriteProvider>
  );
}
