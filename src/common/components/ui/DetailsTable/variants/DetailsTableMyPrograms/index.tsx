
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
type DetailsTableMyProgramsProps = {
    informationTable: DetailsTableMyProgramsItem[];
    informationDropdown: DropdownMyProgramsItemProps[];
}

export type DetailsTableMyProgramsItem = {
    date: string;
    memberName: string;
    category: string;
    rate: string;
    EPC: string;
    CR: string;
    CR48Hours: string;
    page: number;
    
}
const DetailsTableMyPrograms = ({informationTable,informationDropdown}:DetailsTableMyProgramsProps) => {
    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = informationTable[currentPage-1];
    const currentDropdownItem = informationDropdown[currentPage-1];
    const {width,height} = useScreenSize();
    
    
    return (
      <DetailsTable
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Completed', 'Available', 'Unavailable']}
        page={currentPage}
        dropdownNode={ 
            currentDropdownItem != null 
                ? <div>
                 <DropdownMyProgramsItem 
                    id={currentDropdownItem.id}
                    freelancer={fakeUserConstant}
                    manager={fakeUserConstant}
                    CTR={currentDropdownItem.CTR}
                    eCPC={currentDropdownItem.eCPC}
                    CR={currentDropdownItem.CR}
                    Clicks={currentDropdownItem.Clicks}
                    Leads={currentDropdownItem.Leads}
                    Sales={currentDropdownItem.Sales}
                    Earned={currentDropdownItem.Earned}
                    Duration={currentDropdownItem.Duration}
                    status={currentDropdownItem.status}
                    page={currentDropdownItem.page}
                />
                <DropdownMyProgramsItem 
                    showHorizontalLine={false}
                    id={currentDropdownItem.id}
                    freelancer={fakeUserConstant}
                    manager={fakeUserConstant}
                    CTR={currentDropdownItem.CTR}
                    eCPC={currentDropdownItem.eCPC}
                    CR={currentDropdownItem.CR}
                    Clicks={currentDropdownItem.Clicks}
                    Leads={currentDropdownItem.Leads}
                    Sales={currentDropdownItem.Sales}
                    Earned={currentDropdownItem.Earned}
                    Duration={currentDropdownItem.Duration}
                    status={currentDropdownItem.status}
                    page={currentDropdownItem.page}
                />

               <div>
               <DynamicPadding desktop='30px' mobile='20px'/>
                    <div className={styles.comments_wrapper}>
                        <CommentItem 
                            likes='15'
                            text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                            user={fakeUserConstant}
                        />
                        <CommentItem 
                            likes='15'
                            text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                            user={fakeUserConstant}
                        />
                    </div>
               </div>
               <DynamicPadding desktop='30px' mobile='20px'/>
               <HorizontalLine />

                </div>
            : null
            }
        
        details={
            currentItem != null ? [
                {
                    title: 'Program',
                    maxWidth: '250px',
                    child: <div className='gap_10'>
                        <UserAvatar variant='image' url={fakeUserConstant.image} name='' active={true} />
                        <Typography variant='body4' fontWeight='500'>Artem Markevych Logo Design Partnership</Typography>
                    </div>
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Category',
                    child: <div className={styles.category_wrapper}><Typography color='white' fontWeight='500' textTransform='uppercase' fontSizeStatic='13px'>{currentItem.category}</Typography></div>
                },
                {
                    title: 'Rate',
                    child: <Typography variant='body4'>{currentItem.rate}</Typography>
                },
                {
                    title: 'EPC',
                    child: <Typography variant='body4'>{currentItem.EPC}</Typography>
                },
                {
                    title: 'CR',
                    child: <Typography variant='body4'>{currentItem.CR}</Typography>
                },
                {
                    title: 'CR for 48 hours',
                    child: <Typography variant='body4'>{currentItem.CR48Hours}</Typography>
                },
                
            ] : [
                {
                    title: 'Member',
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
                    title: 'Rate',
                    child: <></>
                },
                {
                    title: 'EPC',
                    child: <></>
                },
                {
                    title: 'CR',
                    child: <></>
                },
                {
                    title: 'CR for 48 hours',
                    child: <></>
                },
               
            ]
        }
      />
    );
};


type DropdownMyProgramsItemProps = {
    id: string;
    freelancer: userModel;
    manager: userModel;
    CTR: string;
    eCPC: string;
    CR: string;
    Clicks: string;
    Leads: string;
    Sales: string;
    Earned: string;
    Duration: string;
    status: string;
    page: number;
    showHorizontalLine?: boolean;
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
const DropdownMyProgramsItem = ({CR,CTR,Clicks,Duration,Earned,Leads,Sales,eCPC,freelancer,id,manager,status,showHorizontalLine=true}:DropdownMyProgramsItemProps) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop='20px' mobile='20px'/>
            <div className={styles.dropdown_content}>
                <div className={styles.dropdown_first_part}>
                    <AppColor.openInBrowser/>
                    <DropdownText title='ID' text={'#'+id} />
                    <DropdownText title='Freelancer' text={freelancer.name} node={<div className={styles.box}><AppColor.freelancer width={'16px'} /></div>} />
                    <DropdownText title='Manager' text={manager.name} node={<div className={styles.box}><AppColor.freelancer width={'16px'} /></div>} />
                </div>
                <DropdownText title='CTR' text={CTR + '%'} />
                <DropdownText title='eCPC' text={'$'+eCPC} />
                <DropdownText title='CR' text={CR + '%'} />
                <DropdownText title='Clicks' text={Clicks} />
                <DropdownText title='Leads' text={Leads} />
                <DropdownText title='Sales' text={Sales } />
                <DropdownText title='Earned' text={'$'+Earned} />
                <DropdownText title='Duration' text={Duration+' '+'days'} />
                <DropdownText title='Status' text={status} color={AppColor.orange} />
            </div>
            <DynamicPadding desktop='20px' mobile='20px'/>
            {showHorizontalLine && <HorizontalLine/>}
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

export default DetailsTableMyPrograms;