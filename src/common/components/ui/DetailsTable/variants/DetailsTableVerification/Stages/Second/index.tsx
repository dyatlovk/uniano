import acceptPassImg from '@assets/images/accepted_passport.png'
import checkPassImg from '@assets/images/check_passport.png'
import notAcceptPassImg from '@assets/images/not_accept_passport.png'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentRed from '@common/components/ui/MyButton/variants/MyButtonTransparentRed'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { Photo } from '../../Shared/Photo'
import reqStyles from '../../Shared/Requirements/style.module.scss'
import styles from './style.module.scss'

const SecondStage = (): JSX.Element => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.col}>
          <Typography color={AppColor.transparentBlack}>
            Issued Country
          </Typography>
          <DynamicPadding desktop="15px" />
          <InputCommon
            width="100%"
            padding="8.4px 15px"
            placeholder=""
            callback={(title: string) => {}}
          />
          <DynamicPadding desktop="20px" />
          <Photo title="ID Front" imgPath={checkPassImg} status={'Checking'} />
        </div>

        <div className={styles.col}>
          <Typography color={AppColor.transparentBlack}>
            ID Card Number
          </Typography>
          <DynamicPadding desktop="15px" />
          <InputCommon
            width="100%"
            padding="8.4px 15px"
            placeholder=""
            callback={(title: string) => {}}
          />
          <DynamicPadding desktop="20px" />
          <Photo title="ID Back" imgPath={acceptPassImg} status={'Accepted'} />
        </div>

        <div className={styles.col}>
          <Typography color={AppColor.transparentBlack}>
            Expiration Date
          </Typography>
          <DynamicPadding desktop="15px" />
          <InputCommon
            width="100%"
            padding="8.4px 15px"
            placeholder=""
            callback={(title: string) => {}}
          />
          <DynamicPadding desktop="20px" />
          <Photo
            title="Selfie with ID"
            imgPath={notAcceptPassImg}
            status={'NotAccepted'}
          />
        </div>
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
              Please include a picture of yourself holding the document and a
              piece of paper next to your face. Write 'Uniano' and today's date
              on the paper. Please make sure that the information on the
              document is clear, readable and identical to the data you have
              indicated in the request form, including: Full name, Date of
              birth.
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              The identification document should expire in at least 6 months or
              more at the time of application submission.
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              Please note that a driver's license can only be attached by US
              residents.
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              All information from your ID must be readable
            </Typography>
          </li>
          <li>
            <Typography variant="body4">
              The size of one image must be less than 10 MB
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

export default SecondStage
