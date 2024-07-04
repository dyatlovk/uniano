
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import styles from './style.module.scss';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import TimeChooseDropdown from '@common/components/ui/TimeChooseDropdown/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import { Link } from 'react-router-dom';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import { ButtonDropdownSelect, ButtonDropdownSelectDark } from '@common/components/ui/ThreeLinesPopUp/index';

const ControllPannel = () => {

    const [statusModal,setStatusModal] = useState(false);

    const [moderatorModal,setModeratorModal] = useState(false);

    const [moderatorModalSubmit,setModeratorModalSubmit] = useState(false);
    const [modetarotModalResult,setModeratorModalResult] = useState(false);

    const [arbitrationModal,setArbitrationModal] = useState(false);

    const [activeRole,setActiveRole] = useState('Freelancer');

    

    return (
      <div className={styles.controll_pannel}>
           <MyButtonOrange onClick={() => {setModeratorModal(true)}} padding='3px 12px' fontWeight='500'>
           <div style={{marginRight: 'auto',opacity: '0'}}><AppColor.chevronRight height={'14px'} width={'7px'} fill='white'/></div> Customer <div style={{marginLeft: 'auto',paddingTop: '5px'}}><AppColor.chevronRight height={'14px'} width={'7px'} fill='white'/></div>
           </MyButtonOrange>

           <HorizontalLine />
           
           <MyButtonTransparentGrey onClick={() => {setStatusModal(true)}} fontWeight='500'>
            <AppColor.setStatus /> Set a status
           </MyButtonTransparentGrey>

           <HorizontalLine />

            
            <Link to={'/dashboard/home'}>
            <ControllItem callback={() => {}} icon={<AppColor.dashboard fill={AppColor.text} />} text='Dashboard' />
            </Link>
            
            <Link to={'/messenger/solutions'}>
            <ControllItem callback={() => {}} icon={<AppColor.message fill={AppColor.text} />} text='Messenger' />
            </Link>
            <Link to={'/teams/my-teams'}>
            <ControllItem callback={() => {}} icon={<AppColor.teams />} text='Teams' />
            </Link>
            <Link to={'/subscriptions/mysubscriptions'}>
            <ControllItem callback={() => {}} icon={<AppColor.subscriptions />} text='Subscriptions' />
            </Link>
            <Link to={'/community/posts'}>
            <ControllItem callback={() => {}} icon={<AppColor.community />} text='Community' />
            </Link>
            <Link to={'/payments/operations'}>
            <ControllItem callback={() => {}} icon={<AppColor.payments />} text='Payments' />
            </Link>
            <Link to={'/settings/profile'}>
            <ControllItem callback={() => {}} icon={<AppColor.settings2 fill={AppColor.text} />} text='Settings' />
            </Link>
            <Link to={'/admin'}>
            <ControllItem callback={() => {}} icon={<AppColor.controll />} text='Control Panel' />
            </Link>
            <HorizontalLine />
            <Link to={'/'}>
            <ControllItem callback={() => {}} icon={<AppColor.logOut />} text='Logout' />
            </Link>

            {statusModal && 
                <ModalCenterBasic bottomPartPadding='30px 30px' callbackClose={() => {setStatusModal(false)}} title='Set a status' topPartPadding='15px 30px' nodesBeforeClose={[<AppColor.template />]} >
                    <InputCommon icon={<AppColor.smile />} width='390px' padding='15px' rightPadding={15} callback={() => {}} placeholder='What’s your status? (optional) ' />
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <Typography variant='body4' fontWeight='500'>
                    Work schedule
                    </Typography>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className={styles.grid_10}>
                        <TimeChoose dayName='Monday' />
                        <TimeChoose dayName='Tuesday' />
                        <TimeChoose dayName='Wednesday' />
                        <TimeChoose dayName='Thursday' />
                        <TimeChoose dayName='Friday' />
                        <TimeChoose dayName='Saturday' />
                        <TimeChoose dayName='Sunday' />
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <Typography variant='body4' fontWeight='500'>
                    During Day off
                    </Typography>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className={styles.grid_10}>
                        <SelectItem text='Set yourself offline' />
                        <SelectItem text='Turn off notifications indicator'/>
                        <SelectItem text='Turn off notifications indicator'/>
                        <SelectItem text='Turn off messages indicator'/>
                        <SelectItem text='Turn off toolbar indicator'/>
                        <SelectItem text='Hide all services from marketplace'/>
                        <SelectItem text='Hide from ratings'/>
                        <SelectItem text='Hide from offers and invites'/>
                        <SelectItem text='Automatic answer in messenger'/>
                    </div>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div style={{maxWidth: '390px'}} className='text_box'>
                        <Typography variant='body4'>I will provide you with my professional skills for making professional  plans in 2d or 3d from your own sketches, pictures or simple renovation of old plans or from your idea.</Typography>
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <Typography variant='body4' fontWeight='500'>
                    During offline
                    </Typography>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className={styles.grid_10}>
                        <SelectItem text='Automatic answer in messenger' />
                    </div>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div style={{maxWidth: '390px'}} className='text_box'>
                        <Typography variant='body4'>Hello. Leave your requirements for the project and I will notify you when I am online.</Typography>
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <Typography variant='body4' fontWeight='500'>
                    Status time
                    </Typography>

                    <DynamicPadding desktop='15px' mobile='10px'/>

                    <div className='gap_10'>
                        <AppColor.calendar />
                        <Typography variant='body4' textTransform='uppercase' color={AppColor.transparentBlack} fontWeight='500'>
                        until 17 Oct 2023 13:35 
                        </Typography>

                        <div className='gap_10 cursor' style={{marginLeft: 'auto'}}>
                            <AppColor.close height={'15px'} width={'15px'} fill={AppColor.red}/>
                            <AppColor.edit fill={AppColor.text} />
                        </div>
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className='gap_10' style={{justifyContent: 'end'}}>
                        <MyButtonTransparent onClick={() => {setStatusModal(false)}} textTransform='uppercase' fontWeight='500'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {setStatusModal(false)}} textTransform='uppercase' fontWeight='500'>
                        Set
                        </MyButtonOrange>
                    </div>

                </ModalCenterBasic>}

                {moderatorModal && 
                <ModalCenterBasic bottomPartPadding='0px' callbackClose={() => {setModeratorModal(false)}} title='Select your account' topPartPadding='15px 30px' >
                    
                    <div className={styles.moderator_grid}>
                        <div>
                            <div className={styles.moderator_title_padding}>
                            <Typography variant='body3' fontWeight='500'>Account</Typography>
                            </div>

                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.first_item_grid}>
                                <SelectModalModerator 
                                    icon={<UserAvatar variant='image' active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} />}
                                    onClick={() => {}}
                                    selectedItem={fakeUserConstant.name}
                                    text='You'
                                    title={fakeUserConstant.name}
                                />
                                <SelectModalModerator 
                                    icon={<UserAvatar variant='image' active={false} name={fakeUserConstant.name} url={fakeUserConstant.image} />}
                                    onClick={() => {}}
                                    selectedItem=''
                                    text='Owner since Oct 2021'
                                    title='TechTok'
                                />
                                <SelectModalModerator 
                                    icon={<UserAvatar variant='image' active={false} name={fakeUserConstant.name} url={fakeUserConstant.image} />}
                                    onClick={() => {}}
                                    selectedItem=''
                                    text='Member since Sep 2020'
                                    title='Tugas Virtual Solutions'
                                />
                            </div>
                        </div>

                        <div>
                            <div className={styles.moderator_title_padding}>
                                <Typography variant='body3' fontWeight='500'>Role</Typography>
                            </div>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.second_item_grid}>
                                <ChooseRole 
                                    activeNode={<AppColor.freelancerWhite />}
                                    activeText={activeRole}
                                    callback={(item) => {setActiveRole(item)}}
                                    icon={<AppColor.freelancer fill={AppColor.text}/>}
                                    text='Customer'
                                />
                                 <ChooseRole 
                                    activeNode={<AppColor.freelancerWhite />}
                                    activeText={activeRole}
                                    callback={(item) => {setActiveRole(item)}}
                                    icon={<AppColor.freelancer fill={AppColor.text}/>}
                                    text='Freelancer'
                                />
                                 <ChooseRole 
                                    activeNode={<AppColor.freelancerWhite />}
                                    activeText={activeRole}
                                    callback={(item) => {setActiveRole(item)}}
                                    icon={<AppColor.freelancer fill={AppColor.text}/>}
                                    text='Sponsor'
                                />
                                 <ChooseRole 
                                    activeNode={<AppColor.freelancerWhite />}
                                    activeText={activeRole}
                                    callback={(item) => {setActiveRole(item)}}
                                    icon={<AppColor.managers fill={AppColor.text}/>}
                                    text='Manager'
                                />
                            </div>

                        </div>
                        <div>   
                            <div className={styles.moderator_title_padding}>
                                <Typography variant='body3' fontWeight='500'>Control</Typography>
                            </div>

                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.third_item_grid}>
                                <SelectModalModerator 
                                    icon={<UserAvatar variant='image' active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} />}
                                    onClick={() => {}}
                                    selectedItem=''
                                    text='Freelancer (you)'
                                    textColor={AppColor.orange}
                                    title={fakeUserConstant.name}
                                />
                                <SelectModalModerator 
                                    icon={<AppColor.moderator height={'38px'}/>}
                                    onClick={() => {setModeratorModalSubmit(true)}}
                                    selectedItem=''
                                    text='No privileges'
                                    title='Moderator'
                                />
                                <SelectModalModerator 
                                    icon={<AppColor.hummer width={'38px'} height={'38px'}/>}
                                    onClick={() => {setArbitrationModal(true)}}
                                    selectedItem=''
                                    text='Privileges'
                                    textColor={AppColor.green}
                                    title='Arbitrator'
                                />
                            </div>
                        </div>
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                </ModalCenterBasic>}

                {moderatorModalSubmit && 
                <ModalCenterBasic prevClose={true} bottomPartPadding='30px 30px' callbackClose={() => {setModeratorModalSubmit(false)}} title='Moderator' topPartPadding='15px 30px'>
                    
                    <div style={{maxWidth: '420px'}}>
                        <Typography variant='body4'>
                        A <span style={{fontWeight: '500'}}>moderator</span> on a website is a person, typically appointed by the website administrator, who is responsible for maintaining order and enforcing the rules on the site.
    To submit an application for moderator privileges, you must meet the following <span style={{fontWeight: '500'}}>requirements:</span>
                        </Typography>
                    </div>

                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <div className={styles.grid_20}>
                        <TextDotted
                            text='Level'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>1 and up</Typography>
                                    <AppColor.singTrue stroke={AppColor.green} width={'8px'} height={'6px'}/>
                                </div>
                            }
                        />
                        <TextDotted
                            text='Positive Reviews'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>95% and up</Typography>
                                    <AppColor.singTrue stroke={AppColor.green} width={'8px'} height={'6px'}/>
                                </div>
                            }
                        />
                        <TextDotted
                            text='Organization'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'> no preference</Typography>
                                    <AppColor.singTrue stroke={AppColor.green} width={'8px'} height={'6px'}/>
                                </div>
                            }
                        />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className='gap_10' style={{justifyContent: 'end'}}>
                        <MyButtonTransparent onClick={() => {setModeratorModalSubmit(false)}} textTransform='uppercase' fontWeight='500'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {setModeratorModalSubmit(false);setModeratorModalResult(true)}} textTransform='uppercase' fontWeight='500'>
                        Submit
                        </MyButtonOrange>
                    </div>

                </ModalCenterBasic>}

                {arbitrationModal && 
                <ModalCenterBasic 
                nodeAfterTitle={
                    <div className={styles.category}>
                        <ButtonDropdownSelectDark text='Logo Design' variants={['Logo Design', '1', '2']} />
                    </div>
                }
                prevClose={true} bottomPartPadding='30px 30px' callbackClose={() => {setArbitrationModal(false)}} title='Arbitrator' topPartPadding='15px 30px'>
                    
                    <div style={{maxWidth: '420px'}}>
                        <Typography variant='body4'>
                        An <span style={{fontWeight: '500'}}>arbitrator</span> is typically a neutral third-party who is appointed to resolve disputes between clients and freelancers.
To submit an application for logo <span style={{fontWeight: '500'}}>design</span> arbitrator privileges, you must meet the following <span style={{fontWeight: '500'}}>requirements:</span>
                        </Typography>
                    </div>

                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <div className={styles.grid_20}>
                        <TextDotted
                            text='Level'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>1 and up</Typography>
                                    <AppColor.singTrue stroke={AppColor.green} width={'8px'} height={'6px'}/>
                                </div>
                            }
                        />
                        <TextDotted
                            text='Positive Reviews'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>95% and up</Typography>
                                </div>
                            }
                        />
                        <TextDotted
                            text='Organization'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                <div className='gap_5'>
                                    <Typography textLineHeight='1' variant='body4' fontWeight='500'> no preference</Typography>
                                    <AppColor.singTrue stroke={AppColor.green} width={'8px'} height={'6px'}/>
                                </div>
                            }
                        />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className='gap_10' style={{justifyContent: 'end'}}>
                        <MyButtonTransparent onClick={() => {setModeratorModalSubmit(false)}} textTransform='uppercase' fontWeight='500'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange disabled={true} onClick={() => {setModeratorModalSubmit(false);setModeratorModalResult(true)}} textTransform='uppercase' fontWeight='500'>
                        Submit
                        </MyButtonOrange>
                    </div>

                </ModalCenterBasic>}

                {modetarotModalResult && 
                <ModalCenterBasic prevClose={true} callbackPrev={() => {
                    setModeratorModalSubmit(true);
                    setModeratorModalResult(false);
                }} bottomPartPadding='30px 30px' callbackClose={() => {setModeratorModalResult(false)}} title='Moderator' topPartPadding='15px 30px'>
                    
                    <div style={{maxWidth: '420px'}}>
                        <Typography variant='body4'>
                        A <span style={{fontWeight: '500'}}>moderator</span> on a website is a person, typically appointed by the website administrator, who is responsible for maintaining order and enforcing the rules on the site.
                        </Typography>
                    </div>

                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <div className={styles.grid_20}>
                        <TextDotted
                            text=' Access to chat with customers'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                    <Typography color={AppColor.green} textLineHeight='1' variant='body4' fontWeight='500'>yes</Typography>
                            }
                        />
                        <TextDotted
                            text='Access to “Selection” stage'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                    <Typography color={AppColor.green} textLineHeight='1' variant='body4' fontWeight='500'>yes</Typography>
                            }
                        />
                        <TextDotted
                            text='Access to “Negotiation” stage'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                    <Typography color={AppColor.green} textLineHeight='1' variant='body4' fontWeight='500'>yes</Typography>
                            }
                        />
                        <TextDotted
                            text='Access to “Progress” stage'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                    <Typography color={AppColor.green} textLineHeight='1' variant='body4' fontWeight='500'>yes</Typography>
                            }
                        />
                        <TextDotted
                            text='Access to “Completed” stage'
                            startTextColor={AppColor.transparentBlack}
                            endNode={
                                    <Typography color={AppColor.green} textLineHeight='1' variant='body4' fontWeight='500'>yes</Typography>
                            }
                        />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className='gap_10' style={{justifyContent: 'end'}}>
                        <MyButtonTransparent onClick={() => {setModeratorModalResult(false)}} textTransform='uppercase' fontWeight='500'>
                        Close
                        </MyButtonTransparent>
                       
                    </div>

                </ModalCenterBasic>}
      </div>
    );
};

