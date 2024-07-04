
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

type DetailsPartnershipsAdminProps = {
    information: DetailsPartnershipsAdminItem[];
}

export type DetailsPartnershipsAdminItem = {
   user: userModel;
   date: string;
   category: string;    
    rate: string;
    epc: string;
    cr: string;
    cr48Hours: string;
}

const DetailsPartnershipsAdmin = ({information}:DetailsPartnershipsAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
      group='Programs'
        removeNavBar={true}
        titleEnd='program'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Progress', 'Pending', 'Completed']}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />
                
                <div className={styles.dropdow_grid}>
                    <div className='gap_20'>
                    <AppColor.openInBrowser />
                        <TextItem title='ID' node={<Typography variant='body5' fontWeight='500'>#352</Typography>}/>
                    </div>
                    <TextItem title='Freelancer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Manager' node={<UserAvatar  width='22px' height='22px' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    
                    
                    <TextItem title='CTR' node={
                        <Typography variant='body4' fontWeight='500'>5%</Typography>
                    }/>
                     <TextItem title='eCPC' node={
                        <Typography variant='body4' fontWeight='500'> $5</Typography>
                    }/>
                     <TextItem title='CR' node={
                        <Typography variant='body4' fontWeight='500'>2% </Typography>
                    }/>
                     <TextItem title='Clicks' node={
                        <Typography variant='body4' fontWeight='500'> 1121</Typography>
                    }/>
                     <TextItem title='Leads' node={
                        <Typography variant='body4' fontWeight='500'>332 </Typography>
                    }/>
                     <TextItem title='Sales' node={
                        <Typography variant='body4' fontWeight='500'>53 </Typography>
                    }/>
                     <TextItem title='Earned' node={
                        <Typography variant='body4' fontWeight='500'>$50 123 </Typography>
                    }/>
                     <TextItem title='Duration' node={
                        <Typography variant='body4' fontWeight='500'>3 days </Typography>
                    }/>
                     <TextItem title='Status' node={
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}> Progress</Typography>
                    }/>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Campaign',
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
                    title: 'Rate',
                    child: <Typography variant='body4'>{currentItem.rate}</Typography>
                },
                {
                    title: 'EPC',
                    child: <Typography variant='body4'>{currentItem.epc}</Typography>
                },
                {
                    title: 'CR',
                    child: <Typography variant='body4'>{currentItem.cr}</Typography>
                },
                {
                    title: 'CR for 48 hours',
                    child: <Typography variant='body4'>{currentItem.cr48Hours}</Typography>
                },

            ] : [
                {
                    title: 'Campaign',
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
                    title: 'Sponsored',
                    child: <></>
                },
                {
                    title: 'Lifetime',
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

export default DetailsPartnershipsAdmin;