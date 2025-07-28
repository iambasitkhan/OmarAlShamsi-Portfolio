import BackgroundImage1 from "@/public/practicesBagroundImage.jpg";
import Image from "next/image";
import { playfair } from "../layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import arbitratryIcon from "@/public/practiceIcons/arbitratryIcon.png";
import practice2 from "@/public/practiceIcons/practice2.png";
import practice3 from "@/public/practiceIcons/practice3.png";
import practice4 from "@/public/practiceIcons/practice4.png";
import practice5 from "@/public/practiceIcons/practice5.png";
import practice6 from "@/public/practiceIcons/practice6.png";
import practice7 from "@/public/practiceIcons/practice7.png";
import practice8 from "@/public/practiceIcons/practice8.png";
import practice9 from "@/public/practiceIcons/practice9.png";
import practice10 from "@/public/practiceIcons/practice10.png";
import practice11 from "@/public/practiceIcons/practice11.png";
import practice12 from "@/public/practiceIcons/practice12.png";
import practice13 from "@/public/practiceIcons/practice13.png";
import practice14 from "@/public/practiceIcons/practice14.png";
import practice15 from "@/public/practiceIcons/practice15.png";
import practice16 from "@/public/practiceIcons/practice16.png";
import practice17 from "@/public/practiceIcons/practice17.png";
import practice18 from "@/public/practiceIcons/practice18.png";
import practice19 from "@/public/practiceIcons/practice19.png";
import practice20 from "@/public/practiceIcons/practice20.png";
import practice21 from "@/public/practiceIcons/practice21.png";
import practice22 from "@/public/practiceIcons/practice22.png";
import practice23 from "@/public/practiceIcons/practice23.png";
import practice24 from "@/public/practiceIcons/practice24.png";
import practice25 from "@/public/practiceIcons/practice25.png";
import practice26 from "@/public/practiceIcons/practice26.png";
import practice27 from "@/public/practiceIcons/practice27.png";
import practice28 from "@/public/practiceIcons/practice28.png";
import practice29 from "@/public/practiceIcons/practice29.png";
import practice30 from "@/public/practiceIcons/practice30.png";
import practice31 from "@/public/practiceIcons/practice31.png";
import practice32 from "@/public/practiceIcons/practice32.png";
import practice33 from "@/public/practiceIcons/practice33.png";
import practice34 from "@/public/practiceIcons/practice34.png";
import practice35 from "@/public/practiceIcons/practice35.png";
import practice36 from "@/public/practiceIcons/practice36.png";
import practice37 from "@/public/practiceIcons/practice37.png";
import practice38 from "@/public/practiceIcons/practice38.png";
import practice39 from "@/public/practiceIcons/practice39.png";
import practice40 from "@/public/practiceIcons/practice40.png";
import practice41 from "@/public/practiceIcons/practice41.png";
import practice42 from "@/public/practiceIcons/practice42.png";
import practice43 from "@/public/practiceIcons/practice43.png";

import penFooterLogo from "@/public/penFooterLogo.jpg";
import Link from "next/link";

