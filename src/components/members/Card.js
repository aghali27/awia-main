import Link from "next/link";
import Image from "next/image";

export default function Card({
  slug,
  imageSrc,
  logoSrc,
  heading,
  description,
  state,
}) {
  return (
    <div className="mb-5" data-state={state}>
      <div className="overflow-hidden">
        <Link href={`/members/${slug}`}>
          <Image
            src={imageSrc}
            height={260}
            width={400}
            alt=""
            className="object-cover h-60 w-full rounded-xl"
          />
        </Link>
      </div>
      <div className="pt-4">
        <Link href={`/members/${slug}`}>
          <Image
            src={logoSrc}
            height={50}
            width={50}
            alt=""
            className="float-left mr-3 rounded-full"
          />
        </Link>
        <p className="mt-0">
          <strong>
            <Link href={`/members/${slug}`}>{heading}</Link>
          </strong>
        </p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
