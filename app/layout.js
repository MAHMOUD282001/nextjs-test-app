import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            width: "100%",
            height: "30px",
            background: "#000",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>posts</Link>
          <Link href={"/articles"}>articles</Link>
          <Link href={"/articles/featuredArticles"}>Featured Articles</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
