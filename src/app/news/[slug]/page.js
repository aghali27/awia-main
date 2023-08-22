import Link from "next/link";
import Image from "next/image";

import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";

import { fetchData } from "../../lib/fetch";

async function getNews({ params }) {
  const data = await fetchData(`
    query MyQuery {
      news(filter: {slug: {eq: "${params.slug}"}}) {
        title
        author
        date
        article {
          value
        }
        hero {
          url
        }
      }
    }
  `);

  return data;
}

export default async function NewsPage(params) {
  const newsData = await getNews(params);

  return (
    <>
      <div className="container grid grid-cols-4 mx-auto">
        <div className="col-span-2 col-start-2">
          <h1 className="text-5xl font-normal leading-snug text-left mt-10">
            {newsData.news.title}
          </h1>

          <p>{newsData.news.author}</p>

          <Image
            src={newsData.news.hero.url}
            alt="News hero image"
            width={800}
            height={450}
            className="single-news-image rounded-md my-16"
          />

          <StructuredText data={newsData.news.article.value} />
        </div>
      </div>
    </>
  );
}
