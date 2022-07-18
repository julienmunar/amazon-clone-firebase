import React from "react";


const cart = () => {

  return (
    <div className="flex-grow-0 p-3 sticky top-0 ">
      {/* Haut */}
      <div className=" border-b-2 pb-2 pt-2 flex flex-col items-center ">
        <p className="text-xs pb-2">
          Sous-total: <span className="text-[#b12604] font-bold">99,00 €</span>{" "}
        </p>
        <button className=" bg-yellow-400 px-3 py-1  text-xs  border border-gray-400 w-full hover:opacity-80 cursor-pointer">
          Passer au paiement
        </button>
        <div className="pt-2">
          <p className="text-xs whitespace-nowrap">
            Cette commande contient un
            <br />
            cadeau
          </p>
        </div>
      </div>
    </div>
  );
};

export default cart;
