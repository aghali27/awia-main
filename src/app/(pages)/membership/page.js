import Image from "next/image";

import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";

import IndividualIcon from "../../../../public/img/join/individual.svg";

import MembershipLayout from "./membership-layout";

export const metadata = {
  title: "Membership",
  description: "",
};

import { fetchData } from "../../lib/fetch";

async function getPage() {
  const data = await fetchData(`
  query MyQuery {
    page(filter: {slug: {eq: "membership"}}) {
      title
      id
      slug
      content {
        value
      }
      heroImage {
        url
        width
        height
      }
    }
  }
  `);

  return data;
}

export default async function MembershipPage() {
  const pageData = await getPage();

  return (
    <MembershipLayout pageTitle={pageData.page.title}>
      <div className={pageData.page.heroImage?.url ? "mx-auto" : "hidden"}>
        <Image
          src={pageData.page.heroImage?.url}
          alt="News hero image"
          width={800}
          height={450}
          className="z-0 w-full mx-auto -mt-8 rounded-xl"
        />
      </div>
      <div className="mx-auto mt-8 w-4/5">
        <StructuredText data={pageData.page.content.value} />
      </div>

      <div className="px-6 py-2 my-12 text-white rounded-xl bg-awiapurple mx-auto w-4/5">
        <p>
          <Image
            src={IndividualIcon}
            alt="Individual icon"
            className="inline-block h-12 text-center -ml-14"
          />{" "}
          Join the Australian Web Industry and help shape our digital future
        </p>
      </div>
    </MembershipLayout>
  );
}
