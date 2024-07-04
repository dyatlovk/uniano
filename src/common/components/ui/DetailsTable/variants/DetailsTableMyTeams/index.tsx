
import { useState } from 'react';
import DetailsTable from '../..';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '../../../UserAvatar';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '../../../DynamicPadding';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { ThreeLinesPopUpCustom } from '../../../ThreeLinesPopUp';
import SizeBox from '../../../SizeBox';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonRed from '@common/components/ui/MyButton/variants/MyButtonRed';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';

type DetailsTableMyTeamsProps = {
    information: DetailsTableMyTeamsPropsItem[];
}

export type DetailsTableMyTeamsPropsItem = {
    date: string;
    teamName: string;
    position: string;
    termination: boolean;
    freelance: boolean;
    contactTitle: string;
    contactDescription: string;
    page: number;
    status: string;
    teamIcon: any;
    teamMembers: number;
}

const DetailsTableMyTeams = ({information}:DetailsTableMyTeamsProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];

    const {width,height} = useScreenSize();
    
    const [leaveModal,setLeaveModal] = useState(false);

    const [requested,setRequested] = useState(false);

    return (
     <>
        {leaveModal && <ModalCenterBasic bottomPartPadding='30px' callbackClose={() => {setLeaveModal(false)}} title='Leave team'
            desktopMaxWidth='360px'>
                {!requested && <ModalLeaveTemplate
                    text='You can’t leave team Tugas Virtual Solutions while there is a valid contract. '
                    textBold='You can request to terminate your contract.'
                    tillDate='till 26 Oct 2023'
                    buttonsFirst={
                        {
                            text: 'Cancel',
                            onClick: () => setLeaveModal(false)
                        }
                    } 
                        buttonsSecond={{
                            text: 'Request',
                            onClick: () => {
                                setRequested(true);
                            },
                            color: 'orange'
                        }}
                />}
                {requested && <ModalLeaveTemplate
                    text='You can’t leave team Tugas Virtual Solutions while there is a valid contract. '
                    textBold='You sent the request about termination.'
                    tillDate='till 26 Oct 2023'
                    type='Requested'
                    typeColor={AppColor.orange}
                    buttonsFirst={
                        {
                            text: 'Cancel',
                            onClick: () => setLeaveModal(false)
                        }
                    } 
                        buttonsSecond={{
                            text: 'Leave',
                            disabled: true,
                            onClick: () => {
                            },
                            color: 'red'
                        }}
                />}
            </ModalCenterBasic>}
          <DetailsTable
            callbackNav={(item) => { setCurrentPage(item)}}
            filters={['All', 'Progress', 'Completed', 'Available', 'Unavailable']}
            page={currentPage}
            modalDropdown={
                <ThreeLinesPopUpCustom 
                positionRight='14px'
                    items={[
                        {
                            icon: <AppColor.keyOrange />,
                            title: 'Permissions'
                        },
                        {
                            icon: <AppColor.logOutRed />,
                            title: 'Leave',
                            onClick: () => setLeaveModal(true)
                        },
                    ]}
                />
            }
            details={
                currentItem != null ? [
                    {
                        title: 'Team',
                        child: <TeamView teamIcon={currentItem.teamIcon} teamMembers={currentItem.teamMembers} teamName={currentItem.teamName} />
                    },
                    {
                        title: 'Date',
                        child: <Typography variant='body4'>{currentItem.date}</Typography>
                    },
                    {
                        title: 'Position',
                        maxWidth: '80px',
                        child: <Typography variant='body4'>{currentItem.position}</Typography>
                    },
                    {
                        title: 'Termination',
                        child: <TrueOrFalse isTrue={currentItem.termination} /> 
                    },
                    {
                        title: 'Freelance',
                        child: <TrueOrFalse isTrue={currentItem.freelance} /> 
                    },
                    {
                        title: 'Contract',
                        child: <ContractItem icon={<AppColor.contract />} description={'till 26 Oct 2023'} title='Signed (2/2)' />
                    },
                    {
                        title: 'Status',
                        child: <Typography textLineHeight='100%' variant='body4' color={AppColor.green}>{currentItem.status}</Typography>
                    },
                ] : [
                    {
                        title: 'Team',
                        child: <>
                        <DynamicPadding desktop='30px' mobile='10px' /></>
                    },
                    {
                        title: 'Date',
                        child: <></>
                    },
                    {
                        title: 'Position',
                        child: <></>
                    },
                    {
                        title: 'Termination',
                        child: <></>
                    },
                    {
                        title: 'Freelance',
                        child: <></>
                    },
                    {
                        title: 'Contract',
                        child: <></>
                    },
                    {
                        title: 'Status',
                        child: <></>
                    },
                   
                ]
            }
          />
     </>
    );
};

