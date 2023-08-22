import Link from "next/link";
import Image from "next/image";

import {
  StructuredText,
  StructuredTextDocument,
} from "react-datocms/structured-text";

import { fetchData } from "../../lib/fetch";

async function getMember({ params }) {
  const data = await fetchData(`
    query MemberQuery {
      member(filter: {slug: {eq: "${params.slug}"}}) {
        id
        slug
        name
        blurb
        website
        address
        phone
        memberContent  {
          value
        }
        hero {
          url
          height
          width
        }
        logo {
          url
        }
        memberImages {
          url
          height
          width
        }
      }
    }
  `);

  return data;
}

export default async function MemberPage(params) {
  const memberData = await getMember(params);

  return (
    <>
      <div className="container mx-auto mt-12">
        <p className="my-6 text-sm">
          <Link href="/members" className="text-awiapurple">
            Browse Members
          </Link>{" "}
          <span className="mx-2">/</span> {memberData.member.name}
        </p>

        <div className="w-full overflow-hidden h-1/2">
          <Image
            src={memberData.member.hero.url}
            alt="Hero"
            width={memberData.member.hero.width}
            height={memberData.member.hero.height}
            className="object-cover h-96 rounded-xl w-full"
          />
        </div>

        <div className="px-6">
          <div className="grid grid-cols-2 items-center">
            <div className="flex gap-5">
              <div>
                <Image
                  src={memberData.member.logo.url}
                  height={100}
                  width={100}
                  alt=""
                  className="-mt-6 rounded-full"
                />
              </div>
              <div>
                <h1 className="mt-2 text-2xl font-semibold text-left">
                  {memberData.member.name}
                </h1>

                <p>{memberData.member.blurb}</p>
              </div>
            </div>
            <div className="flex gap-5 justify-end">
              <div>
                <Link
                  href="/join"
                  className="px-6 py-4 text-xs w-full font-semibold text-center text-awiapurple border-purple uppercase rounded-3xl"
                >
                  Contact
                </Link>
              </div>
              <div>
                <Link
                  href="/join"
                  className="px-6 py-4 text-xs w-full font-semibold text-center bg-awiapurple border-purple  text-white uppercase rounded-3xl"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-16 mt-10">
            <div>
              <a
                href={memberData.member.website}
                rel="nofollow"
                className="text-awiapurple"
              >
                {memberData.member.website}
              </a>

              <p>{memberData.member.address}</p>

              <p>{memberData.member.phone}</p>
            </div>
            <div className="col-span-3">
              <StructuredText data={memberData.member.memberContent.value} />
              {memberData.member.memberImages.map((img, i) => (
                <div key={i}>
                  <Image
                    src={img.url}
                    width={500}
                    height={300}
                    className="w-full my-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
