import Logo from '@common/components/Logo/Logo';
import styles from './style.module.scss';
import registrationImage from '@assets/images/registration-image.png';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';

import { ReactComponent as DisplayIcon} from '@assets/svg/display-icon.svg';
import AppColor from '@common/styles/variables-static';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import googleLogo from '@assets/svg/google-logo.svg';
import facebookLogo from '@assets/svg/facebook-logo.svg';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RadioButton from '@common/components/ui/RadioButton/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import CountDownText from '@common/components/ui/CountDownText/index';
import VerificationCodeInput from '@common/components/ui/VerifCodeInput/index';

const Authentication = () => {

    const [visible, setVisible] = useState(false);

     useEffect(() => {
         setTimeout(() => {
             setVisible(true);
           }, 0);
     }, []);

    return (
        <div style={{opacity: visible ? '1' : '0'}} className={styles.opacity_wrapper}>
            <VariantChoose />
        </div>
                   
    );
};
const VariantChoose = () => {    
    const [step,setStep] = useState('start');
    switch (step) {
        case 'start':
            return <BeginStep callback={(item) => { setStep(item) }} />;
        case 'email':
            return <EmailStep callback={(item) => { setStep(item) }} />;
        case 'phone':
            return <PhoneStep callback={(item) => { setStep(item) }} />;
        case 'pin':
            return <PinStep callback={(item) => { setStep(item) }} />;
        default:
            return null;
    }
}

type StepProps = {
    callback: (item:string) => void;
}

