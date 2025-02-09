import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUMAYUN | Web Developer",
  description:
    "I am a full-stack web developer skilled in Tailwind CSS, JavaScript, React, Next.js, TypeScript, Firebase, Node.js, Express.js, MongoDB, Mongoose, and Redux. I build scalable, high-performance, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-900`}>{children}</body>
    </html>
  );
}
