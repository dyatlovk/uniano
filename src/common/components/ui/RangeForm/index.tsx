
import { useState, useRef } from 'react';
import DoubleRangeSlider from '../DoubleRangeSlider';
import DynamicPadding from '../DynamicPadding';
import MyButtonBlack from '../MyButton/variants/MyButtonBlack';
import styles from './style.module.scss';

const RangeForm = () => {

    const [limist, setLimits] = useState<{
        min: number
        max: number
    }>({ min: 0, max: 100 })

   const minValueRef = useRef(null);
    const maxValueRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <DoubleRangeSlider
                min={0}
                max={10000}
                onChange={(item) => {}}
            />
            <DynamicPadding desktop="15px" mobile="0px" />
            <div className={styles.justify_flex}>
                <input
                    type="number"
                    ref={minValueRef}
                    onPaste={() => {
                        return false
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="min"
                    className={styles.price_input}
                />
                <input
                    type="number"
                    ref={maxValueRef}
                    onPaste={() => {
                        return false
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="max"
                    className={styles.price_input}
                />
                <MyButtonBlack
                    textTransform="uppercase"
                    onClick={() => {
                        if(minValueRef.current.value >= 0 && maxValueRef.current.value <= 10000) {
                            setLimits({
                                min: minValueRef.current.value,
                                max: maxValueRef.current.value,
                            })
                        }
                    }}>
                    OK
                </MyButtonBlack>
            </div>
        </div>
    )
};

export default RangeForm;