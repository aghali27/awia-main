import Image from 'next/image';
import Link from 'next/link';

import { BsLinkedin } from 'react-icons/bs';

import { fetchData } from '../../lib/fetch';

const query = `query DirectorsPage($limit: IntType) {
  allDirectors(first: $limit) {
    id
    name
    role
    blurb
    linkedin
    photo {
        url
      }
  }
}`;


export const metadata = {
  title: 'Board of Directors | AWIA',
  description: '',
};

export default async function DirectorsPage() {

  const data = await fetchData(query);

  return (

    <>

      <div className="container grid mx-auto my-12">

        <h1 className="mb-8">Board of Directors</h1>

        <p>AWIA&apos;s Board of Directors come from various disciplines in the Australian web, marketing and creative industries. They plan events, create projects that further the industry, and liaise with industry, education and government.</p>

        <p>AWIA members can also be involved in an ad-hoc basis or in sub-committees. For example:</p>

        <ul>
          <li>AWIA Networking Events</li>
          <li>Australian Web Awards</li>
          <li>Design assistance</li>
          <li>Website development.</li>
        </ul>

        <p>Directors uphold and promote Widelines, our industry standards, and also believe in a shared vision for AWIA and its future.</p>

        <h2>Our Vision</h2>

        <p>The shared vision for AWIA is articulated in four key statements:</p>

        <ul>
          <li>We believe that web industry professionals see AWIA as intrinsic to their professional development and membership as a statement of credibility.</li>
          <li>AWIA is the top-of-mind web industry information resource for members, clients and governments, nation-wide.</li>
          <li>Clients see AWIA as the home of ethical, professional web development and work with members to drive innovation, growth and efficiency. </li>
          <li>We wish to see careers that are well-paid and prestigious, and entrepreneurship flourish in our industry.</li>
        </ul>

        <p>AWIA also has a constitution that you can view online as a PDF: <span className="bg-red-500">AWIA Ltd Constitution</span>.</p>

        <h2 className="bg-red-500">Meet your AWIA Directors</h2>

        <div className="grid lg:grid-cols-2">

          {data.allDirectors.map((director) => (

            <div key={director.id}>

              <Image src={director.photo.url} alt="Director photo" height={200} width={200} />

              <h2>{director.name}</h2>

              <p>{director.blurb}</p>

              <p><Link href={director.linkedin}><BsLinkedin className="inline-block" /></Link></p>

            </div>

          ))}

        </div>

      </div>

    </>
  )

}