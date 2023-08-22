"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import JoinAWIA from "@/components/join-awia";

export default function MembershipLayout({ children, pageTitle }) {
  const pathname = usePathname();

  return (
    <section>
      <div className="container w-1/2 mx-auto mt-12">
        <h1 className="mb-12">{pageTitle}</h1>
      </div>
      <div className="container grid mx-auto mt-12">
        <ul className="z-10 w-1/2 px-8 py-6 mx-auto text-sm text-center bg-white border-2 rounded-xl border-awiapurple flex justify-around">
          <li className="float-left mx-4">
            <Link
              href="/membership"
              className={
                pathname == "/membership" ? "text-awiapurple font-semibold" : ""
              }
            >
              Why Join AWIA
            </Link>
          </li>
          <li className="float-left mx-4">
            <Link
              href="/membership/member-benefits"
              className={
                pathname == "/membership/member-benefits"
                  ? "text-awiapurple font-semibold"
                  : ""
              }
            >
              Member Benefits
            </Link>
          </li>
          <li className="float-left mx-4">
            <Link
              href="/membership/widelines"
              className={
                pathname == "/membership/widelines"
                  ? "text-awiapurple font-semibold"
                  : ""
              }
            >
              Code of Ethics
            </Link>
          </li>
          <li className="float-left mx-4">
            <Link href="/join">Become a Member</Link>
          </li>
        </ul>
      </div>
      <div className="container w-1/2 mx-auto single-page">{children}</div>
      <div className="my-32">
        <JoinAWIA />
      </div>
    </section>
  );
}
