// components/ImageSlider.tsx
'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/introduce/banner-phone.png',
    '/introduce/banner-phone.png',
    '/introduce/banner-phone.png',
    '/introduce/banner-phone.png',
];

const ImageSlider = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="md:w-55 w-42 max-w-xl md:pt-38 pt-30">
            <Slider
                {...settings}
                className="[&_.slick-slide>div]:mx-2" // Thêm khoảng cách ngang giữa các slide
            >
                {images.map((src, index) => (
                    <div key={index} className="w-42 h-64 md:h-84 relative">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
