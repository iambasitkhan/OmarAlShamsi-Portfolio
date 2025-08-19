import ContactUs from "./forms/ContactUs";

export default function ContactUsSection() {
  return (
    <section className="py-42 px-8 md:px-10 bg-[#b7945e] relative">
      <div className="max-w-screen-sm md:max-w-screen-lg  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 md:justify-center md:shadow-lg md:p-8 md:bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl">
        <div className="text-center mb-4 ">
          <p className="text-sm text-black font-extralight mb-1 text-center md:text-left">
            Discuss your case with our auttorney
          </p>
          <p className="text-2xl md:text-4xl text-amber-50 md:text-left">
            Talking about your case?
          </p>
          <p className="text-amber-50  md:text-left md:text-2xl">
            Let`s talk about that.
          </p>
          {/* <div>
                    <Image src={OmarAlShamsiSign} alt="owner signature"/>
                  </div> */}
        </div>
        <div className="">
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
