import { SkillsMap, User, UserSkill } from '@common/models/users/levels'

const inactiveColor = '#010101'

interface Props {
  level: User.SkillsLabels
}

const UserLevelStat = (props: Props): JSX.Element => {
  const currentLevel = UserSkill.getLevelByLabel(props.level)
  const activeColor = currentLevel.color
  const currentIdx = currentLevel.level

  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {SkillsMap.map((el, idx) => (
        <rect
          key={idx}
          x={5 * idx}
          y={12 - idx * 3}
          width="4"
          height={6 + idx * 3}
          rx="2"
          fill={currentIdx >= idx + 1 ? activeColor : inactiveColor}
          fillOpacity={currentIdx >= idx + 1 ? '1' : '0.5'}
        />
      ))}
    </svg>
  )
}

export default UserLevelStat
