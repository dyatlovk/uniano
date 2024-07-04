
import { userModel } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import UserAvatar from '../ui/UserAvatar';
import styles from './style.module.scss';
import { useState } from 'react';
import ModalCenter from '../ModalPopUps/ModalCenter';
import ImageCardsShow from '../ImageCardsShow';

import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import test4 from '@assets/images/test4.png';
import DynamicPadding from '../ui/DynamicPadding';
import PopUpBottom from '../ModalPopUps/PopUpBottom';

type ReviewsProgramCardProps = {
    user: userModel;
    text: string;
    likes: string;
    money: string;
    sales?: string;
    afterPriceNode?: React.ReactNode;
    images?: string[];
    addInfo?: {text:string,icon:React.ReactNode,users: userModel[]}
    title?: string;
}
const ReviewsProgramCard = ({text,user,likes,money,sales,afterPriceNode,images,addInfo}:ReviewsProgramCardProps) => {

    const imagesArray = addInfo != null ? addInfo.users.map(item => item.image) : null;

    const [imageModal,setImageModal] = useState(false);

    return (
        <div className={styles.comment_wrapper}>
            <div className={styles.comment_user_info}>
            <UserAvatar preventMobileNone={true} active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlagIcon/>}/>
               <div className={styles.recommended_comment}>
                    <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
                        <AppColor.like />
                        <Typography variant='body4' fontWeight='500'>Recommended</Typography>
                    </div>
                    <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
               </div>
               <div className={styles.sales_text} style={{marginLeft: 'auto',display: 'flex',alignItems:'center',gap: '10px'}}>
                    {money != '' && <Typography variant='subtitle' fontWeight='500' textTransform='uppercase'>${money} </Typography>}
                    {sales != null && <div style={{display: 'flex',alignItems:'center',gap: '5px'}}>
                        <AppColor.walletIcon />
                        <Typography variant='body4'>{sales} sales </Typography>
                    </div>}
                    {afterPriceNode}
               </div>
            </div>

            <Typography variant='body4'>
                {text}
            </Typography>

            {images != null && <div className='gap_10'>{ images.map(item => <img className='cursor' onClick={() => {setImageModal(true)}} style={{borderRadius: '20px'}} src={item} height={'33px'} />)}</div>}
            {addInfo != null && 
                <div className='gap_10'>
                    {addInfo.icon}
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Musguard OMNI: Rollable Bicycle Mudguards</Typography>
                    <ImagesArrayDisplay images={imagesArray} />
                </div>}
            <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
                <Typography color={parseInt(likes) < 50 ? AppColor.red :parseInt(likes) < 90 ? AppColor.orange : AppColor.green} variant='body4'>{likes}% users like this review </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
            <div className={styles.absolute_bottom}><AppColor.threeLines/></div>
            
            {imageModal && <ModalCenter onClickHandler={() => {setImageModal(false)}}>
                <ImageModal callback={setImageModal} />
                </ModalCenter>}
        </div>
    )
}

