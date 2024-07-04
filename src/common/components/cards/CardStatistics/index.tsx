import { userModel } from 'common/models/user'
import Typography from '../../ui/Typography/Typography'
import testUserImage from '@assets/images/test-user-image.png'
import bc_image from '@assets/images/card-time-background.png'
import { useGetImage } from '@common/helpers/UseGetImage'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import icon_sponsorship from '@assets/svg/sponsors-icon.svg'
import icon_message from '@assets/svg/message-icon-white-icon.svg'
import icon_star from '@assets/svg/star.svg'
import icon_comments from '@assets/svg/comments-icon.svg'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import { formatNumberWithSpaces } from '@common/helpers/stringFunctions'
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer'
import CardTypeDisplay from '../CardTypeDisplay/CardTypeDisplay'
import AnimatedSvg from '../../AnimatedSvg'
type CardTimeProps = {
    title: string
    user: userModel
    tags: string[]
    price: React.ReactNode
    payments: React.ReactNode
    delivery: React.ReactNode
    queue: React.ReactNode
}
const CardStatistics = ({
    title,
    user,
    tags,
    delivery,
    payments,
    price,
    queue,
}: CardTimeProps) => {
    const flagImage = useGetImage(`flags/${user.country}`, false)

    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }
    const today = new Date('2023-11-23')
    
    return (
        <div className={styles.shell}>
            <span className={styles.shell_absolute}>
                <CardTypeDisplay
                    textColor={AppColor.white}
                    text="Business"
                    backgroundColor={AppColor.text}
                />
            </span>
            <div
                style={topImageStyles}
                className={styles.shell_top_image}>
                <Typography variant="body5" color="white">
                    {title}
                </Typography>
                <div className={styles.content_top_first}>
                    <img src={testUserImage} alt="userImage" />
                    <div>
                        <img src={flagImage} alt="countryFlag" />
                        <span className={styles.name}>
                            <Typography variant="body5" color="white">
                                {user.name}
                            </Typography>
                        </span>
                        <Typography
                            variant="body5"
                            color={AppColor.orange}>
                            {user.roles}
                        </Typography>
                    </div>
                </div>
                <div className={styles.content_top_second}>
                    <SvgText
                        img={icon_sponsorship}
                        text={`${user.statistic.sponsorship_count}`}
                    />
                    <SvgText
                        img={icon_message}
                        text={`${user.statistic.responses_count}`}
                    />
                    <SvgText
                        img={icon_star}
                        text={`${user.statistic.rating}%`}
                    />
                    <SvgText
                        img={icon_comments}
                        text={`${user.statistic.comments_count}`}
                    />
                </div>
                <div className={styles.tags_wrapper}>
                    {tags.map((tag) => (
                        <TagDisplay text={tag} />
                    ))}
                </div>
            </div>
            <div className={styles.shell_middle}>
                <StatisticItem
                    text="Price"
                    endNode={
                        price
                    }
                />

                <StatisticItem
                    text="Payments"
                    endNode={
                       payments
                    }
                />

                <StatisticItem
                    text="Delivery"
                    endNode={
                      delivery
                    }
                />

                <StatisticItem
                    text="Queue"
                    endNode={
                      queue
                    }
                />
            </div>
            <div className={styles.shell_bottom}>
               <div>
                    <AnimatedSvg
                        node1={<AppColor.hearPlus height={'18px'} fill={AppColor.text} />}
                        node2={<AppColor.heartOrange height={'18px'} fill={AppColor.text} />}
                    />
               </div>
              <div>
                    <AnimatedSvg
                        node1={<AppColor.notes height={'18px'} fill={AppColor.text} />}
                        node2={<AppColor.noteOrange height={'18px'} fill={AppColor.text} />}
                    />
              </div>
               <div>
                    <AnimatedSvg
                        node1={<AppColor.eye height={'18px'} fill={AppColor.text} />}
                        node2={<AppColor.eyeOrange height={'18px'} fill={AppColor.text} />}
                    />
               </div>
            </div>
        </div>
    )
}

type svgTextProps = {
    img: string
    text: string
}
const SvgText = ({ img, text }: svgTextProps) => {
    return (
        <div className={styles.svgText}>
            <img src={img} alt="img" />
            <Typography
                textLineHeight={'100%'}
                variant="body5"
                color="white">
                {text}
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
                color={AppColor.white}>
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
                    color={AppColor.transparentBlack}>
                    {text}
                </Typography>
            </div>
            <div className={styles.dots}></div>
            {endNode}
        </div>
    )
}
export default CardStatistics
