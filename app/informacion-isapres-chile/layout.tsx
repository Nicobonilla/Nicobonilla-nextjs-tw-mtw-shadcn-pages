import { Banner } from '../templates/Banner';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export default function InfoLayout({children}: Props) {
  return (
    <>
    {children}
      <Banner />
    </>
  )
};



