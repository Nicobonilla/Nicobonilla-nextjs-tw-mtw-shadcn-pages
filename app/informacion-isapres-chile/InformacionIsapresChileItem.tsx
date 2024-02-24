import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type IInfoIsapres = {
  title: string;
  description: string;
  idNoticia: string;
  urlImg: string;
};

const InformacionIsapresChileItem: FC<IInfoIsapres> = ({
  title,
  description,
  idNoticia,
  urlImg,
}) => {
  return (
    <Link href={`/informacion-isapres-chile/${idNoticia}`}>
      <div className="p-4 max-w-96">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="max-h-48 w-full object-cover object-center"
            height={100}
            width={200}
            src={urlImg}
            alt={urlImg}
          />
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
            <h2 className="text-base font-medium text-indigo-300 mb-1">
              Febrero 29, 2023
            </h2>
            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">
              {" "}
              {description.substring(0, 200) + "..."}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { InformacionIsapresChileItem };
