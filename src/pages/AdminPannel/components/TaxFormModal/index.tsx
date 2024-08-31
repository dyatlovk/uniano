import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'

const TaxFormModal = ({ onCancel, onSave }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      desktopMinWidth="800px"
      desktopMaxWidth="800px"
      bottomPartPadding="29px"
      callbackClose={() => {
        onCancel()
      }}
      title="Tax form settings"
    >
      <>
        <TaxSection />
        <AttachFiles />
        <DynamicPadding desktop="30px" />
        <ResidentSection />
        <DynamicPadding desktop="30px" />
        <ModalButtonsSetup onCancel={onCancel} onSave={onSave} />
      </>
    </ModalCenterBasic>
  )
}

const TaxSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Tax')

  return (
    <>
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        Tax form
      </Typography>
      <DynamicPadding desktop="30px" />
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          selectBoxCss={{
            justifyContent: 'center',
            padding: '13px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '13px 20px' }}
            data={{
              id: 1,
              listNode: <>W-8BN</>,
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '12px 20px' }}
            data={{
              id: 2,
              listNode: <>Y-12G</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

const AttachFiles = (): JSX.Element => {
  return (
    <>
      <DynamicPadding desktop="10px" />
      <div className={styles.attaches}>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography
                variant="body5"
                color={AppColor.text}
                fontWeight="500"
              >
                W-8BEN.pdf
              </Typography>
            </div>
            <div>
              <Typography variant="body5" color={AppColor.transparentBlack}>
                432.1 KB
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography
                variant="body5"
                color={AppColor.text}
                fontWeight="500"
              >
                W-8BEN.pdf
              </Typography>
            </div>
            <div>
              <Typography variant="body5" color={AppColor.transparentBlack}>
                432.1 KB
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ResidentSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Region')

  return (
    <>
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        Resident or citizenship not required to submit{' '}
        <span style={{ color: AppColor.transparentBlack }}>
          (only freelancers and managers)
        </span>
      </Typography>
      <DynamicPadding desktop="30px" />
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          selectBoxCss={{
            justifyContent: 'center',
            padding: '15px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '13px 20px' }}
            data={{
              id: 1,
              listNode: <>Add regions, countries or cities</>,
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '13px 20px' }}
            data={{
              id: 2,
              listNode: <>Add regions</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
      <DynamicPadding desktop="20px" />
      <Label text={'USA'} />
    </>
  )
}

interface LabelProps {
  text: string
}
const Label = ({ text }: LabelProps): JSX.Element => {
  return (
    <div
      style={{
        cursor: 'pointer',
        flexDirection: 'row',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        width: 'fit-content',
        padding: '2px 11.5px',
        borderRadius: AppColor.borderRadius,
        backgroundColor: '#FFD6000F',
        border: '1px solid ' + AppColor.orange,
      }}
    >
      <Typography color={AppColor.orange} variant="body4">
        {text}
      </Typography>
      <AppColor.close width={12} height={12} fill={AppColor.orange} />
    </div>
  )
}

interface Props {
  onCancel: () => void
  onSave: () => void
}

export default TaxFormModal
