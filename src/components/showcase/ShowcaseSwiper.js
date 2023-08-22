import AwiaSwiper from '@/components/AwiaSwiper';
import ShowcaseSwiperCard from '@/components/showcase/ShowcaseSwiperCard';

import { fetchData } from '../../app/lib/fetch';

const showcasesQuery = `query ShowcasesPage {
  allShowcases {
    id
    agency
    website
    colour
    screenshot {
      url
    }
  }
}`;

export default async function ShowcaseLayout() {
    const showcasesData = await fetchData(showcasesQuery);

    return (
        <AwiaSwiper>
            {showcasesData.allShowcases.map((showcase, index) => (
                <ShowcaseSwiperCard
                    key={showcase.id}
                    imageSrc={showcase.screenshot.url}
                    website={showcase.website}
                    agency={showcase.agency}
                    colour={showcase.colour}
                />
            ))}
        </AwiaSwiper>
    );
}
