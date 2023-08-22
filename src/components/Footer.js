import Link from "next/link";
import Image from "next/image";

import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

import FooterLogoImage from "../../public/img/logo-footer.svg";

export default function Footer() {
  return (
    <>
      <div className="container grid mx-auto lg:grid-cols-4">
        <div>
          <ul>
            <li className="my-3">
              <Link href="/" className="font-semibold">
                Home
              </Link>
            </li>
            <li className="my-3">
              <Link href="/members" className="font-semibold">
                Browse Members
              </Link>
            </li>
            <li className="my-3">
              <Link href="/news" className="font-semibold">
                News & Events
              </Link>
            </li>
            <li className="my-3">
              <Link href="/" className="font-semibold">
                My Account
              </Link>
            </li>
            <li className="my-3">
              <Link href="/contact" className="font-semibold">
                Contact AWIA
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-3 font-semibold">Members</li>
            <li className="my-3 font-light">
              <Link href="/membership/member-benefits">
                Membership Benefits
              </Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/join">Become a Member</Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/membership/widelines">
                Widelines (Code of Ethics)
              </Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/resources">Member Resources</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-3 font-semibold">About Us</li>
            <li className="my-3 font-light">
              <Link href="/board">Board of Directors</Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/web-awards">Australian Web Awards</Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/lifetime-members">Lifetime Members</Link>
            </li>
            <li className="my-3 font-light">
              <Link href="/partners">Partners</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="my-3 font-semibold">Subscribe</p>

          <form
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="5B5E7037DA78A748374AD499497E309E1D3BB37A2A195FC614A7169DBCAA2216ACBF18CC238C3490CE938BAC5691DEAF96227E70C8943664B729A4F02F8C976E"
          >
            <p className="my-3">
              <input
                type="text"
                autoComplete="Email"
                aria-label="Email"
                id="fieldEmail"
                maxLength="200"
                name="cm-kikyu-kikyu"
                placeholder="Your Email Address"
                className="px-4 py-2 bg-gray-100 rounded-md w-full border-none"
                required=""
              />
            </p>
          </form>

          <p className="my-3 font-semibold">Social</p>

          <ul className="my-3">
            <li className="float-left mr-4">
              <Link href="https://www.facebook.com/australian.web.industry.association/">
                <BsFacebook className="inline-block text-3xl" />
              </Link>
            </li>
            <li className="float-left mr-4">
              <Link href="https://www.instagram.com/australianwebindustryassoc/">
                <BsInstagram className="inline-block text-3xl" />
              </Link>
            </li>
            <li className="float-left mr-4">
              <Link href="https://twitter.com/awia">
                <BsTwitter className="inline-block text-3xl" />
              </Link>
            </li>
            <li className="float-left mr-4">
              <Link href="https://www.linkedin.com/company/australian-web-industry-association/">
                <BsLinkedin className="inline-block text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container grid mx-auto my-16 lg:grid-cols-2">
        <div>
          <p className="font-light">
            &copy; 2023{" "}
            <Link href="/">Australian Web Industry Association Inc.</Link>
          </p>
        </div>
        <div className="text-right font-light">
          <p>
            <Link href="/privacy" className="mr-10">
              Privacy
            </Link>
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </div>

      <div className="pb-0 mb-0">
        <div className="relative h-72">
          <Image
            src={FooterLogoImage}
            alt="AWIA logo"
            className="inline-block object-cover w-auto"
            fill
          />
        </div>
      </div>
    </>
  );
}
