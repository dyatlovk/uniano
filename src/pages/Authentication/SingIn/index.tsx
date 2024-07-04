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
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');

     const [visible, setVisible] = useState(false);
     const history = useNavigate();
     useEffect(() => {
         setTimeout(() => {
             setVisible(true);
           }, 0);
     }, []);
    return (
      <div style={{opacity: visible ? '1' : '0'}} className={styles.wrapper}>
           <div className={styles.image_part}>
                <div className={styles.logo}>
                    <Logo color='white'/>
                </div>
                <div className={styles.image}>
                    <AppColor.authenticationSignIn style={{maxHeight: '200px'}} />
                </div>
           </div>
           <div className={styles.content_part}>
                <div  className={styles.first_flex}>
                    <Typography variant='body4'>
                        Already have an account?
                    </Typography>
                    <SizeBox width='19px'/>
                    <Link to={'/sign-up'}>
                        <MyButtonTransparentOrange
                        onClick={() => {}} fontWeight='500'
                        >
                            Sign up
                        </MyButtonTransparentOrange>
                    </Link>
                </div>
                <div className={styles.center}>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Hello Again!           
                    </Typography>
                    </div>
                    <DynamicPadding />
                    <InputBorderText 
                    borderText='Email/Username'
                    placeholderText=''
                    isRequired={true}
                    emptyChangeColor={true}
                    callback={(item) => {setEmail(item)}}
                    labelIcon={<AppColor.gmail height={'20px'} />}
                    />
                    <DynamicPadding desktop='20px' mobile='15px'/>

                    <InputBorderText 
                    borderText='Password '
                    placeholderText=''
                    isRequired={true}
                    emptyChangeColor={true}
                    callback={(item) => {setPassword(item)}}
                    labelIcon={<AppColor.key height={'20px'} />}
                    />
                    <SizeBox height='5px'/>
                   
                    <div className='gap_10'>
                         <MyCheckbox
                              height='20px' width='20px' 
                         />
                         <Typography variant='body5'>Remember Me</Typography>
                        
                        <div style={{marginLeft: 'auto'}}>
                       <Link to={'/recovery'}>
                       <Typography variant='body5' fontWeight='500' color={AppColor.orange}>Password Recovery </Typography> 
                       </Link>  
                        </div>
                    </div>
                    <DynamicPadding desktop='20px' mobile='15px'/>

                    <MyButtonOrange
                     disabled={(email.length < 2 || password.length < 4)}
                    width='100%'
                    padding='15px 0px'
                    onClick={() => {
                        
                        history('/dashboard/home');
                        
                    }}
                    >
                        Login
                    </MyButtonOrange>
                    <DynamicPadding desktop='40px' mobile='20px'/>
                    <div className={styles.or_block}>
                    <div className={styles.grey_line}></div>
                    <Typography variant='body7' fontWeight='400' color={AppColor.transparentBlack}>
                        or
                    </Typography>
                    <div className={styles.grey_line}></div>
                </div>
                <DynamicPadding desktop='20px' mobile='15px'/>
               <div className='justify_center'>
                
               <Typography variant='body5' fontWeight='500'>
               Sign in with Social
                </Typography>
                
               </div>
               <DynamicPadding desktop='20px' mobile='15px'/>
                <div className={styles.links}>
                    <img src={googleLogo} alt="google" />
                    <img src={facebookLogo} alt="facebook" />
                </div>
                <DynamicPadding desktop='20px' mobile='15px'/>
                <Typography variant='body5'>
                    By clicking button above, you agree to our <a className={styles.orange} style={{fontWeight: '500'}}  href='#'>terms and conditions</a> and <a style={{fontWeight: '500'}}  className={styles.orange}>privacy policies</a>
                </Typography>
                </div>
                <div style={{opacity: '0'}} className={styles.first_flex}>
                    <Typography variant='body4'>
                        Already have an account?
                    </Typography>
                    <SizeBox width='19px'/>
                    <MyButtonTransparentOrange
                    onClick={() => {}}
                    >
                        Sign in
                    </MyButtonTransparentOrange>
                </div>
            </div>
      </div>
    );
};
export default SingIn;