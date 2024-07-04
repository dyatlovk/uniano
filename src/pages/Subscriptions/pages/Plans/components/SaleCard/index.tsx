
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { useHover } from '@common/helpers/useHover';
import ModalTriangleTop from '@common/components/ui/modals/ModalTriangleTop/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import { useState } from 'react';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';

export type SaleCardProps = {
    filter: string;
    price: number;
    description: string;
    isActive: boolean;
    callback: (item:string) => void;
}
const SaleCard = ({filter,price,description,isActive,callback}:SaleCardProps) => {


    return (
      <div className={styles.box_wrapper}>
           <Typography textLineHeight='100%' variant='body4' color={AppColor.orange} fontWeight='500'>{filter}</Typography>

           {price > 0
           ? <div className={styles.text_flex}>
                <Typography contenteditable="true" textLineHeight='1' variant='body4' color={AppColor.text} fontWeight='400'></Typography>
             </div>
           : <Typography textLineHeight='100%' variant='titleSmall' color={AppColor.text} fontWeight='600'>FREE</Typography> }
            <HorizontalLine width='154px' />
           <Typography contenteditable="true" variant='body4'>{description}</Typography>

      </div>
    );
};

export default SaleCard;