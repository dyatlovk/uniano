
import { useState } from 'react';
import DetailsTable from '../..';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '../../../UserAvatar';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '../../../DynamicPadding';
import { useScreenSize } from '@common/helpers/useScreenSize';

type DetailsTableMissionsProps = {
    information: DetailsTableMissionsPropsItem[];
}

type DetailsTableMissionsPropsItem = {
    date: string;
    userName: string;
    deadline: string;
    reward: string;
    status: string;
    missionText: string;
    page: number;
    missionCompleted: string;
    limitsCurrent: number;
    limitsMax: number
}

const users= [
    <UserAvatar flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} role='Freelancer' variant='row' active={true} name={'Name A.'}/>,
    <UserAvatar flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} role='Freelancer' variant='row' active={true} name={'Name A.'}/>,
    <UserAvatar flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} role='Freelancer' variant='row' active={true} name={'Name A.'}/>,
    <UserAvatar flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} role='Freelancer' variant='row' active={true} name={'Name A.'}/>,
]
const DetailsTableMissions = ({information}:DetailsTableMissionsProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    const [showUsers,setShowUsers] = useState(false);

    const {width,height} = useScreenSize();
    
    
    return (
      <DetailsTable
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Completed', 'Available', 'Unavailable']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'Mission',
                    child: <MissionItem users={users} callback={(item) => {setShowUsers(item)}}  completed={currentItem.missionCompleted} text={currentItem.missionText} />
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>Feb 26, 2021 16:32</Typography>
                },
                {
                    title: 'Creater',
                    child: <UserAvatar flag={<AppColor.UkraineFlagIcon />} preventMobileNone={true} role='Freelancer' variant='row' active={true} name={currentItem.userName}/>
                },
                {
                    title: 'Limits',
                    child: <div className={styles.limits_wrapper}>
                        <Typography variant='body4'>{currentItem.limitsCurrent} of {currentItem.limitsMax}</Typography>
                        <PercentBar width='80px' height='5px' currentPercent={(currentItem.limitsCurrent/currentItem.limitsMax)*100} />
                    </div>
                },
                {
                    title: 'Deadline',
                    child: <Typography variant='body4'>{currentItem.deadline}</Typography>
                },
                {
                    title: 'Reward',
                    child: <div className={styles.reward_wrapper}>
                        <AppColor.pigCoins /> <Typography variant='body4'>{currentItem.reward}</Typography>
                    </div>
                },
                {
                    title: 'Status',
                    child: <Typography textLineHeight='100%' variant='body4' color={AppColor.orange}>{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'Mission',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Creater',
                    child: <></>
                },
                {
                    title: 'Limits',
                    child: <></>
                },
                {
                    title: 'Deadline',
                    child: <></>
                },
                {
                    title: 'Reward',
                    child: <></>
                },
                {
                    title: 'Status',
                    child: <></>
                },
               
            ]
        }
      />
    );
};

const MissionItem = ({text,completed,callback,users}: {text?:string,completed?: string,users: any[],callback: (show:boolean) => void}) => {

    const [showUsers,setShowUsers] = useState(false);
    return (
       <div>
            <div className={styles.mission_wrapper}>
                <div>
                <AppColor.taskCheck />
                </div>
                <div className={styles.mission_wrapper}>
                   <div>
                        <Typography textLineHeight='100%' variant='body4' fontWeight='500'>
                            {text}
                        </Typography>
                        <DynamicPadding mobile='10px' desktop='10px' />
                        <Typography textLineHeight='100%' variant='body4' fontWeight='500' color={AppColor.orange}>
                            {completed}
                        </Typography>
                   </div>
                   <div className={styles.mission_wrapper_icons}>
                    <AppColor.taskBox />
                    <AppColor.repeat />
                </div>
                </div>
                <div className={styles.mobile}>
                    <AppColor.threeLines />
                </div>
            </div>
            {showUsers ?
             <div className={styles.mobile}>
                <DynamicPadding mobile='15px' desktop='0px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='15px' desktop='0px' />
                <div className={styles.users_wrapper}>{...users}</div>
            </div>
            : <></>}
       </div>
    )
}

export default DetailsTableMissions;