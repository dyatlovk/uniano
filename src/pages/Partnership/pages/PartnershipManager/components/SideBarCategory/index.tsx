
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import { useState } from 'react';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';

type SideBarCategoryProps = {
    title: string;
    dropItems: {
        text: string;
        icon: React.ReactNode;
        count: number;
    }[]
}
const SideBarCategory = ({dropItems,title}:SideBarCategoryProps) => {
    const [showDropdown,setShowDropdown] = useState(true);
    const [countShow,setCountShow] = useState(4);
    return (
      <div className={styles.wrapper}>
           <div style={{cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.top_part}>
               <Typography variant='body3' fontWeight='500'>{title}</Typography>
               {
                showDropdown
                ? <AppColor.chevronTop fill={AppColor.text} width={'20px'} height={'10px'} />
                : <AppColor.chevronBottom fill={AppColor.text} width={'20px'} height={'10px'} />
               }
           </div>

           <div className={styles.wrapper_scroll} style={{display: showDropdown ? 'block' : 'none',marginTop: '30px',maxHeight: `${(35*countShow+30)}px`,}}>
             
               <div style={{paddingBottom: '10px'}} className={styles.dropdown_wrapper}>
                    {dropItems.map(item =>
                        <div className={styles.flex_center}>
                            <MyCheckbox
                                height='20px'
                                width='20px'
                            />
                            {item.icon}
                            <Typography variant='body4'>{item.text}</Typography>
                            <div className={styles.margin}><Typography variant='body4' color={AppColor.transparentBlack}>{item.count}</Typography></div>
                        </div>    
                    )}
               </div>
           </div>
          {
            countShow != dropItems.length && showDropdown
            && <div onClick={() => {setCountShow(dropItems.length)}} style={{cursor: 'pointer',marginTop: '15px'}}> <Typography color={AppColor.transparentBlack} variant='body4' fontWeight='500'>Show {dropItems.length-countShow} more</Typography></div>
          }
      </div>
    );
};

export default SideBarCategory;