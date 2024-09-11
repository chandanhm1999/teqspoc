"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// IMAGES DATA FOR CAROUSEL
const data = [
    {
        imgSrc: "/assets/carousel/airbnb.svg"
    },
    {
        imgSrc: "/assets/carousel/fedex.svg"
    },
    {
        imgSrc: "/assets/carousel/google.svg"
    },
    {
        imgSrc: "/assets/carousel/hubspot.svg"
    },
    {
        imgSrc: "/assets/carousel/microsoft.svg"
    },
    {
        imgSrc: "/assets/carousel/walmart.svg"
    },
    {
        imgSrc: "/assets/carousel/airbnb.svg"
    },
    {
        imgSrc: "/assets/carousel/fedex.svg"
    }
];

// CAROUSEL SETTINGS
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1024, min: 700 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 700, min: 500 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
    },
};

const Abc = () => {
    return (
        <div className='text-start my-4'>
            <div className="mx-auto px-2 sm:px-6 lg:px-4">
                <h2 className="text-xl font-bold text-gray-800 lg:text-xl dark:text-white">Trusted by companies of all sizes</h2>
                <div className="py-14">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        customTransition="all 2s linear"
                        arrows={false}
                        showDots={false}
                    >
                        {data.map((item, i) => (
                            <div key={i}>
                                <Image src={item.imgSrc} alt={item.imgSrc} width={116} height={36} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Abc;
