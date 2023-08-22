import Link from "next/link";
import Image from "next/image";

import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";

import { fetchData } from "../lib/fetch";

async function getPage({ params }) {
  const data = await fetchData(`
    query PageQuery {
      page(filter: {slug: {eq: "${params.slug}"}}) {
        id
        title
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

export default async function ContentPage(params) {
  const pageData = await getPage(params);

  return (
    <>
      <div className="container w-1/2 mx-auto mt-12 single-page">
        <h1>{pageData.page.title}</h1>
        <div className={pageData.page.heroImage?.url ? "mx-auto" : "hidden"}>
          <Image
            src={pageData.page.heroImage?.url}
            alt="News hero image"
            width={800}
            height={450}
            className="single-news-image rounded-md my-16 mx-auto"
          />
        </div>

        <div className="mx-auto mt-8">
          <StructuredText data={pageData.page.content.value} />
        </div>
      </div>
    </>
  );
}
