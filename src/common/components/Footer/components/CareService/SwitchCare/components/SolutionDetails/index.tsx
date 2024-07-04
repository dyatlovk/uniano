
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import FilterList from '@common/components/FilterList/index';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';

const SolutionDetails = () => {
    const [resumeModal, setResumeModal] = useState(false);
    
    return (
      <div>
        {resumeModal && <ModalCenterBasic
            bottomPartPadding='30px' callbackClose={() => {setResumeModal(false)}} title='Resume'
        >
            <Typography variant='body4'>Do you want to resume your order ?</Typography>
            <DynamicPadding desktop='30px' mobile='20px' />
            <div className='flex_end'>
                <MyButtonTransparent onClick={() => {setResumeModal(false)}} fontWeight='500' textTransform='uppercase'>
                Cancel
                </MyButtonTransparent>
                <MyButtonOrange onClick={() => {setResumeModal(false)}} fontWeight='500' textTransform='uppercase'>
                resume
                </MyButtonOrange>
            </div>
            </ModalCenterBasic>}
           <div className='flex_space_between' style={{gap: '20px'}}>
            <Typography variant='body3'>
                Logo by sample in vector in qood quality
            </Typography>
            <PopUpBottom
               positionRight='-20px'
                            popUpNode={
                                <ThreeLinesPopUpCustom
                                    positionRight='25px'
                                    items={[
                                        {
                                            icon: <AppColor.openInBrowser />,
                                            title: 'Order page'
                                        },
                                       
                                        {
                                            icon: <AppColor.edit fill={AppColor.text} />,
                                            title: 'Edit'
                                        },
                                        {
                                            icon: <AppColor.playGreen fill={AppColor.text} />,
                                            title: 'Resume',
                                            color: AppColor.green,
                                            onClick: () => {setResumeModal(true)}
                                        },
                                        {
                                            icon: <AppColor.close fill={AppColor.red} />,
                                            title: 'Delete',
                                            color: AppColor.red
                                        }
                                    ]}
                                />}
                                    topPaddingFromNode='20px'
                                    showNode={<div className={styles.border_item}><AppColor.threeLines height={'15px'} fill={AppColor.text} /></div>}
                                    showBackgroundHover={false}
                                    showNodeHover={<div className={styles.border_item}><AppColor.threeLinesActive height={'15px'} fill={AppColor.orange} /></div>}
                                />
           </div>

           <DynamicPadding desktop='20px' mobile='10px' />
           <FilterList noPadding={true} filters={['Freelancers', 'Groups']} />
           <DynamicPadding desktop='15px' mobile='10px' />
           <Typography textTransform='uppercase' variant='body5' fontWeight='500' color='#E0E0E0'>
           New 0
           </Typography>
           <DynamicPadding desktop='15px' mobile='10px' />
           <Typography textTransform='uppercase' variant='body5' fontWeight='500' color='#E0E0E0'>
           shortlisted 0
           </Typography>
           <DynamicPadding desktop='15px' mobile='10px' />
           <Typography textTransform='uppercase' variant='body5' fontWeight='500' color='#E0E0E0'>
           Hired 0
           </Typography>
           <DynamicPadding desktop='15px' mobile='10px' />
           <Typography textTransform='uppercase' variant='body5' fontWeight='500' color='#E0E0E0'>
           rejected 0
           </Typography>
           <DynamicPadding desktop='15px' mobile='10px' />
      </div>
    );
};

export default SolutionDetails;