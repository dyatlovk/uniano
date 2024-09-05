import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
import HorizontalLine from '../../../Lines/HorizontalLine'
import styles from './style.module.scss'

const AdminGuides = ({ information }: Props): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const currentItem = information[currentPage - 1]
  const [selectedRadioItem, setSelectedRadioItem] = useState<string>('')

  return (
    <DetailsTable
      removeNavBar={true}
      removeThreeLines={false}
      titleEnd="freelancer"
      page={currentPage}
      details={
        currentItem != null
          ? [
              {
                title: 'Guide',
                selecrable: true,
                maxWidth: '250px',
                child: (
                  <div className="gap_10">
                    <AppColor.colorFlag />
                    <Typography
                      fontWeight="500"
                      textTransform="uppercase"
                      variant="body4"
                    >
                      {currentItem.guide}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Compitions',
                maxWidth: '110px',
                child: (
                  <div>
                    <Typography fontWeight="400" textLineHeight="1">
                      {currentItem.complitions}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Reward',
                maxWidth: '130px',
                child: (
                  <div className="gap_10">
                    <AppColor.pigBonuses width={22} height={22} />
                    <Typography variant="body4">
                      {currentItem.reward}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Status',
                maxWidth: '130px',
                child: (
                  <Typography
                    fontWeight="500"
                    color={AppColor.green}
                    variant="body4"
                  >
                    {currentItem.status}
                  </Typography>
                ),
              },
            ]
          : [
              {
                title: 'Guide',
                child: (
                  <>
                    <DynamicPadding desktop="30px" mobile="10px" />
                  </>
                ),
              },
              {
                title: 'Complitions',
                child: <></>,
              },
              {
                title: 'Reward',
                child: <></>,
              },
              {
                title: 'Status',
                child: <></>,
              },
            ]
      }
      counter={1}
      projectsCount={'1'}
      filters={['All', 'Active', 'Pending', 'Deleted']}
      callbackNav={() => {}}
      dropdownNode={
        <div>
          <DynamicPadding desktop="27px" mobile="27px" />
          <RadioItem
            isActive={selectedRadioItem === 'Create an account'}
            title="Create an account"
            text="Thanks for signing up - w're happy to have you on board!"
            callback={(title: string, state: boolean) => {
              setSelectedRadioItem(title)
            }}
          />
          <DynamicPadding desktop="15px" mobile="15px" />
          <RadioItem
            isActive={selectedRadioItem === 'Upload your profile picture'}
            title="Upload your profile picture"
            text="You can upload or update your profile picture in Settings - Profile"
            callback={(title: string, state: boolean) => {
              setSelectedRadioItem(title)
            }}
          />
          <DynamicPadding desktop="15px" mobile="15px" />
          <RadioItem
            isActive={selectedRadioItem === 'Complete your account information'}
            title="Complete your account information"
            text="You can upload or update your profile picture in Settings - Profile"
            callback={(title: string, state: boolean) => {
              setSelectedRadioItem(title)
            }}
          />
          <DynamicPadding desktop="27px" mobile="27px" />
          <HorizontalLine />
        </div>
      }
    />
  )
}

const RadioItem = ({
  text,
  title,
  callback,
  isActive,
}: RadioItemProps): JSX.Element => {
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <div
      className={styles.radio_item}
      onClick={() => {
        setSelected(prev => !prev)
        callback(title, selected)
      }}
    >
      <div className={isActive ? styles.radio_btn_active : styles.radio_btn}>
        {isActive && (
          <AppColor.iconChecked fill={'#fff'} width={12} height={7} />
        )}
      </div>
      <div>
        <Typography fontWeight="500" variant="body4">
          {title}
        </Typography>
        <DynamicPadding desktop="2px" mobile="2px" />
        <Typography variant="body4" color={AppColor.transparentBlack}>
          {text}
        </Typography>
      </div>
    </div>
  )
}

interface RadioItemProps {
  title: string
  text: string
  isActive: boolean
  callback: (title: string, state: boolean) => void
}

type Props = {
  information: DetailsTableGuidesItem[]
}

export type DetailsTableGuidesItem = {
  guide: string
  complitions: string
  reward: string
  status: string
}

export default AdminGuides
