import ButtonChooseList from '@common/components/ButtonChooseList/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import Typography from '@common/components/ui/Typography/Typography'
import UserLevelStat from '@common/components/Users/levels'
import { userModel } from '@common/models/user'
import { User, UserSkill } from '@common/models/users/levels'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
import HorizontalLine from '../../../Lines/HorizontalLine'
import SwitchButton from '../../../SwitchButton'
import UserAvatar from '../../../UserAvatar'
import styles from './style.module.scss'

const currentUserSkill = User.SkillsLabels.Beginner

const AdminAccounts = ({ information }: Props): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const currentItem = information[currentPage - 1]

  return (
    <DetailsTable
      removeNavBar={true}
      removeThreeLines={false}
      titleEnd="freelancer"
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      filters={[]}
      page={currentPage}
      dropdownNode={
        <div className={styles.dropdown}>
          <DynamicPadding desktop="30px" />
          <ButtonChooseList
            initValue="MQL4"
            buttons={['MQL4', 'Logo Design', 'Keyword Research']}
            callback={() => {}}
            buttonPadding={'2px 13px'}
            gap={''}
          />
          <DynamicPadding desktop="30px" />
          <div className={styles.profile_top_level}>
            <UserLevelStat level={currentUserSkill} />
            <Typography variant="body4" color={AppColor.text}>
              {UserSkill.getLevelByLabel(currentUserSkill).level} lvl
            </Typography>
            <Typography
              variant="body4"
              fontWeight="500"
              color={UserSkill.getLevelByLabel(currentUserSkill).color}
            >
              {UserSkill.getLevelByLabel(currentUserSkill).label}
            </Typography>
            <div style={{ flexGrow: '1' }}></div>
            <div className={styles.levels_point}>
              <AppColor.star />
              <Typography variant="body4">3 level points</Typography>
            </div>
          </div>

          <DynamicPadding desktop="15px" />
          <PercentBar currentPercent={22} />
          <DynamicPadding desktop="15px" />

          <div className={styles.profile_bottom_level}>
            <Typography
              variant="subtitle"
              fontWeight="500"
              textLineHeight="80%"
            >
              <div className={styles.text_flex}>
                {' '}
                31{' '}
                <Typography
                  textLineHeight="80%"
                  variant="body4"
                  color={AppColor.transparentBlack}
                >
                  of 150 XP
                </Typography>
              </div>
            </Typography>
            <Typography
              fontWeight="500"
              color={AppColor.orange}
              variant="body4"
            >
              22%
            </Typography>
          </div>
          <DynamicPadding desktop="22px" />
          <HorizontalLine />
          <DynamicPadding desktop="5px" />
        </div>
      }
      details={
        currentItem != null
          ? [
              {
                title: 'Name',
                selecrable: true,
                maxWidth: '250px',
                child: (
                  <div className="gap_5">
                    <UserAvatar
                      active={true}
                      name={currentItem.user.name}
                      flag={<AppColor.UkraineFlagIcon />}
                      variant="row"
                      activeAgo="1 min ago"
                    />
                  </div>
                ),
              },
              {
                title: 'Categories',
                maxWidth: '110px',
                child: (
                  <div>
                    <Typography textLineHeight="1">
                      {currentItem.categories}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Type',
                maxWidth: '130px',
                child: (
                  <Typography variant="body4">{currentItem.type}</Typography>
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
                title: 'Categories',
                child: <></>,
              },
              {
                title: 'Type',
                child: <></>,
              },
            ]
      }
    />
  )
}

type Props = {
  information: DetailsTableAccountsItem[]
}

export type DetailsTableAccountsItem = {
  user: userModel
  categories: string
  type: string
}

export default AdminAccounts
