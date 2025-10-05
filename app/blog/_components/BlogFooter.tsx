import Image from "next/image";

export default function BlogFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#F0F6FF] to-white pt-10 md:pt-16">
      {/* --- CTA Image Section --- */}
      <div className="w-full">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/CTA-desktop.svg" // you'll replace this with your actual image
            alt="CTA Section"
            width={1600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/CTA-mobile.svg" // you'll replace this with your actual image
            alt="CTA Section Mobile"
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* --- Footer Content --- */}
      <div className="mx-auto max-w-7xl px-5 py-10 md:py-14 grid gap-8 md:grid-cols-5 text-[#1B1B1F]">
        {/* Logo + tagline */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo.svg" alt="Suvit Logo" width={120} height={40} />
          </div>
          <p className="text-sm text-[#444] mb-4">Powering CA’s Office</p>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3 text-[15px]">Product feature</h4>
          <ul className="space-y-2 text-sm text-[#4B4B4B]">
            <li>GST Filing & Compliance</li>
            <li>Client Communication & Practice Management</li>
            <li>Accounting Automation</li>
            <li>Suvit vs ZohoBooks</li>
            <li>Suvit vs Tally</li>
            <li>Use cases</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3 text-[15px]">Company</h4>
          <ul className="space-y-2 text-sm text-[#4B4B4B]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3 text-[15px]">Resources</h4>
          <ul className="space-y-2 text-sm text-[#4B4B4B]">
            <li>Blogs</li>
            <li>Webinars</li>
            <li>Calculator</li>
            <li>Case Studies</li>
            <li>Customers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
