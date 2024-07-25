import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import FiltersManager from '@common/domain/Partnership/filters'
import useUpdater from '@common/helpers/useUpdater'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './style.module.scss'

interface SkillType {
  title: string
}

interface SkillsProps {
  title?: string
  items: SkillType[]
  callbackSelected: (id: number, title: string) => void
}

const SkillsFilter = ({
  title = 'Skills',
  items,
  callbackSelected,
}: SkillsProps) => {
  const update = useUpdater()
  const [filterManager, setFilterManager] = useState<FiltersManager>(
    new FiltersManager()
  )

  return (
    <div className={styles.skills}>
      <Typography variant="body3" fontWeight="500">
        {title}
      </Typography>
      <DynamicPadding desktop="20px" mobile="15px" />
      <div className={styles.skill_wrapper}>
        {items.map((skill: SkillType, idx: number) => (
          <div
            className={classNames(
              filterManager.isInList(idx)
                ? styles.skill_item__selected
                : styles.skill_item
            )}
            key={idx}
            onClick={e => {
              const state = filterManager.toggle(idx)
              if (state) {
                callbackSelected(idx, skill.title)
              }
              update()
            }}
          >
            <Typography variant="body4" fontWeight="500" color="white">
              {skill.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsFilter
