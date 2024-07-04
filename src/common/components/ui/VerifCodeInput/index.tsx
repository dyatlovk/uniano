import React, { useRef, useEffect, useState } from 'react';
import styles from './style.module.scss';


type VerificationCodeInputProps = {
    length: number;
    callback: (item:string) => void;
}
const VerificationCodeInput = ({ length,callback }:VerificationCodeInputProps) => {
    const inputRefs = Array.from({ length }, () => useRef<HTMLInputElement>(null));
    const [activeIndex, setActiveIndex] = useState(0);
    const [code,setCode] = useState('');

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleInputChange = (index, value:string,event) => {
    if(!isNaN(Number(value))) {
        if (value && index < length - 1) {
        setActiveIndex(index + 1);
        inputRefs[index + 1].current.focus();
        setCode(prev => prev + value)
        } else {
            event.preventDefault();
            setCode(prev => prev + value);
        }
    } else {
        value = ''
    }
  };
  useEffect(() => {
    if(code.length === length) {
        
        callback(code);
    }
  },[code])

  

  return (
    <div className={styles.boxes_grid}>
      {Array.from({ length }, (_, index) => (
        <input
          className={`${index == activeIndex ? styles.input_box : activeIndex > index ? styles.input_box_filled : styles.input_box_empty}`}
          key={index}
          type="number"
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => handleInputChange(index, e.target.value,e)}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
