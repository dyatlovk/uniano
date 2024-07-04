

import { useState } from 'react';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import InputCommon from '../InputCommon';
import AnimateHeight from '@common/components/AnimateHeight/index';

type InputBorderTextDropdownProps = {
    borderText: string;
    initText: string;
    labelIcon: any;
    isRequired?: boolean;
    dropdownVariants?: string[];
    callback?: (item:string) => void;
    searchField?: boolean;
    dropdownVariantsNodes?: {
        icon: React.ReactNode;
        text: string;
    }[]
}
const InputBorderTextDropdown = ({searchField,borderText,initText='',dropdownVariantsNodes,dropdownVariants,labelIcon,isRequired,callback}:InputBorderTextDropdownProps) => {
    const [currenText,setCurrentText] = useState(initText)
    const [showDropdown,setShowDropdown] = useState(false);

    function handleChange(item:string) {
        if(callback != null) {
            callback(item)
        }
        setCurrentText(item);
    }

    const [activeDropdownNode, setActiveDropdownNode] = useState<{
        icon: React.ReactNode;
        text: string;
    }>(dropdownVariantsNodes ? {
        icon: <></>,
        text: 'Select country'
    } : null);

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };
    return (
       <div style={{position: 'relative'}}>
            <div onClick={() => {setShowDropdown(prev => !prev)}} style={{...borderStyles,transition: '0.2s'}} className={styles.border_input}>
                <label htmlFor="example">
                    {borderText}{' '}
                    {isRequired && (
                        <span className={styles.red_text}>*</span>
                    )}{' '}
                </label>
                <div className={styles.flex}>
                    {!dropdownVariantsNodes && <Typography variant="body4">{currenText}</Typography>}
                    {dropdownVariantsNodes && <div className='gap_10'>
                        {activeDropdownNode.icon}
                        <Typography variant="body4">{activeDropdownNode.text}</Typography>
                    </div>
                    }
                    {
                    showDropdown
                    ? <AppColor.chevronTop
                        fill={AppColor.transparentBlack}
                        width={'12px'} height={'6px'}
                    />
                    : <AppColor.chevronBottom
                        fill={AppColor.transparentBlack}
                        width={'12px'} height={'6px'}
                    />}
                </div>
                <div className={styles.label_icon}>{labelIcon}</div>
            </div>
            <div className={styles.variants_wrapper} style={{display: 'grid'}}>
                <AnimateHeight show={showDropdown}>
                    {searchField && 
                   <div className={styles.border_top_bottom}>
                        <InputCommon icon={<AppColor.search />} callback={() => {}} placeholder='Search' 
                        width='100%' padding='15px 20px 15px 50px' borderRadius='0px'
                        boxShadowNone={true}
                        />
                   </div>
                    }
                    {dropdownVariantsNodes && dropdownVariantsNodes.map(item =>
                        <div className={`${styles.node_select} cursor`} onClick={() => {setActiveDropdownNode(item)
                            if(callback) {
                                callback(item.text);
                            }
                            setShowDropdown(false);
                        }}>
                            <div className='gap_10'>
                                {item.icon}
                                <Typography variant="body4">{item.text}</Typography>
                            </div>
                        </div>
                        )}
                    {dropdownVariants && dropdownVariants.map(item =>
                       <div
                       onClick={() => {handleChange(item);setShowDropdown(false);}}
                       className={`${styles.variant_item} cursor`}> <Typography variant='body4'>{item}</Typography>    </div>
                    )}
                </AnimateHeight>
            </div>
       </div>
    )
};


export default InputBorderTextDropdown;