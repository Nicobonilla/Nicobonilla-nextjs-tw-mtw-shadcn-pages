'use client';
import { Card, CardContent } from "@/components/ui/card";
import imageByIndex from "./imageByIndex";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

type Props = {
  plugins?: EmblaPluginType[];
}
export default function CarouselIsapres ({plugins} : Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins)
  return (
    <Carousel
    className='mb-5 xl:w-2/3'
      opts={{ align: "center", loop: true, dragFree: true}}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/4 w-full xl:w-1/2"
          >
            <Card>
              <CardContent className="xl:h-1/12 items-center pt-5">
                <Image
                  src={imageByIndex(index)}
                  height={200}
                  width={800}
                  alt=""
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

