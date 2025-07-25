'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useViewport } from '@/contexts/ViewportContext';

const banner = [
    '/homepage/banner/banner1.png',
    '/homepage/banner/banner2.jpg',
    '/homepage/banner/banner1.png',
    '/homepage/banner/banner2.jpg',
];

const mobileBanner = [
    '/homepage/mobilebanner/banner-mobile-bt.png',
    '/homepage/mobilebanner/banner-mobile-tvs.png',
    '/homepage/mobilebanner/banner-mobile-vstg.png',
    '/homepage/mobilebanner/banner-mobile-tvs.png'
]

const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
};

export default function PageImageSlider() {
    const [images, setImages] = useState(banner);

    const { isMobile } = useViewport();

    // Update images when isMobile changes
    useEffect(() => {
        if (isMobile) {
            setImages(mobileBanner);
        } else {
            setImages(banner);
        }
    }, [isMobile]);

    return (
        <div className="my-slider w-auto h-auto pb-0">
            <Slider
                {...settings}
            >
                {images.map((src, index) => (
                    <div key={index} className={`w-auto ${isMobile ? 'h-185' : 'h-185'} relative`}>
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority

                        />
                    </div>
                ))}
            </Slider>
            <style>{`
                .my-slider .slick-dots {
                    bottom: 20px !important;
                }
            `}</style>
        </div>
    );
}