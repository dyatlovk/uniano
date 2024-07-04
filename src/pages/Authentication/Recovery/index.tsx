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

const Recovery = () => {
     const [email,setEmail] = useState('');

     const [visible, setVisible] = useState(false);

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
                    <AppColor.authenticationRecovery style={{maxHeight: '200px'}} />
                </div>
           </div>
           <div className={styles.content_part}>
                <div  className={styles.first_flex}>
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
                <DynamicPadding desktop='0px' mobile='30px'/>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Password Recovery                     
                    </Typography>
                    </div>

                    <DynamicPadding desktop='40px' mobile='30px'/>
                    
                    <InputBorderText 
                    borderText='Email/Username'
                    placeholderText=''
                    isRequired={true}
                    emptyChangeColor={true}
                    callback={(item) => {setEmail(item)}}
                    labelIcon={<AppColor.gmail height={'20px'} />}
                    />

                   
                   
                  
                    <DynamicPadding desktop='40px' mobile='15px'/>

                   <Link to={'/authentication'}>
                        <MyButtonOrange
                        disabled={!email.includes('@gmail.com')}
                        width='100%'
                        padding='15px 0px'
                        onClick={() => {}}
                        >
                            Recover Password
                        </MyButtonOrange>
                   </Link>
                   
                </div>
                <div style={{opacity: '0'}} className={styles.first_flex}>
                  
                </div>
            </div>
      </div>
    );
};
export default Recovery;