import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Card from "@/components/members/Card";
import Form from "@/components/Form";

import { fetchData } from "../lib/fetch";

export const metadata = {
  title: "Browse Members | AWIA",
  description: "",
};

export default async function MembersPage(params) {
  let formState = params.searchParams.state;
  let formService = params.searchParams.service;

  let filterState = formState ? `state: {eq: "${formState}"}` : ``;

  let filterService = formService ? `services: {anyIn: "${formService}"}` : ``;

  const query = `query GetMembers {
    allMembers(filter: {${filterState}, ${filterService}}) {
      id
      name
      slug
      blurb
      state
      logo {
        url
      }
      hero {
        url
      }
    }
  }`;

  const data = await fetchData(query);

  return (
    <>
      <div className="py-16 text-center bg-gradient-to-r from-bgleft to-bgright">
        <h1 className="text-6xl">Hire the best in Australia</h1>

        <p className="my-4">
          Find an Australian Agency or Consultant for your digital project
          needs.
        </p>

        <div className="container grid mx-auto mt-14">
          <Form state={formState} service={formService} />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid my-12 gap-8 lg:grid-cols-3">
          {data.allMembers.map((agency) => (
            <Card
              key={agency.id}
              slug={agency.slug}
              imageSrc={agency.hero.url}
              logoSrc={agency.logo.url}
              heading={agency.name}
              description={agency.blurb}
              state={agency.state}
            />
          ))}
        </div>
      </div>
    </>
  );
}
