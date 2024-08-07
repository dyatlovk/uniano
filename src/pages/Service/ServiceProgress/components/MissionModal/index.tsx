import ButtonChooseList from "@common/components/ButtonChooseList/index"
import { RoadmapFlex } from "@common/components/Header/Header/components/NewsPopUp/components/Roadmap/index"
import ModalCenterBasic from "@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index"
import MyButtonOrange from "@common/components/ui/MyButton/variants/MyButtonOrange"
import Typography from "@common/components/ui/Typography/Typography"

interface MissionModalProps {
  onClose: () => void
}
const MissionModal = ({ onClose }: MissionModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      bottomPartPadding="0px"
      callbackClose={() => {
        onClose()
      }}
      title="Pro Missions"
      nodeAfterTitle={
        <ButtonChooseList
          buttonPadding="4px 13px"
          buttons={['Start', 'Pro', 'Ultimate']}
          callback={() => {}}
          gap="0px"
          initValue="Fixed"
        />
      }
    >
      <Typography style={{ padding: '30px 30px' }} variant="body4">
        Freelancers create some tasks to achieve. After successful completion
        you can get valuable rewards.
      </Typography>
      <RoadmapFlex
        text="Provide complete information about yourself"
        title="Entrance challenge"
        completed={true}
        steps="1 of 12 completed"
      />
      <RoadmapFlex
        text="Provide complete information about yourself"
        title="Entrance challenge"
        completed={true}
        steps="1 of 12 completed"
      />

      <div style={{ padding: '30px' }} className="flex_end">
        <MyButtonOrange
          onClick={() => {}}
          fontWeight="500"
          textTransform="uppercase"
        >
          Change pro plan $25/month
        </MyButtonOrange>
      </div>
    </ModalCenterBasic>
  )
}

export default MissionModal
