import { userModel } from "common/models/user";
import Typography from "../../ui/Typography/Typography";
import testUserImage from '@assets/images/test-user-image.png';
import bc_image from '@assets/images/card-time-background.png';
import { useGetImage } from "@common/helpers/UseGetImage";
import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss'
import icon_sponsorship from '@assets/svg/sponsors-icon.svg';
import icon_message from '@assets/svg/message-icon.svg';
import icon_star from '@assets/svg/star.svg';
import icon_comments from '@assets/svg/comments-icon.svg';
import PercentBar from "@common/components/ui/PercentBar/PercentBar";
import { formatNumberWithSpaces } from "@common/helpers/stringFunctions";
import DaysLeftTimer from "@common/components/ui/DaysLeftTimer/DaysLeftTimer";
import CardTypeDisplay from "../CardTypeDisplay/CardTypeDisplay";
import DynamicPadding from "../../ui/DynamicPadding";
import AnimatedSvg from "../../AnimatedSvg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type CardTimeProps = {
    title: string;
    user: userModel;
    tags: string[];
    totalMoneyRange: number;
    currentMoneyRange: number;
    date: Date;
    showBottomActions?: boolean;
    topUsers?: userModel[];
    removeLastElementProps?: boolean;
    setRemoveLastElementProps?: (value: boolean) => void;
    navigateTo?: string;
}
const CardTime = ({title,user,showBottomActions,tags,totalMoneyRange,navigateTo,currentMoneyRange,topUsers,date,removeLastElementProps,setRemoveLastElementProps}:CardTimeProps) => {
    const flagImage = useGetImage(`flags/${user.country}`,false);

    const navigate = useNavigate();

    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }

    const [removeLastElement,setRemoveLastElement] = useState(false);

    useEffect(() => {
        setRemoveLastElement(removeLastElementProps);
    },[removeLastElementProps])

    const today = new Date('2024-3-23');
    const futureDate = new Date(today.getTime() + (53 * 24 * 60 * 60 * 1000) + (3 * 60 * 60 * 1000) + (40 * 60 * 1000) + (20 * 1000));

    const moneyRangePercent = (currentMoneyRange / totalMoneyRange)*100
    return (
      <div className={styles.shell}>
            <span className={styles.shell_absolute}>
                <CardTypeDisplay textColor={AppColor.white} text="Business" backgroundColor={AppColor.text}/>
            </span>
            {topUsers != null &&
              topUsers.map((item,index) => {
                const totalOffset = topUsers.length > 1 ? ((topUsers.length-1)*11) : 0
                const itemOffset = index == 0 ? totalOffset : totalOffset-(index*11);
                return (
                    <div style={{right: `${itemOffset}px`}} className={styles.absolute_users}>
                        <img src={item.image} height={'22px'} width={'22px'} alt="" />
                    </div>
                )
              }
            )
            }
           <div onClick={() => {navigate(navigateTo)}} style={topImageStyles} className={styles.shell_top_image}>
            <Typography variant="body5" color="white">
                {title}
            </Typography>
                <div className={styles.content_top_first}>
                        <div className={styles.image_center} style={{position: 'relative'}}>
                            <img src={testUserImage} alt="userImage" height={'38px'} width={'38px'} />
                            <div className={styles.is_active_status}></div>
                        </div>
                        <div>
                            <img src={flagImage} alt="countryFlag" />
                        <span className={styles.name}>
                            <Typography variant="body5" color="white">
                                    {user.name}
                                </Typography>
                        </span>
                            <Typography variant="body5" color={AppColor.orange}>
                                {user.roles}
                            </Typography>
                        </div>
                </div>
                <div className={styles.content_top_second}>
                        <SvgText img={icon_sponsorship} text={`${user.statistic.sponsorship_count}`}/>
                        <SvgText img={<AppColor.message fill="white"/>} text={`${user.statistic.responses_count}`}/>
                        <SvgText img={icon_star} text={`${user.statistic.rating}%`}/>
                        <SvgText img={icon_comments} text={`${user.statistic.comments_count}`}/>
                </div>
                <div className={styles.tags_wrapper}>
                        {tags.map(tag => <TagDisplay text={tag}/>)}
                </div>
           </div>
           <div className={`${showBottomActions ? styles.middle_part : styles.shell_bottom}`}>
                    <PercentBar currentPercent={moneyRangePercent}/>
                    <div className={styles.bottom_details_money}>
                <div className={styles.bottom_details_money_range}>
                    <Typography variant="body6" textLineHeight="100%">
                            ${formatNumberWithSpaces(currentMoneyRange)} <span> </span>
                            <Typography variant="body5" color={AppColor.transparentBlack} textLineHeight="100%">
                                of ${formatNumberWithSpaces(totalMoneyRange)}
                            </Typography>
                    </Typography>
                </div>
                <Typography variant="body6" textLineHeight="100%" color={AppColor.orange}>
                        {moneyRangePercent}%
                </Typography>
            </div>
            <DynamicPadding desktop="20px" mobile="20px"/>
            <div>
                    <DaysLeftTimer time={futureDate}/>
            </div>
           </div>
           {showBottomActions &&
                <div style={removeLastElement ? {display: 'none'} : {}} className={`${styles.activity_items}`}>
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
             </div>}
      </div>
    );
};

type svgTextProps = {
    img: string | React.ReactNode;
    text: string;
}
const SvgText = ({img,text}: svgTextProps) => {
   return (
    <div className={styles.svgText}>
        {typeof img == 'string' ? <img src={img} alt="" /> : img}
        <Typography textLineHeight={'100%'} variant="body5" color="white">
            {text}
        </Typography>
    </div>
   );
};

type TagDisplayProps = {
    text: string;
}
const TagDisplay = ({text}:TagDisplayProps) => {
    return (
        <span className={styles.tag}>
        <Typography textLineHeight={'100%'} variant="body5" color={AppColor.white}>
            {text}
        </Typography>
        </span>
    );
};
export default CardTime;