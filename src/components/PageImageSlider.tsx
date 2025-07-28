'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useViewport } from '@/contexts/ViewportContext';

const images = [
    '/homepage/banner/banner1.png',
    '/homepage/banner/banner2.jpg',
    '/homepage/banner/banner1.png',
    '/homepage/banner/banner2.jpg',
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
    const { width } = useViewport();
    const sliderHeight = width ? width / 1.75 : 185;

    return (
        <div
            className="my-slider w-full relative"
            style={{ height: sliderHeight }}
        >
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <div
                            className="relative w-full"
                            style={{ height: sliderHeight }}
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
