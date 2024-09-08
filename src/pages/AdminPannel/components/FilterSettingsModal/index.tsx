import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

const FilterSettingsModal = ({
  onCancel,
  onClose,
  onSave,
}: Props): JSX.Element => {
  const [showAddFilterModal, setShowAddFilterModal] = useState<boolean>(false)

  return (
    <ModalCenterBasic
      callbackClose={onClose}
      desktopMaxWidth="792px"
      desktopMinWidth="792px"
      bottomPartPadding="30px"
      title="Filters Settings"
    >
      <LogoSection />
      <DynamicPadding desktop="30px" mobile="20px" />
      <FileSection />
      <DynamicPadding desktop="30px" mobile="20px" />
      <ModalButtonsSetup onCancel={onCancel} onSave={onSave}>
        <div
          onClick={() => {
            setShowAddFilterModal(true)
          }}
          className={styles.add_filter}
        >
          <Typography fontWeight="500" color={AppColor.orange} variant="body4">
            Add filter
          </Typography>
        </div>
        <div style={{ flexGrow: '1' }}></div>
      </ModalButtonsSetup>

      {showAddFilterModal && (
        <AddFilterModal
          onClose={() => setShowAddFilterModal(false)}
          onCancel={() => setShowAddFilterModal(false)}
          onSave={() => setShowAddFilterModal(false)}
        />
      )}
    </ModalCenterBasic>
  )
}

const LogoSection = (): JSX.Element => {
  const [showAttrModal, setShowAttrModal] = useState<boolean>(false)

  return (
    <div>
      <div className={styles.title_line}>
        <Typography variant="body3">Logo Style</Typography>
        <div
          onClick={() => {
            setShowAttrModal(true)
          }}
          className={styles.plus_icon}
        >
          <AppColor.plus width={14} height={14} />
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <div className={styles.action_setup}>
          <div className={styles.actions}>
            <AppColor.close width={16} height={16} fill={AppColor.red} />
            <AppColor.edit width={16} height={16} fill={AppColor.text} />
          </div>
          <div className={styles.actions} style={{ width: '44px' }}></div>
        </div>
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.grid}>
        <SectionRow title="Minimalist" />
        <SectionRow title="Minimalist" />
        <SectionRow title="Minimalist" />
      </div>

      {showAttrModal && (
        <AddAttr
          onAdd={() => setShowAttrModal(false)}
          onCancel={() => setShowAttrModal(false)}
          onClose={() => setShowAttrModal(false)}
          title="Add logo style attribute"
        />
      )}
    </div>
  )
}

const FileSection = (): JSX.Element => {
  const [showAttrModal, setShowAttrModal] = useState<boolean>(false)

  return (
    <div>
      <div className={styles.title_line}>
        <Typography variant="body3">File Format</Typography>
        <div
          onClick={() => {
            setShowAttrModal(true)
          }}
          className={styles.plus_icon}
        >
          <AppColor.plus width={14} height={14} />
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <div className={styles.action_setup}>
          <div className={styles.actions}>
            <AppColor.close width={16} height={16} fill={AppColor.red} />
            <AppColor.edit width={16} height={16} fill={AppColor.text} />
          </div>
          <div className={styles.actions} style={{ width: '44px' }}></div>
        </div>
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.grid}>
        <SectionRow title="Minimalist" />
        <SectionRow title="Minimalist" />
        <SectionRow title="Minimalist" />
      </div>

      {showAttrModal && (
        <AddAttr
          onAdd={() => setShowAttrModal(false)}
          onCancel={() => setShowAttrModal(false)}
          onClose={() => setShowAttrModal(false)}
          title="Add file format attribute"
        />
      )}
    </div>
  )
}

const SectionRow = ({ title }: SectionRowProps): JSX.Element => {
  return (
    <div className={styles.section_row}>
      <Typography variant="body4">{title}</Typography>
      <div style={{ flexGrow: '1' }}></div>
      <div className={styles.action_setup}>
        <div className={styles.actions}>
          <AppColor.minimalist width={32} height={30} />
          <AppColor.close width={16} height={16} fill={AppColor.red} />
          <AppColor.edit width={16} height={16} fill={AppColor.text} />
        </div>
        <div className={styles.actions}>
          <AppColor.minimalist width={21} height={20} />
          <AppColor.close width={16} height={16} fill={AppColor.red} />
          <AppColor.edit width={16} height={16} fill={AppColor.text} />
        </div>
        <SwitchButton startValue={true} width="44px" height="24px" />
      </div>
    </div>
  )
}

const AddFilterModal = ({
  onCancel,
  onClose,
  onSave,
}: AddFilterProps): JSX.Element => {
  return (
    <ModalCenterBasic
      title="Add filter"
      prevClose={true}
      bottomPartPadding="30px"
      callbackClose={onClose}
      desktopMaxWidth="500px"
      desktopMinWidth="500px"
    >
      <Typography variant="body4">Title</Typography>
      <DynamicPadding desktop="20px" mobile="20px" />
      <InputCommon
        padding="15.5px"
        callback={(item: string) => {}}
        placeholder={'File Format'}
      />
      <DynamicPadding desktop="30px" mobile="20px" />
      <ModalButtonsSetup saveLabel="Add" onCancel={onCancel} onSave={onSave} />
    </ModalCenterBasic>
  )
}

const AddAttr = ({
  onAdd,
  onCancel,
  onClose,
  title,
}: AddAttrProps): JSX.Element => {
  return (
    <ModalCenterBasic
      bottomPartPadding="30px"
      callbackClose={onClose}
      desktopMaxWidth="500px"
      desktopMinWidth="500px"
      prevClose={true}
      title={title}
    >
      <Typography variant="body4">Title</Typography>
      <DynamicPadding desktop="20px" mobile="20px" />
      <InputCommon
        callback={() => {}}
        placeholder="Minimalist"
        padding="15.5px"
      />
      <DynamicPadding desktop="30px" mobile="20px" />

      <div className={styles.files_grid}>
        <div className={styles.file}>
          <Typography fontWeight="500" variant="body4">
            Large Icon
          </Typography>
          <AppColor.minimalist />
          <div className={styles.update_action}>
            <div className={styles.update_icon}>Update Icon</div>
            <AppColor.close fill={AppColor.red} width={15} height={15} />
          </div>
        </div>
        <div className={styles.file}>
          <Typography fontWeight="500" variant="body4">
            Large Icon
          </Typography>
          <AppColor.minimalist />
          <div className={styles.update_action}>
            <div className={styles.update_icon}>Update Icon</div>
            <AppColor.close fill={AppColor.red} width={15} height={15} />
          </div>
        </div>
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <ModalButtonsSetup onCancel={onCancel} onSave={onAdd} saveLabel="Add" />
    </ModalCenterBasic>
  )
}

interface AddAttrProps {
  title: string
  onClose: () => void
  onCancel: () => void
  onAdd: () => void
}

interface SectionRowProps {
  title: string
}

interface AddFilterProps {
  onClose: () => void
  onCancel: () => void
  onSave: () => void
}

interface Props {
  onClose: () => void
  onCancel: () => void
  onSave: () => void
}

export default FilterSettingsModal
