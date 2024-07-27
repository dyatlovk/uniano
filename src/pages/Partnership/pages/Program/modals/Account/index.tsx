import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import styles from './style.module.scss'
import { fakeUserConstant } from '@common/models/user'
import Typography from '@common/components/ui/Typography/Typography'
import { PropsWithChildren } from 'react'

interface Props {
  onModalClose: () => void
  cols?: number
  gap?: number
}

const AccountModal = ({
  onModalClose,
  cols = 2,
  gap = 30,
}: Props): JSX.Element => {
  const sectionsStyles = {
    '--cols': cols,
    '--gap': `${gap}px`,
    zIndex: 1,
  }

  return (
    <ModalCenterBasic
      desktopMaxWidth="1260px"
      desktopMinWidth="722px"
      bottomPartPadding="0 30px"
      nodeAfterTitle={
        <UserTopPageInfo user={fakeUserConstant} showTools={false} />
      }
      callbackClose={() => {
        onModalClose()
      }}
      title="Account"
    >
      <div className={styles.sections} style={sectionsStyles}>
        <div className={styles.padding_top}></div>
        <GeneralSection />
        <EduSection />
        <LangSection />
        <CertSection />
        <TeamSection />
        <div className={styles.padding_bot}></div>
      </div>
    </ModalCenterBasic>
  )
}

const GeneralSection = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.section_inner}>
        <h4 className={styles.section_title}>General</h4>
        <div className={styles.list}>
          <ListItem Key="From" value="Dnipro, Ukraine" />
          <ListItem Key="Local time" value="23:51" />
          <ListItem Key="Member since" value="Aug 2021" />
          <ListItem Key="Last visit" value="1 hour ago" />
        </div>
      </div>
    </div>
  )
}

const LangSection = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.section_inner}>
        <h4 className={styles.section_title}>Languages</h4>
        <div className={styles.list}>
          <ListItem Key="English" value="Fluent" />
          <ListItem Key="Russian" value="Native/Bilingual" />
        </div>
      </div>
    </div>
  )
}

const EduSection = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.section_inner}>
        <h4 className={styles.section_title}>Educational</h4>
        <TextItem title="Ukranian National Technical University">
          <Typography variant="body4" color="#01010180">
            M.A. Degree. Ecommerce <br /> Graduated 2017
          </Typography>
        </TextItem>
      </div>
    </div>
  )
}

const CertSection = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.section_inner}>
        <h4 className={styles.section_title}>Cerifications</h4>
        <TextItem title="UX mind School Certificate">
          <Typography variant="body4" color="#01010180">
            Graduated 2017
          </Typography>
        </TextItem>
      </div>
    </div>
  )
}

const TeamSection = (): JSX.Element => {
  return (
    <div className={styles.section}>
      <div className={styles.section_inner}>
        <h4 className={styles.section_title}>Team</h4>
        <div className={styles.list}>
          <ListItem Key="Team size" value="15" />
          <ListItem Key="Year of foundation" value="2014" />
        </div>
      </div>
    </div>
  )
}

interface ListItemProps {
  Key: string
  value: string
}
const ListItem = ({ Key, value }: ListItemProps): JSX.Element => {
  return (
    <div className={styles.list_item}>
      <div>{Key}</div>
      <div className={styles.list_value}>{value}</div>
    </div>
  )
}

interface TextItemProps {
  title: string
}
const TextItem = ({
  title,
  children,
}: PropsWithChildren<TextItemProps>): JSX.Element => {
  return (
    <div className={styles.text_item}>
      <Typography>{title}</Typography>
      {children}
    </div>
  )
}

export default AccountModal
