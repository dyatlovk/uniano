import { fakeUserConstant, userModel } from '@common/models/user'

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
import Typography from '@common/components/ui/Typography/Typography'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import { useState } from 'react'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import { DisplayArrayOfDetailsProfile } from '@pages/Partnership/pages/Program/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import MyButtonRed from '@common/components/ui/MyButton/variants/MyButtonRed'

type CardManagerProps = {
    title: string
    user: userModel
    tags: string[]
    programs?: React.ReactNode
    sales?: React.ReactNode
    leads?: React.ReactNode
    earned?: React.ReactNode
    details?: {node: React.ReactNode,title: string}[];
    position?: 'right' | 'center' | 'left'
    borderTopRadius?: string;
    disableAbsoluteItems?: boolean;
    showCardManagerActions: boolean;
    specificIconsEnd?: React.ReactNode[];
    role?: string;
    switchButton?: boolean;
    links?: string[];
    nodeAfterDetails?: React.ReactNode;
    absoluteIcons?: React.ReactNode[];
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
    borderTopRadius=null,
    disableAbsoluteItems=false,
    showCardManagerActions,
    specificIconsEnd,
    switchButton,
    absoluteIcons,
    links,
    details,
}: CardManagerProps) => {
    const flagImage = useGetImage(`flags/${user.country}`, false)
    const [isSelected,setIsSelected] = useState(false);
    const topImageStyles = {
        backgroundImage: `url(${bc_image})`,
        backgroundSize: 'cover', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    }
    const today = new Date('2023-11-23')
    const positionStyle = position == 'right' 
        ? { right: '0' }
        : position == 'left'
        ? {left: '0'}
        : {left: '50%',transform: 'translateX(-50%)'}


    const [cancelModal,setCanceledModal] = useState(false);
    const [cancelText,setCancelText] = useState('');
    const [hired,setHired] = useState(false);

    const [isCancelled,setIsCancelled] = useState(false);
    
    return (
        <div className={styles.shell}>
            {
                cancelModal && <ModalCenterBasic desktopMinWidth='830px' bottomPartPadding='30px' topPartPadding='15px 30px' callbackClose={() => {setCanceledModal(false)}} title='Move to cancelled'
                nodeAfterTitle={
                    <UserAvatar variant='image' active={true} url={fakeUserConstant.image} name='' />
                }
                >
                    <InputCommon maxSymbolCount={300} placeholder='Please write reason of cancel (optional)' padding='15px 20px' callback={(item) => {setCancelText(item)}}/>
                    <SizeBox height='10px' />
                    <div className='flex_end'>
                        <Typography variant='body4' color={AppColor.transparentBlack}>{cancelText.length} / 300</Typography>
                    </div>
                    <SizeBox height='25px' />

                    <div className='flex_end'>
                        <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Close
                        </MyButtonTransparent>
                        <MyButtonRed onClick={() => {setIsCancelled(true);setCanceledModal(false)}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                        </MyButtonRed>
                    </div>
                </ModalCenterBasic>
            }
            {!disableAbsoluteItems && !hired && showCardManagerActions && !isCancelled && <div style={{display: isSelected ? 'flex' : 'none',...positionStyle}} className={styles.absolute_select}>
                <div className={styles.gap_20}>
                    <Typography variant='body3' fontWeight='500'>Move</Typography>
                    <UserAvatar name={fakeUserConstant.name} active={true} 
                        flag={<AppColor.UkraineFlagIcon/>} role='Shortlisted' preventMobileNone={true}/>

                </div>
                <div className={styles.gap_20}>
                    <AppColor.speficChevronRightFilled />
                    <div className={styles.gap_10 + ' ' + styles.selection_activity}>
                        <AppColor.newIcon width={'22px'} />
                        <Typography variant='body4'>To New</Typography>
                    </div>
                    <div onClick={() => {setCanceledModal(true)}} className={styles.gap_10 + ' ' + styles.selection_activity}>
                        <AppColor.close fill={AppColor.red} width={'25px'} height={'25px'} />
                        <Typography variant='body4' color={AppColor.red}>To Cancel</Typography>
                    </div>
                    <div onClick={() => {setHired(true)}} className={styles.gap_10 + ' ' + styles.selection_activity}>
                        <AppColor.hired width={'18px'}/>
                        <Typography variant='body4' color={AppColor.green}>To Hire</Typography>
                    </div>
                </div>
            </div>}
            {hired && <div style={{...positionStyle}} className={styles.absolute_select}>
                <div className={styles.gap_20}>
                    <Typography variant='body3' fontWeight='500'>Moved</Typography>
                    <UserAvatar name={fakeUserConstant.name} active={true} 
                        flag={<AppColor.UkraineFlagIcon/>} role='Shortlisted' preventMobileNone={true}/>
                    <AppColor.speficChevronRightFilled />
                    <UserAvatar name={fakeUserConstant.name} active={true} 
                        flag={<AppColor.UkraineFlagIcon/>} role='Hired' roleColor={AppColor.green} preventMobileNone={true}/>
                </div>
                </div>}

            {isCancelled && isSelected && !disableAbsoluteItems &&  showCardManagerActions && <div style={{...positionStyle}} className={styles.absolute_select}>
                <div className={styles.gap_20}>
                    <Typography variant='body3' fontWeight='500'>Moved</Typography>
                    <UserAvatar name={fakeUserConstant.name} active={true} 
                        flag={<AppColor.UkraineFlagIcon/>} role='Shortlisted' preventMobileNone={true}/>
                    <AppColor.speficChevronRightFilled />
                    <Typography variant='body5' color={AppColor.red}>Cancelled</Typography>
                </div>
                </div>}
           {!disableAbsoluteItems && <span className={styles.shell_absolute}>
              <MyCheckbox
                height='22px'
                width='22px'
                callback={(item) => { setIsSelected(item); }}
                checkWidth='14px'    
              />
            </span>}
            {!disableAbsoluteItems && 
            <div className={styles.right_abolute}>
                {switchButton && <SwitchButton startValue={true} height='22px' width='44px' bakcgroundColorActive={AppColor.text} activeIcon={<AppColor.freelancer width={'10px'} height={'12px'}/>} />}
                {absoluteIcons
                ? absoluteIcons.map((item,index) =>
                    <div className={styles.box_black}> 
                    {item}
                    </div>    
                )
                :  <div className={styles.box_black}> 
                <AppColor.completed width={'15px'} height={'15px'}/>
                </div>}

            </div>}
            <div
                style={borderTopRadius != null ? {...topImageStyles,borderTopLeftRadius: borderTopRadius,borderTopRightRadius: borderTopRadius} : {...topImageStyles}}
                className={styles.shell_top_image}>
                <Typography variant="body5" color="white">
                    {title}
                </Typography>
                <div className={styles.content_top_first}>
                    <div style={{position: 'relative',display: 'flex'}}>
                        <img src={testUserImage} alt="userImage" height={'38px'} width={'38px'} />
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
                            textLineHeight='1.2'
                            variant="body5"
                            color={AppColor.orange}>
                            {role ?? 'Manager'} 
                        </Typography>
                    </div>
                </div>
                <div className={styles.content_top_second}>
                    <SvgText
                        nodeImg={<AppColor.star fill='white' />}
                        text={`${user.statistic.rating}%`}
                    />
                    <SvgText
                        nodeImg={<AppColor.fiveOfFive  />}
                        text={`${user.lvl} lvl`}
                        additionText='Lead'
                        addTextColor={AppColor.red}
                    />
                   
                </div>
                {links != null && <SizeBox height='15px'/>}
                {links != null &&
                <div className={styles.links_wrapper}>
                    <DisplayArrayOfDetailsProfile array={links}/>
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
                    {nodeAfterDetails}
                </>
                : <>
                     <StatisticItem
                    text="Programs"
                    endNode={
                        programs
                    }
                />

                <StatisticItem
                    text="Sales"
                    endNode={
                       sales
                    }
                />

                <StatisticItem
                    text="Leads"
                    endNode={
                      leads
                    }
                />

                <StatisticItem
                    text="Earned"
                    endNode={
                      earned
                    }
                />
                </>}
            </div>
            <div className={styles.shell_bottom}>
                {specificIconsEnd != null 
                ? <>
                    {...specificIconsEnd}
                </>
                : 
                   <>
                     <AppColor.speficChevronRight />
                    <AppColor.contractPartnership />
                    <AppColor.message fill={AppColor.text} />
                   </>
                }
            </div>
        </div>
    )
}

type svgTextProps = {
    img?: string
    text: string
    nodeImg?: any;
    additionText?: string;
    addTextColor?: string;
}
const SvgText = ({ img, text,nodeImg,addTextColor,additionText }: svgTextProps) => {
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
            <Typography
                textLineHeight={'100%'}
                variant="body5"
                color={addTextColor}>
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
export default CardManager
