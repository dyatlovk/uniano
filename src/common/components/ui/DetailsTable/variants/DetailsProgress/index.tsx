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
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'

type DetailsTableMyProgramsProps = {
    informationTable: DetailsTableMyProgramsItem[]
    informationDropdown: DropdownMyProgramsItemProps[]
}

export type DetailsTableMyProgramsItem = {
    date: string
    memberName: string
    action: string
    page: number
}
const DetailsProgress = ({
    informationDropdown,
    informationTable,
}: DetailsTableMyProgramsProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const currentItem = informationTable[currentPage - 1]
    const currentDropdownItem = informationDropdown[currentPage - 1]
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
                currentDropdownItem != null ? (
                    <div>
                        <DropdownMyProgramsItem
                            earned={currentDropdownItem.earned}
                            rate={currentDropdownItem.rate}
                            role={currentDropdownItem.role}
                            service={currentDropdownItem.service}
                            traffic={currentDropdownItem.traffic}
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
    
                                <MyButtonTransparentBlack padding='12px 20px' fontWeight='500' onClick={() => {setDropdownShowItemCount(5)}}>Show more +4</MyButtonTransparentBlack>
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
                                      noWrap={true}
                                      flag={<AppColor.UkraineFlagIcon />}
                                      variant="row"
                                      role='Manager'
                                      url={fakeUserConstant.image}
                                      active={true}
                                      preventMobileNone={true}
                                      name={currentItem.memberName}
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
                                          color={AppColor.green}>
                                          {currentItem.action}
                                      </Typography>
                                      <AppColor.singTrue
                                          stroke={AppColor.green}
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

type DropdownMyProgramsItemProps = {
    service: string
    traffic: string
    role: string
    rate: string
    earned: string
}

const DropdownMyProgramsItem = ({
    earned,
    rate,
    role,
    service,
    traffic,
}: DropdownMyProgramsItemProps) => {
    return (
        <div className={styles.dropdown_wrapper}>
            <DynamicPadding desktop="20px" mobile="20px" />
            <div className={styles.dropdown_content}>
                <AppColor.openInBrowser />
                <DropdownText title="Service" text={service} />
                <DropdownText title="Traffic Source" text={traffic} />
                <DropdownText title="Role" text={role} />
                <DropdownText title="Rate" text={rate + '%'} />
                <DropdownText title="Earned" text={'$' + earned} />
            </div>
            <DynamicPadding desktop="20px" mobile="20px" />
            <HorizontalLine />
        </div>
    )
}

type DropdownMyProgramsItemUserProps = {
    userName: string
    date: string
    action: string
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
                                      noWrap={true}
                                      flag={<AppColor.UkraineFlagIcon />}
                                      variant="row"
                                      role='Manager'
                                      url={fakeUserConstant.image}
                                      active={true}
                                      preventMobileNone={true}
                                      name={fakeUserConstant.name}
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
                        Started partnership
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
}: {
    text: string
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

export default DetailsProgress
