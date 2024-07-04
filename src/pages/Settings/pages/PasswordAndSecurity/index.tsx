
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar, { NavigationBarCustom } from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SettingsCardSecurity, { SettingsCardSecurityprops } from './components/SettingsCardSecurity';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import Typography from '@common/components/ui/Typography/Typography';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { Link } from 'react-router-dom';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import AnimateHeight from '@common/components/AnimateHeight/index';
import VerificationCodeInput from '@common/components/ui/VerifCodeInput/index';
import CountDownText from '@common/components/ui/CountDownText/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';

const PasswordAndSecurity = () => {

    const [passwordModal, setPasswordModal] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [inputText, setInputText] = useState('');
    const [checkInput, setCheckInput] = useState('');
    const [twoFactorModal, setTwoFactorModal] = useState(false);


    const [passwordStage, setPasswordStage] = useState(0);

    const [blockedModal, setBlockedModal] = useState(false);

    

    return (
        <div>
            {blockedModal && <ModalCenterBasic 
            title='Blocked list'
            desktopMaxWidth='620px' desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setBlockedModal(false)}}>
                <Typography variant='body4' fontWeight='500'>
                Blocking a user will: 
                </Typography>
                <SizeBox height='10px'/>
                <Typography variant='body4'>
                • Prevent them from any activity towards to you: messages, project, and etc..
                </Typography>
                <SizeBox height='10px'/>

                <Typography variant='body4' fontWeight='500'>
                Blocking a service, order, contest and campaign will: 
                </Typography>
                <SizeBox height='10px'/>
                <Typography variant='body4'>
                • Prevent them from your look in catalogues..
                </Typography>

                <DynamicPadding desktop='30px' mobile='20px' />


                    <InputCommon 
                        callback={() => {}}
                        placeholder='Enter a Username, Project ID or Campaign ID '
                        padding='15px 50px 15px 20px'
                        disableClose={true}
                        endNode={
                            <DarkBox onClick={() => {

                            }} text='ADD' />
                        }
                    />
                    <DynamicPadding desktop='30px' mobile='20px' />
                    <DetailsTableMultiNodes
                            titles={['Object', 'Date', 'Action']}
                            elements={[
                                {
                                    nodes: [
                                        <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image}
                                         role='Customer' flag={<AppColor.UkraineFlagIcon/>}/>,
                                         <div style={{maxWidth: '95px'}}>  

                                        <Typography variant='body4'>
                                            Feb 26, 2021 16:32 
                                         </Typography>
                                         </div>,
                                        <div className='gap_5'>
                                             <Typography variant='body4' fontWeight='500' color={AppColor.orange}>
                                             Unblock
                                             </Typography>
                          
                                        </div>,
                                    ]
                                },
                                {
                                    nodes: [
                                        <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image}
                                         role='Customer' flag={<AppColor.UkraineFlagIcon/>}/>,
                                         <div style={{maxWidth: '95px'}}>  

                                        <Typography variant='body4'>
                                            Feb 26, 2021 16:32 
                                         </Typography>
                                         </div>,
                                        <div className='gap_5'>
                                             <Typography variant='body4' fontWeight='500' color={AppColor.orange}>
                                             Unblock
                                             </Typography>
                                
                                        </div>,
                                    ]
                                }
                            ]}
                        />
            </ModalCenterBasic>}
            {twoFactorModal && <ModalCenterBasic desktopMaxWidth='620px' desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setTwoFactorModal(false)}}
                title='Two-factor authentication'
            >   
                <TwoFactor />
                </ModalCenterBasic>}
            {passwordModal && <ModalCenterBasic desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setPasswordModal(false)}}
                title={passwordStage == 1 ? 'Change Password' : 'Confirm your password'}
            >   
                {passwordStage == 1 && <>
                    <PasswordScore  password={inputText}/>
                    <DynamicPadding desktop='25px' mobile='15px'/>
                    <InputBorderText 
                    type={inputType}
                    emptyChangeColor={true}
                    callback={(item) => {setInputText(item)}}
                    borderText='New Password  ' labelIcon={
                        <div className='cursor' onClick={() => {
                            setInputType(inputType == 'text' ? 'password' : 'text')
                        }}>
                            {inputType == 'text'
                            ? <AppColor.eye height={'13px'} />
                            : <AppColor.hideEye height={'20px'} width={'20px'} />}
                        </div>
                    } placeholderText='Enter' />

                    <DynamicPadding desktop='30px' mobile='20px' />
                    {
                        checkInput.length > 0 && inputText != checkInput && 
                       <div>
                            <Typography fontWeight='500' variant='body5' color={AppColor.red}>
                              *  Passwords do not match. Please try again
                            </Typography>
                            <DynamicPadding desktop='30px' mobile='20px' />
                       </div>
                    }
                    <InputBorderText 
                    type={inputType}
                    emptyChangeColor={true}
                    callback={(item) => {setCheckInput(item)}}
                    borderText='Confirm Password ' labelIcon={
                        <div className='cursor' onClick={() => {
                            setInputType(inputType == 'text' ? 'password' : 'text')
                        }}>
                            {inputType == 'text'
                            ? <AppColor.eye height={'13px'} />
                            : <AppColor.hideEye height={'20px'} width={'20px'} />}
                        </div>
                    } placeholderText='Enter' />

                    <DynamicPadding desktop='25px' mobile='15px'/>
                    <div className='flex_end'>
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPasswordModal(false)}}
                        >
                            Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' textTransform='uppercase'
                        disabled={inputText != checkInput || inputText.length < 8}
                        onClick={() => {setPasswordModal(false);setPasswordStage(0)}}
                        >
                            change password
                        </MyButtonOrange>
                    </div>
                </>}
                {passwordStage == 0 && <>
                    <Typography variant='body4'>For security, please enter your password to continue.</Typography>
                    <DynamicPadding desktop='25px' mobile='15px'/>
                    <InputBorderText
                    type={inputType}
                    borderText='Password ' labelIcon={
                        <div className='cursor' onClick={() => {
                            setInputType(inputType == 'text' ? 'password' : 'text')
                        }}>
                            {inputType == 'text'
                            ? <AppColor.eye height={'13px'} />
                            : <AppColor.hideEye height={'20px'} width={'20px'} />}
                        </div>
                    } placeholderText='Enter' />
                    <SizeBox height='15px'/>
                    <Link to={'/recovery'}>
                        <Typography variant='body4' color={AppColor.orange}>Recovery Password</Typography>
                    </Link>
                    <div className='flex_end'>
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPasswordModal(false)}}
                        >
                            Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPasswordStage(1)}}
                        >
                            Verify
                        </MyButtonOrange>
                    </div>
                </>}
                </ModalCenterBasic>}
            <Header />
            <NavigationBarCustom
            icon={<AppColor.settings />}
            text="settings"
            parentRoute="settings"
            activeIndex={1}
            buttonsLink={[
                    {
                        title: "profile",
                        link: "/profile",
                    },
                    {
                        title: "password-security",
                        link: "/password-security",
                    },
                    {
                        title: "verification",
                        link: "/verification",
                    },
                    {
                        title: "notifications",
                        link: "/notifications",
                    }
                ]}
            />
            <div className={styles.wrapper}>
                <PageDetails
                    historyNode=
                    {
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Settings']} 
                        />
                    } 
                    pageTitle='password & security'
                />
         
             <DynamicPadding />

            <div className={styles.cards_wrapper}>
                <SettingsCardSecurity
                    icon={<AppColor.phone />}
                    title='Phone Number'
                    text='You didn’t provide a phone number yet'
                    buttonText='Add a number'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.gmail />}
                    title='Email'
                    text='w********@g***.com This email is linked to your account'
                    buttonText='Change email'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.key />}
                    title='Change Password'
                    text='Improve your security with a strong password'
                    buttonText='Change password'
                    isSolved={false}
                    onClick={() => {
                        setPasswordModal(true);
                    }}
                />
                <SettingsCardSecurity
                    icon={<AppColor.twoFactorAuth />}
                    title='Two-Factor Authentication'
                    text='Add an extra layer of security to your  account'
                    buttonText='Enable 2FA'
                    isSolved={false}
                    onClick={() => {
                        setTwoFactorModal(true);
                    }}
                />
                <SettingsCardSecurity
                    icon={<AppColor.searchEarth />}
                    title='Search Engines'
                    text='Allow or forbid search engines to index my profile'
                    buttonText='Allow to index'
                    isSolved={true}
                    solveText='Allow to index'
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.hideEye width={'38px'} height={'38px'} />}
                    title='Blocked List'
                    text='Add or remove users to blocked list and hide content from your view '
                    buttonText='Browse blocked list'
                    isSolved={false}
                    onClick={() => {
                        setBlockedModal(true);
                    }}
                />
            </div>
            <AskedQuestion/>
        </div>
           <Footer/>
      </div>
    );
};

