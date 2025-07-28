import MainmenuTogglerBtn from "./buttonActions/MainmenuTogglerBtn";
import FullScreenMenu from "./FullScreenMainMenu";
import facebookIcon from "@/public/socialIcons/facebookIcon.png";
import linkedInIcon from "@/public/socialIcons/linkedinIcon.png";
import youtubeIcon from "@/public/socialIcons/youtubeIcon.png";
import Image from "next/image";

export default function SocialNav() {
  return (
    <nav className="hidden md:block border-b border-[#D2B48C] px-10 py-2 sticky top-0 z-50 bg-[#ffffff55] backdrop-blur-3xl">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image src={facebookIcon} height={20} alt="facebook social icon" />
          <Image src={linkedInIcon} height={20} alt="facebook social icon" />
          <Image src={youtubeIcon} height={20} alt="facebook social icon" />
        </div>
        <div className="flex gap-6">
          <p>info@oalshamsi.ae</p>

          <p>+971-67077595</p>
          <FullScreenMenu />
        </div>
      </div>
    </nav>
  );
}
