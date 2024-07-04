
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import ArbitrationTable from '../../../ArbitrationTable';
import DynamicPadding from '../../../DynamicPadding';
import styles from './style.module.scss';
import UserAvatar from '../../../UserAvatar';

type DetailsTableManagerChatAdminProps = {
    information: DetailsTableManagerChatAdminItem[];
}

export type DetailsTableManagerChatAdminItem = {
   user: userModel;
   id: string;
   date: string;
   description: string;
   manager: userModel;
   status: string;
}

const DetailsTableManagerChatAdmin = ({information}:DetailsTableManagerChatAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='chat'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Searching', 'Opened', 'Solved', 'Closed']}
        page={currentPage}

        details={
            currentItem != null ? [
                {
                    title: 'User',
                    selecrable: true,   
                    child: <UserAvatar roleColor={AppColor.transparentBlack} preventMobileNone={true} width='38px' height='38px' url={fakeUserConstant.image} flag={<AppColor.UkraineFlagIcon/>} name={fakeUserConstant.name} role='workspree@gmail.com' active={true} />
                },
                {
                    title: 'ID',
                    maxWidth: '110px',
                    child: <Typography variant='body4'>{currentItem.id}</Typography>
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Description',
                    child: <Typography fontStyle='italic' variant='body4'>{currentItem.description}</Typography>
                },
                {
                    title: 'Manager',
                    child: <UserAvatar preventMobileNone={true} width='22px' height='22px' url={fakeUserConstant.image} name={fakeUserConstant.name} active={true} />
                },
                {
                    title: 'Status',
                    child:  <Typography color={AppColor.orange} variant='body4' fontWeight='500'>{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'User',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'ID',
                    child: <></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Description',
                    child: <></>
                },
                {
                    title: 'Manager',
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


export default DetailsTableManagerChatAdmin;