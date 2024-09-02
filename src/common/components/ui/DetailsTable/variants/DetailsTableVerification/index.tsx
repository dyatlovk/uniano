import ButtonChooseList from '@common/components/ButtonChooseList/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
import UserAvatar from '../../../UserAvatar'
import FirstStage from './Stages/First'
import SecondStage from './Stages/Second'
import ThirdStage from './Stages/Third'
import styles from './style.module.scss'

type DetailsTableVerificationProps = {
  information: DetailsTableVerificationPropsItem[]
}

export type DetailsTableVerificationPropsItem = {
  user: userModel
  date: string
  status: string
}

const DetailsTableVerification = ({
  information,
}: DetailsTableVerificationProps) => {
  const [selectedStage, setSelectedStage] = useState<string>('Stage 1')
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = information[currentPage - 1]

  return (
    <DetailsTable
      removeNavBar={true}
      titleEnd="verification"
      dropdownNode={
        <div>
          <DynamicPadding desktop="30px" mobile="20px" />
          <div>
            <ButtonChooseList
              initValue={selectedStage}
              buttons={['Stage 1', 'Stage 2', 'Stage 3']}
              buttonPadding="3px 14px"
              callback={setSelectedStage}
              gap="0px"
            />
          </div>
          <DynamicPadding desktop="30px" mobile="20px" />
          {selectedStage === 'Stage 1' && <FirstStage />}
          {selectedStage === 'Stage 2' && <SecondStage />}
          {selectedStage === 'Stage 3' && <ThirdStage />}
        </div>
      }
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      filters={['All', 'Active', 'Limited', 'Blocked', 'Deleted']}
      page={currentPage}
      details={
        currentItem != null
          ? [
              {
                title: 'Name',
                selecrable: true,

                child: (
                  <UserAvatar
                    flag={<AppColor.UkraineFlagIcon />}
                    activeAgo="1 min ago"
                    width="38px"
                    height="38px"
                    active={true}
                    url={fakeUserConstant.image}
                    preventMobileNone={true}
                    name={fakeUserConstant.name}
                  />
                ),
              },
              {
                title: 'Date',
                maxWidth: '100px',
                child: (
                  <Typography variant="body4">{currentItem.date}</Typography>
                ),
              },
              {
                title: 'Status',
                child: (
                  <Typography
                    variant="body4"
                    color={AppColor.orange}
                    fontWeight="500"
                  >
                    {currentItem.status}
                  </Typography>
                ),
              },
            ]
          : [
              {
                title: 'Name',
                child: (
                  <>
                    <DynamicPadding desktop="30px" mobile="10px" />
                  </>
                ),
              },
              {
                title: 'Date',
                child: <></>,
              },
              {
                title: 'Status',
                child: <></>,
              },
            ]
      }
    />
  )
}

type FieldItemProps = {
  title: string
  text: string
}
const FieldItem = ({ text, title }: FieldItemProps) => {
  return (
    <div>
      <Typography
        variant="body4"
        fontWeight="500"
        color={AppColor.transparentBlack}
      >
        {title}
      </Typography>
      <DynamicPadding desktop="20px" mobile="15px" />
      <div className={styles.field_text}>
        <Typography textLineHeight="1" variant="body4">
          {text}
        </Typography>
      </div>
    </div>
  )
}

export default DetailsTableVerification
