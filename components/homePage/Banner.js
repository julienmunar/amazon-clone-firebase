import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className='relative '>

            {/* GRADIENT */}
            <div className=' bg-gradient-to-t from-[#eaeded] to-transparent  w-full  h-36 z-20 absolute bottom-0' />

            {/* CAROUSEL */}
            <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false} interval={5000} showStatus={false} showIndicators={false} >
                <div>
                    <img src="https://m.media-amazon.com/images/I/71wDTi4ZyBL._SX3000_.jpg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/710HZBfXDmL._SX3000_.jpg" />
                </div>
            </Carousel>

          

        </div>


    )
}

export default Banner

