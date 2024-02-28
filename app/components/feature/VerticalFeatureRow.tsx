import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
};

export default function VerticalFeatureRow({
  title,
  description,
  image,
  reversed,
}: Props) {
  // Clases para controlar el orden basado en el tamaño de la pantalla
  const orderClass = reversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-wrap ${orderClass}`}>
      {/* Eliminamos el uso de !reversed y reversed para controlar el orden y lo reemplazamos por orderClass */}
      <div className="flex items-center w-full text-center sm:w-1/2 sm:px-6 max-w-md">
        <div className="w-full">
          <div>
            <h3 className="text-xl md:text-2xl  font-semibold text-gray-600">
              {title}
            </h3>
          </div>
          <div className="mt-6 text-md leading-6 ">{description}</div>
        </div>
      </div>
      <div className="w-full p-12 max-w-md md:p-6 sm:w-1/2">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
    </div>
  );
}
