
import Header from '@common/components/Header/Header/index';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import Footer from '@common/components/Footer/Footer';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import { useEffect, useRef, useState } from 'react';

type MessengerPageProps = {
    activePageIndex: number;
}
const MessengerPage = ({activePageIndex}:MessengerPageProps) => {

    const [showSidebar,setShowSidebar] = useState(false);
    const desktopRef = useRef(null);

    useEffect(() => {
        if (desktopRef.current && window.innerWidth > 768) {
            setTimeout(() => {
                desktopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            },300)
          }
      }, []);

      const [visible, setVisible] = useState(false);

      useEffect(() => {
          setTimeout(() => {
              setVisible(true);
            }, 0);
      }, []);

      const [sidebarStyles,setSidebarStyles] = useState(styles.show_sidebar_white);

      const [isSidebarChangeGoing,setIsSidebarChangeGoing] = useState(false);

      useEffect(() => {

        if(isSidebarChangeGoing) return;

        setIsSidebarChangeGoing(true);

        setTimeout(() => {
            if(showSidebar) {
                setSidebarStyles(styles.show_sidebar_white);
            } else {
                setSidebarStyles(styles.hide_sidebar_white);
            }
            setIsSidebarChangeGoing(false);
        },200)
        
      },[showSidebar]);
      

      

    return (
        <div>
        <Header removeMaxWidth={true} position='relative' />
        <NavigationBar removeMaxWidth={true}
            currentCategoryTitle="Messenger"
            activePageIndex={activePageIndex}
        />
            <div style={{opacity: visible ? '1' : '0'}} ref={desktopRef} className='desktop opacity_0'>
                <div className={styles.wrapper}>
                    <div className={styles.white_background}>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <div style={{padding: '0px 30px'}} className='gap_10'>
                                <InputDropdown
                                    callback={() => {}}
                                    dropdownVariants={['All']}
                                    initText='All'
                                    labelIcon={<></>}
                                    padding='8px 15px'
                                    marginLeft={true}
                                />
                                <AppColor.searchIconBlack />
                        </div>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
                        <SizeBox height='20px'/>
                    </div>
                    <div className={styles.content}>
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className={styles.top_details_wrapper}>
                        <div className='flex_space_between'>
                            <UserAvatar url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} flag={<AppColor.UkraineFlagIcon/>} activeAgoRole='1 min ago' role='Searching' />
    
                            <div className='gap_20'>
                                <AppColor.searchIconBlack />
                                <AppColor.sidebarExpand onClick={() => {setShowSidebar(prev => !prev)}} className='cursor' />
                                <AppColor.chevronBottom fill={AppColor.text}/>
                            </div>
                        </div>
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <CommentItem />

                    <DynamicPadding />

                    <div className='justify_center'>
                        <div>
                            <Typography variant='body5' fontWeight='500'>
                            Take or reject customer request
                            </Typography>

                            <SizeBox height='20px'/>
    
                            <div className='gap_20'>
                                <MyButtonBlack padding='15px 30px' onClick={() => {}}>
                                Cancel
                                </MyButtonBlack>
                                <MyButtonOrange padding='15px 30px' onClick={() => {}}>
                                Open
                                </MyButtonOrange>
                            </div>
                        </div>
                    </div>

                    </div>
           
                        <div className={`${styles.white_background_right} ${showSidebar ? styles.show_sidebar : styles.remove_sidebar}`}>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.top_image_wrapper}>
                                <div className={styles.absolute_left}>
                                    <div className={styles.border_item}>
                                        <AppColor.threePoints />
                                    </div>
                                    <div className={styles.border_item}>
                                        <div style={{display: 'flex',marginLeft: '4px'}}><AppColor.notes /></div>
                                    </div>
                                    <div className={styles.border_item}>
                                        <AppColor.heart fill={AppColor.orange} />
                                    </div>
                                </div>
                                <div style={{position: 'relative',display: 'flex'}}>
                                <img src={fakeUserConstant.image} width={'124px'} height={'124px'} alt="" />
                                <div style={{width: '22px',height: '22px'}} className={styles.status_active}></div>
                                </div>
                                <SizeBox height='20px'/>
                                <div className='gap_5'>
                                    <AppColor.UkraineFlagIcon />
                                    <Typography textLineHeight='1' variant='body3' fontWeight='500'>Artem M.</Typography>
                                </div>
                                <SizeBox height='15px'/>
                                <div className='gap_5'>
                                    <Typography variant='body4' color={AppColor.orange}>Freelancer</Typography>
                                    <AppColor.chevronBottom fill={AppColor.orange} height={'6px'} width={'12px'}/>
                                </div>
                                <SizeBox height='15px'/>
    
                                <MyButtonOrange width='100%' textTransform='uppercase' onClick={() => {}}>
                                Send message <div className={styles.white}>
                                    <Typography variant='body5' color={AppColor.orange}>3</Typography>
                                </div>
                                </MyButtonOrange>
                                <SizeBox height='15px'/>
                                <MyButtonTransparentOrange disabled={true} width='100%' textTransform='uppercase' onClick={() => {}}>
                                CReate
                                </MyButtonTransparentOrange>
                                <SizeBox height='15px'/>
                                <HorizontalLine />
                                
                            </div>
                           <div className={styles.padding_desktop}>
                           <SizeBox height='20px'/>
                            <div className='flex_space_between'>
                                <div className='gap_10'>
                                    <Typography variant='body3' fontWeight='500'>Notifications</Typography>
                                    <div className='black_box'>
                                        <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>12</Typography>
                                    </div>
                                </div>
                                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>View All</Typography>
                            </div>
                            <SizeBox height='20px'/>
                           <div className={styles.noticication_wrapper}>
                                <NotificationItem 
                                    notText='sent files to Logo by sample in vector in maximum project '
                                    fileTitle='requirements'  
                                />
        
                                <NotificationItem 
                                    notText='sent files to Logo by sample in vector in maximum project '
                                    offer={{
                                        budget: '$300',
                                        deadline: '4 days',
                                    }} 
                                />
                           </div>
    
                           <SizeBox height='20px'/>
                           <HorizontalLine />
                           <SizeBox height='20px'/>
                            <div className='flex_space_between'>
                                <div className='gap_10'>
                                    <Typography variant='body3' fontWeight='500'>Files</Typography>
                                    <div className='black_box'>
                                        <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>12</Typography>
                                    </div>
                                </div>
                                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>View All</Typography>
                            </div>
                                
                           </div>
                           <SizeBox height='20px'/>
                                <FileItemNotific />
                                <FileItemNotific />
                                <FileItemNotific />
                                <div className={styles.padding_desktop}>
                        <SizeBox height='20px'/>
                           <HorizontalLine />
                           <SizeBox height='20px'/>
                            <div className='flex_space_between'>
                                <div className='gap_10'>
                                    <Typography variant='body3' fontWeight='500'>Common Activity</Typography>
                                    <div className='black_box'>
                                        <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>1</Typography>
                                    </div>
                                </div>
                              
                            </div>
                            <SizeBox height='20px'/>
                            <div className='gap_10'>
                                <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />
                                <div className={styles.flex_column}>
                                    <Typography variant='body5' fontWeight='500'>Logo by sample in vector in maximum  </Typography>
                                    <SizeBox height='5px'/>
                                    <Typography fontSizeStatic='12px' color={AppColor.transparentBlack}>Feb 26, 2022 07:39 </Typography>
                                </div>
                            </div>
                            <SizeBox height='20px'/>
                    
                        </div>
                    </div>
                    
                </div>
            </div>

            <div style={{opacity: visible ? '1' : '0'}}  className='mobile opacity_0'>
                    <SizeBox height='15px'/>
                    <div style={{padding: '0px 12px'}} className='gap_15'>
                            <InputDropdown
                                callback={() => {}}
                                dropdownVariants={['All']}
                                initText='All'
                                labelIcon={<></>}
                                padding='8px 15px'
                                marginLeft={true}
                            />
                            <AppColor.searchIconBlack />
                    </div>
                    <SizeBox height='15px'/>
                        <CommentPreview />
                        <CommentPreview />
                        <CommentPreview />
            </div>
            <Footer removeMargin={true} />
      </div>
    );
};



