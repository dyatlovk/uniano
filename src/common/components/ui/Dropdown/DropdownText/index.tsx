
import { useState } from 'react';
import styles from './style.module.scss';
import Typography from '../../Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useHover } from '@common/helpers/useHover';

type DropdownTextProps = {
    title: string;
    dropTitles: string[];
    callback: (item:string) => void;
}
const DropdownText = ({callback,dropTitles,title}:DropdownTextProps) => {
    const [activeItem,setActiveItem] = useState<string>(title);
    const [active,setActive] = useState(false);
    function handleClick(item:string) {
      callback(item);
      setActiveItem(item);

    }
    const handleScroll = (e) => {
      e.preventDefault();   
  };
    return (
      <div onScroll={handleScroll} onClick={() => {setActive(prev => !prev)}} className={styles.wrapper}>
           <Typography variant='body4'>{activeItem}</Typography>
           <AppColor.trianleDown fill={AppColor.text} />
           <div style={{display: active ? 'block' : 'none'}} className={styles.padding}>
             <div className={styles.dropdown_titles}>
                {dropTitles.map(item =>
                  <div className={styles.dropdown_child} onClick={() => {handleClick(item)}}>
                    <Typography fontWeight={item == activeItem ? '500' : '400'} variant='body5'>{item}</Typography>
                  </div>  
                )}
             </div>
           </div>
      </div>
    );
};

export default DropdownText;