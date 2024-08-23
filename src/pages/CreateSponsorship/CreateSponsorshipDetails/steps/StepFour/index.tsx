import ImageCardsPlaceholder from '@common/components/ImageCardsPlaceholder/index'
import { useEffect } from 'react'

interface Props {
  onReady: (title: string) => void
}
const StepFour = ({ onReady }: Props): JSX.Element => {
  useEffect(() => {
    onReady('')
  }, [onReady])
  return (
    <>
      <ImageCardsPlaceholder
        images={['', '', '', '']}
        height="350px"
        widthTotalDesktop="730px"
        callback={(item: string[]) => {
          if (item.length === 0) onReady('')
          if (item.length > 0) onReady(item[0])
        }}
      />
    </>
  )
}

export default StepFour
