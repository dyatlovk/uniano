
import styles from './style.module.scss';
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import ModalCenter from '@common/components/ModalPopUps/ModalCenter/index';
import { ImageModal } from '@common/components/ReviewsProgram/index';
import CardStatisticPartnership from '@common/components/cards/CardStatiscticsPartnership/index';
import CardStatisticsParthnershipConstant from '@common/components/cards/CardStatiscticsPartnership/variants/CardStatisticsParthnershipConstant/CardStatisticTest';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
const images = [test1, test2, test3];
const ServiceModal = () => {
    const [imageModal,setImageModal] = useState(false);
    return (
      <div>
        {imageModal && <ModalCenter onClickHandler={() => {setImageModal(false)}}>
                <ImageModal callback={setImageModal}/>
                </ModalCenter>}
           <div className={styles.flex_row}>
                <PreviewItem />
                <PreviewItem />
                <PreviewItem />
           </div>

           <DynamicPadding desktop='30px' mobile='20px' />
           <div className={styles.flex_10} style={{gap: '20px'}}>
           <CardStatisticPartnership
           imageBorderLeft='20px'
                                        typeColor='white'
                                        textTransform='uppercase'
                                        iconsAbsolute={<AppColor.fire fill='white'/>}
                                
                                        isUrgent={false}
                                        
                                        details={[
                                            {
                                                title: 'Price',
                                                node: <div className='gap_5'><AppColor.fourOfFive />
                                                    <Typography textLineHeight='1' variant='body5' fontWeight='500'>
                                                        $5K-6K
                                                    </Typography>
                                                    <AppColor.puzle />
                                                </div>
                                            },
                                            {
                                                title: 'Delivery',
                                                node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>need offer</Typography>
                                            },
                                            {
                                                title: 'Delivery',
                                                node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>1 of 2</Typography>
                                            },
                                            {
                                                title: 'Bids',
                                                node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>35</Typography>
                                            }
                                        ]}
                                        tags={['Logo', 'Logo Design', 'Logo Maker']}
                                        title='Logo by sample in vector in maximum quality'
                                        user={fakeUserConstant}
        
                                        
                                        />
           <div >
                <Typography variant='body4' fontWeight='500'>Description</Typography>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div style={{display: 'flex',gap: '10px'}}>
                    <div className='gap_5'>
                        <AppColor.clicks />
                        <Typography variant='body4'>20 clicks</Typography>
                    </div>
                    <div className='gap_5'>
                        <AppColor.leads />
                        <Typography variant='body4'>20 leads</Typography>
                    </div>
                    <div className='gap_5'>
                        <AppColor.sales />
                        <Typography variant='body4'>20 sales</Typography>
                    </div>
                </div>
                <DynamicPadding desktop='20px' mobile='15px'/>
               <div className={styles.flex_10} >
               { images.map(item => <img className='cursor' onClick={() => {setImageModal(true)}} style={{borderRadius: '20px'}} src={item} height={'33px'} />)}
               </div>
                <DynamicPadding desktop='20px' mobile='15px'/>
                <Typography variant='body4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. 
                Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi 
                integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. 
                Eu lacus sapien et eu tortor cursus dolor.
                </Typography>

           </div>

           <DynamicPadding />
           </div>
      </div>
    );
};

export const PreviewItem = () => {
    return (
        <div className={`${styles.flex_preview} cursor`}>
            <AppColor.development />
            <div className={styles.flex_column}>
                <Typography variant='body5' fontWeight='500'>Website Development</Typography>
                <SizeBox height='5px'/>
                <Typography variant='body5'>Figma, Photoshop, other</Typography>
            </div>
        </div>
    )
}


export default ServiceModal;
                                    