
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import DateFilter from '../../components/DateFilter';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import { useState } from 'react';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';

const AdminAnalytics = () => {

    return (
      <div className='admin_wrapper'>
           <DynamicPadding />
           <div className='center_mobile_text'>
           <Typography textTransform='uppercase' variant='titleBig' fontWeight='600'>analytics</Typography>
           </div>
           <DynamicPadding />

           <DateFilter />

           <DynamicPadding />

           <DetailsTable 
                title='Profit'
                filters={[]}
                details={[
                    {
                        title: 'Total',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Service Freelance',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Service Manager',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Order Freelance',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Order Manager',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Freelancer Subscription',
                        text: '$3M 520K'
                    },
                    {
                        title: 'User Tips',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Moderation',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Survey',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Gamification',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Crowdfreelance',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Subscription',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Projects',
                        text: '$3M 520K'
                    },
                    {
                        title: 'Tips',
                        text: '$3M 520K'
                    },
                ]}
           />

           <DynamicPadding />

           <DetailsTable 
                title='Users'
                filters={['Customer', 'Freelancer', 'Manager', 'Sponsor', 'Moderator', 'Arbitrator']}
                details={[
                    {
                        title: 'Total Registered',
                        text: '113 441 520'
                    },
                    {
                        title: 'Total Active',
                        text: '113 441 520'
                    },
                    {
                        title: 'Active in Service',
                        text: '113 441 520'
                    },
                    {
                        title: 'Active in Order',
                        text: '113 441 520'
                    },
                    {
                        title: 'Active in Partnership',
                        text: '113 441 520'
                    },
                    {
                        title: 'Total Blocked',
                        text: '113 441 520'
                    },
                    {
                        title: 'Total Deleted',
                        text: '113 441 520'
                    },
                    
                ]}
           />

<DynamicPadding />

<DetailsTable 
     title='Projects'
     filters={['Service', 'Order']}
     details={[
         {
             title: 'Total Order',
             text: '113 441 520'
         },
         {
             title: 'Open Order',
             text: '113 441 520'
         },
         {
             title: 'Order in Progress',
             text: '113 441 520'
         },
         {
             title: 'Successful Order',
             text: '113 441 520'
         },
         {
             title: 'Cancelled Order',
             text: '113 441 520'
         },
         {
             title: 'Cancelled Order',
             text: '113 441 520'
         },
         {
             title: 'Arbitrations',
             text: '113 441 520'
         },
         {
            title: 'Hire Rate',
            text: '113 441 520'
        },
        {
            title: 'Total Spent',
            text: '113 441 520'
        },
        {
            title: 'Avg Deadline',
            text: '113 441 520'
        },
        {
            title: 'Avg Deadline',
            text: '113 441 520'
        },
         
     ]}
/>

     <DynamicPadding />
           
      </div>
    );
};

type DetailsTableProps = {
    title: string;
    details: {title:string,text:string}[],
    filters?: string[];
}
export const DetailsTable = ({details,title,filters}:DetailsTableProps) => {
    return (
        <div className={styles.details_wrapper}>
            <div>
                <div className={styles.top_part_dropdown}>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    <div className='desktop'>
                        <div style={{flexWrap: 'wrap'}} className='gap_15'>
                        {filters.length > 0 && <ButtonChooseList initValue={filters[0]} buttonPadding='3px 14px' buttons={filters} callback={() => {}} gap='0px' />}
                        <div className={styles.dark_box}>
                            <Typography fontSizeStatic='13px' color='white' textTransform='uppercase' fontWeight='500'>all categories</Typography>
                            <AppColor.trianleDown fill='white'/>
                        </div>
                        </div>
                    </div>
                    <div className='mobile'>
                    <div className={styles.align_end}><DropdownButton filters={filters} /></div>
                    <SizeBox height='15px'/>
                    <div className={styles.dark_box}>
                        <Typography fontSizeStatic='13px' color='white' textTransform='uppercase' fontWeight='500'>all categories</Typography>
                        <AppColor.trianleDown fill='white'/>
                    </div>
                </div>
                </div>
                <div>
            </div>
            </div>
            <HorizontalLine />

            <div className={styles.details_wrapper_text}>
                {details.map(item =>
                    <div className={styles.details_item}>
                        <Typography variant='body5' color={AppColor.transparentBlack}>{item.title}</Typography>
                        <SizeBox height='5px'/>
                        <Typography variant='body4' fontWeight='500'>{item.text}</Typography>
                    </div>    
                )}
            </div>
        </div>
    )
}
type DropdownButtonProps = {
    filters: string[];
}
const DropdownButton = ({filters}:DropdownButtonProps) => {
    const [activeItem,setActiveItem] = useState(filters[0]);
    const [showDropdown,setShowDropdown] = useState(false);
    return (
        filters.length > 0 ?
        <div className={styles.dropdown_relative}>
            <MyButtonTransparentOrange onClick={() => {setShowDropdown(prev => !prev)}}>
                {activeItem}
                <AppColor.chevronBottom />
            </MyButtonTransparentOrange>
            <div className={styles.dropdown_absolute} style={{display: showDropdown ? 'block' : 'none'}}>
                <div className={styles.dropdown_grid}>
                    {filters.map(item => <div onClick={() => {setActiveItem(item)}}><Typography variant='body4'>{item}</Typography></div>)}
                </div>
            </div>
        </div>
        : <></>
    )
}
export default AdminAnalytics;