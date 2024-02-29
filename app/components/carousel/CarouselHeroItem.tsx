import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

type ICarouseHeroItem = {
  title: string;
  description: string;
  description1?: string;
  description2?: string;
  image: string;
};

export default function CarouselHeroItem({
  title,
  description,
  description1,
  description2,
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
        <div className="w-3/4  lg:w-1/2 text-center pt-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pb-32">
          <Typography
            placeholder={"titulo"}
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography
            placeholder={"description"}
            variant="h2"
            color="white"
            className="mb-3 text-lg md:text-xl opacity-80"
          >
            {description}
          </Typography>

          {description1 && (
            <Typography
              placeholder={"description1"}
              variant="h3"
              color="white"
              className="mb-3 text-lg  md:text-xl opacity-80"
            >
              {description1}
            </Typography>
          )}

          {description1 && (
            <Typography
              placeholder={"description2"}
              variant="h3"
              color="white"
              className="mb-3 text-lg  md:text-xl opacity-80"
            >
              {description2}
            </Typography>
          )}

          <div className="flex justify-center gap-2">
            <Link href="/#contacto-ejecutiva-isapre">
              <Button placeholder={"Cotiza"} size="lg" color="white">
                COTIZA GRATIS TU PLAN DE SALUD
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
