import { Inter } from "next/font/google";
import "./globals.css";
import "./MainApp.css";
import "./_components/Navbar.css";
import Layout from "./_components/Layout";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Layout />
          <Navbar/>
          
          {children}
        </div>
      </body>
    </html>
  );
}