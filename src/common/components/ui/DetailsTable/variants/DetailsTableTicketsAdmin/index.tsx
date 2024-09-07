import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
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
                <Typography
                  variant="body4"
                  color={AppColor.transparentBlack}
                  fontWeight="500"
                >
                  View
                </Typography>
              }
            />
            <div style={{ flexGrow: '1' }}></div>
            <div className={styles.arrowMenu}>
              <AppColor.arrowRight width={7} height={12} />
            </div>
          </div>
          <DynamicPadding desktop="30px" mobile="20px" />

          <HorizontalLine />
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
}
const TextItem = ({ node, title }: TextItemProps) => {
  return (
    <div className={styles.text_item}>
      <Typography variant="body5" color={AppColor.transparentBlack}>
        {title}
      </Typography>
      <SizeBox height="2px" />
      {node}
    </div>
  )
}

export default DetailsTableTicketsAdmin
