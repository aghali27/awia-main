import Image from "next/image";

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import AudaLogo from "../../public/img/partners/auda.png";
import AirwallexLogo from "../../public/img/partners/airwallex.png";
import WpEngineLogo from "../../public/img/partners/wpengine.webp";

export default function Partners() {
  return (
    <div className="container-fluid">
      <div class="container mx-auto my-24 text-center">
        <h2 className="font-semibold">Our Partners</h2>

        <p className="font-light">
          Thanks to our partners for their ongoing support.
        </p>

        <div className="my-12 flex justify-center items-end gap-10">
          <Image
            src={AudaLogo}
            alt="Auda logo"
            height={60}
            className="object-contain"
          />

          <Image
            src={AirwallexLogo}
            alt="Airwallex logo"
            height={40}
            className="object-contain"
          />

          <Image
            src={WpEngineLogo}
            alt="Wp Engine logo"
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mx-auto my-12 text-center flex items-center justify-between">
        <div className="border-grey w-full"></div>
        <div className="w-1/5 mx-10">
          <Link
            href="/join"
            className="z-10 inline-block px-6 py-3 text-xs font-semibold text-center text-white uppercase bg-awiapurple rounded-3xl"
          >
            Join AWIA <BsArrowRight className="inline-block text-white" />
          </Link>
        </div>
        <div className="border-grey w-full"></div>
      </div>
    </div>
  );
}
