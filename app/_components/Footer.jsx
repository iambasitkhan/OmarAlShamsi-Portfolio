// import Image from "next/image";
// import logoDark from "@/public/logo-01.png";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 flex items-center justify-center footer">
      {/* <Image src={logoDark} alt="Dark logo" className="w-38 h-auto" /> */}
      <div className="container mx-auto">
        <ul className="inline-flex gap-8">
          <li>
            <Link href="/practices" className="text-white uppercase">
              Our Practices
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white uppercase">
              Our Offices
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white uppercase">
              Join Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white uppercase">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
