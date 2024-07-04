import { useCallback, useEffect, useRef, useState } from "react";
import styles from './style.module.scss';
import DynamicPadding from "../DynamicPadding";


type DoubleRangeSliderProps = {
    min: number;
    max: number;
    onChange: (item:{min:number,max:number}) => void;
}
const DoubleRangeSlider = ({ min, max, onChange }:DoubleRangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    useEffect(() => {
      setMaxVal(max);
      setMinVal(min);
    },[min,max])

    
    
    
    
    
    // Convert to percentage
    const getPercent = useCallback(
      (value) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );
  
    // Set width of the range to decrease from the left side
    useEffect(() => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current);
  
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }, [minVal, getPercent]);
  
    // Set width of the range to decrease from the right side
    useEffect(() => {
      const minPercent = getPercent(minValRef.current);
      const maxPercent = getPercent(maxVal);
  
      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }, [maxVal, getPercent]);
  
    // Get min and max values when their state changes
    useEffect(() => {
      onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);
  
    return (
     <div>
        <div className={styles.container}>
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 1);
              setMinVal(value);
              minValRef.current = value;
            }}
            className={`${styles.thumb} ${styles.thumb_left}`}
            style={{ zIndex: minVal > max - 100 && "5" }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 1);
              setMaxVal(value);
              maxValRef.current = value;
            }}
            className={`${styles.thumb} ${styles.thumb_right}`}
          />
    
          <div className={styles.slider}>
            <div className={styles.slider_track} />
            <div ref={range} className={styles.slider_range} />
          </div>
        </div>
        <DynamicPadding desktop="30px" mobile="30px" />
     </div>
    );
  };
  
  export default DoubleRangeSlider;