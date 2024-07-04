import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';

type SliderByRefProps = {
  nodes: React.ReactNode[];
  endToFrontIndex?: number;
  buttons?: boolean;
};

const SliderByRef = ({ nodes,buttons=true }: SliderByRefProps) => {
  const gap =  10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTransform, setTotalTransform] = useState(0);
  const currentItemRef = useRef<HTMLDivElement | null>(null);
  const previousItemRef = useRef<HTMLDivElement | null>(null);
  const totalRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  function handleMoveOn() {
    
    if (currentItemRef.current && currentItemRef.current.offsetWidth) {
      if(currentIndex < nodes.length - 1) {
        const currentItemWidth = currentItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev + currentItemWidth + gap);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setTotalTransform(0);
        setCurrentIndex(0);
      }
    }
  }
  function handleMoveUndo() {
    
    if (previousItemRef.current && previousItemRef.current.offsetWidth) {
      console.log('before1 2 3');
      if(currentIndex > 0) {
        const previousWidth = previousItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev - previousWidth - gap);
        setCurrentIndex((prev) => prev - 1);
        console.log('before1');
      } else {
        const totalTransform = totalRef.current.offsetWidth;
        setTotalTransform(totalTransform);
        setCurrentIndex(nodes.length - 1);
        console.log('before');
        
      }
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
        handleMoveOn();
    } else if (deltaX < 0) {
        // Swiping right
        handleMoveUndo();
    }

    setIsDragging(false);
}

function handleDragEnd() {
    setIsDragging(false);
}

function getClientX(e: React.MouseEvent | React.TouchEvent) {
    return 'touches' in e ? e.touches[0].clientX : e.clientX;
}


  return (
    <div className={styles.relative}>
        <div
         onMouseDown={handleDragStart}
         onTouchStart={handleDragStart}
         onMouseMove={handleDragMove}
         onTouchMove={handleDragMove}
         onMouseUp={handleDragEnd}
         onTouchEnd={handleDragEnd}
        
        className={styles.wrapper}>
          <div ref={totalRef} className={styles.flex_wrapper} style={{ transform: `translateX(-${totalTransform}px)`, gap: gap }}>
            {nodes.map((node, index) => (
              <div
                 style={{userSelect: 'none'}}
                key={index}
                ref={index === currentIndex ? currentItemRef : index === currentIndex-1 ? previousItemRef : null}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
       {buttons &&
       <>
          <div onClick={handleMoveUndo} className={styles.left}>
              <AppColor.chevronLeft fill="white" width={'30px'} height={'15px'} />
            </div>
          <div onClick={handleMoveOn} className={styles.right}>
              <AppColor.chevronRight fill="white" width={'30px'} height={'15px'} />
          </div>
       </>
        }
    </div>
  );
};

export default SliderByRef;
