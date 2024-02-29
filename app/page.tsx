import Link from "next/link";
import Image from "next/image";
import HeroOneButton from "./components/hero/HeroOneButton";
import { Button } from "./components/button/Button";
import dynamic from 'next/dynamic';
import CarouselHeroItem from './components/carousel/CarouselHeroItemLoading';
import VerticalFeatures from './templates/VerticalFeatures';

export default async function Page() {
  const DyCarouselHero = dynamic(() => import("./components/carousel/CarouselHero"), {
    ssr: false,
    loading: ()=> (<CarouselHeroItem image={"/images/family-1.jpg"}/>)
  })

  const DyCarouselIsapres = dynamic(() => import("./components/carousel/CarouselIsapres"), {
    ssr: false});
    
  const DyContactForm = dynamic(() => import("./templates/ContactForm"), {
    ssr: false});
  
  return (
    <div className="flex flex-col items-center justify-center">
      <DyCarouselHero autoplay/>
      <HeroOneButton
        title={
          <>
            {"APROVECHA AL MÁXIMO TU 7%\n"}
            <span className="text-primary-500">Ejecutivas certificadas</span>
          </>
        }
        description="La forma más rápida y convenienta para contratar Planes de Salud Previsional."
        button={
          <div className="px-10">
            <Link href="/#contacto-ejecutiva-isapre">
              <Button >COTIZA GRATIS TU PLAN DE SALUD</Button>
            </Link>
          </div>
        }
      />

      <div className="pt-14 p-5">
        <div className="grid place-items-center">
          <Image
            src={"/images/familia4.png"}
            height={828}
            width={518}
            alt=""
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center pb-14">
        <DyCarouselIsapres />
      </div>
      
      <h1 className="whitespace-pre-line px-1 text-2xl md:text-3xl lg:text-4xl text-center font-bold leading-hero text-gray-900 pb-5">
      Tipos de Planes de ISAPRES
    </h1>
      <VerticalFeatures/>

      <div
        id="contacto-ejecutiva-isapre"
        className="justify-center items-center"
      >
      <header className="grid-2 text-center">
        <h1
          color="gray"
          className="mb-5 mt-4 text-2xl md:text-4xl xl:px-32 text-primary-600 pt-12 md:pt-20"
        >
          Déjanos tus datos y te contactaremos para ayudarte a cotizar Planes de
          ISAPRE
        </h1>
      </header>
        <DyContactForm />
      </div>

      <div className="m-3">
        <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:justify-between sm:p-12 sm:text-left">
          <div className="text-2xl font-semibold text-center">
            <div className="text-gray-900">
              Somos agentes de venta de ISAPRES con experiencia
            </div>
            <div className="text-primary-500">TE AYUDAMOS</div>
          </div>
          <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0"></div>
        </div>
      </div>
    </div>
  );
}
