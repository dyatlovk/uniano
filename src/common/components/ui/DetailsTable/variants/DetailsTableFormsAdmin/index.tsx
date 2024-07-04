
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


type DetailsTableFormsAdminProps = {
    information: DetailsTableFormsAdminItem[];
}

export type DetailsTableFormsAdminItem = {
   user: userModel;
   date: string;
   category: string;    
   creactor: userModel;
   status: string;
}

const DetailsTableFormsAdmin = ({information}:DetailsTableFormsAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='program'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Progress', 'Pending', 'Completed']}
        page={currentPage}


        details={
            currentItem != null ? [
                {
                    title: 'Form',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <div className='gap_5'>
                        <AppColor.layers  height={'38px'}/>
                        <div className='gap_5' style={{alignItems: 'baseline'}}>
                            <Typography variant='body4' fontWeight='500'>Minimal logo for website</Typography>
                            <AppColor.earchSecondVariant height={'15px'} fill={AppColor.text}/>
                        </div>
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
                    title: 'Creator',
                    child: <UserAvatar active={true} name={fakeUserConstant.name} height='22px' width='22px' preventMobileNone={true} />
                },
                {
                    title: 'Status',
                    child: <Typography variant='body4' color={AppColor.green}>{currentItem.status}</Typography>
                },

            ] : [
                {
                    title: 'Form',
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
                    title: 'Creator',
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

export default DetailsTableFormsAdmin;