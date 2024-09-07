import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
import MyCheckbox from '../../../inputs/Checkbox'
import HorizontalLine from '../../../Lines/HorizontalLine'
import SizeBox from '../../../SizeBox'
import UserAvatar from '../../../UserAvatar'
import styles from './style.module.scss'

type DetailsTableTicketsAdminProps = {
  information: DetailsTableTicketsAdminItem[]
  tableCounterLabel?: string
}

export type DetailsTableTicketsAdminItem = {
  user: userModel
  date: string
  time: string
  recipients: string
  emails: string
  unsubscribes: string
  status: string
}
const DetailsTableTicketsAdmin = ({
  information,
  tableCounterLabel = 'post',
}: DetailsTableTicketsAdminProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = information[currentPage - 1]
  const [showUserAnswer, setShowUserAnswer] = useState<boolean>(false)

  return (
    <DetailsTable
      removeNavBar={true}
      titleEnd={tableCounterLabel}
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      filters={['All', 'Sent', 'Scheduled', 'Draft']}
      page={currentPage}
      dropdownNode={
        <div>
          <DynamicPadding desktop="30px" mobile="20px" />
          <div className={styles.dropdow_grid}>
            <TextItem
              title="ID"
              minWidth="55px"
              node={
                <Typography variant="body4" fontWeight="500">
                  332
                </Typography>
              }
            />
            <TextItem
              title="Date"
              node={
                <Typography variant="body4" fontWeight="500">
                  <div>{currentItem.date}</div>
                  <div>{currentItem.time}</div>
                </Typography>
              }
            />
            <TextItem
              title="Freelancer"
              node={
                <UserAvatar
                  width="22px"
                  height="22px"
                  url={fakeUserConstant.image}
                  active={true}
                  preventMobileNone={true}
                  name={fakeUserConstant.name}
                />
              }
            />
            <TextItem
              title="Survey"
              node={
                <div
                  className={styles.hover_link}
                  onClick={() => {
                    setShowUserAnswer(prev => !prev)
                  }}
                >
                  <Typography
                    variant="body4"
                    color={AppColor.transparentBlack}
                    fontWeight="500"
                  >
                    View
                  </Typography>
                </div>
              }
            />
            <div style={{ flexGrow: '1' }}></div>
            <div className={styles.arrowMenu}>
              <AppColor.arrowRight width={7} height={12} />
            </div>
          </div>
          <DynamicPadding desktop="30px" mobile="20px" />

          <HorizontalLine />

          {showUserAnswer && (
            <div>
              <AnswerRow />
              <HorizontalLine />
            </div>
          )}
        </div>
      }
      details={
        currentItem != null
          ? [
              {
                title: 'Script',
                selecrable: true,
                maxWidth: '250px',
                child: (
                  <div>
                    <div className="gap_5">
                      <Typography
                        style={{ whiteSpace: 'nowrap' }}
                        variant="body4"
                        fontWeight="500"
                      >
                        Completed project
                      </Typography>
                      <Typography
                        style={{ whiteSpace: 'nowrap' }}
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.transparentBlack}
                      >
                        (survey){' '}
                      </Typography>
                    </div>
                    <Typography
                      style={{ whiteSpace: 'nowrap' }}
                      variant="body5"
                      color={AppColor.transparentBlack}
                    >
                      1 time in 24 hrs after condition
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Date',
                maxWidth: '110px',
                child: (
                  <Typography variant="body4">
                    <div>{currentItem.date}</div>
                    <div>{currentItem.time}</div>
                  </Typography>
                ),
              },
              {
                title: 'Recipients',
                maxWidth: '130px',
                child: (
                  <Typography variant="body4">
                    {currentItem.recipients}
                  </Typography>
                ),
              },
              {
                title: 'Emails',
                child: (
                  <Typography variant="body4">{currentItem.emails}</Typography>
                ),
              },
              {
                title: 'Unsubscribes',
                child: (
                  <Typography variant="body4">
                    {currentItem.unsubscribes}
                  </Typography>
                ),
              },
              {
                title: 'Status',
                child: (
                  <Typography variant="body4" color={AppColor.orange}>
                    {currentItem.status}
                  </Typography>
                ),
              },
            ]
          : [
              {
                title: 'Script',
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
                title: 'Recipients',
                child: <></>,
              },
              {
                title: 'Emails',
                child: <></>,
              },
              {
                title: 'Unsubscribes',
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

type TextItemProps = {
  title: string
  node: React.ReactNode
  minWidth?: string
}
const TextItem = ({ node, title, minWidth = 'fit-content' }: TextItemProps) => {
  return (
    <div className={styles.text_item} style={{ minWidth: minWidth }}>
      <Typography variant="body5" color={AppColor.transparentBlack}>
        {title}
      </Typography>
      <SizeBox height="2px" />
      {node}
    </div>
  )
}

const AnswerRow = (): JSX.Element => {
  return (
    <div className={styles.answer_row}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          maxWidth: '250px',
        }}
        className={styles.answer_col}
      >
        <MyCheckbox width="22px" height="22px" />
        <div>
          <Typography>
            Completed all guides{' '}
            <span style={{ color: AppColor.transparentBlack }}>(text)</span>
          </Typography>
          <Typography color={AppColor.transparentBlack} variant="body5">
            1 time after condition
          </Typography>
        </div>
      </div>
      <div style={{ maxWidth: '99px' }} className={styles.anwser_col}>
        <Typography variant="body4">
          <div>Feb 26, 2021</div>
          <div>16:32</div>
        </Typography>
      </div>
      <div style={{ maxWidth: '130px' }} className={styles.answer_col}>
        <Typography variant="body4">Freelancer</Typography>
      </div>
      <div style={{ textAlign: 'center' }} className={styles.answer_col}>
        <Typography variant="body4">30 194</Typography>
      </div>
      <div style={{ textAlign: 'center' }} className={styles.answer_col}>
        <Typography variant="body4">5%</Typography>
      </div>
      <div style={{ textAlign: 'center' }} className={styles.answer_col}>
        <Typography color={AppColor.green} variant="body4">
          Sent
        </Typography>
      </div>
      <div className={styles.answer_col}>
        <AppColor.threeLines />
      </div>
    </div>
  )
}

export default DetailsTableTicketsAdmin
