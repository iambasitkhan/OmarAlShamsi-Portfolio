import Image from "next/image";
import React from "react";

import officeimage from "@/public/office-pic.jpeg";
import officeImage2 from "@/public/office-image-2.jpeg";
import ownerImage from "@/public/SirOmar3.jpg";
import Container from "../_components/Container";
import ContactUsSection from "../_components/ContactUsSection";

export default function AboutmePage() {
  return (
    <div>
      <main className="min-h-[70vh] relative border-b-16 border-[#B6935D]">
        <Image src={officeimage} fill className="object-cover -z-10" />
        <div className="absolute bottom-0 left-0 right-0 w-full bg-[rgba(180,152,96,0.7)] h-1/3 flex items-center">
          <Container>
            <h1 className="text-white text-4xl">About Us</h1>
          </Container>
        </div>
      </main>
      <section className="py-28">
        <Container>
          <div className="grid sm:grid-cols-2 grid-rows-[250px_auto_auto_250px] sm:grid-rows-[440px_440px] gap-12">
            <div className="relative ">
              <Image
                src={ownerImage}
                fill
                className="object-cover sm:object-contain"
              />
            </div>
            <div className="self-center text-center sm:text-left">
              <h2 className="font-light text-3xl mb-6">Our Vission</h2>
              <p className="text-gray-600 mb-4 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                inventore! Nihil voluptatibus rem non aliquam. Reiciendis magni
                eveniet odio tenetur dolorem alias, rerum temporibus repellendus
                consequuntur unde placeat iusto excepturi?
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit consequuntur odio, saepe mollitia repellat aut
                optio error facilis illo minus.
              </p>
            </div>

            <div className="self-center text-center sm:text-left">
              <h2 className="font-light text-3xl mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                inventore! Nihil voluptatibus rem non aliquam. Reiciendis magni
                eveniet odio tenetur dolorem alias, rerum temporibus repellendus
                consequuntur unde placeat iusto excepturi?
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit consequuntur odio, saepe mollitia repellat aut
                optio error facilis illo minus.
              </p>
            </div>

            <div className="relative ">
              <Image
                src={officeImage2}
                fill
                className="object-cover sm:object-contain"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/vedio.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-md md:text-4xl font-bold">
            Welcome to OMAR ALSHAMSI
          </h2>
        </div>
      </section>
      <section className="py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_250px] gap-12">
            <div className="sm:py-12 text-center ">
              <h2 className="text-3xl mb-6">
                <div>Who</div> we are
              </h2>
              <p className="pb-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                necessitatibus animi nobis quam sunt impedit a harum id omnis
                officiis numquam eaque itaque distinctio iste molestiae
                molestias, possimus consequatur! Quaerat quam, cumque delectus
                soluta numquam mollitia itaque laudantium? Nemo rerum officia
                culpa laboriosam ipsam, ipsum rem commodi dolor? Dolores,
                similique. Lorem.
              </p>
              <p className="pb-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ipsa id placeat. Velit, possimus aperiam atque
                asperiores ipsum enim rerum blanditiis beatae. Officia itaque
                incidunt fugiat enim minima. Fugiat, similique?
              </p>
              <p className="pb-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
                laborum!
              </p>
            </div>
            <div className="relative">
              <Image src={officeimage} fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <ContactUsSection />
    </div>
  );
}
