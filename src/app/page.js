import Link from "next/link";
import Image from "next/image";

import Form from "@/components/Form";

import NewsCard from "@/components/news/Card";
import ShowcaseSwiper from "@/components/showcase/ShowcaseSwiper";
import JoinAWIA from "@/components/join-awia";

import { BsArrowRight } from "react-icons/bs";

import EmpoweringImage from "../../public/img/home/empowering.jpg";
import MembershipImage from "../../public/img/home/membership-2.jpeg";
import DirectoryImage from "../../public/img/home/directory-2.jpg";
import AwardsImage from "../../public/img/home/awards-2.jpg";

import { fetchData } from "./lib/fetch";

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

export const metadata = {
  title: "Home | AWIA",
  description: "",
};

export default async function Home() {
  const newsData = await fetchData(newsQuery);

  return (
    <>
      <div className="py-8 bg-gradient-to-r from-bgleft to-bgright">
        <div className="container mx-auto my-12">
          <h1 className="font-bold text-center text-7xl leading-tight">
            Shaping Australia&apos;s
            <br />
            digital future.
          </h1>
          <p className="my-12 text-center font-light">
            Australia&apos;s largest industry body dedicated to the web.
            <br />
            Empowering, connecting and resourcing our members.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 h-[35rem]">
        <div className="relative">
          <Image
            src={DirectoryImage}
            alt=""
            className="z-0 brightness-75 object-cover"
            fill
          />

          <div className="relative z-10 px-24 py-10 text-center flex flex-col h-full justify-between">
            <h2 className="text-3xl font-semibold text-white">Directory</h2>
            <p className="text-gray-300 font-light">
              Browse our exclusive directory of agencies and industry experts to
              find the right fit for your next project.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={MembershipImage}
            alt=""
            className="z-10 brightness-75 object-cover home-image-zoom"
            fill
          />

          <div className="relative z-10 px-24 text-center flex flex-col h-full justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Membership</h2>
            </div>
            <div>
              <p className="text-gray-300 font-light mb-5">
                Join Australia&apos;s membership program for the digital
                industry and enjoy exclusive resources, benefits and
                invitations.
              </p>

              <Link
                href="/join"
                className="z-10 mx-auto inline-block px-6 py-3 font-semibold text-xs text-center w-40 text-white uppercase bg-awiapurple rounded-3xl"
              >
                Join AWIA <BsArrowRight className="inline-block text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={AwardsImage}
            alt=""
            className="z-0 brightness-75 object-cover"
            fill
          />

          <div className="relative z-10 px-24 py-10 text-center flex flex-col h-full justify-between">
            <h2 className="text-3xl font-semibold text-white">Awards</h2>
            <p className="text-gray-300 font-light">
              The pinnacle of Australian digital production, we are proud to
              present the 18th Australian Web Awards.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-bgleft to-bgright">
        <div className="container mx-auto py-24 px-0 ">
          <Form title="Find a Member" />
        </div>
      </div>

      <div className="container mx-auto mt-20 mb-8">
        <h2 className="font-semibold">What&apos;s happening</h2>
      </div>

      <div className="container grid gap-8 mx-auto lg:grid-cols-4">
        {newsData.allNews.map((news, index) => (
          <NewsCard
            key={news.id}
            title={news.title}
            slug={news.slug}
            author={news.author}
            blurb={news.blurb}
            date={news.date}
            image={news.hero.url}
            imageHeight={news.hero.height}
            imageWidth={news.hero.width}
            featuredClass={index === 0 ? "featured" : ""}
            featureImage={index === 0 ? "featureImage" : ""}
          />
        ))}
      </div>

      <div className="my-24 ">
        <div className="container mx-auto">
          <h2 className="font-semibold">Showcase</h2>

          <h3 className="my-6 font-light text-lg">
            The Latest from AWIA Members
          </h3>
        </div>
        <div className="ml-48">
          <ShowcaseSwiper />
        </div>
      </div>

      <JoinAWIA />
    </>
  );
}
