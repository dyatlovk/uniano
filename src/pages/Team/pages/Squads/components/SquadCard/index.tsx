import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import ModalTriangleTop from '@common/components/ui/modals/ModalTriangleTop/index'
import ModalBottomCenter from '@common/components/ui/modals/ModalBottomCenter/index'
import { useHover } from '@common/helpers/useHover'
import { useState } from 'react'
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index'
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import { fakeUserConstant } from '@common/models/user'
import { PlusButton } from '@common/components/ui/ButtonsPlus/CreateTeamButton/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'

export type SquadCardProps = {
    title: string
    members: membersType[]
}

type membersType = {
    icon: any
    isOnline: boolean
}
const SquadCard = ({ members, title }: SquadCardProps) => {

    const [webMembers, setWebMembers] = useState(false);

    return (
        <div className={styles.wrapper}>
            {
                webMembers && <ModalCenterBasic 
                topPartPadding='20px 30px'
                desktopMinWidth='360px' bottomPartPadding='30px' callbackClose={() => { setWebMembers(false) }} title='Web squad members'
                >
                    <SqueadEdit members={members} />
                </ModalCenterBasic>
            }
            <div className={styles.modal_absolute_handler}>
                                <PopUpBottom
                                   showBackgroundHover={true}
                                   showNodeHover={
                                    <AppColor.threeLinesActive />
                                   }
                                   showNode={
                                    <AppColor.threeLines />
                                   }
                                   popUpNode={
                                    <ThreeLinesPopUpCustom
                                        items={[
                                            {
                                                icon: <AppColor.edit fill={AppColor.text}/>,
                                                title: 'Edit',
                                                onClick: () => {setWebMembers(true)},
                                            },
                                            {
                                                icon: <AppColor.report fill={AppColor.text}/>,
                                                title: 'Report',
                                            },
                                        ]}
                                    />
                                   }
                                   topPaddingFromNode='20px'
                               />
            </div>
            <div className={styles.main_wrapper}>
                <Typography fontWeight='500' textTransform='uppercase' variant="body4">{title}</Typography>
                {members.length > 0 ? (
                    <div className={styles.members_wrapper}>
                        {members.map((item, index) => {
                            if ((index) < (members.length > 8 ? 7 : 8)) {
                                return (
                                    <div
                                        className={
                                            styles.member_wrapper
                                        }>
                                        {item.icon}
                                        <div
                                            className={
                                                styles.member_activity
                                            }
                                            style={{
                                                backgroundColor:
                                                    item.isOnline
                                                        ? AppColor.green
                                                        : AppColor.red,
                                            }}></div>
                                    </div>
                                )
                            } else if(index == 7 && members.length > 8) {
                                return <div className={styles.last_circle}><Typography variant='body4' fontWeight='500'>+{members.length-7}</Typography></div>
                            } else {
                                return null;
                            }
                        })}
                    </div>
                ) : (
                    <MyButtonTransparentOrange onClick={() => {
                        setWebMembers(true);
                    }}>
                        MEMBERS
                    </MyButtonTransparentOrange>
                )}
                <Typography variant="body4">
                    {members.length} Members
                </Typography>
            </div>
        </div>
    )
}



type SqueadEditProps = {
    members: membersType[];
}
const SqueadEdit = ({members}:SqueadEditProps) => {
    return (
        <div>
            <InputCommon callback={() => {}} placeholder='Search' />

            <DynamicPadding desktop='30px' mobile='20px'/>

            <div className={styles.grid_2}>
                <div className={styles.item_grid_border}>
                    <Typography variant='body3' fontWeight='500'>Available members</Typography>
                    <DynamicPadding desktop='25px' mobile='15px'/>
                    <div className={styles.grid_15}>
                        <AvailableUsers />
                        <AvailableUsers />
                        <AvailableUsers />
                    </div>
                </div>
                <div className={styles.item_grid_right}>
                    <Typography variant='body3' fontWeight='500'>Squad members</Typography>
                    <DynamicPadding desktop='25px' mobile='15px'/>
                    <div className={styles.grid_15}>{members.map(item => <CurrentUsers />)}</div>
                </div>
            </div>
        </div>
    )
}

const AvailableUsers = () => {
    return (
        <div style={{minWidth: '290px'}} className='flex_space_between'>
            <UserAvatar active={true} name={fakeUserConstant.name} role='Senior UI Designer '

            flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} />

            <PlusButton size='16px' callbackOpen={() => {}}/>
        </div>
    )
}

const CurrentUsers = () => {
    return (
        <div style={{minWidth: '290px'}} className='flex_space_between'>
            <UserAvatar active={true} name={fakeUserConstant.name} role='Senior UI Designer '

            flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} />

            <AppColor.close fill={AppColor.red} width={'16px'} height={'16px'} />
        </div>
    )
}
export default SquadCard
