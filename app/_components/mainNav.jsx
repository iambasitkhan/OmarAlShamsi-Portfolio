import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

import logo from "@/public/logo-01.png";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./mobileMenu";

export default function MainNav() {
  return (
    <div className="flex items-center justify-center md:justify-between md:w-full px-10 py-6 relative">
      <Image src={logo} width={50} alt="Omar al shamsi logo" />
      <div className="hidden md:block ">
        <NavLinks />
      </div>

      <Button
        variant="outline"
        className="hidden md:block uppercase !bg-primary"
      >
        Free consulation
      </Button>
      <div className="md:hidden absolute right-4 ">
        <MobileMenu />
      </div>
    </div>
  );
}
