
import ReviewsProgramCard from '@common/components/ReviewsProgram/index';
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import SizeBox from '../../../SizeBox';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss'
import HorizontalLine from '../../../Lines/HorizontalLine';

type DetailsTableOrdersAdminProps = {
    information: DetailsTableOrdersAdminItem[];
}

export type DetailsTableOrdersAdminItem = {
   user: userModel;
   date: string;
   category: string;
   price: string;
   delivery: string;
   bids: string;
   needToHire: string;
}

const DetailsTableOrdersAdmin = ({information}:DetailsTableOrdersAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='project'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Progress', 'Pending', 'Completed']}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div className={styles.user_card}>
                    <UserAvatar preventMobileNone={true} flag={<AppColor.UkraineFlagIcon/>} active={true} name={fakeUserConstant.name} url={fakeUserConstant.image}/>
                    <div className='gap_10'>
                        <Typography variant='body5' color={AppColor.transparentBlack}>15 hr 59 min ago</Typography>
                        <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
                    </div>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div className={styles.dropdow_grid}>
                    <div className='gap_20'>
                    <AppColor.openInBrowser />
                        <TextItem title='ID' node={<Typography variant='body5' fontWeight='500'>#352</Typography>}/>
                    </div>
                    <TextItem title='Queue' node={<div className='gap_5'>
                        <AppColor.queue fill={AppColor.orange} />
                        <Typography variant='body4' fontWeight='500'>1</Typography>
                    </div>}/>
                    <TextItem title='Customer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Freelancer' node={<UserAvatar  width='22px' height='22px' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Manager' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>

                    <TextItem title='Traffic Source' node={
                        <Typography variant='body4' fontWeight='500'>Partnership</Typography>
                    }/>
                    <TextItem title='Role' node={
                        <Typography variant='body4' fontWeight='500'>Manager</Typography>
                    }/>
                    <TextItem title='Rate' node={
                        <Typography variant='body4' fontWeight='500'>5%</Typography>
                    }/>
                    <TextItem title='Earned' node={
                        <Typography variant='body4' fontWeight='500'>$5 312</Typography>
                    }/>
                    <TextItem title='Status' node={
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Progress</Typography>
                    }/>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Order',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <div className='gap_5'>
                        <img src={fakeUserConstant.image} height={'38px'} alt="" />
                        <Typography variant='body4' fontWeight='500'>Open CL - use my GPU to optimise / backtest </Typography>
                    </div>
                },
                {
                    title: 'Date',
                    maxWidth: '110px',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Category',
                    maxWidth: '130px',
                    child: <div className={styles.category_wrapper}>
                        <Typography textLineHeight='1' textTransform='uppercase' fontSizeStatic='13px' color='white'>{currentItem.category}</Typography>
                    </div>
                },
                {
                    title: 'Price',
                    child: <div className='gap_5'>
                        <AppColor.fourOfFive/> <Typography variant='body4'>{currentItem.price}</Typography>
                    </div>
                },
                {
                    title: 'Bids',
                    child: <Typography variant='body4'>{currentItem.bids}</Typography>
                },
                {
                    title: 'Delivery',
                    child: <Typography variant='body4'>{currentItem.delivery}</Typography>
                },
                {
                    title: 'Need To Hire',
                    child: <Typography variant='body4'>{currentItem.needToHire}</Typography>
                },
            ] : [
                {
                    title: 'Order',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Category',
                    child: <></>
                },
                {
                    title: 'Price',
                    child: <></>
                },
                {
                    title: 'Bids',
                    child: <></>
                },
                {
                    title: 'Delivery',
                    child: <></>
                },
                {
                    title: 'Need To Hire',
                    child: <></>
                },
               
            ]
        }
      />
    );
};

type TextItemProps = {
    title: string;
    node: React.ReactNode;
}
const TextItem = ({node,title}:TextItemProps) => {
    return (
        <div className={styles.text_item}>
            <Typography variant='body5' color={AppColor.transparentBlack}>{title}</Typography>
            <SizeBox height='2px'/>
            {node}
        </div>
    )
}

export default DetailsTableOrdersAdmin;