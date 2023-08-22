import Image from "next/image";

import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";

import MembershipLayout from "../membership-layout";

export const metadata = {
  title: "Widelines: AWIA's Web Industry Guidelines",
  description: "",
};

import { fetchData } from "../../../lib/fetch";

async function getPage() {
  const data = await fetchData(`
  query MyQuery {
    page(filter: {slug: {eq: "widelines"}}) {
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

export default async function Widelines() {
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
    </MembershipLayout>
  );
}
