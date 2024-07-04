
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';

const DeeplinkModal = () => {

    return (
      <>
           <Typography variant='body4'>
           Deeplink is a type of affiliate link that leads to the advertiser's website page of your choice. It can transfer users to a page
            of the specific service, category, or freelancer.Target actions are tracked in the same way as when using a standard link.
           </Typography>
            <DynamicPadding desktop='30px' mobile='20px'/>
            <div className='flex_end'>
                <Typography variant='body5' color={AppColor.transparentBlack}>
                You have to submit to partnership
                </Typography>
            </div>
            <SizeBox height='5px'/>
            <div className='flex_end'>
                <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>Close</MyButtonTransparent>
                <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>submit</MyButtonOrange>
            </div>
      </>
    );
};

export default DeeplinkModal;