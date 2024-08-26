import ImageCardsPlaceholder from '@common/components/ImageCardsPlaceholder/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import { useEffect } from 'react'
import shared from '../../shared/shared.module.scss'

interface Props {
  onReady: (title: string) => void
}
const StepFour = ({ onReady }: Props): JSX.Element => {
  useEffect(() => {
    onReady('Images')
  }, [onReady])
  return (
    <ResponsiveLayoutTwo
      item1={
        <>
          <ImageCardsPlaceholder
            images={['', '', '', '']}
            height="350px"
            widthTotalDesktop="730px"
            callback={(item: string[]) => {
              if (item.length > 0) onReady(item[0])
            }}
          />
        </>
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
    <div className={shared.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={shared.ul_wrapper}>
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

export default StepFour
