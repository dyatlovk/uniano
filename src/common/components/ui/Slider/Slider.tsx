import { useRef,useEffect,useState } from 'react'
import styles from './style.module.scss'
import leftChevron from '@assets/svg/chevron-left.svg';
import rightChevron from '@assets/svg/chevron-right.svg';
import AppColor from '@common/styles/variables-static';

interface SliderProps {
    children: React.ReactNode;
    elementsCount: number;
    maxWidth?: number;
    gap: number;
    itemWidth: number;
    paddingTop?: string;
    paddingBottom?: string;
    swiper?: boolean;
    showDots?: boolean;
    maxShowCount?: number
    padding?: string;
    detlaPosition?: string;
    buttonSize?: string;
    buttonRight?: string;
    buttonLeft?: string;
    removeButtons?: boolean
}
const Slider = ({children,removeButtons=false,buttonSize,buttonLeft,buttonRight,detlaPosition,padding,maxShowCount,showDots,elementsCount,gap,itemWidth,paddingTop,paddingBottom,swiper}:SliderProps) => {
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    function moveOn() {
        if (currentIndex < elementsCount-1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    function moveBack() {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex(elementsCount-1);
        }
    }

    function handleDragStart(e: React.MouseEvent | React.TouchEvent) {
        setStartX(getClientX(e));
        setIsDragging(true);
    }

    function handleDragMove(e: React.MouseEvent | React.TouchEvent) {
        if (!isDragging) return;

        const currentX = getClientX(e);
        const deltaX = startX - currentX;

        if (deltaX > 0) {
            // Swiping left
            moveOn();
        } else if (deltaX < 0) {
            // Swiping right
            moveBack();
        }

        setIsDragging(false);
    }

    function handleDragEnd() {
        setIsDragging(false);
    }

    function getClientX(e: React.MouseEvent | React.TouchEvent) {
        return 'touches' in e ? e.touches[0].clientX : e.clientX;
    }

    const style = swiper ? styles.remove_on_mobile : styles.empty
    const styleDots = swiper ? styles.remove_on_desktop : styles.empty


    const dots = Array.from({ length: elementsCount}, (_, index) => index);
    const gapsDisplay = maxShowCount - 1;

    
    return (
       <div style={maxShowCount ? {maxWidth: `${maxShowCount*itemWidth+gap*gapsDisplay+100}px`,width: '100%',padding: padding} : {padding: padding}} className={styles.overflow_shell}>
            <div className={styles.shell}>
                <div
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    onMouseMove={handleDragMove}
                    onTouchMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onTouchEnd={handleDragEnd}
                    style={{ paddingTop, paddingBottom }}
                    className={styles.sliderOverflow}
                >
                    <div
                        style={{ gap, transform: `translateX(-${currentIndex * (itemWidth) + currentIndex * gap}px)` }}
                        className={styles.slider}
                    >
                        {children}
                    </div>
                </div>
               {!removeButtons &&  <span style={{width: buttonSize,height: buttonSize,right: `calc(100% + ${buttonLeft})` ?? `calc(100% + 50px)`}} className={styles.left + ' ' + style}>
                    <span style={{width: buttonSize,height: buttonSize}} onClick={moveBack} className={styles.chevron}>
                        <AppColor.chevronLeft fill="white" width={'fit-content'} />
                    </span>
                </span>}
                {!removeButtons && <span style={{width: buttonSize,height: buttonSize,left: `calc(100% + ${buttonRight})` ?? `calc(100% - 50px)`}} className={styles.right + ' ' + style}>
                    <span style={{width: buttonSize,height: buttonSize}} onClick={moveOn} className={styles.chevron}>
                        <AppColor.chevronRight fill="white" width={'fit-content'} />
                    </span>
                </span>}
                {showDots && <div className={`${styles.dots} ${styleDots}`}>
                    {dots.map((dotIndex) => (
                        <span
                            key={dotIndex}
                            className={dotIndex === currentIndex ? styles.activeDot : styles.dot}
                            onClick={() => setCurrentIndex(dotIndex)}
                        ></span>
                    ))}
                </div>}
            </div>
       </div>
    );
};
export default Slider;