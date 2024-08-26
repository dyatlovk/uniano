import mascot from '@assets/images/mascot.png'
import threeD from '@assets/images/threeD.png'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
  id: number
}
const StepThree = ({ onReady, id }: Props): JSX.Element => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  function handleSkill(title: string): void {
    let exists = selectedSkills
    if (selectedSkills.find(el => el === title)) {
      const newList = exists.filter(el => el !== title)
      setSelectedSkills(newList)
      exists = newList
    }

    if (!selectedSkills.find(el => el === title)) {
      exists.push(title)
      setSelectedSkills(exists)
    }

    onReady(exists.join(', '))
  }

  return (
    <ResponsiveLayoutTwo
      item1={
        <div>
          <CenterShadowBox
            elements={[
              <LogosSection
                onChange={(title: string, state: boolean) => {
                  handleSkill(title)
                }}
              />,
              <FormatSection
                onChange={(title: string, state: boolean) => {
                  handleSkill(title)
                }}
              />,
            ]}
            gap={'30px'}
            align="start"
            paddingBoxDesktop={'30px'}
          />
        </div>
      }
      item2={<Help />}
      gap="80px"
      item1MaxWidth="692px"
      item2MaxWidth="388px"
    />
  )
}

const Help = (): JSX.Element => {
  return (
    <div className={styles.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={styles.ul_wrapper}>
        <li>
          <Typography variant="body4">
            Build responsive WordPress site with booking/payment functionality
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Graphic designer needed to design ad creative for multiple campaigns
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Facebook ad specialist needed for product launch
          </Typography>
        </li>
      </ul>
    </div>
  )
}

interface SectionsProps {
  onChange: (title: string, state: boolean) => void
}
const LogosSection = ({ onChange }: SectionsProps): JSX.Element => {
  return (
    <div>
      <Typography>Logo Style</Typography>
      <DynamicPadding desktop="20px" />
      <div className={styles.attr_list}>
        <AttrItem
          title={'Mascot'}
          icon={<img src={mascot} height={'20px'} />}
          onClick={onChange}
        />
        <AttrItem
          title={'3D'}
          icon={<img src={threeD} height={'20px'} />}
          onClick={onChange}
        />
      </div>
    </div>
  )
}

const FormatSection = ({ onChange }: SectionsProps): JSX.Element => {
  return (
    <div>
      <Typography>File Format</Typography>
      <DynamicPadding desktop="20px" />
      <div className={styles.attr_list}>
        <AttrItem
          title={'PNG'}
          icon={<AppColor.pngBox width={20} />}
          onClick={onChange}
        />
        <AttrItem
          title={'JPG'}
          icon={<AppColor.jpgBox width={20} />}
          onClick={onChange}
        />
        <AttrItem
          title={'GIF'}
          icon={<AppColor.gifBox width={20} />}
          onClick={onChange}
        />
        <AttrItem
          title={'PDF'}
          icon={<AppColor.pdfBox width={20} />}
          onClick={onChange}
        />
      </div>
    </div>
  )
}

interface AttrProps {
  title: string
  icon: ReactNode
  onClick: (title: string, state: boolean) => void
}
const AttrItem = ({ title, onClick, icon }: AttrProps): JSX.Element => {
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <div
      className={styles.attr_item}
      onClick={() => {
        setSelected(prev => !prev)
        onClick(title, selected)
      }}
    >
      <MyCheckbox
        disabled={true}
        basicValue={selected}
        width={'22px'}
        height={'22px'}
      />
      {icon}
      <Typography fontWeight={selected ? '500' : '400'} variant="body4">
        {title}
      </Typography>
    </div>
  )
}

export default StepThree
