import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Contacts",
  description: "Manage your contacts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>{children}</body>
    </html>
  );
}
