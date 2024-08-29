import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import {
  DragList,
  DragListManager,
} from '@common/components/ui/DragnDrop/DragList/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import useUpdater from '@common/helpers/useUpdater'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

const dragListMgr = new DragListManager()

interface Props {
  onCancel: () => void
  onSave: () => void
}
const InterviewModal = ({ onCancel, onSave }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      title={'Interview'}
      desktopMaxWidth={'80%'}
      desktopMinWidth={'80%'}
      desktopMinHeight={'80%'}
      nodesBeforeClose={[<AppColor.template />]}
      callbackClose={() => {
        onCancel()
      }}
      bottomPartPadding={''}
    >
      <ResponsiveLayoutTwo
        item1={<Questions />}
        item2={<Answers />}
        item1MaxWidth={'315px'}
        item2MaxWidth={''}
        gap={'80px'}
      />
    </ModalCenterBasic>
  )
}

const Questions = (): JSX.Element => {
  return (
    <div className={styles.questions}>
      <Typography>0 Questions</Typography>
      <InputCommon
        width="100%"
        callback={() => {}}
        padding={'15px'}
        placeholder={'Please write your question'}
      />
      <AppColor.plusCircle />
    </div>
  )
}

const Answers = (): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>('one_item')
  const [dragItemNeedUpdate, setDragItemNeedUpdate] = useState<boolean>(false)
  const update = useUpdater()

  useEffect(() => {
    if (dragListMgr.count() === 0) update()
    dragListMgr.append({
      id: 1,
      body: (
        <>
          <InputCommon
            width="100%"
            padding="15.5px"
            placeholder={'Good feeling'}
            callback={() => {}}
          />
        </>
      ),
    })
    dragListMgr.append({
      id: 2,
      body: (
        <>
          <InputCommon
            width="100%"
            padding="15.5px"
            placeholder={'Bad feeling'}
            callback={() => {}}
          />
        </>
      ),
    })
    dragListMgr.append({
      id: 3,
      body: (
        <>
          <InputCommon
            width="100%"
            padding="15.5px"
            placeholder={'Middle feeling'}
            callback={() => {}}
          />
        </>
      ),
    })

    return () => {
      dragListMgr.clear()
    }
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Typography color={AppColor.transparentBlack} variant="subtitle">
          Please write your question
        </Typography>
        <HorizontalLine />
      </div>
      <DynamicPadding desktop="50px" />

      <div className={styles.answer_inner}>
        <Typography variant="body3">Answer type</Typography>
        <DynamicPadding desktop="30px" />

        <div className={styles.answer_types}>
          <div
            className={
              selectedType === 'one_item'
                ? styles.answer_type_active
                : styles.answer_type
            }
            onClick={() => {
              setSelectedType('one_item')
            }}
          >
            <AppColor.radioList />
            <Typography variant="body5">One Item</Typography>
            <div className={styles.info}>
              <AppColor.info />
            </div>
          </div>
          <div
            className={
              selectedType === 'multiple_items'
                ? styles.answer_type_active
                : styles.answer_type
            }
            onClick={() => {
              setSelectedType('multiple_items')
            }}
          >
            <AppColor.checkboxList />
            <Typography variant="body5">Multiple Items</Typography>
            <div className={styles.info}>
              <AppColor.info />
            </div>
          </div>
          <div
            className={
              selectedType === 'text'
                ? styles.answer_type_active
                : styles.answer_type
            }
            onClick={() => {
              setSelectedType('text')
            }}
          >
            <AppColor.symbols />
            <Typography variant="body5">Text</Typography>
            <div className={styles.info}>
              <AppColor.info />
            </div>
          </div>
        </div>
        <DynamicPadding desktop="30px" />

        <div className={styles.own_answer}>
          <Typography variant="body4">Add own anwer</Typography>
          <SwitchButton width="44px" height="24px" />
        </div>
        <DynamicPadding desktop="30px" />

        <Typography variant="body3">Answer items</Typography>
        <DynamicPadding desktop="30px" />
        <DragList
          afterDrop={() => {}}
          items={dragListMgr.getAll()}
          forceUpdate={dragItemNeedUpdate}
        />

        <DynamicPadding desktop="20px" />
        <Typography color={AppColor.orange}>Add Item</Typography>
        <DynamicPadding desktop="50px" />

        <div className={styles.add_footer}>
          <div className={styles.add_cancel}>
            <MyButtonTransparent
              fontWeight="500"
              textTransform="uppercase"
              onClick={() => {}}
            >
              Cancel
            </MyButtonTransparent>
          </div>
          <MyButtonOrange
            fontWeight="500"
            textTransform="uppercase"
            onClick={() => {}}
          >
            Save
          </MyButtonOrange>
        </div>
      </div>
    </div>
  )
}

export default InterviewModal
