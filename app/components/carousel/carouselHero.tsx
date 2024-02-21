import { Carousel } from "@material-tailwind/react";
import CarouselHeroItem from "./CarouselHeroItem";
import CarouselHeroItemIsapre from "./CarouselHeroItemIsapre";

type ICarousel = {
  autoplay?: false | true;
}

export default function CarouselHero({autoplay}: ICarousel) {
  return(
  <div>
    <Carousel autoplay={false} placeholder={"thePlaceHolder"} loop={true} autoplayDelay={5000} transition={{ duration: 0.5 }} >
      <CarouselHeroItem
        title={"ASESORÍA PERSONALIZADA"}
        description={"ENCUENTRA LA MEJOR OPCION DE SALUD EN BASE A TU PERFIL"}
        description1={"CONTRÁTALO 100% REMOTO"}
        description2={"SIN COSTO ADICIONAL"}
        image={"/images/family-1.jpg"}
      />
      <CarouselHeroItemIsapre
        title={"Tenemos Años de Experiencia"}
        description={"Sabemos cual Isapre es la más conveniente para tí, estamos al tanto de todos los beneficios que ofrece el mercado"}
      />
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"/images/family-2.jpg"}
      />
    </Carousel>
  </div>
)};

