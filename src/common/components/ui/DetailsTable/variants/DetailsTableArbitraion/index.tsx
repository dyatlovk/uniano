import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import DetailsTable from '../..'
import ArbitrationTable from '../../../ArbitrationTable'
import DynamicPadding from '../../../DynamicPadding'
import styles from './style.module.scss'

type DetailsTableArbitraionProps = {
  information: DetailsTableArbitraionItem[]
}

export type DetailsTableArbitraionItem = {
  user: userModel
  objectProp: string
  id: string
  scope: string
  date: string
  time: string
  category: string
  status: string
}

const DetailsTableArbitraion = ({
  information,
}: DetailsTableArbitraionProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = information[currentPage - 1]

  return (
    <DetailsTable
      removeNavBar={true}
      titleEnd="arbitration"
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      filters={['All', 'My', 'Unsolved', 'Solved', 'Cancelled']}
      page={currentPage}
      dropdownNode={
        <div>
          <DynamicPadding desktop="30px" mobile="20px" />
          <ArbitrationTable />
        </div>
      }
      details={
        currentItem != null
          ? [
              {
                title: 'Object',
                selecrable: true,
                maxWidth: '270px',
                child: (
                  <div className="gap_5">
                    <img
                      src={fakeUserConstant.image}
                      width={'49px'}
                      height={'49px'}
                      alt=""
                    />
                    <Typography variant="body4" fontWeight="500">
                      {currentItem.objectProp}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'ID',
                maxWidth: '110px',
                child: (
                  <Typography variant="body4">{currentItem.id}</Typography>
                ),
              },
              {
                title: 'Scope',
                child: (
                  <Typography variant="body4">{currentItem.scope}</Typography>
                ),
              },
              {
                title: 'Date',
                maxWidth: '110px',
                child: (
                  <Typography variant="body4">
                    <span>{currentItem.date}</span>
                    <br />
                    <span>{currentItem.time}</span>
                  </Typography>
                ),
              },
              {
                title: 'Category',
                maxWidth: '130px',
                child: (
                  <div className={styles.category_wrapper}>
                    <Typography
                      fontSizeStatic="13px"
                      color="white"
                      textTransform="uppercase"
                      fontWeight="500"
                    >
                      {currentItem.category}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Status',
                child: (
                  <div>
                    <Typography
                      color={AppColor.orange}
                      variant="body4"
                      fontWeight="500"
                    >
                      Unsolved
                    </Typography>
                    <div className="gap_5">
                      <AppColor.hummer />
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.transparentBlack}
                      >
                        Arbitrate 1/2
                      </Typography>
                    </div>
                  </div>
                ),
              },
            ]
          : [
              {
                title: 'Object',
                child: (
                  <>
                    <DynamicPadding desktop="30px" mobile="10px" />
                  </>
                ),
              },
              {
                title: 'ID',
                child: <></>,
              },
              {
                title: 'Scope',
                child: <></>,
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
                title: 'Status',
                child: <></>,
              },
            ]
      }
    />
  )
}

export default DetailsTableArbitraion
