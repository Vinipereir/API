import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick & Morty Explorer",
  description: "Explore personagens e episódios do universo Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900 selection:bg-blue-200 selection:text-blue-900`}
      >
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8 flex flex-col">
          {children}
        </main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="!mt-4"
          toastClassName="relative flex p-1 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
          progressClassName="!bg-gradient-to-r !from-blue-500 !to-purple-500"
        />
      </body>
    </html>
  );
}