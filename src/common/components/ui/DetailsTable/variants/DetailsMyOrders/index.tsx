
import { useScreenSize } from '@common/helpers/useScreenSize';
import DetailsTable from '../..';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
import { useState } from 'react';
import Typography from '@common/components/ui/Typography/Typography';
import DynamicPadding from '../../../DynamicPadding';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../../../Lines/HorizontalLine';
import { fakeUserConstant, userModel } from '@common/models/user';
import App from 'App';
import SizeBox from '../../../SizeBox';
type DetailMyOrdersProps = {
    informationTable: DetailMyOrdersItem[];
    informationDropdown: DropdownMyProgramsItemProps[];
}

export type DetailMyOrdersItem = {

    page: number;
    
}
const DetailMyOrders = ({informationTable,informationDropdown}:DetailMyOrdersProps) => {
    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = informationTable[currentPage-1];
    const currentDropdownItem = informationDropdown[currentPage-1];
    const {width,height} = useScreenSize();
    
    
    return (
      <DetailsTable
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Pending', 'Completed']}
        page={currentPage}
        dropdownNode={ 
            currentDropdownItem != null 
                ? <div>
                    <DynamicPadding desktop='30px' mobile='15px'/>
                    <div className={styles.user_box}>
                        <UserAvatar url={fakeUserConstant.image} active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} role='Manager' preventMobileNone={true}/>
                        <div className="gap_10">
                            <Typography variant='body5' color={AppColor.transparentBlack}>15 hr 59 min ago</Typography>
                            <AppColor.chevronBottom width={'16px'} height={'8px'} fill={AppColor.transparentBlack}/>
                        </div>
                    </div>
                    <DynamicPadding desktop='30px' mobile='15px'/>
                 <DropdownMyProgramsItem 
                    
                    page={currentDropdownItem.page}
                />
               
              
                </div>
            : null
            }
        
        details={
            currentItem != null ? [
                {
                    title: 'Order',
                    child: <UserAvatar
                        // nodeAfterText={ <div className={styles.gap_5}><AppColor.playButton/><AppColor.refreshColored/></div> }
                        url={fakeUserConstant.image}
                        width='30px' height='30px' variant='row'  active={true} preventMobileNone={true} name={'Open CL - use my GPU to optimise / backtest '} />
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>
                },
                {
                    title: 'Category',
                    child: <div className={styles.category_wrapper}><Typography color='white' textTransform='uppercase' variant='body4'>Logo design</Typography></div>
                },
                {
                    title: 'Price',
                    child: <div className='gap_5'>
                        <AppColor.fourOfFive />
                        <Typography variant='body4'>
                        From $200 
                        </Typography>
                     </div>
                },
                {
                    title: 'Bids',
                    child: <Typography variant='body4'>5</Typography>
                },
                {
                    title: 'Delivery',
                    child: <Typography variant='body4'>need offer</Typography>
                },
                {
                    title: 'Need To Hire',
                    child: <Typography variant='body4'>1 of 10</Typography>
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


type DropdownMyProgramsItemProps = {
   page: number;
}

type CommentItemProps = {
    user: userModel;
    text: string;
    likes: string;
}
const CommentItem = ({text,user,likes}:CommentItemProps) => {
    return (
        <div className={styles.comment_wrapper}>
            <div className={styles.comment_user_info}>
                <UserAvatar active={true} name={user.name} role='Manager' flag={<AppColor.UkraineFlagIcon/>}/>
               <div className={styles.recommended_comment}>
                    <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
                        <AppColor.like />
                        <Typography variant='body4' fontWeight='500'>Recommended</Typography>
                    </div>
                    <Typography variant='body4'>{user.activeAgo}</Typography>
               </div>
            </div>

            <Typography variant='body4'>
                {text}
            </Typography>

            <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
                <Typography variant='body4'>{likes}% users like this review </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
        </div>
    )
}
const DropdownMyProgramsItem = ({}:DropdownMyProgramsItemProps) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop='20px' mobile='20px'/>
            <div className={styles.dropdown_content}>
                <AppColor.openInBrowser />
                <DropdownText title='ID' text={'#352'} />
                <DropdownText text='' title='Customer' node={
                    <div>
                        <SizeBox height='3px'/>
                        <UserAvatar height='22px' width='22px' preventMobileNone={true} url={fakeUserConstant.image} name='user35'active={true}  />
                    </div>
                }/>
                <DropdownText text='' title='Freelancer' node={
                    <div>
                        <SizeBox height='3px'/>
                        <UserAvatar height='22px' width='22px' preventMobileNone={true} url={fakeUserConstant.image} name='user35'active={true}  />
                    </div>
                }/>
                <DropdownText text='' title='Manager' node={
                    <div>
                        <SizeBox height='3px'/>
                        <UserAvatar height='22px' width='22px' preventMobileNone={true} url={fakeUserConstant.image} name='user35'active={true}  />
                    </div>
                }/>
                <DropdownText title='Traffic Source' text={'Partnership'} />
                <DropdownText title='Role' text={'Manager'} />
                <DropdownText title='Rate' text={'5%'} />
                <DropdownText title='Earned' text={'$5 312'} />
                <DropdownText title='Status' text={'Progress'} color={AppColor.orange} />

            </div>
            <DynamicPadding desktop='20px' mobile='20px'/>
            <HorizontalLine />
        </div>
    )
}


const DropdownText = ({text,title,node,color}:{text:string,title:string,node?: React.ReactNode,color?:string}) => {
    return (
        <div className={styles.dropdown_text}>
            <Typography variant='body5' color={AppColor.transparentBlack}>
                {title}
            </Typography>
           <div style={{display: 'flex',alignItems: 'center',gap:'5px'}}>
                {node}
                <Typography textLineHeight='1.5' color={color ? color : AppColor.text} variant='body4' fontWeight='500'>
                    {text}
                </Typography>
           </div>
        </div>
    )
}

export default DetailMyOrders;