const PinStep = ({callback}:StepProps) => {

    const [pin,setPin] = useState('');
    return (
        <div className={styles.wrapper}>
        <div className={styles.image_part}>
             <div className={styles.logo}>
                 <Logo color='white'/>
             </div>
             <div className={styles.image}>
                 <AppColor.authenticationPin style={{maxHeight: '200px'}}/>
             </div>
        </div>
        <div className={styles.content_part}>
            <div>

            </div>
             <div className={styles.center}>
             <DynamicPadding desktop='0px' mobile='15px'/>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Authentication                             
                    </Typography>
                    </div>

                    <DynamicPadding desktop='30px' mobile='15px' />  
                    <Typography  variant='body5' fontWeight='500' color={AppColor.transparentBlack}>Step 2 of 2</Typography>
                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <Typography variant='body3' fontWeight='500'>Enter your PIN </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>  
                    <Typography variant='body4'>Enter your 6-digit PIN to continue log in. </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <InputBorderText 
                    borderText='PIN  '
                    type='number'
                    placeholderText=''
                    isRequired={true}
                    emptyChangeColor={true}
                    callback={(item) => {setPin(item)}}
                    labelIcon={<AppColor.pinCode height={'20px'} />}
                    />
                
                  
                  
                    <DynamicPadding desktop='30px' mobile='15px'/>

                   <div className={styles.flex_end}>
                        <MyButtonTransparent  fontWeight='500' textTransform='uppercase' onClick={() => {callback('email')}}>Back</MyButtonTransparent>
                        <MyButtonOrange fontWeight='500'  disabled={pin.length != 6} textTransform='uppercase' onClick={() => {}}>Log in</MyButtonOrange>
                   </div>
                
             </div>
             <div style={{opacity: '0'}} className={styles.first_flex}>
               
             </div>
         </div>
   </div>
    )
}
const PhoneStep = ({callback}:StepProps) => {
    const [verifCode,setVerifCode] = useState('');
    return (
        <div className={styles.wrapper}>
        <div className={styles.image_part}>
             <div className={styles.logo}>
                 <Logo color='white'/>
             </div>
             <div className={styles.image}>
                 <AppColor.authenticationPhoneCode style={{maxHeight: '270px'}}/>
             </div>
        </div>
        <div className={styles.content_part}>
            <div>

            </div>
             <div className={styles.center}> <DynamicPadding desktop='0px' mobile='15px'/>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Authentication                             
                    </Typography>
                    </div>

                    <DynamicPadding desktop='50px' mobile='15px' />  
                    
                    
                    <Typography variant='body3' fontWeight='500'>Enter code </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>  
                    <Typography variant='body4'>A 6-digit verification code has been sent to <span style={{fontWeight: '500'}}>+380*******31.</span> Enter it below. </Typography>
                    <DynamicPadding desktop='20px' mobile='10px'/>
                    <VerificationCodeInput callback={(item) => {setVerifCode(item)}} length={6} />
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
                  
                    <DynamicPadding desktop='30px' mobile='15px'/>

                   <div className={styles.flex_end}>
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase' onClick={() => {callback('start')}}>Back</MyButtonTransparent>
                        <MyButtonOrange fontWeight='500' disabled={verifCode.length != 6} textTransform='uppercase' onClick={() => {}}>Log in</MyButtonOrange>
                   </div>
                
             </div>
             <div style={{opacity: '0'}} className={styles.first_flex}>
               
             </div>
         </div>
   </div>

    )
}
const EmailStep = ({callback}:StepProps) => {
    const [verifCode,setVerifCode] = useState('');
    return (
        <div className={styles.wrapper}>
           <div className={styles.image_part}>
                <div className={styles.logo}>
                    <Logo color='white'/>
                </div>
                <div className={styles.image}>
                    <AppColor.authenticationGmailCode style={{maxHeight: '240px'}} />
                </div>
           </div>
           <div className={styles.content_part}>
               <div>

               </div>
                <div className={styles.center}>
                <DynamicPadding desktop='0px' mobile='15px'/>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Authentication                             
                    </Typography>
                    </div>

                    <DynamicPadding desktop='30px' mobile='15px' />  
                    <Typography  variant='body5' fontWeight='500' color={AppColor.transparentBlack}>Step 1 of 2</Typography>
                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <Typography variant='body3' fontWeight='500'>Check your email </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>  
                    <Typography variant='body4'>A 6-digit verification code has been sent to <span style={{fontWeight: '500'}}>in***@gmail.com.</span> Enter it below. </Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <InputBorderText 
                    type='number'
                    borderText='Verification code '
                    placeholderText=''
                    isRequired={true}
                    emptyChangeColor={true}
                    callback={(item) => {setVerifCode(item)}}
                    labelIcon={<AppColor.security height={'20px'} />}
                    />
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
                  
                    <DynamicPadding desktop='30px' mobile='15px'/>

                   <div className={styles.flex_end}>
                        <MyButtonTransparent fontWeight='500' textTransform='uppercase' onClick={() => {callback('start')}}>Back</MyButtonTransparent>
                        <MyButtonOrange  fontWeight='500' disabled={verifCode.length != 6} textTransform='uppercase' onClick={() => {callback('pin')}}>Continue</MyButtonOrange>
                   </div>
                   
                </div>
                <div style={{opacity: '0'}} className={styles.first_flex}>
                  
                </div>
            </div>
      </div>
    )
}
const BeginStep = ({callback}:StepProps) => {
    const [selectedVariant,setSelectedVariant] = useState(1);
    return (
        <div className={styles.wrapper}>
           <div className={styles.image_part}>
                <div className={styles.logo}>
                    <Logo color='white'/>
                </div>
                <div className={styles.image}>
                    <AppColor.authentication style={{maxHeight: '200px'}}/>
                </div>
           </div>
           <div className={styles.content_part}>
               <div>

               </div>
                <div className={styles.center}>
                <DynamicPadding desktop='0px' mobile='30px'/>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Authentication                             
                    </Typography>
                    </div>

                    <DynamicPadding />  
                    <Typography variant='body4'>Please confirm you are the account holder. Select a verification option:</Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>  
                   <div>
                        <RadioButton 
                        activeSelection={selectedVariant == 1}
                        callback={(item) => {setSelectedVariant(item)}}
                        indexItem={1}
                        text=' Text me a verification code at +380*******31' />
                        <SizeBox height='15px'/>
                        <RadioButton 
                        activeSelection={selectedVariant == 2}
                        callback={(item) => {setSelectedVariant(item)}}
                        indexItem={2}
                        text='  Email me a verification code at: in***@gmail.com and ask me for my account PIN           ' />
                   </div>

                   
                   
                  
                    <DynamicPadding desktop='40px' mobile='15px'/>

                   <div className={styles.flex_end}>
                        <Link to={'/recovery'}><MyButtonTransparent  fontWeight='500' textTransform='uppercase' onClick={() => {}}>Cancel</MyButtonTransparent></Link>
                        <MyButtonOrange width='70px' textTransform='uppercase' fontWeight='500' onClick={() => {callback(selectedVariant == 1 ? 'phone' : 'email')}}>Next</MyButtonOrange>
                   </div>
                   
                </div>
                <div style={{opacity: '0'}} className={styles.first_flex}>
                  
                </div>
            </div>
      </div>

    )
}
export default Authentication;