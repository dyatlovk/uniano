import { User, UserSkill } from '@common/models/users/levels'
import PercentBar from '../PercentBar/PercentBar'
import SizeBox from '../SizeBox'
import Typography from '../Typography/Typography'
import styles from './style.module.scss'

type LevelProgressProps = {
  level: User.SkillsLabels
}

const LevelProgress = ({ level }: LevelProgressProps) => {
  return (
    <div className={styles.wrapper}>
      <div style={{ position: 'relative' }}>
        <SizeBox height="100px" />
        <PercentBar
          color={UserSkill.getLevelByLabel(level).color}
          currentPercent={UserSkill.findLevelPosition(level)}
        />

        <AbsoluteItemDetails
          accentColor={
            UserSkill.getLevelByLabel(User.SkillsLabels.Beginner).color
          }
          leftPercentPosition="0%"
          profit="10"
          riched={UserSkill.isLevelRiched(User.SkillsLabels.Beginner, level)}
          title={User.SkillsLabels.Beginner}
        />

        <AbsoluteItemDetails
          accentColor={
            UserSkill.getLevelByLabel(User.SkillsLabels.Junior).color
          }
          leftPercentPosition="25%"
          profit="30"
          riched={UserSkill.isLevelRiched(User.SkillsLabels.Junior, level)}
          title={User.SkillsLabels.Junior}
          pointsCount={UserSkill.getLevelByLabel(
            User.SkillsLabels.Junior
          ).points.min.toString()}
        />

        <AbsoluteItemDetails
          accentColor={
            UserSkill.getLevelByLabel(User.SkillsLabels.Middle).color
          }
          leftPercentPosition="50%"
          profit="80"
          riched={UserSkill.isLevelRiched(User.SkillsLabels.Middle, level)}
          title={User.SkillsLabels.Middle}
          pointsCount={UserSkill.getLevelByLabel(
            User.SkillsLabels.Middle
          ).points.min.toString()}
        />

        <AbsoluteItemDetails
          accentColor={
            UserSkill.getLevelByLabel(User.SkillsLabels.Senior).color
          }
          leftPercentPosition="75%"
          profit="150"
          riched={UserSkill.isLevelRiched(User.SkillsLabels.Senior, level)}
          title={User.SkillsLabels.Senior}
          pointsCount={UserSkill.getLevelByLabel(
            User.SkillsLabels.Senior
          ).points.min.toString()}
        />

        <AbsoluteItemDetails
          accentColor={UserSkill.getLevelByLabel(User.SkillsLabels.Lead).color}
          leftPercentPosition="100%"
          profit="200"
          riched={UserSkill.isLevelRiched(User.SkillsLabels.Lead, level)}
          title={User.SkillsLabels.Lead}
          pointsCount={UserSkill.getLevelByLabel(
            User.SkillsLabels.Lead
          ).points.min.toString()}
        />
        <SizeBox height="50px" />
      </div>
    </div>
  )
}

type AbsoluteItemDetailsProps = {
  title: string
  profit: string
  pointsCount?: string
  accentColor: string
  riched: boolean
  leftPercentPosition: string
}
const AbsoluteItemDetails = ({
  pointsCount,
  profit,
  title,
  accentColor,
  riched,
  leftPercentPosition,
}: AbsoluteItemDetailsProps) => {
  return (
    <div
      style={{ opacity: riched ? '1' : '0.3', left: leftPercentPosition }}
      className={styles.abs_item_details}
    >
      <div className={styles.round_circle}>
        <Typography textLineHeight="1" variant="body5" fontWeight="500">
          ${profit}+
        </Typography>
      </div>
      <SizeBox height="10px" />

      <Typography
        textLineHeight="1"
        color={accentColor}
        variant="body3"
        fontWeight="500"
      >
        {title}
      </Typography>

      <SizeBox height="40px" />
      <Typography
        textLineHeight="1"
        variant="body4"
        fontWeight="500"
        color={pointsCount ? accentColor : 'transparent'}
      >
        {pointsCount} Points
      </Typography>
    </div>
  )
}

export default LevelProgress
