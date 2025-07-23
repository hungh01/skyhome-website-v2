'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/about/banner/banner1.png',
    '/about/banner/banner2.jpg',
    '/about/banner/banner1.png',
    '/about/banner/banner2.jpg',
];
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
    return (
        <div className="my-slider w-auto h-auto pt-20 pb-0">
            <Slider
                {...settings}
            >
                {images.map((src, index) => (
                    <div key={index} className="w-10/12 h-185 relative">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className=" object-cover"
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