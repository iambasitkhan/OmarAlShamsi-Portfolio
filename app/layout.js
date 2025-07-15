// Example for App Router (app/layout.tsx or app/page.tsx)
"use client"
import { Lato, Playfair_Display } from "next/font/google";
import SocialNav from "@/app/_components/socialNav";
import { useEffect, useState } from 'react';

import "./globals.css";
import MainNav from "./_components/mainNav";
import ReduxProvider from "./providers/ReduxProvider";
import SplashScreen from "./_components/SplashScreen";

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
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

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
      <body>
        <ReduxProvider>
          {showSplash ? <SplashScreen /> : <><SocialNav />
            <MainNav />
            {children}</>}

        </ReduxProvider>
      </body>
    </html>
  );
}
