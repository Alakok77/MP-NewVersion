import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}