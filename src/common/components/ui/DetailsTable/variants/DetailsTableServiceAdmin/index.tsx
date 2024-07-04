
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import { fakeUserConstant, userModel } from '@common/models/user';
import UserAvatar from '../../../UserAvatar';
import SizeBox from '../../../SizeBox';
import styles from './style.module.scss';
import ReviewsProgramCard from '@common/components/ReviewsProgram/index';

type DetailsTableServiceAdminProps = {
    information: DetailsTableServiceAdminPropsItem[];
}

export type DetailsTableServiceAdminPropsItem = {
   user: userModel;
   date: string;
   category: string;
   price: string;
   delivery: string;
   queue: string;
}

const DetailsTableServiceAdmin = ({information}:DetailsTableServiceAdminProps) => {

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
                
                <div className={styles.dropdow_grid}>
                    <div className='gap_20'>
                    <AppColor.openInBrowser />
                        <TextItem title='ID' node={<Typography variant='body5' fontWeight='500'>#352</Typography>}/>
                    </div>
                    <TextItem title='Queue' node={<div className='gap_5'>
                        <AppColor.queue fill={AppColor.orange} />
                        <Typography variant='body4' fontWeight='500'>1</Typography>
                    </div>}/>
                    <TextItem title='Campaign' node={<div className='gap_5'>
                        <AppColor.caseIcon width={'22px'} height={'22px'} />
                        <Typography color={AppColor.transparentBlack} variant='body4' fontWeight='500'>My dream</Typography>
                    </div>}/>
                    <TextItem title='Customer' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Freelancer' node={<UserAvatar  width='22px' height='22px' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>
                    <TextItem title='Manager' node={<UserAvatar width='22px' height='22px' url={fakeUserConstant.image}  active={true} name={fakeUserConstant.name} preventMobileNone={true}/>}/>

                    <TextItem title='Negotiation' node={<div className='gap_5'>
                       <Typography variant='body4' fontWeight='500'>$200</Typography>
                       <AppColor.cart fill={AppColor.text} width={'22px'}/>
                       <AppColor.flag width={'22px'} />
                    </div>}/>
                    <TextItem title='Delivery' node={<Typography variant='body4' fontWeight='500'>3 days</Typography>}/>

                    <TextItem title='Ultimate Subscription ' node={<div className='gap_5'>
                        <AppColor.moneyHummer />
                        <Typography variant='body4' fontWeight='500'>$40</Typography>
                        <AppColor.shield />
                        <Typography variant='body4' fontWeight='500'>1</Typography>
                    </div>}/>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />
                
                <div className={styles.reviews_wrapper}>
                    <ReviewsProgramCard 
                        likes='15'
                        money=''
                        text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                        user={fakeUserConstant}

                    />
                     <ReviewsProgramCard 
                        likes='15'
                        money=''
                        text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                        user={fakeUserConstant}
                        
                    />
                </div>
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Service',
                    selecrable: true,   
                    maxWidth: '290px',
                    child: <div className='gap_5'>
                        <img src={fakeUserConstant.image} height={'38px'} alt="" />
                        <Typography variant='body4' fontWeight='500'>Artem Markevych Logo Design </Typography>
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
                    child: <Typography variant='body4'>{currentItem.price}</Typography>
                },
                {
                    title: 'Payments',
                    child: <div className='gap_10'>
                        <AppColor.flag />
                        <AppColor.puzle />
                    </div>
                },
                {
                    title: 'Delivery',
                    child: <Typography variant='body4'>{currentItem.delivery}</Typography>
                },
                {
                    title: 'Queue',
                    child: <Typography variant='body4'>{currentItem.queue}</Typography>
                },
            ] : [
                {
                    title: 'Service',
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
                    title: 'Payments',
                    child: <></>
                },
                {
                    title: 'Delivery',
                    child: <></>
                },
                {
                    title: 'Queue',
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

export default DetailsTableServiceAdmin;