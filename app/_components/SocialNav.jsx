import MainmenuTogglerBtn from "./buttonActions/MainmenuTogglerBtn";
import FullScreenMenu from "./FullScreenMainMenu";

export default function SocialNav() {
  return (
    <nav className="hidden md:block border-b border-[#D2B48C] px-10 py-2 sticky top-0 z-50 bg-[#ffffff55] backdrop-blur-3xl">
      <div className="flex justify-between">
        <p>Social links</p>
        <div className="flex gap-2">
          <p>info@oalshamsi.ae</p>
          <p>+971-67077595</p>
          <FullScreenMenu />
        </div>
      </div>
    </nav>
  );
}