type TeamViewProps = {
    teamIcon: any;
    teamName: string;
    teamMembers: number;
}
const TeamView = ({teamIcon,teamMembers,teamName}:TeamViewProps) => {
    return (
        <div className={styles.flex_center}>
            {teamIcon}
            <div>
                <Typography variant='body4' fontWeight='500'>{teamName}</Typography>
                <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>{teamMembers} Members</Typography>
            </div>
        </div>
    )
}

type ModalLeaveTemplateProps = {
    text: string;
    textBold: string;
    tillDate: string;
    buttonsFirst: {
        text: string;
        onClick: () => void;
        disabled?: boolean;
    }
    buttonsSecond: {
        text: string;
        onClick: () => void;
        disabled?: boolean;
        color: 'orange' | 'red';
    }
    type?: string;
    typeColor?: string;
}
const ModalLeaveTemplate = ({buttonsFirst,buttonsSecond,text,textBold,tillDate,typeColor,type}:ModalLeaveTemplateProps) => {
    return (
        <div>
            <Typography variant='body4'>{text} <span style={{fontWeight: '500'}}>{textBold}</span></Typography>
            <SizeBox height='15px' />
            <div className='gap_10'>
                <AppColor.contract />
                <div>
                    <Typography variant='body4' fontWeight='500'>Contract</Typography>
                    <SizeBox height='7px' />
                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>{tillDate}</Typography>
                </div>

                {type && <div style={{marginLeft: 'auto'}}>
                    <Typography variant='body5' color={typeColor} fontWeight='500'>{type}</Typography>
                    </div>}
            </div>

            <DynamicPadding desktop='30px' mobile='20px'/>

            <div className={styles.flex_end}>
                <MyButtonTransparent onClick={buttonsFirst.onClick} fontWeight='500' textTransform='uppercase'
                >
                    {buttonsFirst.text}
                </MyButtonTransparent>
                {buttonsSecond.color == 'orange'
                ? <MyButtonOrange disabled={buttonsSecond.disabled} onClick={buttonsSecond.onClick} fontWeight='500' textTransform='uppercase'
                >
                    {buttonsSecond.text}
                </MyButtonOrange>
                : <MyButtonRed disabled={buttonsSecond.disabled} onClick={buttonsSecond.onClick} fontWeight='500' textTransform='uppercase'
                >
                    {buttonsSecond.text}
                </MyButtonRed>}

            </div>
        </div>
    )
}
type ContractItemProps = {
    icon: any;
    description: string;
    title: string;
}

const ContractItem = ({icon,description,title}:ContractItemProps) => {
    return (
        <div className={styles.flex_center}>
            {icon}
            <div>
                <Typography variant='body4' fontWeight='500'>{title}</Typography>
                <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>{description} Members</Typography>
            </div>
        </div>
    )
}

const TrueOrFalse = ({ isTrue }: { isTrue: boolean }) => {
    return (
        <div className={styles.center_item}>
            { isTrue
            ? <AppColor.singTrue width={14} height={10} stroke={AppColor.orange}/>
            : <div className={styles.false_item}></div>}
        </div>
    );
}
export default DetailsTableMyTeams;