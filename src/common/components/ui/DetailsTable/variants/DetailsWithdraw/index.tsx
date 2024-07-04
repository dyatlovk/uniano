
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import { fakeUserConstant, userModel } from '@common/models/user';
import UserAvatar from '../../../UserAvatar';

type DetailsWithdrawProps = {
    information: DetailsWithdrawPropsItem[];
}

export type DetailsWithdrawPropsItem = {
   operation: string;
   id: string;
   date: string;
   user: userModel;
   method: 'visa';
   amount: string;
   status: string;
}

const DetailsWithdraw = ({information}:DetailsWithdrawProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='operation'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Pending', 'Completed', 'Cancelled']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'Operation',
                    selecrable: true,
        
                    child: <div className='gap_5'>
                        <AppColor.moneyWithdraw width={'38px'} height={'35px'} />
                        <Typography variant='body4'>Withdrawal to “...9653”</Typography>
                    </div>
                },
                {
                    title: 'ID',
                    child: <Typography variant='body4'>{currentItem.id}</Typography>
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'User',
                    child: <UserAvatar width='22px' height='22px' active={true} url={fakeUserConstant.image} preventMobileNone={true} name={fakeUserConstant.name}/>
                },
                {
                    title: 'Method',
                    child: <AppColor.visa />
                },
                {
                    title: 'Amount',
                    child: <Typography variant='body4'>{currentItem.amount}</Typography>
                },
                {
                    title: 'Status',
                    child: <Typography textLineHeight='100%' variant='body4' color={AppColor.orange}>{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'Operation',
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
                    title: 'User',
                    child: <></>
                },
                {
                    title: 'Method',
                    child: <></>
                },
                {
                    title: 'Amount',
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

export default DetailsWithdraw;