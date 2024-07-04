import { useState } from 'react'
import styles from './style.module.scss'
import { useScreenSize } from '@common/helpers/useScreenSize'
import DetailsTable from '../..'
import { fakeUserConstant, userModel } from '@common/models/user'
import DynamicPadding from '../../../DynamicPadding'
import HorizontalLine from '../../../Lines/HorizontalLine'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import UserAvatar from '../../../UserAvatar'
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack'
import SizeBox from '../../../SizeBox'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'

type DetailsProgressOrdersProps = {
    informationTable: DetailsProgressOrdersItem[];

}

export type DetailsProgressOrdersItem = {
    date: string
    memberName: string
    action: string
    page: number
}
const DetailsProgressOrders = ({
    informationTable,
}: DetailsProgressOrdersProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const currentItem = informationTable[currentPage - 1]
    const { width, height } = useScreenSize()
    
    const [dropdownShowItemsCount,setDropdownShowItemCount] = useState(1);

    const dropdownElements = Array.from({ length: dropdownShowItemsCount}, (_, index) => index);
    
    return (
        <DetailsTable
            removeThreeLines={true}
            removeNavBar={true}
            callbackNav={(item) => {
                setCurrentPage(item)
            }}
            filters={[]}
            page={currentPage}
            dropdownNode={
                currentPage == 1 ? (
                    <div>
                        <DropdownMyProgramsItem
                          
                        />
                        {dropdownElements.map(item =>
                            <DropdownMyProgramsItemUser
                            action={currentItem.action}
                            date={currentItem.date}
                            userName={currentItem.memberName}
                        />

                        )}
                        {
                            dropdownShowItemsCount != 5 && <>
                            <DynamicPadding desktop='30px' mobile='40px'/>
                            <div className='justify_center'>
    
                                <MyButtonTransparentBlack fontWeight='500' onClick={() => {setDropdownShowItemCount(5)}}>Show more +4</MyButtonTransparentBlack>
                                </div>
                            </>
                        }
                        
                    </div>
                ) : null
            }
            details={
                currentItem != null
                    ? [
                          {
                              title: 'User',
                              child: (
                                  <UserAvatar
                                      width="38px"
                                      height="38px"
                                      variant="row"
                                      url={fakeUserConstant.image}
                                      active={true}
                                      preventMobileNone={true}
                                      name={currentItem.memberName}
                                      role='Customer'
                                  />
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
                              title: 'Action',
                              child: (
                                  <div style={{alignItems: 'baseline'}} className="gap_10">
                                      {' '}
                                      <Typography
                                          variant="body4"
                                          fontWeight="500"
                                          color={AppColor.orange}>
                                          {currentItem.action}
                                      </Typography>
                                      <AppColor.time
                                          
                                      />
                                  </div>
                              ),
                          },
                      ]
                    : [
                          {
                              title: 'User',
                              child: (
                                  <>
                                      <DynamicPadding
                                          desktop="30px"
                                          mobile="10px"
                                      />
                                  </>
                              ),
                          },
                          {
                              title: 'Date',
                              child: <></>,
                          },
                          {
                              title: 'Action',
                              child: <></>,
                          },
                      ]
            }
        />
    )
}


const DropdownMyProgramsItem = ({}) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop="20px" mobile="20px" />
            <div className={styles.dropdown_content}>
                <DropdownText sizeBox={true} title="Budget" node={ <div className='gap_5'>
                    <Typography variant='body4' fontWeight='500'>$1 500</Typography>
                    <AppColor.doubleUp />
                    <Typography variant='body4' fontWeight='500'>$3 000</Typography>
                </div> } text='' />
                <DropdownText sizeBox={true} title="Delivery" node={ <div className='gap_5'>
                    <Typography variant='body4' fontWeight='500'>6 days</Typography>
                    <AppColor.doubleDown />
                    <Typography variant='body4' fontWeight='500'>5 days</Typography>
                </div> } text='' />
                <DropdownText sizeBox={true} title="New Specifications" node={ <div className='gap_5'>
                   <Typography fontWeight='500' variant='body4' color={AppColor.transparentBlack}>View</Typography>
                </div> } text='' />
              
                <DropdownText sizeBox={true} title="Ultimate Subscription" node={ <div className='gap_10'>
                  <div className='gap_5'>
                        <AppColor.moneyHummer />
                        <Typography variant='body4' fontWeight='500'>$40 </Typography>
                  </div>
                  <div className='gap_5'>
                        <AppColor.shield />
                        <Typography variant='body4' fontWeight='500'>10 days</Typography>
                  </div>
                </div> } text='' />
            </div>
            <DynamicPadding desktop='30px' mobile='20px'/>
            <div className="gap_10">
                <MyButtonTransparent textTransform='uppercase' onClick={() => {}}>Cancel</MyButtonTransparent>
                <MyButtonOrange textTransform='uppercase' onClick={() => {}}>confirm & pay $780</MyButtonOrange>
            </div>
            <DynamicPadding desktop="20px" mobile="20px" />
            <HorizontalLine />
        </div>
    )
}

type DropdownMyProgramsItemUserProps = {
    userName: string
    date: string
    action: string;
}
const DropdownMyProgramsItemUser = ({
    action,
    date,
    userName,
}: DropdownMyProgramsItemUserProps) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop="20px" mobile="20px" />
            <div className={styles.dropdown_content_user}>
                <UserAvatar
                    width="38px"
                    height="38px"
                    variant="row"
                    active={true}
                    preventMobileNone={true}
                    name={userName}
                    url={fakeUserConstant.image}
                    role='Freelancer'
                />

                <div className={styles.dropdown_text_width}>
                    <Typography variant="body4">
                        {date}
                    </Typography>
                </div>

                <div style={{alignItems: 'baseline'}} className="gap_10">
                    {' '}
                    <Typography
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.green}>
                        Started the order project
                    </Typography>
                    <AppColor.singTrue stroke={AppColor.green} />
                </div>
            </div>
            <DynamicPadding desktop="20px" mobile="20px" />
            <HorizontalLine />
        </div>
    )
}

const DropdownText = ({
    text,
    title,
    node,
    color,
    sizeBox
}: {
    text: string
    sizeBox: boolean;
    title: string
    node?: React.ReactNode
    color?: string
}) => {
    return (
        <div className={styles.dropdown_text}>
            <Typography
                variant="body5"
                color={AppColor.transparentBlack}>
                {title}
            </Typography>
            {sizeBox && <SizeBox height='8px'/>}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                }}>
                {node}
                <Typography
                    textLineHeight="1.5"
                    color={color ? color : AppColor.text}
                    variant="body4"
                    fontWeight="500">
                    {text}
                </Typography>
            </div>
        </div>
    )
}

export default DetailsProgressOrders;
