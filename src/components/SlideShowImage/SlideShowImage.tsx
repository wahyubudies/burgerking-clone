'use client';

import { FunctionComponent, useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";
import SliderShowJSON from "@/json/slideshow.json";
import { SliderType } from "@/type/slider.type";

interface SlideShowImageProps {
}

const laodDataSlideShow = () => new Promise((resolve, reject) => {
    return resolve(SliderShowJSON);
});

export const SlideShowImage: FunctionComponent<SlideShowImageProps> = () => {
    const [slider, setSlider] = useState<SliderType[]>([]);

    useEffect(() => {
        const getSlideShow = async () => {
            const reply = await laodDataSlideShow() as SliderType[];
            setSlider(reply);
        };

        getSlideShow();
    }, []);

    const renderSlider = () => slider.map(({ filename }, i) => (
        <SplideSlide key={i}>
            <Link href="/" >
                <Image src={`/img/sliders/${filename}`} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt="" priority={true} />
            </Link>
        </SplideSlide>
    ));

    return (
        <Splide options={{
            rewind: true,
            interval: 2000,
            autoplay: true
        }}>
            {renderSlider()}
        </Splide>
    );
};