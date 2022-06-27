import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";

const Body = ({ result }) => {
  return (
    <div className="flex">
        {/* LEFT */}
      <div className="flex flex-col space-y-2">
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
        <AdditionalPicture image={result.image} />
      </div>
{/* Central */}
<div className="flex">
    {/* Image */}
    <div className="flex  flex-col items-center">
        <Image src={result.image} width={500} height={700} objectFit="contain"/>
        <p className=" pt-24 text-sm" >Passer la souris sur l'image pour zoomer</p>
    </div>
    <div className=" max-w-screen-sm text-justify">
        <h1>{result.title}</h1>
        <ReactStars
        count={5}
        value={result.rating.rate}
        size={14}
        half={true}
        activeColor="#E28839"
        edit={false}
      />

      <p>Prime</p>

      <p>{result.description}</p>
    </div>
</div>
      <div>

      </div>
    </div>
  );
};

export default Body;

const AdditionalPicture = ({ image }) => {
  return (
    <div className='border border-gray-300 border-2 hover:border-[#ba855c] flex justify-center items-center p-1'>
      <Image src={image} width={40} height={30} objectFit="contain" />
    </div>
  );
};