export const ReviewsNoBorder = ({text,user,likes,money,sales,afterPriceNode,images,addInfo,title}:ReviewsProgramCardProps) => {
    const imagesArray = addInfo != null ? addInfo.users.map(item => item.image) : null;

    const [imageModal,setImageModal] = useState(false);

    return (
        <div className={styles.comment_wrapper_no_shadow}>
            <div className='flex_space_between'>
                <Typography variant='body4' fontWeight='500'>Logo by sample in vector in maximum quality</Typography>
                <div className={styles.sales_text} style={{marginLeft: 'auto',display: 'flex',alignItems:'center',gap: '10px'}}>
                    {money != '' && <Typography variant='subtitle' fontWeight='500' textTransform='uppercase'>${money} </Typography>}
                    {sales != null && <div style={{display: 'flex',alignItems:'center',gap: '5px'}}>
                        <AppColor.walletIcon />
                        <Typography variant='body4'>{sales} sales </Typography>
                    </div>}
                    {afterPriceNode}
               </div>
            </div>
            <div className={styles.comment_user_info}>
            <UserAvatar preventMobileNone={true} active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlagIcon/>}/>
               <div className={styles.recommended_comment}>
                    <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
                        <AppColor.like />
                        <Typography variant='body4' fontWeight='500'>Recommended</Typography>
                    </div>
                    <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
               </div>
               <div style={{marginLeft: 'auto'}}>{images != null && <div className='gap_10'>{ images.map(item => <img className='cursor' onClick={() => {setImageModal(true)}} style={{borderRadius: '20px'}} src={item} height={'33px'} />)}</div>}</div>
              
            </div>

            <Typography variant='body4'>
                {text}
            </Typography>

            {addInfo != null && 
                <div className='gap_10'>
                    {addInfo.icon}
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Musguard OMNI: Rollable Bicycle Mudguards</Typography>
                    <ImagesArrayDisplay images={imagesArray} />
                </div>}
            <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
                <Typography color={parseInt(likes) < 50 ? AppColor.red :parseInt(likes) < 90 ? AppColor.orange : AppColor.green} variant='body4'>{likes}% users like this review </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
            <div className={styles.absolute_bottom}><AppColor.threeLines/></div>
            
            {imageModal && <ModalCenter onClickHandler={() => {setImageModal(false)}}>
                <ImageModal callback={setImageModal} />
                </ModalCenter>}
        </div>
    )
}
export const ImageModal = ({callback}) => {
    const [shareModal,setShareModal] = useState(false);
    return (
        <>
        {shareModal && <ModalCenter onClickHandler={() => {setShareModal(false)}}>
                    <div className={styles.share_modal}>
                        <AppColor.close className={`${styles.close_icon} cursor`} onClick={() => {setShareModal(false)}} width={'17px'} height={'17px'} fill={AppColor.text} />
                        <div className={styles.share_wrapper}>
                            <div className={styles.grey_background}>
                                <img src={test1} width={'300px'} height={'175px'} style={{borderRadius: '20px'}} alt="" />
                            </div>
                            <div className={styles.flex_center}>
                                <DynamicPadding desktop='30px' mobile='20px'/>
                                <Typography variant='body3' fontWeight='500' textAlign='center'>
                                Share this with your social Community
                                </Typography>
                                <DynamicPadding desktop='15px' mobile='10px'/>

                                <div className={styles.links_grid}>
                                    <div style={{backgroundColor: '#2F80ED'}} className={styles.link_box}>
                                        <AppColor.facebook />
                                    </div>
                                    <div style={{backgroundColor: '#C637B4'}} className={styles.link_box}>
                                        <AppColor.instagram />
                                    </div>
                                    <div style={{backgroundColor: '#2D9CDB'}}  className={styles.link_box}>
                                        <AppColor.twitter />
                                    </div>
                                </div>
                                <DynamicPadding desktop='30px' mobile='20px'/>

                                <PopUpBottom
                                   
                                    showNode={
                                        <div className={`${styles.link_box_grey} cursor`}>
                                            <Typography variant='body4' color={AppColor.transparentBlack}>
                                                https://uniano.com/users/harso01/
                                            </Typography>
                                            <AppColor.copyLink />
                                        </div>
                                    }
                                    popUpNode={<div className={styles.copyboard}>
                                        <div style={{width: '100%'}} className='gap_10'>
                                            <AppColor.inputChecked />
                                            <Typography variant='body3' fontWeight='500' color='white'>
                                            Link Copied
                                            </Typography>
                                            <AppColor.close
                                            className='cursor'
                                            onClick={() => {setShareModal(false)}} fill='white' width={'12px'} height={'12px'} style={{marginLeft: 'auto'}}/>
                                        </div>
                                        <DynamicPadding desktop='20px' mobile='15px'/>
                                        <Typography style={{width: '330px'}} variant='body4' color='white'>
                                        A link to this page has been copied to your clipboard!
                                        </Typography>
                                    </div>}
                                    topPaddingFromNode='-100px'
                                />
                                
                                <DynamicPadding desktop='30px' mobile='20px'/>
                            </div>
                        </div>
                    </div>
                </ModalCenter>}
            <div className={styles.image_modal}>
                            <AppColor.close className={`${styles.close_icon} cursor`} onClick={() => {callback(false)}} width={'17px'} height={'17px'} fill={AppColor.text} />
                       <div className={styles.image_modal_wrapper}>
                       <ImageCardsShow
                            widthTotalDesktop='50vw'
                            images={[test1,test2,test3]}
                        />
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <div className={styles.fake_grid}>
                            <div className='flex_space_between'>
                                <div className='gap_5 cursor' onClick={() => {setShareModal(true)}}>
                                    <AppColor.share />
                                    <Typography variant='body4' fontWeight='500' textTransform='uppercase'>Share</Typography>
                                </div>
                                <div className='gap_5 cursor'>
                                    <AppColor.report />
                                    <Typography variant='body4' fontWeight='500' textTransform='uppercase'>Report</Typography>
                                </div>
                            </div>
                            <div>
    
                            </div>
                        </div>
                       </div>
                        </div>
        </>
    )
}

