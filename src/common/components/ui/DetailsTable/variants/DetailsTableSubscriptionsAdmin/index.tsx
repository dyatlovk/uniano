
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import HorizontalLine from '../../../Lines/HorizontalLine';
import SizeBox from '../../../SizeBox';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
type DetailsTableSubscriptionsAdminProps = {
    information: DetailsTableSubscriptionsAdminItem[];
}

export type DetailsTableSubscriptionsAdminItem = {
   user: userModel;
   plan: string;
   date: string;
   price: string;
   subscriptions: string;
}

const DetailsTableSubscriptionsAdmin = ({information}:DetailsTableSubscriptionsAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        group='Plans'
        titleEnd='plan'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Progress', 'Pending', 'Blocked']}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div className={styles.dropdow_grid}>
                <TextItem title='Customer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                <TextItem title='Subscribed' node={
                        <Typography variant='body4' fontWeight='500'>Oct 25, 2021 17:12</Typography>
                    }/>
                <TextItem title='Days Left' node={
                        <Typography variant='body4' fontWeight='500'>Unlimited</Typography>
                    }/>
                <TextItem title='Renewal' node={
                        <Typography variant='body4' fontWeight='500'>Yes</Typography>
                    }/>
                <TextItem title='Status' node={
                        <Typography variant='body4' color={AppColor.orange} fontWeight='500'>Active</Typography>
                    }/>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Plan',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <div className='gap_5'>
                        <Typography variant='body4' fontWeight='500'>{currentItem.plan}</Typography>
                        <AppColor.playButton />
                    </div>
                },
                {
                    title: 'Date',
                    maxWidth: '110px',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Freelancer',
                    maxWidth: '130px',
                    child: <UserAvatar width='22px' height='22px' active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} preventMobileNone={true}/>
                },
                {
                    title: 'Price',
                    child: <Typography variant='body4'>{currentItem.price}</Typography>
                },
                {
                    title: 'Subscribers',
                    child: <Typography variant='body4'>{currentItem.subscriptions}</Typography>
                },
            ] : [
                {
                    title: 'Plan',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Freelancer',
                    child: <></>
                },
                {
                    title: 'Price',
                    child: <></>
                },
                {
                    title: 'Subscribers',
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

export default DetailsTableSubscriptionsAdmin;