
import { userModel } from 'common/models/user';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { useHover } from '@common/helpers/useHover';
import { useState } from 'react';
import { useScreenSize } from '@common/helpers/useScreenSize';

export type PostCardProps = {
    title: string;
    description: string;
    user: userModel;
    saved: boolean; //show heart
    created:boolean;//show start/pause
    comments: string[];
    indexInParent?: number;
    createdAgo: string;
}
const PostCard = ({description,title,user,created,saved,comments,indexInParent,createdAgo}:PostCardProps) => {
    const [hovered,setHovered] = useState(false);
    const [isPined,setIsPined] = useState(saved);
    const {width,height} = useScreenSize();

    const isDesktop = width > 768
    return (
      <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} className={styles.wrapper} style={{backgroundColor: indexInParent % 2 == 0 ? AppColor.white : 'transparent'}}>
            <div onClick={() => {setIsPined(prev => !prev)}} className={styles.pinned} style={{display: isPined ? 'block' : 'none'}}><AppColor.pinned_true /></div>
            <div onClick={() => {setIsPined(prev => !prev)}} className={styles.pinned} style={{opacity: !isPined && hovered ? '1' : '0'}}><AppColor.pinned_process /></div>
           <div className={styles.text_wrapper}>
               <div className={styles.flex_center}>
                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>
                        {title}
                    </Typography>
                    {isPined && isDesktop ? <AppColor.heart fill={AppColor.orange}/> : <AppColor.heart width={'0px'} color='transparent'/>}
                         {created && isDesktop && <AppColor.pause />}
                    {comments.length > 0 && isDesktop && <div className={styles.flex_center_min}><AppColor.message width={'18px'} height={'18px'} /> {comments.length}</div>}
               </div>
                <Typography textLineHeight='100%' variant='body5' fontWeight='400'>
                    {description}
                </Typography>
           </div>
           <div className={styles.user_flex}>
                <UserAvatar 
                    preventMobileNone={true} 
                    activeAgo={createdAgo} 
                    variant='row' name={user.name} 
                    active={true} flag={<AppColor.UkraineFlagIcon/>} url={user.image} 
                />
                <div className={styles.atributes_flex}>
                {isPined && !isDesktop ? <AppColor.heart fill={AppColor.orange}/> : <AppColor.heart width={'0px'} color='transparent'/>}
                            {created && !isDesktop && <AppColor.pause />}
                {comments.length > 0 && !isDesktop && <div className={styles.flex_center_min}><AppColor.message width={'18px'} height={'18px'} /> {comments.length}</div>}
            </div>
            </div>
      </div>
    );
};

export default PostCard;