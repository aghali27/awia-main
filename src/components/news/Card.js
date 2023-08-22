import Link from "next/link";
import Image from "next/image";

export default function NewsCard({
  title,
  slug,
  blurb,
  date,
  author,
  image,
  imageHeight,
  imageWidth,
  featuredClass,
  featureImage,
}) {
  return (
    <div className={"relative " + featuredClass}>
      <div>
        <div className="overflow-hidden">
          <Link href={`/news/${slug}`}>
            <Image
              src={image}
              alt="News article screenshot"
              width={imageWidth}
              height={imageHeight}
              className={
                "inline-block object-cover h-48 mb-4 rounded-xl " + featureImage
              }
            />
          </Link>
        </div>

        <Link href={`/news/${slug}`} className="">
          {title}
        </Link>

        <p className="text-xs text-gray-500">
          {author}, {date}
        </p>
      </div>
    </div>
  );
}
