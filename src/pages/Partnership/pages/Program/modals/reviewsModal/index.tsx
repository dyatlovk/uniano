
import { FilterTags } from '@common/components/ui/SearchFilterBar/index';
import { PreviewItem } from '../ServiceModal';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ReviewsProgramCard, { ReviewsNoBorder } from '@common/components/ReviewsProgram/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';

const ReviewsModal = () => {

    return (
      <>
            <div className={styles.flex_row}>
                <PreviewItem />
                <PreviewItem />
                <PreviewItem />
           </div>
           <FilterTags />

           <DynamicPadding desktop='25px' mobile='15px'/>

           <ReviewsNoBorder likes='55' money='200' text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
            user={fakeUserConstant}
            addInfo={{
                icon: <AppColor.caseIcon height={'18px'} />,
                text: 'Musguard OMNI: Rollable Bicycle Mudguards',
                users: [fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant]
            }}
            images={[test1,test2,test3]} afterPriceNode={ <div className='gap_10'><AppColor.cart fill={AppColor.text} height={'22px'}/> <AppColor.flag height={'22px'}/></div> } />
        <DynamicPadding desktop='20px' mobile='15px'/>
        <ReviewsNoBorder
            likes='90' money='200' text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
            user={fakeUserConstant} afterPriceNode={ <div className='gap_10'><AppColor.cart fill={AppColor.text} height={'22px'}/> <AppColor.puzle height={'22px'}/></div> }
            
                        />

      </>
    );
};

export default ReviewsModal;