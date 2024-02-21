import { Typography, Button } from "@material-tailwind/react";
import imageByIndex from "./imageByIndex";
import Image from "next/image";

type ICarouselHeroItemIsapre = {
  title: string;
  description: string;
};

export default function CarouselHeroItemIsapre({
  title,
  description,
}: ICarouselHeroItemIsapre) {

  return (
    <div className="relative h-[70vh] w-full pt-5 content-center">
      <div className="absolute w-full inset-0 flex flex-wrap pt-10 grid grid-cols-2 lg:grid-cols-3 xl:pl-32 bg-white">
      {Array.from({ length: 6 }).map((_, index) => (
          <Image key={index} 
          className={"h-full w-full md:pb-10 md:pl-20 md:w-3/5 lg:w-2/3 xl:w-1/2 object-contain"}
            src={imageByIndex(index)}
            height={80}
            width={300}
            alt={imageByIndex(index)}
          />
      ))}
      </div>
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/65">
        <div className="w-3/4 pl-12 pb-12 md:w-1/2 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            placeholder={"place"}
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography
            placeholder={"place"}
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {description}
          </Typography>
          <div className="flex gap-2">
            <Button size="lg" color="white" placeholder={"place"}>
              Explore
            </Button>
            <Button
              placeholder={"place"}
              size="lg"
              color="white"
              variant="text"
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
