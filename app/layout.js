// Example for App Router (app/layout.tsx or app/page.tsx)
"use client";
import { Lato, Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";

import whatsappIcon from "@/public/socialIcons/whatsappIcon.png";

import "./globals.css";
import MainNav from "./_components/mainNav";
import ReduxProvider from "./providers/ReduxProvider";
import SplashScreen from "./_components/SplashScreen";
import SocialNav from "./_components/SocialNav";
import Footer from "./_components/Footer";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // add the weights you need
  variable: "--font-lato",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// export const metadata = {
//   title: "Omar Al Shami",
// };

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      // Show splash screen on first load
      setShowSplash(true);
      setTimeout(() => {
        setShowSplash(false);
        // sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2500); // Splash duration (ms)
    } else {
      // Skip splash if already shown in session
      setShowSplash(false);
    }
  }, []);

  return (
    <html lang="en" className={`${lato.className} `}>
      <body className="relative">
        <ReduxProvider>
          {showSplash ? (
            <SplashScreen />
          ) : (
            <>
              <SocialNav />
              <MainNav />
              <div>{children}</div>
              <Footer />
              <a
                href="https://wa.me/971508335727?text=Hello how can i help you?"
                target="_blank"
                className="fixed top-11/12 right-1/12 w-12 z-50 inline-block"
              >
                <Image src={whatsappIcon} alt="whatsapp icon" />
              </a>
            </>
          )}
        </ReduxProvider>
      </body>
    </html>
  );
}
