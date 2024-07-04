
import styles from './style.module.scss';



//tsx full code for component slider transparent swiper(there should not be buttons,its swiper slider,in case where index != nodes.length last visible element should be opacity 0.5) using transofrm translateX


import React, { useState, useRef } from 'react';

interface SliderTransparentSwiperProps {
    nodes: JSX.Element[];
    currentIndex: number;
}

const SliderTransparentSwiper: React.FC<SliderTransparentSwiperProps> = ({
    nodes,
    currentIndex,
}) => {
    const lastIndex = nodes.length - 1;
    const isLastVisible = currentIndex !== lastIndex;
    const [startX, setStartX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const startX = event.touches[0].clientX;
        setStartX(startX);
        setIsDragging(true);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !sliderRef.current) return;
        const currentX = event.touches[0].clientX;
        const diffX = currentX - startX!;
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100 + diffX}px)`;
    };

    const handleTouchEnd = () => {
        if (!isDragging || !sliderRef.current) return;
        setIsDragging(false);
        setStartX(null);
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    return (
        <div
            className={styles.sliderTransparentSwiper}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
            {nodes.map((node, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                    style={{
                        opacity: isLastVisible && index === lastIndex ? 0.5 : 1,
                    }}
                >
                    {node}
                </div>
            ))}
        </div>
    );
};

export default SliderTransparentSwiper;
