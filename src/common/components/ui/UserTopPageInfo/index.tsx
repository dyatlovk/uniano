
import { fakeUserConstant, userModel } from '@common/models/user';
import styles from './style.module.scss';
import UserAvatar from '../UserAvatar';
import AppColor from '@common/styles/variables-static';
import PopUpBottom from '../../ModalPopUps/PopUpBottom';
import { ThreeLinesPopUpCustom } from '../ThreeLinesPopUp';

type UserTopPageInfoProps = {
    user: userModel;
    nodeAfter?: React.ReactNode;
    settings?: boolean;
}
const UserTopPageInfo = ({user,nodeAfter,settings}:UserTopPageInfoProps) => {

    return (
      <div className={styles.wrapper}>
           <UserAvatar url={fakeUserConstant.image} preventMobileNone={true} name={user.name} flag={<AppColor.UkraineFlagIcon/>} role='Freelancer' active={true}/>

           <div style={{display: 'flex',alignItems: 'center', gap:'10px'}}>
                <div className={styles.box}>
                    <AppColor.message fill={AppColor.text} height={'22px'}/>
                </div>
                {!settings
                ? <div className={styles.box}>
                    <AppColor.hearPlus fill={AppColor.text} height={'22px'}/>
                 </div>
                    : <div className={styles.box}>
                        <AppColor.settings2 fill={AppColor.text} height={'22px'}/>
                    </div>}
                    <PopUpBottom
                        showBackgroundHover={false}
                        showNodeHover={
                             <div className={`${styles.box} cursor`}>
                                <AppColor.threePointsActive fill={AppColor.orange} height={'22px'}/>
                            </div>
                        }           
                        showNode={
                            <div className={`${styles.box} cursor`}>
                                <AppColor.threePoints fill={AppColor.text} height={'22px'}/>
                            </div>
                        }
                        popUpNode={<ThreeLinesPopUpCustom
                            items={[
                                {
                                    icon: <AppColor.share />,
                                    title: 'Share',
                                },
                                {
                                    icon: <AppColor.report />,
                                    title: 'Report',
                                },
                                {
                                    icon: <AppColor.edit fill={AppColor.text}/>,
                                    title: 'Edit',
                                },
                                {
                                    icon: <AppColor.pause />,
                                    title: 'Pending',
                                },
                                {
                                    icon: <AppColor.close width={'18px'} height={'18px'} fill={AppColor.red} />,
                                    title: 'Delete',
                                }
                            ]}
                        />}
                        topPaddingFromNode='27px'
                    />
           </div>

           {nodeAfter}
      </div>
    );
};

export default UserTopPageInfo;