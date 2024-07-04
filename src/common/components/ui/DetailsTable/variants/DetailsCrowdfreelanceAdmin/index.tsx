
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


type DetailsCrowdfreelanceAdminProps = {
    information: DetailsCrowdfreelanceAdminItem[];
}

export type DetailsCrowdfreelanceAdminItem = {
   user: userModel;
   date: string;
   category: string;
  sponsored: string;
  sponsoredTotal: string;
  lifetime: string;
}

const DetailsCrowdfreelanceAdmin = ({information}:DetailsCrowdfreelanceAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
      group='Campaigns'
        removeNavBar={true}
        titleEnd='campaign'
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
                    <TextItem title='Queue' node={<div className='gap_5'>
                        <AppColor.queue fill={AppColor.orange} />
                        <Typography variant='body4' fontWeight='500'>1</Typography>
                    </div>}/>
                    <TextItem title='Customer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Sponsor' node={<UserAvatar  width='22px' height='22px' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    

                    <TextItem title='Reward' node={
                        <Typography variant='body4' fontWeight='500'>Alpha unit</Typography>
                    }/>
                    <TextItem title='Sponsored' node={
                        <div className='gap_5'>
                            <Typography variant='body4' fontWeight='500'>$300</Typography>
                            <AppColor.repeat />
                        </div>
                    }/>
                    <TextItem title='Shipping' node={
                        <div className='gap_5'>
                            <AppColor.UkraineFlagIcon width={'22px'} height={'18px'} />
                            <Typography variant='body4' fontWeight='500'>Ukraine</Typography>
                            <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>(Full Adress)</Typography>
                        </div>
                    }/>
                    <TextItem title='Delivery' node={
                        <Typography variant='body4' fontWeight='500'>3 days</Typography>
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
                    title: 'Sponsored',
                    child: <div className='gap_5'>
                        <Typography variant='body4'>{currentItem.sponsored}</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack} >{currentItem.sponsoredTotal}</Typography>
                    </div>
                },
                {
                    title: 'Lifetime',
                    child: <Typography variant='body4'>{currentItem.lifetime}</Typography>
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

export default DetailsCrowdfreelanceAdmin;