type PasswordScoreProps = {
    password: string;
}

type scoreSystem = {
    title: string;
    color: string;
    score: 'Error' | 'Weak' | 'Fair' | 'Strong';
}
const PasswordScore = ({password}:PasswordScoreProps) => {

    const mapItems:Map<boolean,scoreSystem> = new Map([
        [password.length < 8 , {title: 'Passwords must be at least 8 characters long', color: AppColor.red, score: 'Error'}],
        [password.length < 10 && password.length >= 8, {title: 'Try a few random words.', color: '#F2C94C', score: 'Weak'}],
        [password.length >= 10 && password.length < 13, {title: 'That password is good, but you can make it even better.', color: AppColor.orange, score: 'Fair'}],
        [password.length >= 13, {title: 'Great password !', color: AppColor.green, score: 'Strong'}],
    ]);

    const currentScore = (mapItems.get(true) as scoreSystem);
    
    const percent = currentScore.score == 'Error' ? 0 : currentScore.score == 'Weak' ? 25 : currentScore.score == 'Fair' ? 50 : 100;
    return (
        <div className='flex_space_between'>
            <Typography variant='body5' fontWeight='500' color={currentScore.color}>* {currentScore.title}</Typography>

            <div className='gap_10'>
                <Typography variant='body5' textLineHeight='1' fontWeight='500' color={currentScore.color}>{currentScore.score}</Typography>
                <div style={{width: '50px'}}>
                <PercentBar height='5px' currentPercent={percent} color={currentScore.color} />
                </div>
            </div>
        </div>
    )
}

