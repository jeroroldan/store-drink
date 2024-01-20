"use client";

import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export const ChatWsp = () => {
  return (
    <div className="relative">
      <button
        className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
            fixed bottom-0  right-5 rounded-lg
            mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
        onClick={() =>
          window.open(
            `https://wa.me/5493416142211?text=Hola en que puedo ayudarte`,
            "_blank"
          )
        }
      >
        <div className="p-3 rounded-full border-4 border-white bg-green-600">
          <IoLogoWhatsapp size={30} />
        </div>
      </button>
    </div>
  );
};
