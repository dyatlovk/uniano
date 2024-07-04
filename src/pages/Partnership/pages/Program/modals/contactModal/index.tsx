
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import AppColor from '@common/styles/variables-static';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';

const ContactModal = ({callbackClose}) => {

    return (
      <>
          <Typography variant='body3' fontWeight='500'>Cover letter</Typography>
          <DynamicPadding desktop='30px' mobile='20px'/>
          <div className={styles.padding_shadow}>
            <Typography variant='body4'>
            The Website Wise Team is a WordPress development agency that helps businesses build a strong digital presence 
            and grow In the last 5 years, we have created 550+ WordPress websites per local clients.     
            </Typography>    
        </div>
        <DynamicPadding desktop='30px' mobile='20px'/>
        <Typography variant='body3' fontWeight='500'>Interview</Typography> 
        <div className={styles.padding_shadow}>
            <div className='gap_10'>
                <div className={styles.orange}>
                <AppColor.noteWhite />
                </div>
                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                Start
                </Typography>
            </div>
            <Typography variant='body4' fontWeight='500'>
            Not Started
            </Typography>
        </div>
        <DynamicPadding desktop='30px' mobile='20px'/>

        <div className='flex_end'>
            <MyButtonTransparent fontWeight='500' textTransform='uppercase' onClick={callbackClose}>Close</MyButtonTransparent>
            <MyButtonOrange fontWeight='500' textTransform='uppercase' onClick={callbackClose}>Submit</MyButtonOrange>
        </div>
      </>
    );
};

export default ContactModal;