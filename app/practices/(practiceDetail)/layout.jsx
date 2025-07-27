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
        <div className="grid grid-cols-[1fr_auto]">
          {children}
          <div>Contact form</div>
        </div>
      </div>
    </section>
  );
}
