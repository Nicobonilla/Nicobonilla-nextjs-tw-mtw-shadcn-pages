import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

type ICarouseHeroItem = {
  image: string;
};

export default function CarouselHeroItem({
  image,
}: ICarouseHeroItem) {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        className="h-[70vh] w-full object-cover"
        src={image}
        height={900}
        width={1000}
        alt="image 1"
        priority
      />
      <div className="absolute inset-0 grid h-[70vh] w-full place-items-center bg-black/60">
          <></>
      </div>
    </div>
  );
}
