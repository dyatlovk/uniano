import InputCommon from '@common/components/ui/inputs/InputCommon/index'

interface Props {
  onReady: (title: string) => void
}

const StepOne = ({ onReady }: Props): JSX.Element => {
  return (
    <>
      <InputCommon
        callback={(item: string) => {
          onReady(item)
        }}
        placeholder={''}
      />
    </>
  )
}

export default StepOne
