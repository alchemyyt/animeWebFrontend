import React from "react";
import { getSpecificData } from "../../services/getData";
export default async function Page({ params }) {
  const { id } = params;
  const cosplay = await getSpecificData("cosplay-y-arte", id);
  const htmlObject = cosplay.Html;
  return (
    <main className="flex flex-col aling-center text-center min-h-screen lg:w-3/4 lg:mx-auto bg-white lg:px-6 overflow-hidden">
      <h1 className="font-bold text-xl m-2">{cosplay.titulo}</h1>
      <p className="mx-2">{cosplay.descripcion}</p>
      {cosplay.imagenes.map((imagen) => (
        <img
          key={cosplay.id}
          src={imagen.url}
          alt={cosplay.titulo}
          title={cosplay.titulo}
          className="transition-all duration-300 mx-auto inline-block w-11/12 rounded-md m-6  lg:w-4/6 border-2 border-amber-400"
        />
      ))}
      <div>
        <p className="mx-6">{cosplay.noticia}</p>
      </div>
      {cosplay.Html !== "" && (
        <section
          className=" flex p-6 overflow-hidden flex-col items-center"
          dangerouslySetInnerHTML={{ __html: htmlObject }}
        />
      )}
      <p className="text-right m-2">{cosplay.fecha}</p>
    </main>
  );
}
