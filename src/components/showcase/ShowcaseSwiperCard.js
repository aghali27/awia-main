import Link from "next/link";
import Image from "next/image";

export default function Card({ imageSrc, website, agency, colour }) {
  return (
    <swiper-slide>
      <div className={`rounded-b-xl bg-${colour}`}>
        <Image
          src={imageSrc}
          alt="Screenshot"
          height={330}
          width={400}
          className="inline-block w-full h-80 object-cover"
        />

        <p className="p-6 text-white">
          <strong>{website}</strong>
          <br />
          {agency}
        </p>
      </div>
    </swiper-slide>
  );
}
