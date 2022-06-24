import React, { Children } from 'react'
import Image from 'next/image'
const PromoContainer = () => {
    return (
        <div className=' xl:-mt-52 relative z-30  grid grid-flow-row  grid-cols-2 md:grid-cols-4 m-2'>
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
                image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg"
                link="en savoir plus"
            />
            <PromoElement
                title="Prime Day, c'est les 12 et 13 juillet "
                image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg"
                link="en savoir plus"
            />

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
                image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg"
                link="en savoir plus"
            />
            <PromoElement title="Prime Day, c'est les 12 et 13 juillet " link="en savoir plus" >
               <img className=' object-contain' src='https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg'/>
               <img   className=' object-contain' src='https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg'/>
               <img   className=' object-contain' src='https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg'/>
               <img  className=' object-contain' src='https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg'/>
            </PromoElement>

        </div>
    )
}

export default PromoContainer

const PromoElement = (props) => {
    return (
        <div className='bg-white p-2 flex  flex-col items-center m-2' >
            <h2 className=' font-bold text-[21px] pb-2'>{props.title}</h2>
           {props.image &&  <img src={props.image} alt="" width={315} height={275} objectFit="contain" className=' object-contain pb-3' />} 
               <div className='grid grid-cols-2 grid-flow-row'>
               {props.children}
               </div>
           
            


            <p className='text-sm text-[#4A9AA8] cursor-pointer'>{props.link}</p>
        </div>

    )
}