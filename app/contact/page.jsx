import ContactUs from "../_components/forms/ContactUs";
import Map from "../_components/Map";

export default function page() {
  return (
    <main>
      <Map />
      <div className="max-w-lg mx-auto py-12 -z-20">
        <ContactUs />
      </div>
    </main>
  );
}
