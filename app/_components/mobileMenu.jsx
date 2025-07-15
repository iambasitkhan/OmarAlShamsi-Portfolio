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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
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
    </Drawer>
  );
}
