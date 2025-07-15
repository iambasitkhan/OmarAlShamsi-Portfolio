import BackgroundImage1 from "@/public/practicesBagroundImage.jpg"
import Image from "next/image"
import { playfair } from "../layout"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import arbitratryIcon from "@/public/practiceIcons/arbitratryIcon.png"
import practice2 from "@/public/practiceIcons/practice2.png"
import practice3 from "@/public/practiceIcons/practice3.png"
import practice4 from "@/public/practiceIcons/practice4.png"
import practice5 from "@/public/practiceIcons/practice5.png"
import practice6 from "@/public/practiceIcons/practice6.png"
import penFooterLogo from "@/public/penFooterLogo.jpg"

const practices = [{
    id: 1,
    icon: arbitratryIcon,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 2,
    icon: practice2,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 3,
    icon: practice3,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 4,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 5,
    icon: practice5,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 6,
    icon: practice6,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 7,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 8,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 9,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 10,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 11,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 12,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 13,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 14,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 15,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 16,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 17,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 18,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 19,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 20,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}, {
    id: 21,
    icon: practice4,
    mainTitle: "Arbitration",
    subTitle: "Banking and Finance",
    description: "With three decades of collectively experience"
}]

export default function PracticePage() {
    return <main>
        <header className="h-[60dvh] relative practice-parallax-section" >
            {/* <Image src={BackgroundImage1} alt="practice image background" fill className="cover -z-20" /> */}
            <div className="max-w-screen-2xl mx-auto lg:mx-32 h-full flex flex-col justify-center text-white">
                <h1 className={`text-6xl ${playfair.className} mb-6`}>Practices</h1>
                <p className="w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos blanditiis ratione, iure veniam aspernatur illo, corporis, sed error molestiae officiis reiciendis excepturi. Necessitatibus quam pariatur quos! Quis est inventore dolorum praesentium, aliquid vel enim quisquam, dolore minus reiciendis at corrupti quam, tempore ad? Aspernatur ratione facilis veniam ipsa, quam recusandae?</p>
            </div>
        </header>
        <section className="max-w-screen-2xl mx-auto px-8 py-12 mb-20">
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
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis consequuntur alias architecto et velit! Provident quam adipisci magni saepe error voluptates velit repellat corrupti accusamus eveniet unde, autem et neque laudantium, doloribus natus quisquam rerum. Atque in consequuntur ducimus quae commodi expedita ullam exercitationem sed possimus perferendis! Rem, sequi. At soluta id vel, odio provident obcaecati repudiandae magnam quo?</p>

            <div className="grid grid-cols-5 gap-8">
                {practices.map(practice => {
                    return <PracticeBox practice={practice} key={practice.id} />
                })}
            </div>
        </section>
        <section>
            <Image src={penFooterLogo} alt="pen footer logo" />
        </section>
    </main>
}

function PracticeBox({ practice }) {
    const { icon, mainTitle, subTitle, description } = practice;
    return <div className="p-6 px-12 bg-[#b7935e8a] flex flex-col items-center justify-center practiceBox">
        <div className="h-full upperSection">
            <Image src={icon} alt="icon1" className="w-16" />
            <p className="font-bold">{mainTitle}</p>
        </div>
        <div className="text-center lowerSection">
            <p className="font-semibold text-sm">{subTitle}</p>
            <p className="text-sm">{description}</p>
        </div>
    </div>
}