
import UserAvatar from '@common/components/ui/UserAvatar/index';
import styles from './style.module.scss';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { SelectTips, TipsItem } from '@pages/Partnership/pages/PartnershipCompleted/index';
import SizeBox from '@common/components/ui/SizeBox/index';

const GeneralUser = () => {
    const [showTipModal, setShowTipModal] = useState(false);
    const [tip, setTip] = useState('0');
    return (
      <div className={styles.flex_column} style={{position: 'relative'}}>
        {showTipModal && <ModalCenterBasic
        desktopMinWidth='400px'
            bottomPartPadding='30px' callbackClose={() => {setShowTipModal(false)}}
            title=' Tip for' desktopMaxWidth='400px' nodeAfterTitle={<UserAvatar role='Moderator' flag={<AppColor.UkraineFlagIcon />} url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} />}

        >
                {tip == '0' ? <PriceModal callbackSend={(item) => {setTip(item)}} /> :
                <div>
                    <div className={styles.green_box}>
                        <Typography variant='body4'>
                        Thank you for the ${tip} tip, this is very important for the moderator !
                        </Typography>
                    </div>    
                    <DynamicPadding desktop='20px' mobile='10px' />
                    <Typography variant='body4' textAlign='center'>
                    You can tip only once
                    </Typography>
                </div>}
            </ModalCenterBasic>}
           <UserAvatar url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} variant='image' 
            width='124px' height='124px'
           />
           <div className='gap_10'>
            <AppColor.UkraineFlagIcon />
            <Typography variant='body3' fontWeight='500'>Artem M.</Typography>
           </div>
           <Typography variant='body4' color={AppColor.orange}>Moderator</Typography>
           <MyButtonOrange width='100%' onClick={() => {}} fontWeight='500' textTransform='uppercase'>
           Send message
           </MyButtonOrange>
           <MyButtonTransparent width='100%' onClick={() => {
            setShowTipModal(true);
           }} fontWeight='500' textTransform='uppercase'>
           <AppColor.giveTip />  give a tip
           </MyButtonTransparent>

           <div className={styles.abs_lines}>
           <PopUpBottom
               positionRight='0px'
                            popUpNode={
                                <ThreeLinesPopUpCustom
                                    positionRight='12px'
                                    items={[
                                        {
                                            icon: <AppColor.details />,
                                            title: 'View details'
                                        },
                                        {
                                            icon: <AppColor.search />,
                                            title: 'Search'
                                        },
                                        {
                                            icon: <AppColor.mute />,
                                            title: 'Mute notifications'
                                        },
                                        {
                                            icon: <AppColor.closeAsSolved />,
                                            title: 'Close as solved'
                                        },
                                        {
                                            icon: <AppColor.edit fill={AppColor.text} />,
                                            title: 'Edit'
                                        },
                                        {
                                            icon: <AppColor.close fill={AppColor.red} />,
                                            title: 'Delete'
                                        }
                                    ]}
                                />}
                                    topPaddingFromNode='20px'
                                    showNode={<div className={styles.border_item}><AppColor.threeLines height={'15px'} fill={AppColor.text} /></div>}
                                    showBackgroundHover={false}
                                    showNodeHover={<div className={styles.border_item}><AppColor.threeLinesActive height={'15px'} fill={AppColor.orange} /></div>}
                                />
           </div>
      </div>
    );
};



type PriceModalProps = {
    callbackSend: (item: string) => void;
}
const PriceModal = ({callbackSend,}:PriceModalProps) => {

    const [tip, setTip] = useState('0');

    return (
       <>
            <InputCommon padding='15px' callback={(item) => {setTip(item)}} type='number' placeholder='Enter Price Manually' 
            textAlingCenter={true}
            width='100%'
            />
            <DynamicPadding desktop='20px' mobile='10px' />

            <div className={styles.grid_3}>
                <SelectTips price='5' activePrice={tip} callback={(item) => {setTip(item)}} />
                <SelectTips price='10' activePrice={tip} callback={(item) => {setTip(item)}} />
                <SelectTips price='20' activePrice={tip} callback={(item) => {setTip(item)}} />
                <SelectTips price='50' activePrice={tip} callback={(item) => {setTip(item)}} />
                <SelectTips price='100' activePrice={tip} callback={(item) => {setTip(item)}} />
                <SelectTips price='150' activePrice={tip} callback={(item) => {setTip(item)}} />
            </div>
            <DynamicPadding desktop='20px' mobile='10px' />
            <div className='flex_end'>
                <Typography variant='body4' fontWeight='400'>
                You can tip only once
                </Typography>
                <SizeBox width='10px'/>
                <MyButtonOrange onClick={() => {
                    callbackSend(tip);
                }} fontWeight='500' textTransform='uppercase'>
                Tip ${tip} now
                </MyButtonOrange>
            </div>
       </>

    )
}

export default GeneralUser;