const TwoFactor = () => {
    const [phoneModal, setPhoneModal] = useState(false);
    const [number, setNumber] = useState('');

    const [verifCode, setVerifCode] = useState('');
    const [pin, setPin] = useState('');

    const [stepNumber, setStepNumber] = useState(1);
    const [contryNumber, setCountryNumber] = useState('+380');
    return (
        <div>
            {phoneModal && stepNumber == 3 && <ModalCenterBasic title='Two-factor authentication' desktopMaxWidth='620px' desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setPhoneModal(false)}}
            >
                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                Step 3 of 3
                </Typography>
                <DynamicPadding desktop='15px' mobile='10px'/>
                <Typography variant='body4'>Create 6-digit PIN </Typography>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <VerificationCodeInput callback={(item) => {setPin(item)}} length={6} />
                <DynamicPadding desktop='30px' mobile='20px'/>

                <div className='flex_end'>
                        
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPhoneModal(false)}}
                        >
                            Back
                        </MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' textTransform='uppercase'
                        onClick={() => {
                            setPhoneModal(false)
                        }} disabled={pin.length != 6}
                        >
                            Enable 2FA
                        </MyButtonOrange>
                    </div>
            </ModalCenterBasic>}
            {phoneModal && stepNumber == 2 && <ModalCenterBasic title='Two-factor authentication' desktopMaxWidth='620px' desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setPhoneModal(false)}}
            >
                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                Step 2 of 3
                </Typography>
                <DynamicPadding desktop='15px' mobile='10px'/>
                <Typography variant='body4'>A 6-digit verification code has been sent to +380*******31. Enter it below. </Typography>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div style={{maxWidth: '430px'}}><VerificationCodeInput callback={(item) => {setVerifCode(item)}} length={6} /></div>
                <DynamicPadding desktop='25px' mobile='15px'/>

                <div className='gap_5'>
                    <Typography variant='body4'>Your code will be active for </Typography>
                    <CountDownText color={AppColor.green} durationInSeconds={900} />
                    <Typography variant='body4'>minutes.</Typography>
                </div>
                <SizeBox height='5px'/>
                <div style={{cursor: 'pointer'}}>
                <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Send new code </Typography>
                </div>
                <div className='flex_end'>
                        
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPhoneModal(false)}}
                        >
                            Back
                        </MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' textTransform='uppercase'
                        onClick={() => {
                            setStepNumber(3);
                        }} disabled={verifCode.length != 6}
                        >
                            Continue
                        </MyButtonOrange>
                    </div>
            </ModalCenterBasic>}
            {phoneModal && stepNumber == 1 && <ModalCenterBasic title='Two-factor authentication' desktopMaxWidth='620px' desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setPhoneModal(false)}}
            >
                <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                Step 1 of 3
                </Typography>
                <DynamicPadding desktop='15px' mobile='10px'/>
                <Typography variant='body4'>Enter your phone number to confirm.</Typography>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <InputBorderText
                    prevIcon={
                        <PhoneCountryNumberSelect callback={(item) => {setCountryNumber(item)}} />
                    }
                    padding='17px 50px 17px 100px'
                    type='number'
                    emptyChangeColor={true}
                    callback={(item) => {setNumber(item)}}
                    borderText='Phone Number  ' labelIcon={
                        <div className='cursor'>
                            <AppColor.phone height={'18px'} />
                        </div>
                    } placeholderText='' />
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='flex_end'>
                        
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase'
                        onClick={() => {setPhoneModal(false)}}
                        >
                            Back
                        </MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' textTransform='uppercase'
                        onClick={() => {
                            setStepNumber(2);
                        }} disabled={number.length != 10}
                        >
                            Continue
                        </MyButtonOrange>
                    </div>
            </ModalCenterBasic>}
            <Typography variant='body4'>
            <span style={{fontWeight: '500'}}>Two-factor authentication</span> ensures that only devices you trust are able to access your account. Whenever a new device attempts to
             login to your account, you will be required to confirm the login by using a code sent to your email address or phone number.
            </Typography>

            <DynamicPadding desktop='25px' mobile='15px'/>

            <div className='flex_space_between'>
                <Typography variant='body4' fontWeight='500'>Two-factor authentication(2FA)</Typography>
                <MyButtonTransparentOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                Enable 2FA
                </MyButtonTransparentOrange>
            </div>

            <DynamicPadding desktop='25px' mobile='15px'/>

            <HorizontalLine />

            <DynamicPadding desktop='25px' mobile='15px'/>
            <div className={styles.grid_20}>
                <ItemFactor text={
                    contryNumber != '' && number != '' ? formatPhoneNumber(`${contryNumber}${number}`) : 'No phone number'     
                } title={'Verification Code'} 
                    onClick={() => {
                        setPhoneModal(true);
                    }}
                />
                <ItemFactor text={
                    pin.length > 0 ? '******' : 'No 6-digit PIN'
                } title={'PIN'} 
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}

