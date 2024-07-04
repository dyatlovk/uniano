
import { useState } from 'react';
import DetailsTable from '../..';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '../../../UserAvatar';
import DynamicPadding from '../../../DynamicPadding';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { fakeUserConstant, userModel } from '@common/models/user';
import HorizontalLine from '../../../Lines/HorizontalLine';

export type DetailsMyServiceProps = {
    information: DetailsMyServicePropsItem[];
    informationDropdown: DropdownMyProgramsItemProps[];
}

export type DetailsMyServicePropsItem = {
    date: string;
    userName: string;
    category: string;
    price: string;
    delivery: string;
    queue: string;
    page: number;
}


const DetailsMyService = ({information,informationDropdown}:DetailsMyServiceProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    const currentDropdownItem = informationDropdown[currentPage-1];
    const [showUsers,setShowUsers] = useState(false);

    const {width,height} = useScreenSize();
    
    
    return (
        <DetailsTable
            maxWidth="346px"
            showUsers={showUsers}
            removeNavBar={true} 
            dropdownNode={ 
                currentDropdownItem != null 
                    ? <div>
                     <DropdownMyServiceItem 
                        id={currentDropdownItem.id}
                        freelancer={fakeUserConstant}
                        manager={fakeUserConstant}
                        customer={fakeUserConstant}
                        delivery={currentDropdownItem.delivery}
                        negotiation={currentDropdownItem.negotiation}
                        queue={currentDropdownItem.queue}
                        status={currentDropdownItem.status}
                        page={currentDropdownItem.page}
                    />
                    </div>
                    : null
            }
            callbackNav={(item) => {
                setCurrentPage(item)
            }}
            filters={[
                'All',
                'Progress',
                'Pending',
                'Completed',
                'Canceled',
            ]}
            page={currentPage}
            details={
                currentItem != null
                    ? [
                          {
                              title: 'Service',
                              child: (
                                 <UserAvatar active={true}  preventMobileNone={true} name={'Professional business logo with copyrights '} nodeAfterText={
                                    <div className='gap_5'>
                                        <AppColor.hideEye/>
                                        <AppColor.heart/>
                                    </div>
                                 }/>
                              ),
                          },
                          {
                              maxWidth: '105px',
                              title: 'Date',
                              child: (
                                  <Typography variant="body4">
                                      {currentItem.date}
                                  </Typography>
                              ),
                          },
                          {
                              title: 'Category',
                              child: (
                                <div
                                    className={
                                        styles.category_text
                                    }>
                                    <Typography
                                        textTransform="uppercase"
                                        variant="inputText"
                                        color="white">
                                        {currentItem.category}
                                    </Typography>
                                </div>
                              ),
                          },
                          {
                              title: 'Price',
                              child: (
                                 <div className='gap_5'>
                                    <AppColor.fourOfFive/>
                                    <Typography variant='body4'>From ${currentItem.price} </Typography>
                                 </div>
                              ),
                          },
                          {
                              title: 'Payments',
                              child: (
                                <div className='gap_10'>
                                    <AppColor.flag/>
                                    <AppColor.puzle/>
                                </div>
                              ),
                          },
                          {
                            title: 'Delivery',
                            child: (
                                <Typography variant='body4'>{currentItem.delivery} </Typography>
                            ),
                        },
                        {
                            title: 'Queue',
                            child: (
                                <Typography variant='body4'>{currentItem.queue} </Typography>
                            ),
                        },
                      ]
                    : [
                          {
                              title: 'Service',
                              child: <>
                              <DynamicPadding
                                  desktop="30px"
                                  mobile="10px"
                              />
                          </>
                          },
                          {
                            title: 'Date',
                            child: <></>,
                        },
                        {
                            title: 'Category',
                            child: <></>,
                        },
                        {
                            title: 'Price',
                            child: <></>,
                        },
                          {
                              title: 'Payments',
                              child: <></>,
                          },
                          {
                              title: 'Delivery',
                              child: <></>,
                          },
                          {
                              title: 'Queue',
                              child: <></>,
                          },
                      ]
            }
        />
    )
};
type DropdownMyProgramsItemProps = {
    id: string;
    customer: userModel;
    manager: userModel;
    queue: string;
    freelancer: userModel;
    negotiation: string;
    delivery: string;
    status: string;
    page: number;
    showHorizontalLine?: boolean;
}

const DropdownMyServiceItem = ({customer,delivery,negotiation,page,queue,freelancer,id,manager,status,showHorizontalLine=true}:DropdownMyProgramsItemProps) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop='20px' mobile='20px'/>
            <div className={styles.dropdown_content}>
              
                    <div style={{alignSelf:'center'}}><AppColor.openInBrowser/></div>
                    <DropdownText title='ID' text={'#'+id} />
                    <DropdownText title='Queue' text={queue} node={<AppColor.queue fill={AppColor.orange} />} />
                    <DropdownText title='Customer' text={freelancer.name} node={<div className={styles.box}><AppColor.freelancer width={'16px'} /></div>} />
        
                <DropdownText title='Freelancer' text={freelancer.name} node={<div className={styles.box}><AppColor.freelancer width={'16px'} /></div>} />
                <DropdownText title='Manager' text={manager.name} node={<div className={styles.box}><AppColor.freelancer width={'16px'} /></div>} />
                <DropdownText title='Negotiation' text={negotiation} node={<div className='gap_5'><AppColor.cart fill={AppColor.text} height={'22px'} /><AppColor.flag/></div>} />
                <DropdownText title='Delivery' text={delivery} />
                <DropdownText title='Ultimate Subscription ' text={''} node={ <div className='gap_5'>
                <AppColor.moneyHummer />
                <Typography variant='body4' fontWeight='500'>$40</Typography>
                <AppColor.shield />
                <Typography variant='body4' fontWeight='500'>10 days</Typography>
                </div> } />
                <DropdownText title='Status' text={status} color={AppColor.orange} />
            </div>
            <DynamicPadding desktop='20px' mobile='20px'/>
            <div className={styles.dropdown_no_review}>
                <div className='gap_10'>
                    <AppColor.infoCircle/>
                    <Typography variant='body4'>No review from customer</Typography>
                </div>
                <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Add review</Typography>
                <div className='gap_10'>
                    <AppColor.infoCircle/>
                    <Typography variant='body4'>No review from customer</Typography>
                </div>

            </div>
            <DynamicPadding desktop='20px' mobile='20px'/>
            {showHorizontalLine && <HorizontalLine/>}
            <DynamicPadding desktop='20px' mobile='20px'/>
            <Typography variant='body4'> <span style={{fontWeight: '500'}}>1</span> service </Typography>
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
                {node != null ? <div className={styles.node_wrapper}>{node}</div> : <></>}
                <Typography textLineHeight='1.5' color={color ? color : AppColor.text} variant='body4' fontWeight='500'>
                    {text}
                </Typography>
           </div>
        </div>
    )
}
const MissionItem = ({text,image}: {text?:string,image:any}) => {

    return (

            <div className={styles.mission_wrapper}>
                
               <div> {image}</div>
               
                <div className={styles.mission_wrapper}>
                   <div>
                        <Typography variant='body4' fontWeight='500'>
                            {text}
                        </Typography>
                        <DynamicPadding mobile='10px' desktop='10px' />
                   </div>
                   
                </div>
               
            </div>
        
    )
}

export default DetailsMyService;