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
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';

const SingUp = () => {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');

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
                    <img style={{maxHeight: '270px'}} src={registrationImage} alt="" />
                </div>
           </div>
           <div className={styles.content_part}>
                <div className={styles.first_flex}>
                    <Typography variant='body4'>
                        Already have an account?
                    </Typography>
                    <SizeBox width='19px'/>
                    <Link to={'/sign-in'}>
                        <MyButtonTransparentOrange
                        onClick={() => {}} fontWeight='500'
                        >
                            Sign in
                        </MyButtonTransparentOrange>
                    </Link>
                </div>
                <div className={styles.center}>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Create your free account
                    </Typography>
                    </div>

                    <DynamicPadding desktop='30px' mobile='10px'/>

                    <InputBorderText 
                    emptyChangeColor={true}
                    borderText='Username'
                    placeholderText=''
                    callback={(item) => {setUserName(item)}}
                    isRequired={true}
                    labelIcon={<AppColor.displayIcon />}
                    />

                    <InputBorderText 
                    emptyChangeColor={true}
                    borderText='Email'
                    placeholderText=''
                    callback={(item) => {setEmail(item)}}
                    isRequired={true}
                    labelIcon={<AppColor.atSing />}
                    />

                    <MyButtonOrange
                    width='100%'
                    padding='15px 0px'
                    disabled={(!email.includes('@gmail.com') || userName == '')}
                    onClick={() => {
                        history('/onboarding');
                        
                    }}
                    >
                        Sign up
                    </MyButtonOrange>
                    <div className={styles.or_block}>
                    <div className={styles.grey_line}></div>
                    <Typography variant='body7' color={AppColor.transparentBlack}>
                        or
                    </Typography>
                    <div className={styles.grey_line}></div>
                </div>
                <Typography variant='body5' fontWeight='500'>
                Sign up with Social
                </Typography>
                <div className={styles.links}>
                    <img src={googleLogo} alt="google" />
                    <img src={facebookLogo} alt="facebook" />
                </div>
                <Typography variant='body5'>
                    By clicking button above, you agree to our <a className={styles.orange} style={{fontWeight: '500'}} href='#'>terms and conditions</a> and <a className={styles.orange} style={{fontWeight: '500'}}>privacy policies</a>
                </Typography>
                </div>
                <div style={{opacity: '0'}} className={styles.first_flex}>
                    <Typography variant='body4'> 
                        Already have an account?
                    </Typography>
                    <SizeBox width='19px'/>
                    <MyButtonTransparentOrange fontWeight='500'
                    onClick={() => {
                       
                    }}
                    >
                        Sign in
                    </MyButtonTransparentOrange>
                </div>
            </div>
      </div>
    );
};

export default SingUp;