
import { useState } from 'react';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';

type DropdownListProps = {
    title:string;
    items:string[];
    callback: (item:string) => void;
    activeTitle?: string;
    isOpenOnBeggin?: boolean;
}
const DropdownList = ({items,title,callback,activeTitle,isOpenOnBeggin=false}:DropdownListProps) => {

    const [isShow,setIsShow] = useState(isOpenOnBeggin);
    const [currentActiveItem,setCurrentActiveItem] = useState(activeTitle ?? '');
    return (
      <div>
           <div className={styles.dropdown_title} onClick={() => {setIsShow(prev => !prev)}}>
             <Typography variant='body3' fontWeight='500'>{title}</Typography>
             {
              isShow
              ? <AppColor.chevronTop fill={AppColor.text} width={'18px'} height={'10px'} />
              : <AppColor.chevronBottom fill={AppColor.transparentBlack} width={'18px'} height={'10px'} />
             }
           </div>
           <ul className={styles.hide_list_wrapper} style={{display: isShow ? 'flex' : 'none'}}>
            {items.map(item => 
              <li onClick={() => {setCurrentActiveItem(item);callback(item)}}>
                <Typography fontWeight='400' textLineHeight='80%' color={currentActiveItem == item ? AppColor.orange : AppColor.text}>• <span style={{color: 'transparent'}}> . </span> {item}</Typography>
              </li>  
            )}
           </ul>
      </div>
    );
};

export default DropdownList;