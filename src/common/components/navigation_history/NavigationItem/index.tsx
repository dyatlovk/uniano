

import AppColor from '@common/styles/variables-static';
import SizeBox from '../../ui/SizeBox';
import styles from './style.module.scss';

type NavigationItemProps = {
    image: React.ReactNode;
    textList: React.ReactNode[];
}
const NavigationItem = ({image,textList}:NavigationItemProps) => {

    return (
     <div className={styles.nav_wrapper} style={{overflow: 'hidden',width:'100%'}}>
        <div style={{display: 'flex'}} className={styles.wrapper}>
            <div className={textList.length > 2 && 'desktop'}>
                {image}
            </div>
            <div className={`${textList.length > 2 ? styles.dots_not_remove : styles.dots_remove} ${styles.dots}`}>
                <AppColor.threePoints />
            </div>
            <SizeBox width='15px' />
            <AppColor.chevronRight height={'12px'} fill={AppColor.transparentBlack}  />
            <SizeBox width='15px' />
            {textList.map((item,index) => <div style={{whiteSpace: 'nowrap'}} className={styles.wrapper + ' ' + `${index+2 >= textList.length ? styles.mobile_items : styles.empty}`}>
              {item}
              {index == textList.length-1
              ? <></>
              : <div className={styles.chevron}><AppColor.chevronRight fill={AppColor.transparentBlack} height={'12px'} /></div>
              }
  
            </div> )}
        </div>
     </div>
    );
};

export default NavigationItem;