export default ReviewsProgramCard;

const ImagesArrayDisplay = ({images}: {images:string[]}) => {
    return (
        <div className={styles.image_row}>
            {images.length > 4 
            ? <div>
                <img src={images[0]} width={'22px'} height={'22px'} alt="" />
                <img style={{left: `${(1*11)}px`,zIndex:'1'}} className={styles.absolute_image} src={images[0]} width={'22px'} height={'22px'} alt="" />
                <img style={{left: `${(1*22)}px`,zIndex:'1'}} className={styles.absolute_image} src={images[0]} width={'22px'} height={'22px'} alt="" />
                <div style={{left: `${(1*33)}px`,zIndex: '2'}} className={styles.images_length_show}>
                    <Typography fontSizeStatic='10px' fontWeight='500'>+{images.length-3}</Typography>
                </div>
            </div>
            : <div>
                {images.map((item,index) => <img style={{marginLeft: `${-(index*22)}px`}} width={'22px'} height={'22px'} src={item}/>)}
            </div>
            }   
        </div>
    )
}


// import { userModel } from '@common/models/user';
// import AppColor from '@common/styles/variables-static';
// import Typography from '../ui/Typography/Typography';
// import UserAvatar from '../ui/UserAvatar';
// import styles from './style.module.scss';

// type ReviewsProgramCardProps = {
//     user: userModel;
//     text: string;
//     likes: string;
// }
// const ReviewsProgramCard = ({text,user,likes}:ReviewsProgramCardProps) => {
//     return (
//         <div className={styles.comment_wrapper}>
//             <div className={styles.comment_user_info}>
//             <UserAvatar active={true} url={user.image} name={user.name} role='Manager' flag={<AppColor.UkraineFlagIcon/>}/>
//                <div className={styles.recommended_comment}>
//                     <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>
//                         <AppColor.like />
//                         <Typography variant='body4' fontWeight='500'>Recommended</Typography>
//                     </div>
//                     <Typography color={AppColor.transparentBlack} variant='body4'>{user.activeAgo}</Typography>
//                </div>
//             </div>

//             <Typography variant='body4'>
//                 {text}
//             </Typography>

//             <div style={{display: 'flex',alignItems:'center',gap: '10px'}}>   
//                 <Typography variant='body4'>{likes}% users like this review </Typography>
//                 <AppColor.like/>
//                 <AppColor.dislike/>
//             </div>
//         </div>
//     )
// }

// export default ReviewsProgramCard;
// .recommended_comment {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }
// .comment_wrapper {
//     padding: 20px 14px;
//     @include weakShadow;
//     border-radius: 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
// }
// .comments_wrapper {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 15px;
// }
// @media (min-width:$tabletSize) {
//     .comments_wrapper {
//         grid-template-columns: 1fr 1fr;
//         gap: 30px;
//     }
//     .recommended_comment {
//         justify-content: start;
//         gap: 20px;
//     }
//     .comment_user_info {
//         display: flex;
//         align-items: center;
//         gap: 25px;
//     }
//     .comment_wrapper {
//         gap: 20px;
//         padding: 30px;
//     }
// }