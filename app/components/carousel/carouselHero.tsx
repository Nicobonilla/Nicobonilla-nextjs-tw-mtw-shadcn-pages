'use client';
import { Carousel } from "@material-tailwind/react";
import CarouselHeroItem from "./CarouselHeroItem";
import { CarouselHeroItemIsapre } from "./CarouselHeroItemIsapre";

type ICarousel = {
  autoplay?: false | true;
}

export default function CarouselHero({autoplay}: ICarousel) {
  return(
  <div>
    <Carousel autoplay={true} placeholder={"thePlaceHolder"} loop={true} autoplayDelay={5000} transition={{ duration: 0.5 }} >
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"/images/family-1.jpg"}
      />
      <CarouselHeroItemIsapre
        title={"The Beauty of Nature"}
        description={" It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."}
      />
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"/images/family-2.jpg"}
      />
    </Carousel>
  </div>
)};

