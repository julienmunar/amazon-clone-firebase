import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Body = ({ result }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-xs m-auto md:max-w-3xl xl:max-w-6xl">
      {/* LEFT */}
      <div className="flex flex-col space-y-2 hidden md:block">
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
      </div>
      {/* Central */}
      <div className="flex flex-col md:flex-row ">
        {/* Image */}
        <div className="flex  flex-col items-center pl-2 pr-6">
          <Image
            src={result.image}
            width={600}
            height={400}
            objectFit="contain"
          />
          <p className=" pt-24 text-sm hidden md:block">
            Passer la souris sur l'image pour zoomer
          </p>
        </div>
        {/* Titre/Desc/PRIX etc.. */}
        <div className=" max-w-screen-sm text-justify">
          {/* Part 1 */}
          <div className=" border-b-2 pb-2">
            <h1 className="text-xl">{result.title}</h1>
            <div className="flex items-center">
              <ReactStars
                count={5}
                value={result.rating.rate}
                size={14}
                half={true}
                activeColor="#E28839"
                edit={false}
              />
              <ArrowDropDownIcon className=" text-gray-400" />
              <p className="pl-4 text-[#15768a] text-sm">
                {result.rating.count} évaluations
              </p>
            </div>
            <p className="text-[#15768a] text-sm ">
              dans <span className="capitalize">{result.category}</span>
            </p>
          </div>
          {/* Part 2 */}
          <div className="flex">
            <p className="text-sm flex text-[#565959] pr-4">
              Prix:{}
              <span className=" pl-2 text-lg font-medium text-[#B12704]">
                {result.price}€
              </span>
            </p>
            <Image
              className=" w-12"
              src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
              alt="test"
              width={40}
              height={40}
            />
            <p>
              <span className=" text-sm pl-4">essayez avant d'acheter</span>
            </p>
          </div>
          <div>
            <p className=" font-bold pb-2 text-sm">Taille:</p>
            <select className=" w-28 border-solid border-[#DDDDD] border p-1 rounded-md ">
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div>
            <p className=" font-bold py-2 text-sm">Couleur:</p>
            <div className="grid grid-cols-4 gap-2 w-60">
            <AdditionalPicture image={result.image} />
            <AdditionalPicture image={result.image} />
            <AdditionalPicture image={result.image} />
            <AdditionalPicture image={result.image} />
            </div>
          </div>
          <p className=" pt-4 text-sm">{result.description}</p>
        </div>
      </div>
      {/* Right */}
      <div className=" p-4">
        <p className=" py-1 px-8 rounded-full text-xs bg-[#fed70f] text-center">
          Ajouter au panier
        </p>
      </div>
    </div>
  );
};

export default Body;

const AdditionalPicture = ({ image }) => {
  return (
    <div className="border border-gray-300 border-2 hover:border-[#ba855c] flex justify-center items-center p-1">
      <Image src={image} width={40} height={30} objectFit="contain" />
    </div>
  );
};
