import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'

interface Props {
  onReady: () => void
}
const SpecsStep = ({ onReady }: Props): JSX.Element => {
  const [active, setActive] = useState<string>('forms')
  const [counter, setCounter] = useState<number>(0)
  const [onAttachDocClick, setAttachDocClick] = useState<boolean>(false)
  const inputMaxSymbols = 3000

  return (
    <div className={styles.wrapper}>
      <Item
        title={'Specification Forms'}
        selectedText={'3 533 Available'}
        onClick={() => {
          setActive('forms')
          onReady()
        }}
        isActive={active === 'forms'}
      />
      <Item
        selectedText={'With Attachments'}
        title={'Custom text'}
        onClick={() => {
          setActive('custom')
          onReady()
        }}
        isActive={active === 'custom'}
      />

      {active === 'forms' && <>forms</>}

      {active === 'custom' && (
        <div>
          <div className={styles.textarea}>
            <InputCommon
              padding="0"
              multiLine={true}
              placeholder={''}
              maxSymbolCount={inputMaxSymbols}
              callback={(item: string) => {
                setCounter(item.length)
              }}
              boxShadowNone={true}
            />
            <div>
              <span>{counter}</span>
              <span>/</span>
              <span>{inputMaxSymbols}</span>
            </div>
          </div>
          {onAttachDocClick && <DocSection />}

          <DynamicPadding desktop="30px" />

          <div
            className={styles.attach_docs}
            onClick={() => {
              setAttachDocClick(prev => !prev)
            }}
          >
            <MyCheckbox
              width={'20px'}
              height={'20px'}
              basicValue={onAttachDocClick}
            />
            <Typography textLineHeight="1" variant="body5">
              Attach documents to sign
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}

interface ItemProps {
  onClick: () => void
  isActive: boolean
  title: string
  selectedText: string
}
const Item = ({
  onClick,
  isActive,
  title,
  selectedText,
}: ItemProps): JSX.Element => {
  return (
    <div
      className={isActive ? styles.item_active : styles.item}
      onClick={() => {
        onClick()
      }}
    >
      <div className="gap_10">
        <div className={styles.orange}>
          <AppColor.layers width={15} height={16} />
        </div>
        <Typography
          variant="body5"
          fontWeight="500"
          textTransform="uppercase"
          color={AppColor.text}
        >
          {title}
        </Typography>
      </div>
      <Typography variant="body4" fontWeight="500">
        {selectedText}
      </Typography>
    </div>
  )
}

const DocSection = (): JSX.Element => {
  return (
    <div className={styles.docs}>
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
              <Typography fontWeight="500">Freelancer co....pdf</Typography>
            </div>
            <div>
              <Typography variant="body4" color={AppColor.text}>
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
              <Typography fontWeight="500">Freelancer co....pdf</Typography>
            </div>
            <div>
              <Typography variant="body4" color={AppColor.text}>
                432.1 KB
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <DynamicPadding desktop="30px" />
      <div className={styles.dropzone}>
        <AppColor.attach width={15} />
        <Typography variant="body3">attach files (max 100 mb)</Typography>
      </div>
    </div>
  )
}

export default SpecsStep
