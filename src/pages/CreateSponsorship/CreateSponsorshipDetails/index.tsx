
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import StepsOfPreparing from '@common/components/StepsOfPreparing/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index';

const CreateSponsorshipDetails = () => {

    return (
        <div>
        <HeaderSearch 
             allItemsProgress={['Details', 'Negotiation', 'Posting']}
             currentItemProgress='Details'
         />

         <DynamicPadding />

        <div className='wrapper_page'>
             <ResponsiveLayoutTwo
                 orderItem1Desktop={0}
                 orderItem1Mobile={1}
                 orderItem2Desktop={1}
                 orderItem2Mobile={0}
                 gap='80px'
                 item1MaxWidth='730px'
                 item2MaxWidth='390px'
                 item1={
                    <div>
                         <div>
                         <div className={styles.title_wrapper}>
                 <Typography textTransform='uppercase' variant='titleBig'>Details</Typography>
                <div className='mobile'>
                     <div className={styles.template_icon}>
                      <AppColor.template />
                      </div>
                </div>
             </div>
             <DynamicPadding/>
                             <StepsOfPreparing
                                 elements={[
                                     {
                                         text: 'WordPress site with booking/payment functionality',
                                         solve: 'Change title',
                                     },
                                     {
                                         text: 'WordPress',
                                         solve: 'Change category',
                                     },
                                     {
                                         text: '3 images',
                                         solve: 'Change images',
                                     },
                                     {
                                        text: 'Here is my description',
                                        solve: 'Change description',
                                    },
                                    {
                                        text: 'Wordpress, website, new website, CMS',
                                        solve: 'Change tags',
                                    },
                                    {
                                        text: 'Agreements.pdf',
                                        solve: 'Change documents',
                                    },
                                 ]}
                             />
 
                             <DynamicPadding />
 
                             <div className={styles.text_box}>
                                 <Typography variant='body4'>You can move to negotiation step and provide payment and delivery conditions.</Typography>
                             </div>
 
                             <DynamicPadding />
 
                             <div className={'flex_space_between'}>
                                     <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='cancel' />
                                     <ChevronMoveTo  variant='right' onClick={() => {}} text='Next step' title='Negotiation' />
                             </div>
                         </div>
                    </div>
                 }
                 item2={
                    <div >
                        <div className='desktop'>
                        <TitleExampleUl />
                        </div>
                    </div>
                 }
             />
                        <AskedQuestion />
        </div>
        <Footer />
   </div>
 );
};

export default CreateSponsorshipDetails;