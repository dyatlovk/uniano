import { fakeUserConstant, userModel } from '@common/models/user'
import Typography from '../../ui/Typography/Typography'
import testUserImage from '@assets/images/test-user-image.png'
import bc_image from '@assets/images/card-time-background.png'
import { useGetImage } from '@common/helpers/UseGetImage'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import icon_sponsorship from '@assets/svg/sponsors-icon.svg'
import icon_message from '@assets/svg/message-icon.svg'
import icon_star from '@assets/svg/star.svg'
import icon_comments from '@assets/svg/comments-icon.svg'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import { formatNumberWithSpaces } from '@common/helpers/stringFunctions'
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer'
import CardTypeDisplay from '../CardTypeDisplay/CardTypeDisplay'
import Urgent from '../../ui/Urgent'
import { CSSProperties, useEffect, useState } from 'react';
import AnimatedSvg from '../../AnimatedSvg'
import UserAvatar from '../../ui/UserAvatar'
import { useNavigate } from 'react-router-dom'
type CardStatisticPartnershipProps = {
    title: string
    user: userModel
    tags: string[]
    rate?: React.ReactNode
    EPC?: React.ReactNode
    details?: {node: React.ReactNode,title: string}[];
    CR?: React.ReactNode
    CR48hours?: React.ReactNode
    dateAgo?: string;
    isUrgent?: boolean;
    cardType?: string;
    iconsAbsolute?: React.ReactNode;
    textTransform?: CSSProperties['textTransform'];
    typeColor?: string;
    links?: string[];
    lvl?: string;
    userDetails?: svgTextProps[];
    imageBorderLeft?: string;
    navigateTo?: string;
    removeLastElementProps?: boolean;
    setRemoveLastElementProps?: (value: boolean) => void;
}
const CardStatisticPartnership = ({
    title,
    user,
    lvl,
    tags,
    links,
    rate,
    EPC,
    userDetails,
    imageBorderLeft,
    CR,
    CR48hours,
    details,
    dateAgo,
    isUrgent,
    cardType,
    navigateTo,
    typeColor,
    textTransform,
    iconsAbsolute,
    removeLastElementProps,
    setRemoveLastElementProps
}: CardStatisticPartnershipProps) => {
    const flagImage = useGetImage(`flags/${user.country}`, false)

    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }
    const today = new Date('2023-11-23');
    const [removeLastElement, setRemoveLastElement] = useState(false);

    useEffect(() => {
        setRemoveLastElement(removeLastElementProps);
    },[removeLastElementProps])
    const navigate = useNavigate();

    const setRemoveLastElementInLocalStorage = () => {
        setRemoveLastElementProps(true);
        localStorage.setItem('removeLastElement', JSON.stringify(true));
    }
    
    return (
        <div className={styles.shell}>
            {cardType && <span className={styles.shell_absolute}>
                <CardTypeDisplay
                    textTransform={textTransform}
                    textColor={typeColor??AppColor.white}
                    text={cardType ?? "Business"}
                    backgroundColor={AppColor.text}
                />
            </span>}
            <div className={styles.right_abolute}>{iconsAbsolute ?? <AppColor.refresh/>}</div>
            <div
                onClick={() => {
                    if(navigateTo) {
                        navigate(navigateTo);
                    }
                }}
                style={{...topImageStyles,borderTopLeftRadius: imageBorderLeft,overflow: 'hidden'}}
                className={`${styles.shell_top_image} cursor`}>
                <Typography variant="body5" color="white">
                    {title}
                </Typography>
                <div className={styles.content_top_first}>
                    <UserAvatar variant='image' active={true} name='name' url={fakeUserConstant.image} />
                    <div>
                        <div className='gap_5'>
                            <img src={flagImage} alt="countryFlag" />
                            <span className={styles.name}>
                                <Typography variant="body5" color="white">
                                    {user.name}
                                </Typography>
                            </span>
                        </div>
                        <Typography
                            variant="body5"
                            color={AppColor.orange}>
                            {user.roles}
                        </Typography>
                    </div>
                </div>
                <div className={styles.content_top_second}>
                   {dateAgo != null
                   ? <Typography variant='body5' color='white'>{dateAgo}</Typography>
                    : 
                    userDetails != null
                    ? <>
                        {userDetails.map(item => <SvgText nodeImg={item.nodeImg} text={item.text} />)}
                    </>
                    : <>
                         <SvgText
                        nodeImg={<AppColor.handshake/>}
                        text={`${user.statistic.sponsorship_count}`}
                    />
                    <SvgText
                        nodeImg={<AppColor.message fill='white' />}
                        text={`${user.statistic.responses_count}`}
                    />
                    <SvgText
                        img={icon_star}
                        text={`${user.statistic.rating}%`}
                    />
                    </>}
                    {isUrgent && <Urgent />}
                    {lvl && <div className='gap_5'>
                            <AppColor.fiveOfFive />
                            <Typography variant='body5' color='white'>{lvl} lvl</Typography>
                            <Typography variant='body5' fontWeight='500' color={AppColor.red}>Lead</Typography>
                        </div>}
                   
                </div>
                {links && <div className={styles.links_wrapper}>
                    {links.map(item => <Typography color='white' textTransform='uppercase' variant='body5' fontWeight='500'>{item}</Typography>)}
                    </div>}
                <div className={styles.tags_wrapper}>
                    {tags.map((tag) => (
                        <TagDisplay text={tag} />
                    ))}
                </div>
            </div>
            <div className={styles.shell_middle}>
            {details != null 
               ? <>
                    {details.map(item =>
                           <StatisticItem
                           text={item.title}
                           endNode={
                               item.node
                           }
                       /> 
                    )}
                </>
                : 
                <>
                    <StatisticItem
                    text="Rate"
                    endNode={
                        rate
                    }
                />

                <StatisticItem
                    text="EPC"
                    endNode={
                       EPC
                    }
                />

                <StatisticItem
                    text="CR"
                    endNode={
                      CR
                    }
                />

                <StatisticItem
                    text="CR for 48 hours"
                    endNode={
                      CR48hours
                }/>
                </>}
                
            </div>
            <div style={removeLastElement ? {display: 'none'} : {}} className={styles.shell_bottom}>
                <AnimatedSvg
                    node1={<AppColor.hearPlus height={'18px'} fill={AppColor.text} />}
                    node2={<AppColor.heartOrange height={'18px'} fill={AppColor.text} />}
                />
                <AnimatedSvg
                    node1={<AppColor.notes height={'18px'} fill={AppColor.text} />}
                    node2={<AppColor.noteOrange height={'18px'} fill={AppColor.text} />}
                />
                <AnimatedSvg
                    node1={<AppColor.eye height={'18px'} fill={AppColor.text} />}
                    node2={<AppColor.eyeOrange onClick={() => {setRemoveLastElementInLocalStorage()}} height={'18px'} fill={AppColor.text} />}
                />
            </div>
        </div>
    )
}

type svgTextProps = {
    img?: string
    text: string
    nodeImg?: any;
}
const SvgText = ({ img, text,nodeImg }: svgTextProps) => {
    return (
        <div className={styles.svgText}>
            { nodeImg == null
            ?<img src={img} alt="img" />
            : nodeImg}
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
export default CardStatisticPartnership
