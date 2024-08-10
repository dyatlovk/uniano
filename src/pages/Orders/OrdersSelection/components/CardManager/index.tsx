import { userModel } from '@common/models/user'
import testUserImage from '@assets/images/test-user-image.png'
import bc_image from '@assets/images/card-time-background.png'
import { useGetImage } from '@common/helpers/UseGetImage'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import { DisplayArrayOfDetailsProfile } from '@pages/Partnership/pages/Program/index'

type CardManagerProps = {
  title: string
  user: userModel
  tags: string[]
  programs?: React.ReactNode
  sales?: React.ReactNode
  leads?: React.ReactNode
  earned?: React.ReactNode
  details?: { node: React.ReactNode; title: string }[]
  position?: 'right' | 'center' | 'left'
  borderTopRadius?: string
  disableAbsoluteItems?: boolean
  showCardManagerActions: boolean
  specificIconsEnd?: React.ReactNode[]
  role?: string
  switchButton?: boolean
  links?: string[]
  nodeAfterDetails?: React.ReactNode
  absoluteIcons?: React.ReactNode[]
  onSelect?: (id: number, state: boolean) => void
  id?: number
  initSelect?: boolean
}
const CardManager = ({
  title,
  nodeAfterDetails,
  role,
  user,
  tags,
  programs,
  sales,
  leads,
  earned,
  position,
  borderTopRadius = null,
  specificIconsEnd,
  switchButton,
  absoluteIcons,
  links,
  details,
  onSelect,
  id = 0,
  initSelect = false,
}: CardManagerProps) => {
  const flagImage = useGetImage(`flags/${user.country}`, false)
  const topImageStyles = {
    backgroundImage: `url(${bc_image})`,
    backgroundSize: 'cover', // You can customize these styles based on your requirements
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: 0,
  }

  return (
    <div className={styles.shell}>
      <span className={styles.shell_absolute}>
        <MyCheckbox
          height="22px"
          width="22px"
          basicValue={initSelect}
          callback={item => {
            onSelect(id, item)
          }}
          checkWidth="14px"
        />
      </span>
      <div className={styles.right_abolute}>
        {absoluteIcons ? (
          absoluteIcons.map((item, index) => (
            <div className={styles.box_black}>{item}</div>
          ))
        ) : (
          <div className={styles.box_black}>
            <AppColor.completed width={'15px'} height={'15px'} />
          </div>
        )}
      </div>
      <div
        style={
          borderTopRadius != null
            ? {
                ...topImageStyles,
                borderTopLeftRadius: borderTopRadius,
                borderTopRightRadius: borderTopRadius,
              }
            : { ...topImageStyles }
        }
        className={styles.shell_top_image}
      >
        <Typography variant="body5" color="white">
          {title}
        </Typography>
        <div className={styles.content_top_first}>
          <div style={{ position: 'relative', display: 'flex' }}>
            <img
              src={testUserImage}
              alt="userImage"
              height={'38px'}
              width={'38px'}
            />
            <div className={styles.active_item}></div>
          </div>
          <div>
            <img src={flagImage} alt="countryFlag" />
            <span className={styles.name}>
              <Typography variant="body5" color="white">
                {user.name}
              </Typography>
            </span>
            <Typography
              textLineHeight="1.2"
              variant="body5"
              color={AppColor.orange}
            >
              {role ?? 'Manager'}
            </Typography>
          </div>
        </div>
        <div className={styles.content_top_second}>
          <SvgText
            nodeImg={<AppColor.star fill="white" />}
            text={`${user.statistic.rating}%`}
          />
          <SvgText
            nodeImg={<AppColor.fiveOfFive />}
            text={`${user.lvl} lvl`}
            additionText="Lead"
            addTextColor={AppColor.red}
          />
        </div>
        {links != null && <SizeBox height="15px" />}
        {links != null && (
          <div className={styles.links_wrapper}>
            <DisplayArrayOfDetailsProfile array={links} />
          </div>
        )}
        <div className={styles.tags_wrapper}>
          {tags.map(tag => (
            <TagDisplay text={tag} />
          ))}
        </div>
      </div>
      <div className={styles.shell_middle}>
        {details != null ? (
          <>
            {details.map(item => (
              <StatisticItem text={item.title} endNode={item.node} />
            ))}
            {nodeAfterDetails}
          </>
        ) : (
          <>
            <StatisticItem text="Programs" endNode={programs} />
            <StatisticItem text="Sales" endNode={sales} />
            <StatisticItem text="Leads" endNode={leads} />
            <StatisticItem text="Earned" endNode={earned} />
          </>
        )}
      </div>
      <div className={styles.shell_bottom}>
        {specificIconsEnd != null ? (
          <>{...specificIconsEnd}</>
        ) : (
          <>
            <AppColor.speficChevronRight />
            <AppColor.message fill={AppColor.text} />
          </>
        )}
      </div>
    </div>
  )
}

type svgTextProps = {
  img?: string
  text: string
  nodeImg?: any
  additionText?: string
  addTextColor?: string
}
const SvgText = ({
  img,
  text,
  nodeImg,
  addTextColor,
  additionText,
}: svgTextProps) => {
  return (
    <div className={styles.svgText}>
      {nodeImg == null ? <img src={img} alt="img" /> : nodeImg}
      <Typography textLineHeight={'100%'} variant="body5" color="white">
        {text}
      </Typography>
      <Typography textLineHeight={'100%'} variant="body5" color={addTextColor}>
        {additionText}
      </Typography>
    </div>
  )
}

type TagDisplayProps = {
  text: string
}
const TagDisplay = ({ text }: TagDisplayProps) => {
  return (
    <span className={styles.tag}>
      <Typography
        textLineHeight={'100%'}
        variant="body5"
        color={AppColor.white}
      >
        {text}
      </Typography>
    </span>
  )
}

type StatisticItemProps = {
  text: string
  endNode: React.ReactNode
}
const StatisticItem = ({ text, endNode }: StatisticItemProps) => {
  return (
    <div className={styles.static_wrapper}>
      <div className={styles.static_text}>
        <Typography
          textLineHeight="80%"
          variant="body4"
          color={AppColor.transparentBlack}
        >
          {text}
        </Typography>
      </div>
      <div className={styles.dots}></div>
      {endNode}
    </div>
  )
}
export default CardManager
