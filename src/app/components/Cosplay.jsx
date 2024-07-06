import React from "react";
import { lastElements } from "../services/lastElements";
const Cosplay = ({ data }) => {
  const lastPosts = lastElements(4, data);
  return (
    <div>
      <h1>cosplay</h1>
      <ul>
        {lastPosts.map((element) => (
          <li className="border border-black bg-ambar-500" key={element.id}>
            {element.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cosplay;
