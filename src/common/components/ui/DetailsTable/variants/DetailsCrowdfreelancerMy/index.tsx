
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
type DetailCrowdfreelanceMyProps = {
    informationTable: DetailCrowdfreelanceMyItem[];
    informationDropdown: DropdownMyProgramsItemProps[];
}

export type DetailCrowdfreelanceMyItem = {

    page: number;
    
}
const DetailCrowdfreelanceMy = ({informationTable,informationDropdown}:DetailCrowdfreelanceMyProps) => {
    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = informationTable[currentPage-1];
    const currentDropdownItem = informationDropdown[currentPage-1];
    const {width,height} = useScreenSize();
    
    
    return (
      <DetailsTable
        projectsCount='1'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Pending', 'Completed']}
        page={currentPage}
        removeNavBar={true}
        dropdownNode={ 
            currentDropdownItem != null 
                ? <div>

                 <DropdownMyProgramsItem 
                    
                    page={currentDropdownItem.page}
                />
               
              
                </div>
            : null
            }
        
        details={
            currentItem != null ? [
                {
                    title: 'Campaign',
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
                    title: 'Sponsored',
                    child: <div style={{alignItems: 'baseline'}} className='gap_5'>
                        <Typography variant='body4'>$20 000</Typography>
                        <Typography  variant='body5' color={AppColor.transparentBlack}>of $50 000 </Typography>
                     </div>
                },
                {
                    title: 'Lifetime',
                    child: <Typography variant='body4'>25 days left</Typography>
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
                <DropdownText text='' title='Sponsor' node={
                    <div>
                        <SizeBox height='3px'/>
                        <UserAvatar height='22px' width='22px' preventMobileNone={true} url={fakeUserConstant.image} name='user35'active={true}  />
                    </div>
                }/>
               
                <DropdownText title='Reward' text={'Alpha unit'} />
                <DropdownText text='' title='Sponsored' node={
                   <div>
                        <SizeBox height='5px'/>
                        <div className='gap_5'>
                            <Typography variant='body4' fontWeight='500' textLineHeight='1'>$300</Typography>
                            <AppColor.repeat />
                        </div>
                   </div>
                } />
                <DropdownText title='Shipping' text={''}  node={
                   <div>
                        <SizeBox height='5px'/>
                        <div style={{alignItems: 'baseline'}} className='gap_5'>
                            <AppColor.UkraineFlagIcon width={'22px'} height={'16px'}/>
                            <Typography variant='body4' fontWeight='500' textLineHeight='1'>Ukraine</Typography>
                            <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500' textLineHeight='1'>(Full Adress)</Typography>
                        </div>
                   </div>
                } />
                <DropdownText title='Delivery' text={'3 days'} />
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
            {node == null && <SizeBox height='8px'/>}
           <div style={{display: 'flex',alignItems: 'center',gap:'5px'}}>
                {node}
                
                <Typography textLineHeight='1' color={color ? color : AppColor.text} variant='body4' fontWeight='500'>
                    {text}
                </Typography>
           </div>
        </div>
    )
}


export default DetailCrowdfreelanceMy;