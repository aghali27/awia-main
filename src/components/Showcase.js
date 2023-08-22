import Image from 'next/image';

import ShowcaseCard from '@/components/showcase/Card';

import PiqueScreenshot from '../../public/img/showcase/pique.png';
import RooftopMoviesScreenshot from '../../public/img/showcase/rooftop-movies.png';
import HostplusScreenshot from '../../public/img/showcase/hostplus.png';

export default function Showcase() {
    return (
        <div className="container mx-auto my-24">
            <h2>Showcase</h2>

            <h3 className="my-6">The latest from AWIA Members</h3>

            <div className="grid gap-8 lg:grid-cols-3">
                <ShowcaseCard
                    imageSrc={PiqueScreenshot}
                    website="Pique"
                    agency="Humaan"
                    colour="red-500"
                />

                <ShowcaseCard
                    imageSrc={RooftopMoviesScreenshot}
                    website="Rooftop Movies"
                    agency="Strange Animals"
                    colour="purple-500"
                />

                <ShowcaseCard
                    imageSrc={HostplusScreenshot}
                    website="Hostplus"
                    agency="Inlight"
                    colour="blue-500"
                />
            </div>
        </div>
    );
}
