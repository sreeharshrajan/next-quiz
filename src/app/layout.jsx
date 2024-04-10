import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz Master - Test Your Knowledge and Expand Your Mind",
  description:
    "Quiz Master is the ultimate quiz app designed to challenge and educate users across various topics including general knowledge, science, technology, and more. Join our community of learners and see how you stack up against others!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
