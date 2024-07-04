
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { useHover } from '@common/helpers/useHover';
import ModalTriangleTop from '@common/components/ui/modals/ModalTriangleTop/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import { useState } from 'react';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';

export type SubscriptionBoxProps = {
    filter: string;
    price: number;
    daysLeft: number;
    userName: string;
    topLeftIcon: boolean;
}
const SubscriptionBox = ({daysLeft,filter,price,userName,topLeftIcon}:SubscriptionBoxProps) => {

    const [showDropdown,setShowDropdown] = useState(false);

    const [showIcon,setShowIcon] = useState(topLeftIcon);

    return (
      <div className={styles.box_wrapper}>
           <div className={styles.absolute_right} >
                    <PopUpBottom
                        showBackgroundHover={true}
                        showNodeHover={
                          <AppColor.threeLinesActive />
                        }
                      showNode={
                      <AppColor.threeLines /> 
                      }
                      popUpNode={ 

                        <div className={styles.background_white}>
                          <HoverItem icon={<AppColor.repeat />} text='Auto renewal' node={<SwitchButton startValue={topLeftIcon} callback={(show) => {setShowIcon(show) }} />} />
                          <HoverItem icon={<AppColor.clockPlus />} text='Prolong plan' />
                          <HoverItem icon={<AppColor.circleRepeat />} text='Change plan' />
                          <div className={styles.absolute_triangle}></div>
                        </div>} 
                  
                      topPaddingFromNode='10px'
                  />
             
             </div>
           <div className={styles.absolute_left}> 
              {showIcon && <AppColor.repeat />} 
           </div>

           <Typography textLineHeight='100%' variant='body4' color={AppColor.orange} fontWeight='500'>{filter}</Typography>

           {price > 0
           ? <div className={styles.text_flex}>
                <Typography textLineHeight='100%' variant='titleSmall' color={AppColor.text} fontWeight='600'>${price}</Typography>
                <Typography textLineHeight='100%' variant='body7' color={AppColor.transparentBlack} fontWeight='500'>/month</Typography>
             </div>
           : <Typography textLineHeight='100%' variant='titleSmall' color={AppColor.text} fontWeight='600'>FREE</Typography> }

            {price > 0
           ? <Typography textLineHeight='100%' variant='body7' color={AppColor.transparentBlack} fontWeight='400'>{daysLeft} Days Left</Typography>
           : <Typography textLineHeight='100%' variant='body7' color={AppColor.transparentBlack} fontWeight='400'>Change plan</Typography> }

           <UserAvatar width='22px' height='22px' active={true} name={userName} />
      </div>
    );
};

type HoverItemProps = {
  icon: any;
  text: string;
  node?: any;
}
const HoverItem = ({icon,text,node}:HoverItemProps) => {
  return (
    <div className={styles.hover_item}>
        {icon}
        <Typography variant='body5'>{text}</Typography>
        {node}
    </div>
  )
}
export default SubscriptionBox;