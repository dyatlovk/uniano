import AdminGuides from '@common/components/ui/DetailsTable/variants/AdminGuides/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import AddTask from '@pages/AdminPannel/components/Gamification/AddTask/index'
import FluidLayout from '@pages/AdminPannel/components/PageLayouts/Fluid/index'
import { useState } from 'react'
import styles from './style.module.scss'

const Customers = (): JSX.Element => {
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false)

  return (
    <FluidLayout
      titleOptions={{
        title: 'Customers Guide',
        after: (
          <div
            className={styles.orange_circle}
            onClick={() => {
              setShowAddTaskModal(true)
            }}
          >
            <AppColor.plus stroke="white" />
          </div>
        ),
        stretchLine: true,
        atEnd: <TitleSwitchers onActive={undefined} onCreate={undefined} />,
      }}
    >
      <DynamicPadding desktop="50px" />
      <SearchFilterBar />
      <DynamicPadding desktop="50px" />

      <AdminGuides
        information={[
          {
            guide: 'Getting started',
            complitions: '3',
            reward: '25',
            status: 'Active',
          },
        ]}
      />

      {showAddTaskModal && (
        <AddTask
          onCancel={() => {
            setShowAddTaskModal(false)
          }}
          onClose={() => {
            setShowAddTaskModal(false)
          }}
          onSave={() => {
            setShowAddTaskModal(false)
          }}
        />
      )}
    </FluidLayout>
  )
}

const TitleSwitchers = ({
  onActive,
  onCreate,
}: TitleSwitchProps): JSX.Element => {
  return (
    <div className={styles.title_switchers}>
      <div className="gap_10">
        <Typography variant="body4">Create</Typography>
        <SwitchButton
          startValue={true}
          callback={onCreate}
          width="44px"
          height="24px"
        />
      </div>
      <div className="gap_10">
        <Typography variant="body4">Active</Typography>
        <SwitchButton
          startValue={true}
          callback={onActive}
          width="44px"
          height="24px"
        />
      </div>
    </div>
  )
}

interface TitleSwitchProps {
  onCreate: (state: boolean) => void
  onActive: (state: boolean) => void
}

export default Customers
