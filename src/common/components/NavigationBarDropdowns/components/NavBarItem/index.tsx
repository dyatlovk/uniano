
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { NavItemType } from '../..';
import { useHover } from '@common/helpers/useHover';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useState } from 'react';


const NavBarItem = ({items,title}:NavItemType) => {
    const [show,setShow] = useState(false);
    return (
    <div onClick={() => {setShow(prev => !prev)}}  className={styles.navbar_item}>
        <Typography textLineHeight='1' variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
        <AppColor.chevronBottom fill='white'width={'12px'} height={'6px'} />

        <div className={styles.absolute_wrapper} style={{display: show ? 'block' : 'none'}}>
            <div className={styles.grid_wrapper}>
                {items.map(item =>
                    <div>
                        <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{item.title}</Typography>
                        <DynamicPadding desktop='20px' mobile='20px'/>
                       <div className={styles.gap_20}>
                            {item.links.map(item =>
                                <Typography color={AppColor.text} variant='body4'>{item}</Typography>    
                            )}
                       </div>
                    </div>    
                )}
            </div>
        </div>
    </div>    
    );
};

export default NavBarItem;