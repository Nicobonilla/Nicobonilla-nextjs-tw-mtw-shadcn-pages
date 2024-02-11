'use server';
import Link from 'next/link';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { ContactForm } from './ContactForm';
import { CarouselHero } from '../components/carousel/CarouselHero';
import { CarouselIsapres } from '../components/carousel/CarouselIsapres';


export default async function Hero () {
  return(
  <div>
    <CarouselHero />
      <HeroOneButton
        title={
          <>
            {'Aprovecha al máximo tu 7%\n'}
            <span className="text-primary-500">Ejecutivas certificadas</span>
          </>
        }
        description="La forma más rápida y convenienta para contratar Planes de Salud Previsional."
        button={
          <Link href="/#contacto-ejecutiva-isapre">
            <Button xl>Quiero cotizar</Button>
          </Link>
        }
      />

      <div className="flex justify-center items-center" >
        <CarouselIsapres />
      </div>

      <div id='contacto-ejecutiva-isapre' className="flex justify-center items-center" >
        <ContactForm />
      </div>
  </div>
)};