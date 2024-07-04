
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparentRed from '@common/components/ui/MyButton/variants/MyButtonTransparentRed';

type DetailsTableVerificationProps = {
    information: DetailsTableVerificationPropsItem[];
}

export type DetailsTableVerificationPropsItem = {
    user: userModel;
    date: string;
    status: string;
}

const DetailsTableVerification = ({information}:DetailsTableVerificationProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='verification'
        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div>
                    <ButtonChooseList initValue='Stage 1' buttons={['Stage 1', 'Stage 2', 'Stage 3']} buttonPadding='3px 14px' callback={() => {}} gap='0px' />

                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className={styles.fields_grid}>
                    <FieldItem title='First Name' text='Artem' />
                    <FieldItem title='Last Name' text='Artem' />
                    <FieldItem title='Country' text='Artem' />
                    <FieldItem title='State/Province' text='Artem' />
                    <FieldItem title='Address Line 1' text='Artem' />
                    <FieldItem title='Address Line 2' text='Artem' />
                    <FieldItem title='City' text='Artem' />
                    <FieldItem title='Post Code' text='Artem' />
                </div>

                <DynamicPadding desktop='20px' mobile='15px'/>
                <div className='text_box'>
                    <Typography variant='body4' fontWeight='500'>Requirements:</Typography>
                    <DynamicPadding desktop='20px' mobile='15px'/>
                    <ul className={styles.ul_item}>
                        <li>
                            <Typography variant='body4'>You must be at least 18 y.o. to complete the KYC process.</Typography>
                        </li>
                        <li>
                            <Typography variant='body4'>Proof of identity cannot be used as a proof of address.</Typography>
                        </li>
                        <li>
                            <Typography variant='body4'>All information must match your proof of identity document and proof of address document.</Typography>
                        </li> 
                    </ul>
                </div>
                <DynamicPadding desktop='20px' mobile='15px'/>
                <div className='justify_center gap_10'>
                    <MyButtonTransparentRed textTransform='uppercase' onClick={() => {}}>Cancel</MyButtonTransparentRed>
                    <MyButtonOrange textTransform='uppercase' onClick={() => {}}>Verify</MyButtonOrange>
                </div>
            </div>
        }
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Active', 'Limited', 'Blocked', 'Deleted']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'Name',
                    selecrable: true,
        
                    child:<UserAvatar flag={<AppColor.UkraineFlagIcon />} activeAgo="1 min ago" width='38px' height='38px' active={true} url={fakeUserConstant.image} preventMobileNone={true} name={fakeUserConstant.name}/>
                },
                {
                    title: 'Date',
                    maxWidth: '100px',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Status',
                    child: <Typography variant='body4' color={AppColor.orange} fontWeight="500">{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'Name',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
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


type FieldItemProps = {
    title: string;
    text: string;
}
const FieldItem = ({text,title}:FieldItemProps) => {
    return (
        <div>
            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{title}</Typography>
            <DynamicPadding desktop='20px' mobile='15px'/>
            <div className={styles.field_text}>
                <Typography textLineHeight='1' variant='body4'>{text}</Typography>
            </div>
        </div>
    )
}

export default DetailsTableVerification;