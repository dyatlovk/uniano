

import { useState } from 'react';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import AnimateHeight from '@common/components/AnimateHeight/index';

type InputDropdownProps = {
    initText: string;
    labelIcon: any;
    isRequired?: boolean;
    dropdownVariants: string[];
    callback?: (item:string) => void;
    marginLeft?: boolean;
    iconHeight?: string;
    padding?: string;
    iconBeforeVariant?: React.ReactNode;
}
const InputDropdown = ({padding,iconHeight,iconBeforeVariant,marginLeft,initText='',dropdownVariants,labelIcon,isRequired,callback}:InputDropdownProps) => {
    const [currenText,setCurrentText] = useState(initText)
    const [showDropdown,setShowDropdown] = useState(false);

    function handleChange(item:string) {
        if(callback != null) {
            callback(item)
        }
        setCurrentText(item);
    }

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };


    return (
        <div style={{padding: padding,...borderStyles}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.border_input}>
            <div className={styles.flex}>
                <Typography textLineHeight='1' color={currenText == initText ? AppColor.transparentBlack : AppColor.text} variant="body4">{currenText}</Typography>
                <div style={{marginLeft: marginLeft ? 'auto' : '0px'}}>
                    {
                    showDropdown
                    ? <AppColor.chevronTop
                        fill={AppColor.transparentBlack}
                        height={iconHeight ?? '6px'}
                    />
                    : <AppColor.chevronBottom
                        fill={AppColor.transparentBlack}
                        height={iconHeight ?? '6px'}
                    />}
                </div>
            </div>
            <div className={styles.variants_wrapper} style={!showDropdown ? { boxShadow: 'none', WebkitBoxShadow: 'none', MozBoxShadow: 'none' } : {}}>
                <AnimateHeight show={showDropdown}>
                    <div className={styles.variants_abs_shell}>
                        {dropdownVariants.map(item =>
                           <div
                           onClick={() => {handleChange(item)}}
                           className={styles.variant_item}> <Typography variant='body4'>{item}</Typography>    </div>
                        )}
                    </div>
                </AnimateHeight>
            </div>
            <div className={styles.label_icon}>{labelIcon}</div>
            <div className={styles.icon_before}>{iconBeforeVariant}</div>
        </div>
    )
};


export default InputDropdown;