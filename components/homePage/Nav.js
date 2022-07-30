import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image'

const Nav = () => {
    return (
        <div className='flex bg-amazon-nav-bg text-white py-1 pl-5 pr-2 overflow-x-scroll scrollbar-hide justify-start max-w-md md:max-w-none  '>
 
            <MenuElement BeforeIcon={MenuIcon} title="Toutes" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Ventes Flash" AfterIcon=""  />
            <MenuElement BeforeIcon="" title="Meilleures Ventes" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Amazons Basics" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Musique" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Dernière Nouveauté" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Service Client" AfterIcon="" />
            <MenuElement BeforeIcon="" title="Prime" AfterIcon={ArrowDropDownIcon} />
            <MenuElement BeforeIcon="" title="Ebooks Kindle" AfterIcon="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/SWM/PV_FR_SWM_400x39_FT_PV._CB427581097_.jpg" width={300} height={30} alt="" className=' object-contain'/>
        </div>
    )
}

export default Nav


const MenuElement = ({ title, BeforeIcon, AfterIcon }) => {

    return (
        <div className='flex border border-amazon-nav-bg hover:border hover:border-white px-1 rounded-sm whitespace-nowrap items-center mr-2'>
            {BeforeIcon && <BeforeIcon className="text-3xl"/>}
            <p className=" text-sm">{title}</p>
            {AfterIcon && <AfterIcon />}
        </div>
    )

}