
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';

type SliderItemProps = {
    icon: React.ReactNode;
    text: string;
    onClick: (item:string) => void;
    removedTag: string; 
    tags: string[];
}


const SliderItem = ({icon,text,onClick,removedTag,tags}:SliderItemProps) => {
    const [isSelected,setIsSelected] = useState(false);
    const handleClickItem = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onClick(text); 
      setIsSelected(prev => !prev);
    }

    useEffect(() => {
      
      
      
      if (removedTag === text) {
          setIsSelected(false);
      }
      if (tags.length === 0) {
          setIsSelected(false);
      }
  }, [removedTag, tags, text]);
    
    
    return (
      <div onClick={(event) => {handleClickItem(event)}} style={{backgroundColor: isSelected ? AppColor.white : 'white'}} className={styles.slider_item}>
        <div style={{opacity: isSelected ? 1 : 0}} className={styles.absolute_close}><AppColor.close fill={AppColor.text}/></div>
           {icon}
           <Typography variant='body4'>{text}</Typography>
      </div>
    );
};
export default SliderItem;