export const FileItemNotific = () => {

    return (
        <div className={styles.file_notification_wrapper}>
             <div className={styles.absolute_background_color}></div>
            <AppColor.pdfFile/>
            <div>
                <Typography textLineHeight='1' variant='body5' fontWeight='500'>requirements1.pdf </Typography>
                <SizeBox height='5px'/>
                <Typography textLineHeight='1' fontSizeStatic='12px' color={AppColor.transparentBlack} fontWeight='400'>
                    Feb 26, 2022 07:39 
                </Typography>
            </div>
            <div style={{marginLeft: 'auto'}} className='justify_center'>
                <Typography textLineHeight='1' variant='body5' color={AppColor.transparentBlack}>432.1 KB </Typography>
            </div>

            
        </div>
    )
}
type NotificationItemProps = {
    notText: string;
    fileTitle?: string;
    offer?: {
        budget: string;
        deadline: string;

    }
}
const NotificationItem = ({notText,fileTitle,offer,}:NotificationItemProps) => {
    return (
        <div className='gap_10' style={{alignItems: 'start'}}>
            <div style={{position:'relative',display: 'inline',width: '38px',height: '38px'}}>
                <img height={'38px'} width={'38px'} src={fakeUserConstant.image} alt="" />
                <div style={{width: '11px',height: '11px'}} className={styles.status_active}></div>
            </div>
            <div>
                <div style={{position: 'relative'}}>
                    <div className='tail'>
                        
                        <AppColor.UkraineFlagIcon />
                        
                    </div>
                    <Typography variant='body5' fontWeight='500'><span style={{color: 'transparent'}}>sda</span>{fakeUserConstant.name}
                    <span style={{fontWeight: '400'}}>{notText}</span>
                    </Typography>
                  
                </div>
                <SizeBox height='5px'/>
                <div className='gap_5'>
                    <Typography variant='body5' color={AppColor.orange}>Freelancer</Typography>
                    <Typography variant='body4'>•</Typography>
                    <Typography variant='body5' color={AppColor.transparentBlack}>1 min ago</Typography>
                </div>
                <SizeBox height='10px'/>
                {fileTitle &&
                <div>
                    <div className='gap_5'>
                        <FileExampleNotif />
                        <FileExampleNotif />
                    </div>
                </div>
                }
                {offer &&
                <div>
                    <div className={styles.flex_nowrap}>
                        <div className='gap_5'>
                            <Typography variant='body5' color={AppColor.transparentBlack}>Budget</Typography>
                            <Typography variant='body5' fontWeight='500'>{offer.budget}</Typography>
                        </div>
                        <div className='gap_5'>
                            <Typography variant='body5' color={AppColor.transparentBlack}>Deadline</Typography>
                            <Typography variant='body5' fontWeight='500'>{offer.deadline}</Typography>
                        </div>
                        <div className='gap_5'>
                            <AppColor.emptyFile />
                            <Typography variant='body5' fontWeight='500'>Specification</Typography>
                        </div>
                        <div className='gap_5'>
                            <Typography variant='body5' color={AppColor.transparentBlack}>Freelancer</Typography>
                            <Typography variant='body5' fontWeight='500'>Artem M.</Typography>
                        </div>
                    </div>
                    <SizeBox height='20px'/>
                    <div className='justify_center'>
                        <MyButtonTransparent textTransform='uppercase' onClick={() => {}}>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange textTransform='uppercase' onClick={() => {}}>
                            <AppColor.confirm />
                        confirm
                        </MyButtonOrange>
                    </div>
                </div>}
            </div>
        </div>
    )
}


