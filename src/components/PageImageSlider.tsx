'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useViewport } from '@/contexts/ViewportContext';

const imagesFull = [
    '/homepage/banner/banner2.png',
    '/homepage/banner/banner1.png',
    '/homepage/banner/banner2.png',
    '/homepage/banner/banner1.png',
];

const imagesMobile = [
    '/homepage/mobilebanner/banner1.png',
    '/homepage/mobilebanner/banner2.png',
];

const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
};

export default function PageImageSlider() {
    const { width, height, isMobile } = useViewport();

    const images = isMobile ? imagesMobile : imagesFull;

    return (
        <div
            className="my-slider w-full relative"
            style={{ height: height, width: width }}
        >
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <div
                            className="relative w-full"
                            style={{ height: height, width: width }}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </Slider>

            <style jsx>{`
                .my-slider :global(.slick-list),
                .my-slider :global(.slick-track),
                .my-slider :global(.slick-slide),
                .my-slider :global(.slick-slide > div) {
                    height: 100% !important;
                }
                      .my-slider :global(.slick-dots) {
                    position: absolute !important;
                    bottom: 24px !important; /* adjust as needed */
                    left: 0;
                    width: 100%;
                    z-index: 10;
                    display: flex !important;
                    justify-content: center;
                    pointer-events: auto;
                }
            `}</style>
        </div>
    );
}
