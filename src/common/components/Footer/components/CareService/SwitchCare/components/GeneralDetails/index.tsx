
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { DropdownUserItem, FileItemNotific } from '@pages/Messenger/pages/MessengerPage/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import { CareServiceChildProps } from '../..';

const GeneralDetails = ({setActiveSwitch}:CareServiceChildProps) => {

    return (
      <div>
          <div className='flex_space_between'>
               <Typography fontWeight='500' variant='body3'>
               How to create a job ?
               </Typography>
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

          <DynamicPadding desktop='20px' mobile='10px' />
          <Typography variant='body4'>Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. </Typography>
          <DynamicPadding desktop='20px' mobile='10px' />
          <HorizontalLine />
          <DynamicPadding desktop='20px' mobile='10px' />
          <div className='flex_space_between'>
                            <div className='gap_10'>
                                <Typography variant='body3' fontWeight='500'>Files</Typography>
                                <div className='black_box'>
                                    <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>12</Typography>
                                </div>
                            </div>
                            <Typography variant='body5' fontWeight='500' className={styles.hover_all}>View All</Typography>
                        </div>
                            
                       <SizeBox height='20px'/>
                            <FileItemNotific />
                            <FileItemNotific />
                            <FileItemNotific />

                            


                            <DynamicPadding desktop='20px' mobile='10px' />
                            <HorizontalLine />
          <DynamicPadding desktop='20px' mobile='10px' />
          <div className='flex_space_between'>
                            <div className='gap_10'>
                                <Typography variant='body3' fontWeight='500'>Members</Typography>
                                <div className='black_box'>
                                    <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>125</Typography>
                                </div>
                            </div>
                            <Typography variant='body5' fontWeight='500' className={styles.hover_all}>View All</Typography>
                        </div>

                        <DynamicPadding desktop='20px' mobile='10px' />

                        <div onClick={() => {setActiveSwitch('main.general help.helpchat showhelp.details.user')}} className={`${styles.hover_item} cursor`}>
                            <div className={styles.absolute_background_color}></div>
                            <UserAvatar flag={<AppColor.UkraineFlagIcon />}  active={true} name='Artem M. ' role='Moderator' url={fakeUserConstant.image} />
                        </div>
                        <div onClick={() => {setActiveSwitch('main.general help.helpchat showhelp.details.user')}} className={`${styles.hover_item} cursor`}>
                            <div className={styles.absolute_background_color}></div>
                            <UserAvatar  flag={<AppColor.UkraineFlagIcon />} active={true} name='Artem M. ' role='Moderator' url={fakeUserConstant.image} />
                        </div>
                        <div onClick={() => {setActiveSwitch('main.general help.helpchat showhelp.details.user')}} className={`${styles.hover_item} cursor`}>
                            <div className={styles.absolute_background_color}></div>
                            <UserAvatar  flag={<AppColor.UkraineFlagIcon />} active={true} name='Artem M. ' role='Moderator' url={fakeUserConstant.image} />
                        </div>
      </div>
    );
};

export default GeneralDetails;