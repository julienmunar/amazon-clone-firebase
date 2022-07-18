import React, { Children } from "react";
import Image from "next/image";
const PromoContainer = () => {
  return (
    <div className=" -mt-20 sm:-mt-28  md-mt-52 lg:-mt-72 xl-mt-72  relative z-30  grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4   m-2 gap-5">
      <PromoElement
        title="Obtenez vos codes promo"
        image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg"
        link="en savoir plus"
      />
      <PromoElement
        title="Découvrez la robotique das nos centres"
        image="https://images-eu.ssl-images-amazon.com/images/G/08/FR_AFE/XCM_Manual_1348940_1776029_4001913_FR_fr_gw_pc_single_category_card_1x_fr_fr_x608_2X_fr_FR._SY304_CB644789416_.jpg"
        link="en savoir plus"
      />
      <PromoElement
        title="Prime Day, c'est les 12 et 13 juillet "
        image="https://images-eu.ssl-images-amazon.com/images/G/08/Events/2022/PD/xcm_banners_ev_pd22-desktop-single-category-card-2x-379x304-aapx9-l4fxiudznx-4_758x608_fr-fr._SY304_CB634649985_.jpg"
        link="en savoir plus"
      />
      <PromoElement
        title="Écoutez le livre qui a inspiré la série"
        image="https://images-eu.ssl-images-amazon.com/images/G/08/AudibleFR/FR_Desktop_CatCard_lowres_Apr._SY304_CB625707700_.jpg"
        link="en savoir plus"
      />
      <PromoElement title="Accessoires Echo " link="en savoir plus">
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="	https://m.media-amazon.com/images/I/61pjrxGyK3S._AC_SY450_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="	https://m.media-amazon.com/images/I/41k8O1MfmOS._AC_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="https://m.media-amazon.com/images/I/61GHjOxgI1S._AC_SL1500_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="https://m.media-amazon.com/images/I/81oAfxMzgNL._AC_SX679_.jpg"
          />
        </div>
      </PromoElement>
      <PromoElement
        title="Écoutez le livre qui a inspiré la série"
        image="https://images-eu.ssl-images-amazon.com/images/G/08/AudibleFR/FR_Desktop_CatCard_lowres_Apr._SY304_CB625707700_.jpg"
        link="en savoir plus"
      />
      <PromoElement
        title="Écoutez le livre qui a inspiré la série"
        image="https://images-eu.ssl-images-amazon.com/images/G/08/AudibleFR/FR_Desktop_CatCard_lowres_Apr._SY304_CB625707700_.jpg"
        link="en savoir plus"
      />

      <PromoElement title="Accessoires Echo " link="en savoir plus">
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="	https://m.media-amazon.com/images/I/61pjrxGyK3S._AC_SY450_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="	https://m.media-amazon.com/images/I/41k8O1MfmOS._AC_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="https://m.media-amazon.com/images/I/61GHjOxgI1S._AC_SL1500_.jpg"
          />
        </div>
        <div className="bg-[#F2FAFB] p-2">
          <img
            className=" object-contain"
            src="https://m.media-amazon.com/images/I/81oAfxMzgNL._AC_SX679_.jpg"
          />
        </div>
      </PromoElement>
    </div>
  );
};

export default PromoContainer;

const PromoElement = (props) => {
  return (
    <div className="bg-white p-2 flex  flex-col items-center">
      <h2 className=" font-bold text-[21px] pb-2">{props.title}</h2>
      {props.image && (
        <img
          src={props.image}
          alt=""
          width={315}
          height={275}
          className=" object-contain pb-3"
        />
      )}
      <div className="grid grid-cols-2 grid-flow-row p-2 gap-2 mb-3">
        {props.children}
      </div>

      <p className="text-sm text-[#4A9AA8] cursor-pointer">{props.link}</p>
    </div>
  );
};
