
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
type DetailsMyFreelancersProps = {
    informationTable: DetailsMyFreelancersItem[];
    informationDropdown: DropdownMyProgramsItemProps[];
}

export type DetailsMyFreelancersItem = {

    page: number;
    
}
const DetailsMyFreelancers = ({informationTable,informationDropdown}:DetailsMyFreelancersProps) => {
    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = informationTable[currentPage-1];
    const currentDropdownItem = informationDropdown[currentPage-1];
    const {width,height} = useScreenSize();
    
    
    return (
      <DetailsTable
        projectsCount='1'
        titleEnd=' freelancer'
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
                    title: 'Freelancer',
                    child: <UserAvatar
                        // nodeAfterText={ <div className={styles.gap_5}><AppColor.playButton/><AppColor.refreshColored/></div> }
                        url={fakeUserConstant.image}
                        role='Freelancer'
                        width='30px' height='30px' variant='row' flag={<AppColor.UkraineFlagIcon/>}  active={true} preventMobileNone={true} name={'Artem M.'} />
                },
                {
                    title: 'Projects',
                    child: <Typography variant='body4'>353</Typography>
                },
                {
                    title: 'Successful Projects',
                    child: <Typography variant='body4'>95%</Typography>
                },
                {
                    title: 'Avg Budget',
                    child: <Typography variant='body4'>$4 535</Typography>
                },
                {
                    title: 'Avg Delivery',
                    child: <Typography variant='body4'>3 days</Typography>
                },
              
                
            ] : [
                {
                    title: 'Freelancer',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Projects',
                    child: <></>
                },
                {
                    title: 'Successful Projects',
                    child: <></>
                },
                {
                    title: 'Avg Budget',
                    child: <></>
                },
                {
                    title: 'Avg Delivery',
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



export default DetailsMyFreelancers;