type ChooseRoleProps = {
    icon: React.ReactNode;
    activeNode: React.ReactNode;
    text: string;
    activeText: string;
    callback: (item:string) => void;
}
const ChooseRole = ({activeNode,activeText,icon,text,callback}:ChooseRoleProps) => {
    return (
        <div onClick={() => {callback(text)}} className={`${styles.choose_role} cursor`} style={{backgroundColor: activeText == text ? AppColor.orange : 'transparent'}}>
            {activeText == text ? activeNode : icon}
            <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={activeText == text ? 'white' : AppColor.text}>
                {text}
            </Typography>
            <SizeBox width='5px'/>
            <AppColor.chevronRight style={{transition: '0.15s'}} width={'8px'} height={'16px'} fill={activeText == text ? 'white' : AppColor.transparent}/>
        </div>
    )
}

type SelectModalModeratorProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    textColor?: string;
    onClick: (item: string) => void;
    selectedItem: string;
}
const SelectModalModerator = ({icon,onClick, textColor,text,title,selectedItem}:SelectModalModeratorProps) => {

    const [hovered,setHovered] = useState(false);
    return (
        <div style={selectedItem == title ? {backgroundColor: AppColor.white} : {}} className={`${styles.select_modal_moderator} cursor`} onMouseEnter={() => [setHovered(true)]} onMouseLeave={() => {setHovered(false)}} onClick={() => {onClick(title)}}>
            {icon}
            <div className={styles.flex_column}>
                <Typography variant='body5' fontWeight='500'>{title}</Typography>
                <Typography variant='body5' color={textColor ?? AppColor.transparentBlack}>{text}</Typography>
            </div>

            <div style={{opacity: (selectedItem == title || hovered) ? '1' : '0',marginLeft: 'auto'}} className={styles.flex_icon}>
                <AppColor.chevronRight width={'8px'} height={'16px'} fill={AppColor.text} />
            </div>
        </div>
    )
}

type SelectItemProps = {
    text: string;
}
const SelectItem = ({text}:SelectItemProps) => {
    return (
        <div className={styles.select_item}>
            <Typography variant='body4'>{text}</Typography>
            <SwitchButton width='44px' height='24px' />
        </div>
    )
}
type TimeChooseProps = {
    dayName: string;
}
const TimeChoose = ({dayName}:TimeChooseProps) => {
    return (
        <div className={styles.time_choose_wrapper}>
            <Typography variant='body4' color={AppColor.transparentBlack}>
            {dayName}
            </Typography>

            <TimeChooseDropdown />
        </div>
    )
}
type ControllItemProps = {
    icon: React.ReactNode;
    text: string;
    callback: () => void;
}
const ControllItem = ({callback,icon,text}:ControllItemProps) => {
    return (
        <div className={`${styles.controll_item} cursor`} onClick={callback}>
            {icon}
            <Typography variant='body4'>{text}</Typography>
        </div>
    )
}
export default ControllPannel;