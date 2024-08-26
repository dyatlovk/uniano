import ButtonsSelectList from '@common/components/ButtonsSelectList/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
  id: number
}
const StepThree = ({ onReady, id }: Props): JSX.Element => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  return (
    <ResponsiveLayoutTwo
      item1={
        <div>
          <ButtonsSelectList
            key={id}
            callback={item => {
              setSelectedSkills(item)
              if (item.length === 0) onReady('')
              if (item.length > 0) onReady(item.join(', '))
            }}
            gap="20px"
            text={[
              'HTML/CSS',
              'React',
              'Angular',
              'PostgreSQL',
              'JavaScript',
              'Vue.js',
              'MongoDB',
              'Web Application Security',
              'WordPress',
              'Joomla',
              'PHP',
              'Python',
              'Ruby',
              'Java',
              'C#',
              'Django',
              'Git',
              'RESTful API',
              'Laravel',
              'Web Servers',
              'SEO',
              'Spring',
              'MySQL',
              'Cross-browser Compatibility',
              'Testing and Debugging',
              'Drupal',
              'Frontend Development',
              'Backend Development',
            ]}
          />

          <DynamicPadding desktop="26px" mobile="20px" />

          <div className="gap_5">
            <Typography
              variant="body4"
              fontWeight="500"
              color={AppColor.transparentBlack}
            >
              Selected
            </Typography>
            <Typography
              variant="body4"
              fontWeight="500"
              color={AppColor.orange}
            >
              {selectedSkills.length} skill
            </Typography>
          </div>
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

export default StepThree
