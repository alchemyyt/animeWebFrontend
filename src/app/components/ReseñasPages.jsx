import React from "react";
import Link from "next/link";
import { getData } from "../services/getData";
const ReseñasPages = async () => {
  const news = await getData("resenas/");
  return (
    <section className=' lg:border-2 lg:border-amber-400'>
      <Link href='/resenas'><h2 className="text-2xl font-bold text-center m-1 hover:text-amber-500">Reseñas</h2></Link>
      <ul className="flex flex-wrap justify-center">
        {news.map((element) => (
          <Link key={element.id} href={`resenas/${element.id}`}>
            <li
              className=" flex  min-w-56 max-w-56 min-h-80 max-h-80 m-2 border-2 border-amber-400 relative"
              key={element.id}
            >
              <img
                src={element.imagen}
                alt="web"
                className="w-full transition-all duration-300 hover:brightness-50"
                cl
              />
              <p className="max-h-36 max-w-full absolute bottom-0 overflow-hidden text-xl font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 overflow-hidden py-6">
                {element.titulo}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default ReseñasPages;
