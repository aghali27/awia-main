import "./globals.css";

import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web.org.au",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Partners />

        <Footer />
      </body>
    </html>
  );
}
