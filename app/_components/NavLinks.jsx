import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export function NavLinks() {
  return (
    <NavigationMenu className="max-w-auto z-[99999]">
      <NavigationMenuList className="flex-col justify-center w-full md:flex-row">
        <NavigationMenuItem className="border-none">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">About me</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Attorneys</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our services</NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl ">
            <Tabs defaultValue="practice" className="text-white">
              <TabsList>
                <TabsTrigger
                  value="practice"
                  className="font-semibold tracking-wider cursor-pointer"
                >
                  Pratices
                </TabsTrigger>
                <TabsTrigger
                  value="sectors"
                  className="font-semibold tracking-wider cursor-pointer"
                >
                  Sectors
                </TabsTrigger>
                <TabsTrigger
                  value="lawers"
                  className="font-semibold tracking-wider cursor-pointer"
                >
                  Lawers
                </TabsTrigger>
              </TabsList>
              <TabsContent value="practice">
                <Card className="grid grid-cols-[repeat(3,auto)] gap-x-7 gap-y-4 text-white     items-center space-x-4 text-sm p-4 border-[#fffbeb45] rounded-md">
                  <Link
                    href="/practices"
                    className="tracking-wider font-light  whitespace-nowrap "
                  >
                    Arbitration
                  </Link>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Banking & Finance
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Commercial
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Competition
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Construction & Infrastructure
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Corporate / Mergers & Acquisitions
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Corporate Services
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Corporate Structuring
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Digital & Data
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Dispute Resolution
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Employment & Incentives
                  </p>
                </Card>
              </TabsContent>
              {/* <TabsContent value="sectors">
                <Card className="grid grid-cols-[repeat(3,auto)] gap-x-7 gap-y-4 text-white     items-center space-x-4 text-sm p-4 border-[#fffbeb45]">
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Defence and Aerospace
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Financial Services
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Real Estate & Construction Technology
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Technology, Media & Telecommunications
                  </p>
                  <p className="tracking-wider font-light  whitespace-nowrap">
                    Practices
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Education
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Healthcare & Life Sciences
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Retail & Consumer
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Transport & Logistics
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Energy & Resources
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Hotels & Leisure
                  </p>
                  <p className="tracking-wider font-light whitespace-nowrap">
                    Sports & Events Management
                  </p>
                </Card>
              </TabsContent> */}
            </Tabs>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Customer login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">عربي</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
