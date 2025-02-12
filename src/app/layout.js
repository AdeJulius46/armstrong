import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:["100",'300','600','400']
});



export const metadata = {
  title: "Chief Olaleye",
  description: "Portfolio Page of Chief Olaleye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={`${inter.variable} antialiased`}
    >
         {/* <Header /> */}
         <main>
        {children}
         </main>
         <Footer />
      </body>
    </html>
  );
}
