import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  return (
    <Drawer >
      <DrawerTrigger asChild>
        <Button variant="outline" className="!p-0 border-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gradient-to-r from-[#edc9af81] to-[#d2b48c72] backdrop-blur-md">
        <div className=" w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <NavLinks />
          </div>
        </div>
      </DrawerContent>
    </Drawer >
  );
}
