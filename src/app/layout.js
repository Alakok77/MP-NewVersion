import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Rubik } from "next/font/google";

config.autoAddCss = false

const rubik = Rubik({
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
      </body>
    </html>
  );
}