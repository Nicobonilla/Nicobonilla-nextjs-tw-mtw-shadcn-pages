import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section add="py-3 md:py-5 lg:py-10" >
    <CTABanner
      title="Somos agentes de venta de ISAPRES con experiencia"
      subtitle="Te podemos ayudar"
      button={
        <Link href="/#contacto-ejecutiva-isapre">
          <Button banner>QUIERO COTIZAR</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
