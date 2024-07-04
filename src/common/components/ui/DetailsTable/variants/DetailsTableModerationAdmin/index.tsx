
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

type DetailsTableModerationAdminProps = {
    information: DetailsTableModerationAdminItem[];
}

export type DetailsTableModerationAdminItem = {
   user: userModel;
   complaint: string;
   scope: string;
   category: string;
   creator: userModel;
}

const DetailsTableModerationAdmin = ({information}:DetailsTableModerationAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='complaint'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','My', 'Suspect', 'Unsolved', 'Solved', 'Cancelled']}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />
                
                <div className={styles.dropdow_grid}>
                    <div className='gap_20'>
                    <AppColor.openInBrowser />
                        <TextItem title='ID' node={<Typography variant='body4' fontWeight='500'>#352</Typography>}/>
                    </div>
                    <TextItem title='Date' node={<Typography variant='body4' fontWeight='500'>Oct 25, 2021 17:12</Typography>}/>

                    <TextItem title='Complainer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Moderator' node={<UserAvatar  width='22px' height='22px' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Complaint' node={<Typography fontStyle='italic' variant='body4'>Freelancer didn’t </Typography>}/>
                    <TextItem title='Solution' node={<div style={{display: 'flex',justifyContent: 'center',marginBottom: '10%'}}>
                        <AppColor.minus />
                    </div>}/>
                    <TextItem title='Reward' node={
                        <Typography variant='body4' fontWeight='500'>Alpha unit</Typography>
                    }/>
                    <TextItem title='Status' node={
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Unsolved</Typography>
                    }/>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Complaint',
                    selecrable: true,   
                    child: <Typography variant='body4' fontWeight='500'>{currentItem.complaint}</Typography>
                },
                {
                    title: 'Scope',
                    maxWidth: '110px',
                    child: <Typography variant='body4'>{currentItem.scope}</Typography>
                },
                {
                    title: 'Category',
                    child: <div className={styles.category_wrapper}>
                        <Typography fontSizeStatic='13px' color='white' textTransform='uppercase' fontWeight='500'>{currentItem.category}</Typography>
                    </div>
                },
                {
                    title: 'Creator',
                    child: <UserAvatar active={true} name={fakeUserConstant.name} preventMobileNone={true} url={fakeUserConstant.image} height='22px' width='22px' />
                },
            ] : [
                {
                    title: 'Complaint',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Scope',
                    child: <></>
                },
                {
                    title: 'Category',
                    child: <></>
                },
                {
                    title: 'Creator',
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


export default DetailsTableModerationAdmin;