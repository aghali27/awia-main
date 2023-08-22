import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/news/Card';

import ShowcaseSwiper from '@/components/showcase/ShowcaseSwiper';

import { fetchData } from '../lib/fetch';

const newsQuery = `query NewsPage{
  allNews(first: 5) {
      id
      title
      slug
      blurb
      author
      date
      hero {
          url
          height
          width
      }
  }
}`;

const query = `query NewsPage{
    allNews {
        id
        title
        slug
        blurb
        author
        date
        hero {
            url
            height
            width
        }
    }
  }`;

export const metadata = {
    title: 'News | AWIA',
    description: '',
};

export default async function NewsPage({ limit: $limit }) {
    const data = await fetchData(query);

    const newsData = await fetchData(newsQuery);

    return (
        <>
            <div className="container mx-auto mt-16">
                <h1 className="text-6xl">The latest from AWIA</h1>

                <div className="container grid gap-8 mx-auto my-16 lg:grid-cols-4">
                    {newsData.allNews.map((news, index) => (
                        <Card
                            key={news.id}
                            title={news.title}
                            slug={news.slug}
                            author={news.author}
                            blurb={news.blurb}
                            date={news.date}
                            image={news.hero.url}
                            imageHeight={news.hero.height}
                            imageWidth={news.hero.width}
                            featuredClass={index === 0 ? 'featured' : ''}
                            featureImage={index === 0 ? 'featureImage' : ''}
                        />
                    ))}
                </div>

                <div className="my-16">
                    <div className="container mx-auto">
                        <h2 className="font-semibold">Showcase</h2>

                        <h3 className="my-6 font-light text-lg">
                            The Latest from AWIA Members
                        </h3>
                        <ShowcaseSwiper />
                    </div>
                </div>

                <div className="grid gap-8 my-16 lg:grid-cols-4">
                    {data.allNews.map((news) => (
                        <Card
                            key={news.id}
                            title={news.title}
                            slug={news.slug}
                            author={news.author}
                            blurb={news.blurb}
                            date={news.date}
                            image={news.hero.url}
                            imageHeight={news.hero.height}
                            imageWidth={news.hero.width}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
