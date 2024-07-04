
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import SizeBox from '../SizeBox';
import { fakeUserConstant } from '@common/models/user';

type UserAvatarProps = {
    url?: string;
    active: boolean;
    name: string;
    role?: string;
    flag?: any;
    money?: string;
    variant?: UserAvatarVariants;
    preventMobileNone?: boolean;
    width?: string;
    height?: string;
    activeAgo?: string;
    nodeAfterText?: React.ReactNode;
    noWrap?: boolean;
    roleColor?: string;
    activeAgoRole?: string;
    title?: string;
    gap?: string;   
}

type UserAvatarVariants = "row" | "column" | "money" | 'image'


const UserAvatar = ({gap,title,activeAgoRole='',noWrap,roleColor,active,name,role,url=fakeUserConstant.image,variant='row',flag,money,preventMobileNone,height,width,activeAgo,nodeAfterText}:UserAvatarProps) => {

     switch (variant) {
        case "row":
            return <UserAvatarRow gap={gap} title={title} activeAgoRole={activeAgoRole} roleColor={roleColor} noWrap={noWrap} nodeAfterText={nodeAfterText} activeAgo={activeAgo} width={width} height={height} active={active} name={name} role={role} url={url} preventMobileNone={preventMobileNone} flag={flag} />;
        case "column":
            return <UserAvatarColumn title={title} activeAgoRole={activeAgoRole} roleColor={roleColor} noWrap={noWrap} activeAgo={activeAgo} active={active} name={name} role={role} url={url} flag={flag} />;
        case "money":
            return <UserAvatarMoney title={title} activeAgoRole={activeAgoRole} roleColor={roleColor} noWrap={noWrap} activeAgo={activeAgo} active={active} name={name} role={role} url={url} flag={flag} money={money} />;
       case "image":
            return <UserAvatarImage width={width} height={height} title={title} active={active} name={name} url={url} />
        default:
            return null;
    }
};

const UserAvatarImage = ({url,active,width,height}:UserAvatarProps) => {
    return (
        <div style={{position: 'relative',display: 'flex',width: width ?? '38px',height: height ?? '38px'}}>
            <img src={url} width={width ?? '38px'} height={height ?? '38px'} alt="" />
            <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
        </div>
    )
}

const UserAvatarRow = ({gap,noWrap,active,title,name,role,url,preventMobileNone,flag,height,width,activeAgo,nodeAfterText,roleColor,activeAgoRole}:UserAvatarProps) => {
    
    const currentWidth = width != null ? width : '38px';
    const currentHeight = height != null ? height : '38px';
    
    return (
        <div style={!title ? {maxWidth: '240px',gap:gap} : {gap:gap}} className={styles.wrapper}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={width != null ? width : '38px'} height={height != null ? height : '38px'} src={url} alt="" />
                 : <AppColor.freelancer fill={AppColor.text} width={currentWidth} height={currentHeight} />}
               <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
           <div style={preventMobileNone ? { display: 'block',whiteSpace: noWrap ? 'nowrap' : 'pre-wrap' } : {}} className={styles.flex_wrapper}>
                {title && <Typography className='underline_appearance' style={{whiteSpace: 'nowrap'}} variant='body4' fontWeight='500'>{title}</Typography>}
                <Typography  variant='body5' fontWeight='500'>
                  {flag}  {name} {nodeAfterText}
                </Typography>
                <Typography color={AppColor.transparentBlack} fontWeight='400' variant='body5' textLineHeight='1'>
                    {activeAgo}
                </Typography>
                {role && <SizeBox height='5px'/>}
                <Typography color={roleColor ?? AppColor.orange} variant='body5' textLineHeight='1'>
                    {role}{activeAgoRole != '' && <span>{role && <span style={{color: AppColor.text}}> • </span>}<span style={{color: AppColor.transparentBlack}}>{activeAgoRole}</span></span>}
                </Typography>
           </div>
      </div>
    )
}

const UserAvatarMoney = ({active,name,role,url,money,flag}:UserAvatarProps) => {
    const stylesItem = {
        'display': 'flex',
        'flexDirection': 'column' as 'column',
        'gap': '5px',
        'alignItems': 'start',
    } as const;
    return (
        <div className={styles.wrapper}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={'38px'} height={'38px'} src={url} alt="" />
                 : <AppColor.freelancer />}
               <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
           <div style={stylesItem} className={styles.flex_wrapper}>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                  {flag}  {name}
                </Typography>
                <Typography color={AppColor.orange} textLineHeight='100%'>
                    {money != null
                    ? `$${money}` : <AppColor.hideEye />}
                </Typography>
           </div>
      </div>
    )
}

const UserAvatarColumn = ({active,name,url,flag}:UserAvatarProps) => {
    return (
        <div className={styles.wrapper_column}>
           <div className={styles.position_relative}>
               {url != null
               ? <img width={'124px'} height={'124px'} src={url} alt="" />
                 : <AppColor.freelancer width={124} height={124} />}
                 <div style={{width: '22px',height: '22px'}} className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           </div>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                   {flag} {name}
                </Typography>
      </div>
    )
}
export default UserAvatar;