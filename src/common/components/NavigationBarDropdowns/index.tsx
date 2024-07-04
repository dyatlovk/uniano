
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '../ui/DynamicPadding';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import NavBarItem from './components/NavBarItem';
import SizeBox from '../ui/SizeBox';
import { useState } from 'react';

type NavigationBarDropdownsProps = {
    title: string;
    titleIcon: any;
    navItems: NavItemType[]
}

export type NavItemType = {
    title: string;
    items: SubNavItemsType[]
}

type SubNavItemsType = {
    title: string;
    links: string[]; 
}
const NavigationBarDropdowns = ({navItems,title,titleIcon}:NavigationBarDropdownsProps) => {


    const [showDropdown,setShowDropdown] = useState(false);

    return (
      <div className={styles.wrapper}>
        <div className={styles.mobile_absolute} style={{opacity: showDropdown ? '1' : '0',pointerEvents: showDropdown ? 'all' : 'none'}}>
                {navItems.map(item =>
                        <NavBarItem items={item.items} title={item.title} />
                    )}
        </div>
           <div className={styles.wrapper_shell}>
               <div className={styles.flex_center}>
                   <div style={{display: 'flex',alignItems: 'center'}}>
                       {titleIcon}
                       <SizeBox width='10px'/>
                       <div className={styles.desktop}>
                            <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color='white'>{title}</Typography>
                       </div>
                   
                   <DynamicPadding side='right' desktop='20px' mobile='15px'/>
        
                   <div className={styles.vertical_line}></div>
                   </div>
                   <DynamicPadding side='right' desktop='20px' mobile='15px'/>

                   <div onClick={() => {setShowDropdown(prev => !prev)}} className='mobile'>
                       
                            <Typography textTransform='uppercase' color='white' variant='body4'>{title}</Typography>
              
                </div>
        
                   </div>
               <div className={styles.nav_items_wrapper}>
                    {navItems.map(item =>
                        <NavBarItem items={item.items} title={item.title} />
                    )}
               </div>

               <div onClick={() => {setShowDropdown(prev => !prev)}} className={styles.mobile_flex}>
                        
               </div>

               <div onClick={() => {setShowDropdown(prev => !prev)}} className='mobile'>
                        <AppColor.chevronBottom fill='white'/>
               </div>
    
           </div>
      </div>
    );
};

export default NavigationBarDropdowns;