const FileExampleNotif = () => {
    return (
        <div className='gap_10'>
            <AppColor.pdfFile />
            <div className={styles.flex_column}>
                <Typography textLineHeight='1' fontSizeStatic='12px' fontWeight='600'>requirements </Typography>
                <SizeBox height='5px'/>
                <Typography color={AppColor.transparentBlack} textLineHeight='1' fontSizeStatic='12px' fontWeight='400'>432.1 KB </Typography>
            </div>
        </div>
    )
}

const CommentItem = () => {
    return (
        <div style={{alignItems: 'stretch'}} className='gap_10'>
            <div style={{display: 'flex',flexDirection: 'column'}}>
                <div style={{position: 'relative',display: 'flex'}}>
                <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />
                <div className={styles.status_active}></div>
                </div>
                <div style={{marginTop: 'auto'}} className='justify_center'>
                    <AppColor.threePoints />
                </div>
            </div>

            <div>
                <div className='gap_5'>
                    <AppColor.UkraineFlagIcon />
                    <Typography variant='body5' fontWeight='500'>Artem M.</Typography>
                    <Typography variant='body5' color={AppColor.transparentBlack}>08:21</Typography>
                </div>
                <SizeBox height='5px'/>
                <div className={styles.comment_text}>
                    <Typography variant='body5'>Nulla mauris enim nunc, volutpat. Velit hac aenean aliquet aenean et ac. Amet nunc ut sagittis, faucibus nec aliquam malesuada. </Typography>
                </div>
            </div>

            <div style={{display: 'flex',flexDirection: 'column'}}>
                <div style={{marginTop: 'auto'}}>
                <AppColor.smile/>
                </div>
            </div>
        </div>
    )
}
const CommentPreview = () => {

    const [showModal,setShowModal] = useState(false);

    const handleCloseClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        setShowModal(false);
    }

    return (
        <div onClick={() => {setShowModal(true);}} className={styles.comment_preview}>
            <div className='flex_space_between'>
                <UserAvatar preventMobileNone={true} flag={<AppColor.UkraineFlagIcon/>} activeAgoRole='1 min ago' active={true} name={fakeUserConstant.name} roleColor='#F2C94C' url={fakeUserConstant.image} role='Searching'/>
                <div className={styles.orange_box}>
                    <Typography variant='body5' fontWeight='500' color='white'>3</Typography>
                </div>
            </div>
            <SizeBox height='10px'/>
            <Typography variant='body5'>
            Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. 
            </Typography>
            {showModal && 
            <div className='mobile'>
                <div style={{display: showModal ? 'block' : 'none'}} className={styles.modal_info_mobile}>
                    <div className='gap_15'>
                       <div onClick={(event) => {handleCloseClick(event)}}>
                       <AppColor.longChevronLeft />
                       </div>
                        <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} role='Freelancer' flag={<AppColor.UkraineFlagIcon/>}
                            preventMobileNone={true}
                        />
                        <div style={{marginLeft: 'auto'}}>
                            <div className={styles.border_item}>
                                <AppColor.threeLines />
                            </div>
                        </div>
                    </div>

                    <SizeBox height='20px'/>

                    <MyButtonOrange width='100%' textTransform='uppercase' onClick={() => {}}>
                    Send message <div className={styles.white}>
                        <Typography variant='body5' color={AppColor.orange}>3</Typography>
                    </div>
                    </MyButtonOrange>
                    <SizeBox height='15px'/>
                    <MyButtonTransparentOrange disabled={true} width='100%' textTransform='uppercase' onClick={() => {}}>
                    CReate
                    </MyButtonTransparentOrange>
                    <SizeBox height='15px'/>
                    <HorizontalLine />
                    <SizeBox height='15px'/>
                    <div className={styles.noticication_wrapper}>
                        <DropdownUserItem 
                            title='Notifications'
                            length='12'
                            node={
                                <div>
                                    <div className={styles.noticication_wrapper}>
                                        <SizeBox height='20px'/>
                                        <NotificationItem 
                                        notText='sent files to Logo by sample in vector in maximum project '
                                        fileTitle='requirements'  
                                    />
            
                                    <NotificationItem 
                                        notText='sent files to Logo by sample in vector in maximum project '
                                        offer={{
                                            budget: '$300',
                                            deadline: '4 days',
                                        }} 
                                    />
                                    
                                    </div>
                                    <SizeBox height='15px'/>
                                   <div className='justify_center'> <Typography variant='body4' color={AppColor.transparentBlack}>View All</Typography></div>
                             
                                </div>
                            }
                        />
                        <DropdownUserItem 
                            title='Files'
                            length='12'
                            node={
                                <div>
                                    <div className={styles.noticication_wrapper}>
                                        <SizeBox height='20px'/>
                                        <div>
                                            <FileItemNotific />
                                            <FileItemNotific />
                                            <FileItemNotific />
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <DropdownUserItem 
                            title='Notifications'
                            length='12'
                            node={
                                <div>
                                    <div className={styles.noticication_wrapper}>
                                        <SizeBox height='20px'/>
                                        <NotificationItem 
                                        notText='sent files to Logo by sample in vector in maximum project '
                                        fileTitle='requirements'  
                                    />
            
                                    <NotificationItem 
                                        notText='sent files to Logo by sample in vector in maximum project '
                                        offer={{
                                            budget: '$300',
                                            deadline: '4 days',
                                        }} 
                                    />
                                    
                                    </div>
                                    <SizeBox height='15px'/>
                                   <div className='justify_center'> <Typography variant='body4' color={AppColor.transparentBlack}>View All</Typography></div>
                                    <SizeBox height='15px'/>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>}
        </div>
    )
}

type DropdownUserItemProps = {
    title: string;
    node: React.ReactNode;
    length: string;
}
export const DropdownUserItem = ({length,node,title}:DropdownUserItemProps) => {
    const [showDropdown,setShowDropdown] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowDropdown(prev => !prev);
    }
    return (
       <div>
            <div onClick={(event) => {handleClick(event)}} className='flex_space_between'>
                <div className='gap_10'>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    <div className='black_box'>
                        <Typography variant='body3' textLineHeight='1' fontWeight='500' color='white'>{length}</Typography>
                    </div>
                </div>
                <div style={{marginLeft: 'auto'}}>
                    {showDropdown
                    ? <AppColor.chevronTop fill={AppColor.text} />
                    : <AppColor.chevronBottom fill={AppColor.text} />}
                </div>
          
            </div>
            {showDropdown && node}
            <SizeBox height='15px'/>
            <HorizontalLine />
       </div>
    )
}
export default MessengerPage;