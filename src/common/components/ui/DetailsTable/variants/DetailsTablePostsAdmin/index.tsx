
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import SizeBox from '../../../SizeBox';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';


type DetailsTablePostsAdminProps = {
    information: DetailsTablePostsAdminItem[];
}

export type DetailsTablePostsAdminItem = {
   user: userModel;
   date: string;
   post: string;
    category: string;
    creator: userModel;
    replies: string;
    status: string;
}
const DetailsTablePostsAdmin = ({information}:DetailsTablePostsAdminProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        titleEnd='post'
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All','Progress', 'Pending', 'Completed']}
        page={currentPage}


        details={
            currentItem != null ? [
                {
                    title: 'Post',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <Typography variant='body4' fontWeight='500'>{currentItem.post}</Typography>
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
                    title: 'Replies',
                    child: <Typography variant='body4'>{currentItem.replies}</Typography>
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
                    title: 'Replies',
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

export default DetailsTablePostsAdmin;