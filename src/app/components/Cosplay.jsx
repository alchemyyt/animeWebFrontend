import React from "react";
import Link from "next/link";
import { lastElements } from "../services/lastElements";

const Cosplay = ({ data }) => {
  const lastPosts = lastElements(4, data);
  return (
    <div>
      <Link href={"#"}>
        <h2 className="hover:text-amber-500 text-xl ">Cosplay y Arte</h2>
      </Link>
      <ul className="flex overflow-x-scroll">
        {lastPosts.map((element) => (
          <Link key={element.id} href={"#"}>
            <li
              className=" flex  min-w-60 m-2 border-2 border-amber-400 relative"
              key={element.id}
            >
              <img
                src={element.imagenes[0].url}
                alt="web"
                className="w-full transition-all duration-300 hover:brightness-50"
                cl
              />
              <p className="max-h-1/3 max-w-full absolute bottom-0 overflow-hidden text-xl font-bold text-center text-amber-500 m-1  hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105">
                {element.titulo}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Cosplay;
