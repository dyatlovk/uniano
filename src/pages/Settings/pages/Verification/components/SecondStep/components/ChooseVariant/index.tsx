
import { useState } from 'react';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';

type ChooseVariantProps ={
    items: string[];
    callback: (item:string) => void;
}
const ChooseVariant = ({callback,items}:ChooseVariantProps) => {

    const [activeItem,setActiveItem] = useState(items[0]);
    const [showDropdown,setShowDropdown] = useState(false);
    function handleChoose(item:string) {
        callback(item);
        setActiveItem(item);
    }
    function handleOpen(event) {
        event.preventDefault();
        setShowDropdown(prev => !prev);
    }

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };
    return (
      <div>
           <div className={styles.desktop}>
                <div className={styles.desktop_wrapper}>
                    {items.map(item =>
                    <div onClick={() => {handleChoose(item)}}> 
                        <ItemsDesktop activeTitle={activeItem} title={item} />    
                    </div>
                    )}
                </div>
           </div>
           <div className={styles.mobile}>
                <div style={{...borderStyles}} onClick={(e) => {handleOpen(e)}} className={styles.mobile_active_item}>
                    <Typography variant='body4' textTransform='uppercase' color={AppColor.orange}>{activeItem}</Typography>
                    { showDropdown
                     ? <AppColor.chevronTop fill={AppColor.orange} />
                     : <AppColor.chevronBottom fill={AppColor.orange} />
                    }
                    <div style={{display: showDropdown ? 'block' : 'none',}} className={styles.dropdown}>
                        {items.map(item =>
                           <div onClick={() => {setActiveItem(item)}} className={styles.dropdown_item}> <Typography variant='body4' textTransform='uppercase'>{item}</Typography>    </div>
                        )}
                    </div>
                </div>
           </div>
      </div>
    );
};

type ItemsDesktopProps = {
    activeTitle:string;
    title:string;
}
const ItemsDesktop = ({activeTitle,title}:ItemsDesktopProps) => {
    return (
        <div style={{border: activeTitle == title ?`1px solid ${AppColor.orange}` : '1px solid transparent'}} className={styles.item_desktop}>
            <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={activeTitle == title ? AppColor.orange : AppColor.text}>{title}</Typography>
        </div>
    )
}

export default ChooseVariant;