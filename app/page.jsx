import Image from "next/image";
import OmarAlShamsiPic from "@/public/OmarAlShamsiPic.jpeg";
import OmarAlShamsiPic1 from "@/public/SirOmar5.jpg";
import image2 from "@/public/image2.jpeg";
import { playfair } from "./layout";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import icon1 from "@/public/Icons/icon-01.png";
import icon4 from "@/public/Icons/icon-02.png";
import icon3 from "@/public/Icons/icon-03.png";
import sirOmar from "@/public/sirOmar4.jpg";
import officePic from "@/public/office-pic.jpeg"
import icon18 from "@/public/Icons/icon-18.png";
import icon20 from "@/public/Icons/icon-20.png";
import icon21 from "@/public/Icons/icon-21.png";
import icon25 from "@/public/Icons/icon-25.png";
import icon27 from "@/public/Icons/icon-27.png";
import icon2 from "@/public/Icons/icon-35.png";
import icon49 from "@/public/Icons/icon-49.png";
import Link from "next/link";
import signature from "@/public/owner-sig.png"
import logoDark from "@/public/logo-01.png"

import OmarAlShamsiSign from "@/public/owner-sig.png"
import medicalNeglegence from "@/public/casestudyImage2.jpg"
import CardAccidentImage from "@/public/car-accident.webp"
import brainInjury from "@/public/brainInjury.jpg"
import defectiveRoad from "@/public/defectiveRoad.webp"



import Marquee from "react-fast-marquee";
import CountUpper from "./_components/CountUp";
import ContactUs from "./_components/forms/ContactUs";
import Map from "./_components/Map";

const practiceAreas = [
  { icon: icon20, title: "Litigation", description: " We represent individuals, businesses, and institutions in legal disputes through skilled litigation and advocacy." },
  { icon: icon27, title: "Personal injury", description: "Our legal team helps you claim compensation for injuries caused by accidents, negligence, or unsafe conditions." },
  { icon: icon21, title: "Civil litigation", description: "We provide expert representation in all types of civil disputes, ensuring your rights are protected and justice is served." },
  { icon: icon20, title: "Consumer issues", description: "We handle legal matters related to consumer rights, product liability, and commercial franchising across the UAE and GCC." },
  { icon: icon3, title: "Company commercial", description: "We offer legal guidance on company formation, mergers, and structuring tailored to your business goals." },
  { icon: icon25, title: "Employment labor", description: "We protect your rights in the workplace by providing legal advice, dispute resolution, and representation for employers and employees." },
  { icon: icon21, title: "Criminal justice", description: "We offer legal defense and advisory services in criminal matters, assisting our clients in recovering their losses through court representation and legal settlement." },
  { icon: icon20, title: "Intellectual property", description: "We provide defense and legal advice in criminal cases, and help clients recover losses through legal settlement methods." }]

