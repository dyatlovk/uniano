import docsVerifyImg from '@assets/images/docs_verify.png'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentRed from '@common/components/ui/MyButton/variants/MyButtonTransparentRed'
import Typography from '@common/components/ui/Typography/Typography'
import { useScreenSize } from '@common/helpers/useScreenSize'
import AppColor from '@common/styles/variables-static'
import { Photo } from '../../Shared/Photo'
import reqStyles from '../../Shared/Requirements/style.module.scss'
import styles from './style.module.scss'

const ThirdStage = (): JSX.Element => {
  const windowSize = useScreenSize()

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.col}>
          <Photo
            title="Document"
            imgPath={docsVerifyImg}
            imgHeight={'100%'}
            status={'Checking'}
            imgWidth={windowSize.width < AppColor.tabletSize ? '100%' : 'auto'}
          />
        </div>
      </div>

      <DynamicPadding desktop="20px" mobile="15px" />

      <div className="text_box">
        <Typography variant="body4" fontWeight="500">
          Valid documents include, but are not limited to:
        </Typography>
        <DynamicPadding desktop="20px" mobile="15px" />
        <ul className={reqStyles.ul_item}>
          <li>
            <Typography variant="body4">
              Municipality bill for utility services such as electricity, water,
              sewerage
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              Municipal rates & taxes statement
            </Typography>
          </li>
          <li>
            <Typography variant="body4">Internet service bill</Typography>
          </li>
          <li>
            <Typography variant="body4">Bank statement</Typography>
          </li>
          <li>
            <Typography variant="body4">
              Landline telephone bill (mobile bills are not acceptable)
            </Typography>
          </li>
        </ul>

        <DynamicPadding desktop="20px" mobile="15px" />

        <Typography variant="body4" fontWeight="500">
          Requirements:
        </Typography>
        <DynamicPadding desktop="20px" mobile="15px" />
        <ul className={reqStyles.ul_item}>
          <li>
            <Typography variant="body4">
              The name on the document must be the same as the ID submitted;
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              The address on the document must be the same as the residential
              address entered;
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              Documents must be issued within 3 months;
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              The name, address, issue date, and issuer must be clearly visible
            </Typography>
          </li>
        </ul>
      </div>

      <DynamicPadding desktop="20px" mobile="15px" />
      <div className="justify_center gap_10">
        <MyButtonTransparentRed textTransform="uppercase" onClick={() => {}}>
          Cancel
        </MyButtonTransparentRed>
        <MyButtonOrange textTransform="uppercase" onClick={() => {}}>
          Verify
        </MyButtonOrange>
      </div>
    </>
  )
}

export default ThirdStage
