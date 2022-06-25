import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
const ListArticle = ({ data }) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4   m-2 gap-5 ">
      {data.map((product) => {
        return (
          <div key={product.id}>
            <Product
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              description={product.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListArticle;

const Product = ({ title, price, image, description, rating }) => {
  return (
    <div className="gap-3 p-4 bg-white">
      <div className="pb-4 h-52 max-w-xs grid place-content-center bg-gray-50">
        <Image src={image} width={150} height={200} className="object-contain" />
      </div>

      <p className="text-[#4A9AA8] text-xl cursor-pointer hover:underline">{title}</p>
      <p className="text-sm truncate">{description}</p>
      <ReactStars
        count={5}
        value={rating.rate}
        size={14}
        half={true}
        activeColor="#E28839"
        edit={false}
      />
      <p className="text-2xl font-bold relative">
        {price} <span className="absolute text-sm">euros</span>
      </p>
      <button className=" bg-yellow-400 p-2 w-full hover:opacity-80 cursor-pointer">
        Add to Card
      </button>
    </div>
  );
};
