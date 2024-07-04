
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
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';

const CreateServiceNegotiation = () => {

    return (
        <div>
        <HeaderSearch 
             allItemsProgress={['Details', 'Negotiation', 'Posting']}
             currentItemProgress='Negotiation'
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
                    <div >
                         <div>
                         <div className={styles.title_wrapper}>
                            <Typography textTransform='uppercase' variant='titleBig'>Negotiation</Typography>
                            
                        </div>

                        <DynamicPadding />
                        <div style={{maxWidth: '480px'}}>
                            <CenterShadowBox elements={[
                                <Typography variant='body3' fontWeight='500'>Custom requirements</Typography>,
                                <Typography variant='body4'>Negotiate all technical and financial questions in private messages and start the project.</Typography>
                            ]}
                            gap='20px'
                            paddingBoxDesktop='20px'
                            align='start'/>
                        </div>

                            <DynamicPadding desktop='20px' mobile='15px'/>

                            <MyButtonOrange fontWeight='500' onClick={() => {}} textTransform='uppercase'> <div className={styles.white}><AppColor.plus stroke={AppColor.orange}/></div>Add package</MyButtonOrange>
 
                             <DynamicPadding />
 
                             <div className={styles.text_box}>
                                 <Typography variant='body4'>You can move to negotiation step and provide payment and delivery conditions.</Typography>
                             </div>
 
                             <DynamicPadding />
 
                             <div className={'flex_space_between'}>
                                     <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='cancel' />
                                     <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='posting' />
                             </div>
                         </div>
                    </div>
                 }
                 item2={
                    <div >
                         <div>
 
                             <div className={styles.top_image_wrapper}>
                                 <div className='gap_15'>
                                     
                                     <div className='desktop'>
                                         <div className={styles.template_icon}>
                                         <AppColor.template />
                                         </div>
                                     </div>
                                 </div>
                             </div>
 
                             <DynamicPadding />
 
                             <div className={styles.right_text_box}>
                                 <Typography variant='body3' fontWeight='500'>Title examples</Typography>
                                 <DynamicPadding desktop='30px' mobile='20px'/>
                                 <ul className={styles.ul_wrapper}>
                                     <li>
                                         <Typography variant='body4'>Build responsive WordPress site with booking/payment functionality</Typography>
                                     </li>
                                     <li>
                                         <Typography variant='body4'>Graphic designer needed to design ad creative for multiple campaigns</Typography>
                                     </li>
                                     <li>
                                         <Typography variant='body4'>Facebook ad specialist needed for product launch</Typography>
                                     </li>
                                 </ul>
                             </div>
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

export default CreateServiceNegotiation;