const practices = [
  {
    id: 1,
    icon: arbitratryIcon,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/arbitration",
  },
  {
    id: 2,
    icon: practice2,
    mainTitle: "Banking and Finance",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/bankingandfinance",
  },
  {
    id: 3,
    icon: practice3,
    mainTitle: "Capital Markets",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/capital-markets",
  },
  {
    id: 4,
    icon: practice4,
    mainTitle: "Commercial",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/commercial",
  },
  {
    id: 5,
    icon: practice5,
    mainTitle: "Competition",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/competition",
  },
  {
    id: 6,
    icon: practice6,
    mainTitle: "Compliance, Investigation and White-Coller Crims",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/compliance-investigation-and-white-coller-crims",
  },
  {
    id: 7,
    icon: practice7,
    mainTitle: "Construction and Infrastructure",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/construction-and-infrastructure",
  },
  {
    id: 8,
    icon: practice8,
    mainTitle: "Corporate / Mergers and Aquisitions",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/corporate",
  },
  {
    id: 9,
    icon: practice9,
    mainTitle: "Corporate Services",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/corporate-services",
  },
  {
    id: 10,
    icon: practice10,
    mainTitle: "Corporate Structuring",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/corporate-structuring",
  },
  {
    id: 11,
    icon: practice11,
    mainTitle: "Digital & Data",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/digital-and-data",
  },
  {
    id: 12,
    icon: practice12,
    mainTitle: "Dispute Resolution",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/disputed-resolution",
  },
  {
    id: 13,
    icon: practice13,
    mainTitle: "Employement and Incentives",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/employment-and-incentives",
  },
  {
    id: 14,
    icon: practice14,
    mainTitle: "Family Business",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/family-business",
  },
  {
    id: 15,
    icon: practice15,
    mainTitle: "Innovation, Patents & Industrial Property (3IP)",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/inovation",
  },
  {
    id: 16,
    icon: practice16,
    mainTitle: "Insurance",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/insurance",
  },
  {
    id: 17,
    icon: practice17,
    mainTitle: "Intellectual Property",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/intellectual-property",
  },
  {
    id: 18,
    icon: practice18,
    mainTitle: "International Litigation Group",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/international-litigation",
  },
  {
    id: 19,
    icon: practice19,
    mainTitle: "Lagislative Drafting",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/lagislative-drafting",
  },
  {
    id: 20,
    icon: practice20,
    mainTitle: "Litigation",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/litigation",
  },
  {
    id: 21,
    icon: practice21,
    mainTitle: "Mediation",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/mediation",
  },
  {
    id: 22,
    icon: practice22,
    mainTitle: "Private Client Services",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/private-client-services",
  },
  {
    id: 23,
    icon: practice23,
    mainTitle: "Private Equity",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/private-equity",
  },
  {
    id: 24,
    icon: practice24,
    mainTitle: "Private Notery",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/private-notery",
  },
  {
    id: 25,
    icon: practice25,
    mainTitle: "Projects",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/projects",
  },
  {
    id: 26,
    icon: practice26,
    mainTitle: "Real State",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/real-state",
  },
  {
    id: 27,
    icon: practice27,
    mainTitle: "Regulatory",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/regulatory",
  },
  {
    id: 28,
    icon: practice28,
    mainTitle: "Shipping, Aviations & Logistics",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/shipping-aviation-and-logistics",
  },
  {
    id: 29,
    icon: practice29,
    mainTitle: "Sustainable Business",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/sustainable-business",
  },
  {
    id: 30,
    icon: practice30,
    mainTitle: "Tax",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/banking-and-finance",
  },
  {
    id: 31,
    icon: practice31,
    mainTitle: "Turnaround, Restructuring and Inslovency",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/turnaround-restructing-inslovency",
  },
  {
    id: 32,
    icon: practice32,
    mainTitle: "Venture Capital and Emerging Companies",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience",
    href: "/practices/venture-capital",
  },
];

export default function PracticePage() {
  return (
    <main>
      <header className="h-[60dvh] relative practice-parallax-section">
        {/* <Image src={BackgroundImage1} alt="practice image background" fill className="cover -z-20" /> */}
        <div className="max-w-screen-2xl mx-auto lg:mx-32 h-full flex flex-col justify-center text-white">
          <h1 className={`text-6xl ${playfair.className} mb-6`}>Practices</h1>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos blanditiis ratione, iure veniam aspernatur illo,
            corporis, sed error molestiae officiis reiciendis excepturi.
            Necessitatibus quam pariatur quos! Quis est inventore dolorum
            praesentium, aliquid vel enim quisquam, dolore minus reiciendis at
            corrupti quam, tempore ad? Aspernatur ratione facilis veniam ipsa,
            quam recusandae?
          </p>
        </div>
      </header>
      <section className="container mx-auto px-8 py-12 mb-20">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem className="text-[#b7945e]">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Practices</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          blanditiis consequuntur alias architecto et velit! Provident quam
          adipisci magni saepe error voluptates velit repellat corrupti
          accusamus eveniet unde, autem et neque laudantium, doloribus natus
          quisquam rerum. Atque in consequuntur ducimus quae commodi expedita
          ullam exercitationem sed possimus perferendis! Rem, sequi. At soluta
          id vel, odio provident obcaecati repudiandae magnam quo?
        </p>

        <div className="grid grid-cols-5 gap-8">
          {practices.map((practice) => {
            return <PracticeBox practice={practice} key={practice.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

function PracticeBox({ practice }) {
  const { icon, mainTitle, subTitle, description, href = "" } = practice;
  return (
    <Link
      href={href}
      className="p-6 px-12 bg-[#b7935e8a] flex flex-col items-center justify-center practiceBox"
    >
      <div className="h-full upperSection flex flex-col items-center">
        <Image src={icon} alt="icon1" className="w-16" />
        <p className="font-bold text-center mt-auto">{mainTitle}</p>
      </div>
      <div className="text-center lowerSection">
        <p className="font-semibold text-sm">{subTitle}</p>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
