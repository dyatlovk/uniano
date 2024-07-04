
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import AppColor from '@common/styles/variables-static';

type RadioButtonProps = {
    text?: string;
    activeSelection?: boolean;
    callback?: (item:number) => void;
    indexItem?: number;
}
const RadioButton = ({text,activeSelection,indexItem,callback}:RadioButtonProps) => {
    const [isSelected,setIsSelected] = useState(false);

    const [hovered,setHovered] = useState(false);

    const handleSwitch = () => {
        setIsSelected(prev => !prev);
        if(callback) {
            callback(indexItem);
        }
    }
    useEffect(() => {
        setIsSelected(activeSelection);
    }, [activeSelection])
    return (
      <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {handleSwitch()}} style={{cursor: 'pointer'}} className={styles.flex_item}>
            <div className={`${styles.select_box} ${isSelected ? styles.select_box_active : styles.select_box_disabled}`}></div>
            {text &&
            <div className={styles.text_item}><Typography color={isSelected || hovered ? AppColor.orange : AppColor.text} fontWeight={isSelected ? '500' : '400'} variant='body4'>{text}</Typography></div>
            }
      </div>
    );
};

export default RadioButton;