
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import InfoBox from '../ui/InfoBox';
import SliderByRef from '../ui/SliderByRef';
import UserAvatar from '../ui/UserAvatar';
import { fakeUserConstant } from '@common/models/user';
import Slider from '../ui/Slider/Slider';

const LastSponsors = () => {

    return (
      <div className={styles.sponsors_wrapper}>
           <div className='gap_10'>
               <Typography variant='body4' color={AppColor.transparentBlack} fontWeight='500'>
               Last sponsors
               </Typography>
               <InfoBox />
           </div>
           <div >
               <Slider buttonSize='29px' maxShowCount={4} elementsCount={6} gap={10} itemWidth={130} maxWidth={600} swiper={true}>
                    {SliderItemCurrent}
                    {SliderItemCurrent}
                    {SliderItemCurrent}
                    {SliderItemCurrent}
                    {SliderItemCurrent}
                    {SliderItemCurrent}
               </Slider>
           </div>
      </div>
    );
};

const SliderItemCurrent =<div className={styles.user_wrapper_flex}> <UserAvatar noWrap={true} preventMobileNone={true} active={true} name='Artem M.' role='$4 305' flag={<AppColor.UkraineFlagIcon/>} url={fakeUserConstant.image}/></div>

export default LastSponsors;