import Link from "next/link";
import Image from "next/image";

export default function Card({ imageSrc, website, agency, colour }) {
  return (
    <div className={`rounded-b-xl bg-${colour}`}>
      <Image
        src={imageSrc}
        alt="Screenshot"
        height={230}
        width={400}
        className="inline-block w-full"
      />

      <p className="p-6 text-white">
        <strong>{website}</strong>
        <br />
        {agency}
      </p>
    </div>
  );
}
