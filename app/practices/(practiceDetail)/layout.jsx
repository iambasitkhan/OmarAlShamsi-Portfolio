import ContactUs from "@/app/_components/forms/ContactUs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Layout({ children }) {
  return (
    <section className=" bg-[#d9c4a92e] min-h-dvh py-8">
      <div className="container mx-auto">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem className="text-[#b7945e]">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-[#b7945e]">
              <BreadcrumbLink href="/practices">Practices</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Arbitration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-[1fr_auto] gap-12 items-start">
          {children}
          <div className="min-w-sm bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl  py-4 px-6 rounded-lg">
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  );
}
