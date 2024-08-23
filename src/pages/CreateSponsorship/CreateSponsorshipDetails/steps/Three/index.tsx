import ButtonsSelectList from '@common/components/ButtonsSelectList/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'

interface Props {
  onReady: (title: string) => void
  id: number
}
const StepThree = ({ onReady, id }: Props): JSX.Element => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  return (
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
        <Typography variant="body4" fontWeight="500" color={AppColor.orange}>
          {selectedSkills.length} skill
        </Typography>
      </div>
    </div>
  )
}

export default StepThree
