import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export default function VerticalFeatureRowImage({ title, image }: Props) {
  return (
    <>
      <div className="w-full p-12 max-w-md md:p-6 sm:w-1/2">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
    </>
  );
}