export default function Home() {
  return (
    <>
      <header className="relative bg-gradient-to-t from-[#1d2723] to-[#d2b48c13] sm:bg-gradient-to-r sm:from-30%  sm:from-[#0f2020b1]  sm:to-[#ffffff00] sm:to-90% bg-top min-h-[100dvh]">
        <Image
          src={OmarAlShamsiPic}
          alt="Omar Al Shamsi picture"
          fill
          className="-z-10 sm:hidden object-cover"
        />
        <Image
          src={OmarAlShamsiPic1}
          fill
          alt="Omar Al Shamsi picture"
          className="-z-10 hidden sm:block h-full object-cover"
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 max-w-screen-2xl mx-auto px-10  absolute top-1/2 -translate-y-1/2 2xl:translate-x-1/4 translate-x-4">
          <div className="sm:flex items-end sm:items-center justify-center hidden">
            <div className={`mb-8 ${playfair.className}`}>
              <h2 className={`text-3xl lg:text-5xl text-[#D2B48C] mb-3`}>
                I`m <span className="text-4xl lg:text-6xl">Omar Al Shamsi</span>
              </h2>
              <h1 className="text-xl lg:text-2xl text-amber-50">
                Your Trusted Legal Partner in the UAE.
              </h1>
            </div>
          </div>
          <div className="relative aspect-square"></div>
        </div>
      </header>
      <div className="py-14 sm:hidden">
        <h2 className="text-xl text-center mb-4">
          I`m <svg className="block"
            width="auto"
            height="50"
            viewBox="0 0 100 100"
          ><text x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={`uppercase xyz ${playfair.className}`}>Omar Al Shamsi</text></svg>
        </h2>
        <h1 className="text-xl text-center">
          Your Trusted Legal Partner <div> in the UAE</div>
        </h1>
      </div>
      <section className="relative pt-12 pb-40 px-6 flex justify-center parallax-section">
        <div className="w-full sm:max-w-screen-2xl grid grid-cols-1 md:grid-cols-[repeat(4,_minmax(160px,_1fr))] gap-6 text-amber-50">
          <Card className=" glassmorphic-white md:bg-[rgba(255,255,255,0.3)] rounded-none !border-none hover:scale-[1.1] transition-transform">
            <Link href="/practices">
              <CardHeader className="flex flex-col items-center justify-center ">

                <CardTitle className="font-bold tracking-wider uppercase text-sm text-center">
                  Our Practices
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
          <Card className="glassmorphic-white md:bg-[rgba(255,255,255,0.3)] rounded-none !border-none hover:scale-[1.1] transition-transform">
            <Link href="#">
              <CardHeader className="flex flex-col items-center justify-center">

                <CardTitle className="font-bold tracking-wider uppercase text-sm">
                  Our Sectors
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
          <Card className="glassmorphic-white md:bg-[rgba(255,255,255,0.3)] rounded-none !border-none hover:scale-[1.1] transition-transform">
            <Link href="#">
              <CardHeader className="flex flex-col items-center justify-center">

                <CardTitle className="font-bold tracking-wider uppercase text-sm">
                  Lawyers
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
          <Card className="glassmorphic-white md:bg-[rgba(255,255,255,0.3)] rounded-none !border-none hover:scale-[1.1] transition-transform">
            <Link href="#">
              <CardHeader className="flex flex-col items-center justify-center">

                <CardTitle className="font-bold tracking-wider uppercase text-sm text-center">
                  Clients project
                </CardTitle>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </section>
      <section className="py-8">
        <Card className="grid grid-cols-1 sm:grid-cols-2 -translate-y-24 max-w-screen-xl mx-auto p-0 overflow-hidden gap-0 rounded-none border-none shadow-xl">
          <div className=" p-12 bg-amber-50 flex flex-col">
            <h3
              className={`uppercase font-semibold tracking-widest after:block after:w-15 after:border-2 after:border-[#D2B48C] after:mt-2 mb-6 ${playfair.className}`}
            >
              About - Omar Alshamsi
            </h3>
            <p className={` font-thin text-gray-600 tracking-wide`}>
              I’m Omar Alshamsi, a dedicated Emirati lawyer with years of
              experience practicing law across the United Arab Emirates. Driven
              by a deep passion for justice and a commitment to legal
              excellence, I provide clear, strategic, and personalized legal
              solutions for individuals, families, and businesses. With a strong
              grasp of UAE laws and a client-first approach, I handle each case
              with integrity, precision, and care. Whether it’s resolving
              disputes, defending your rights, or advising on legal matters, my
              mission is to deliver favorable results while maintaining the
              highest ethical standards.
            </p>
            <div className="w-30 mt-auto -rotate-15 ">
              <Image src={signature} alt="Omar al shamsi signatures." />
            </div>
          </div>
          <div>
            <Image src={sirOmar} alt="Omar Al shamsi Picture" />
          </div>
        </Card>
      </section>

      <section className="py-8 pb-14 bg-[#b4925f0f]">
        <h2
          className={`text-5xl text-center mb-24 ${playfair.className} after:block after:w-15 after:border after:mx-auto after:border-[#D2B48C] after:mt-2`}
        >
          Our Recent Case Studies
        </h2>
        <div className="max-w-screen-2xl px-6 md:px-10 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-y-6">
          <div className="overflow-hidden md:col-span-1">
            <Image src={CardAccidentImage} alt="Image of Medical Neglence" className="filter grayscale-75 scale-125 w-full h-full object-cover" />
          </div>
          <div className="bg-[#d8b28d47] py-6 px-8 backdrop-blur-2xl text-amber-50 md:col-span-2 ">
            <p className="text-[#2e2215] text-lg font-mono">2023</p>
            <div className="text-white">
              <p className={`mb-3 text-3xl xl:text-5xl text-black ${playfair.className}`}>
                Trucking Accident
              </p>
              <p className="text-black tracking-wider md:text-lg xl:text-2xl">
                In 2023, a major legal case involving a trucking accident was
                handled successfully in the UAE. Our legal team secured just
                compensation for the injured party, highlighting the importance
                of road safety and legal accountability.
              </p>
            </div>
          </div>
          <div className=" md:col-start-3 relative ">
            <Image src={medicalNeglegence} alt="Image of Medical Neglence" className="-z-30 w-full h-full object-cover filter grayscale-75" />
          </div>
          <div className="md:col-span-2 md:col-start-1 md:row-start-2 bg-[#d8b28d47] py-6 px-8 backdrop-blur-3xl text-amber-50">
            <p className="text-[#2e2215] text-lg font-mono">2023</p>
            <div className="text-white">
              <p className={`mb-3 text-3xl xl:text-5xl text-black ${playfair.className}`}>
                Medical negligence
              </p>
              <p className="text-black tracking-wider md:text-lg xl:text-2xl">
                A high-profile medical negligence case in 2023 resulted in
                significant public concern. We represented the affected party
                and achieved justice through a strong legal strategy and
                meticulous case presentation.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 md:col-start-1 md:row-start-3">
            <Image src={brainInjury} alt="Image of Medical Neglence" className=" filter grayscale-75 h-full w-full object-cover" />
          </div>
          <div className="md:col-span-2 bg-[#d8b28d47] py-6 px-8 backdrop-blur-3xl text-amber-50">
            <p className="text-[#2e2215] text-lg font-mono">2021</p>
            <div className="text-black">
              <p className={`mb-3 text-3xl xl:text-5xl text-black ${playfair.className}`}>
                Brain injury
              </p>
              <p className="text-black tracking-wider md:text-lg xl:text-2xl">
                In 2021, we represented a young individual in a severe brain
                injury case. This devastating incident required expert legal
                handling, and we succeeded in obtaining a favorable outcome that
                supported long-term care.
              </p>
            </div>
          </div>
          <div className="">
            <Image src={defectiveRoad} alt="Image of Medical Neglence" className="filter grayscale-75 h-full w-full object-cover" />
          </div>
          <div className="md:col-span-2 md:col-start-1 md:row-start-4 bg-[#d8b28d47] py-6 px-8 backdrop-blur-3xl text-amber-50">
            <p className="text-[#2e2215] text-lg font-mono">2020</p>
            <div className="text-white">
              <p className={`mb-3 text-3xl md:text-5xl text-black ${playfair.className}`}>
                Defective roadway
              </p>
              <p className="text-black tracking-wider md:text-lg xl:text-2xl">
                In 2020, a critical case emerged due to poorly maintained
                roadways in Dubai. Our firm secured a judgment emphasizing the
                city’s responsibility for public safety, resulting in enhanced
                road maintenance policies.
              </p>
            </div>
          </div>
          <div className="hidden">
            <Image src={medicalNeglegence} alt="Image of Medical Neglence" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="py-8 pb-14 px-3 ">
        <h2
          className={`text-3xl md:text-5xl text-center my-12 md:my-24 lg:mb-18 ${playfair.className} after:block after:w-15 after:border after:mx-auto after:border-[#D2B48C] after:mt-2`}
        >
          Practice Areas
        </h2>
        <div className="max-w-screen-2xl px-6 md:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2">
          <PracticeAreaCard data={practiceAreas} />
        </div>
      </section>
      <Marquee pauseOnHover className="bg-[#b7945e] py-14 gap-4" speed={100}>
        <div className="flex gap-4">

          <div className={` text-amber-50 text-5xl font-extralight`}>Criminal Law</div>
          <span className="text-lg !w-8">&#x2E;</span>
          <div className={` text-amber-50 text-5xl`}>Family Law</div>
          <span className="text-lg !w-8">&#x2E;</span>
          <div className={` text-amber-50 text-5xl`}>Labour Law</div>
          <span className="text-lg !w-8">&#x2E;</span>
          <div className={` text-amber-50 text-5xl`}>Environment Law</div>
          <span className="text-lg w-3 inline-block">&#x2E;</span>
        </div>
      </Marquee>

      <section className="py-25 px-8 md:py-32 md:px-18">
        <h2
          className={`text-3xl md:text-5xl text-center mb-12 md:mb-24 lg:mb-18 ${playfair.className} after:block after:w-15 after:border after:mx-auto after:border-[#D2B48C] after:mt-2`}
        >
          Case Studies
        </h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1  gap-8">
          <Link
            href="#"
            className={` border border-[#D2B48C]`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_auto] items-center ">
              <div className="col-span-2 sm:col-span-1 p-2">
                <p className="font-semibold xl:text-2xl">Character certificate and support letters for the criminal court sjdhfkajh
                  sdfkhjasd
                  lkfhaskdjhakjsdh
                  fkjasdhl
                  hajsdfja
                  hsl
                  dk
                  jhfask
                  jdfhl
                  akjsdh
                  faks
                  ldhf</p>
              </div>
              <div className="border border-b-0 border-l-0 border-[#D2B48C] sm:border-t-0 p-2  text-xs self-stretch sm:flex sm:flex-col">
                <span className="block font-semibold sm:mb-2">
                  Family Law
                </span>
                <span className="text-sm leading-0.5 ">By Ellington Crises</span>
              </div>
              <div className="p-2 border border-l-0 border-b-0 border-r-0 self-stretch text-sm border-[#D2B48C] sm:border-t-0 flex justify-end">
                <span className="mr-1 font-semibold">26</span>
                <span className="">Oct, 2025</span>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className={` border border-[#D2B48C]`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_auto] items-center ">
              <div className="col-span-2 sm:col-span-1 p-2">
                <p className="font-semibold">Character certificate and support letters for the criminal court</p>
              </div>
              <div className="border border-b-0 border-l-0 border-[#D2B48C] sm:border-t-0 p-2  text-xs self-stretch">
                <span className="block font-semibold">
                  Family Law
                </span>
                <span className="text-sm leading-0.5 ">By Ellington Crises</span>
              </div>
              <div className="p-2 border border-l-0 border-b-0 border-r-0 self-stretch text-sm border-[#D2B48C] sm:border-t-0 flex justify-end">
                <span className="mr-1 font-semibold ">26</span>
                <span className="">Oct, 2025</span>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className={` border border-[#D2B48C]`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto_auto] items-center ">
              <div className="col-span-2 sm:col-span-1 p-2">
                <p className="font-semibold">Character certificate and support letters for the criminal court</p>
              </div>
              <div className="border border-b-0 border-l-0 border-[#D2B48C] sm:border-t-0 p-2  text-xs self-stretch">
                <span className="block font-semibold">
                  Family Law
                </span>
                <span className="text-sm leading-0.5 ">By Ellington Crises</span>
              </div>
              <div className="p-2 border border-l-0 border-b-0 border-r-0 self-stretch text-sm border-[#D2B48C] sm:border-t-0 flex justify-end">
                <span className="mr-1 font-semibold ">26</span>
                <span className="">Oct, 2025</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="py-8 px-3 bg-[rgba(0,0,0,0.8)] relative">
        <Image src={officePic} alt="office background pic" fill className="object-cover -z-10" />
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <p className="text-sm text-[#d2b48c]">We are insanely good</p>
          <p className="text-2xl font-bold text-amber-50 mb-6">Why Choose For Us</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-14 ">
            <div className="text-center">
              <p className="text-5xl md:text-5xl text-[#d2b48c] font-extralight mb-1 text-center"><CountUpper number={32} />+</p>
              <p className="text-amber-50 mb-3 md:text-sm">Year of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-5xl text-[#d2b48c] font-extralight mb-1 text-center"><CountUpper number={200} />M</p>
              <p className="text-amber-50 mb-3 md:text-sm">Millions of won</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-5xl text-[#d2b48c] font-extralight mb-1 text-center">12/7</p>
              <p className="text-amber-50 mb-3 md:text-sm">We are available</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-5xl text-[#d2b48c] font-extralight mb-1 text-center"><CountUpper number={12} />+</p>
              <p className="text-amber-50 mb-3 md:text-sm">Awards & Listing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-42 px-8 md:px-10 bg-[#b7945e] relative">
        <div className="max-w-screen-sm md:max-w-screen-lg  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 md:justify-center md:shadow-lg md:p-8 md:bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl">
          <div className="text-center mb-4 ">
            <p className="text-sm text-black font-extralight mb-1 text-center md:text-left">Discuss your case with our auttorney</p>
            <p className="text-2xl md:text-4xl text-amber-50 md:text-left">Talking about your case?</p>
            <p className="text-amber-50  md:text-left md:text-2xl">Let`s talk about that.</p>
            {/* <div>
                <Image src={OmarAlShamsiSign} alt="owner signature"/>
              </div> */}
          </div>
          <div className="">
            <ContactUs />
          </div>
        </div>
      </section>
      <section>
        <Map />
      </section>
      <footer className="py-12 bg-[#fcf9f3] flex items-center justify-center">
        <Image src={logoDark} alt="Dark logo" className="w-38 h-auto" />
      </footer>

    </>
  );
}



function PracticeAreaCard({ data = [] }) {
  return (
    <>
      {data.map((practice, i) => {
        console.log(i % 2 === 0 ? 0 : 1)
        return (
          <Link
            href="#"
            className={`p-6 border-l-0 border-t-0 border-b ${i % 2 === 0 ? 'sm:border-r border-r-0' : 'border-r-0 sm:border-r-0'
              } border border-[#D2B48C]`}
            key={practice.title}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center">
              <div className="w-20 mx-auto">
                <Image src={practice.icon} alt="Legal solution icon" />
              </div>
              <div className="text-center sm:text-left">
                <h3
                  className={`text-[#D2B48C] font-medium text-2xl xl:text-5xl mb-3 ${playfair.className}`}
                >
                  {practice.title}
                </h3>
                <p className="xl:text-xl">{practice.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
