
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import AppColor from '@common/styles/variables-static';

type BackgroundItemProps = {
    image:string | null;
}
const BackgroundItem = ({image}:BackgroundItemProps) => {

    return (
      <div className={styles.wrapper}>
           <Typography variant='body3' fontWeight='500'>Background</Typography>

           <DynamicPadding mobile='20px' desktop='30px'/>

            {image != null && <img src={image} width={'250px'} height={'235px'}></img>}
            <DynamicPadding mobile='15px' desktop='20px'/>
            <div className={styles.flex}>
                <MyButtonBlack textTransform='uppercase' onClick={() => {}}>
                    Update background
                </MyButtonBlack>
                <AppColor.close fill={AppColor.red}/>
            </div>
            <DynamicPadding mobile='8px' desktop='12px'/>
            <Typography variant='body4' fontWeight='400'>Must be JPEG, PNG,GIF, or MP4 and cannot exceed 10MB.</Typography>
      </div>
    );
};

export default BackgroundItem;