import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentRed from '@common/components/ui/MyButton/variants/MyButtonTransparentRed'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import reqStyles from '../../Shared/Requirements/style.module.scss'

const FirstStage = (): JSX.Element => {
  return (
    <>
      <div className={styles.fields_grid}>
        <FieldItem title="First Name" text="Artem" />
        <FieldItem title="Last Name" text="Artem" />
        <FieldItem title="Country" text="Artem" />
        <FieldItem title="State/Province" text="Artem" />
        <FieldItem title="Address Line 1" text="Artem" />
        <FieldItem title="Address Line 2" text="Artem" />
        <FieldItem title="City" text="Artem" />
        <FieldItem title="Post Code" text="Artem" />
      </div>
      <DynamicPadding desktop="20px" mobile="15px" />
      <div className="text_box">
        <Typography variant="body4" fontWeight="500">
          Requirements:
        </Typography>
        <DynamicPadding desktop="20px" mobile="15px" />
        <ul className={reqStyles.ul_item}>
          <li>
            <Typography variant="body4">
              You must be at least 18 y.o. to complete the KYC process.
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              Proof of identity cannot be used as a proof of address.
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              All information must match your proof of identity document and
              proof of address document.
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

type FieldItemProps = {
  title: string
  text: string
}
const FieldItem = ({ text, title }: FieldItemProps) => {
  return (
    <div>
      <Typography
        variant="body4"
        fontWeight="500"
        color={AppColor.transparentBlack}
      >
        {title}
      </Typography>
      <DynamicPadding desktop="20px" mobile="15px" />
      <div className={styles.field_text}>
        <Typography textLineHeight="1" variant="body4">
          {text}
        </Typography>
      </div>
    </div>
  )
}

export default FirstStage