function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 4) {
      return phoneNumber; // Return full number if length is less than 4
    } else {
      return phoneNumber.substring(0, 3) + '********' + phoneNumber.substring(phoneNumber.length - 1);
    }
  }

type CountryPhone = {
    number: string;
    flag: React.ReactNode;
}

const countries:CountryPhone[] = [
    {
        flag: <AppColor.usaFlag />,
        number: '+1'
    },
    {
        flag: <AppColor.ukraineFlag />,
        number: '+380'
    }
]
export const PhoneCountryNumberSelect = ({callback}) => {
    const [country, setCountry] = useState<CountryPhone>({number: '+1', flag: <AppColor.usaFlag />});
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div style={{position: 'relative'}}>
            <div className='gap_10 cursor' onClick={() => {setShowDropdown(prev => !prev)}}>
                {country.flag}
                <AppColor.trianleDown fill={AppColor.text} />
                <Typography variant='body4'>{country.number}</Typography>
            </div>
            <div style={{opacity: showDropdown ? '1' : '0'}} className={styles.abs_item}>
                <AnimateHeight show={showDropdown}>
     
                        <div>
                            {countries.map(item =>
                                <div className={`${styles.dropdown_item_number} cursor`} onClick={() => {setCountry(item);setShowDropdown(false);callback(item.number)}}>
                                    {item.flag}
                                    <Typography variant='body4'>{item.number}</Typography>
                                </div>    
                            )}
                       </div>
       
                </AnimateHeight>
            </div>
        </div>
    )
}
 
const ItemFactor = ({title,text,onClick}) => {
    return (
        <div className='flex_space_between'>
            <div>
                <Typography variant='body4' fontWeight='500'>{title}</Typography>
                <SizeBox height='5px'/>
                <Typography variant='body5'>{text}</Typography>
            </div>

            <AppColor.edit onClick={onClick} fill={AppColor.text} className='cursor'/>
        </div>
    )
}

export default PasswordAndSecurity;