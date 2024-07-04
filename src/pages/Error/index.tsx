import HeaderNothAuthorized from "@common/components/Header/Header-not-authorized/Header-not-authorized";
import NavigationItem from "@common/components/navigation_history/NavigationItem/index";
import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import Typography from "@common/components/ui/Typography/Typography";
import MyButtonBlack from "@common/components/ui/MyButton/variants/MyButtonBlack";
import MyButtonOrange from "@common/components/ui/MyButton/variants/MyButtonOrange";
import SizeBox from "@common/components/ui/SizeBox/index";
import Dropdown from "@common/components/ui/Dropdown/index";

import Footer from "@common/components/Footer/Footer";
import AskedQuestion from "@common/components/AskedQuestions/index";
import { Link, useNavigate } from "react-router-dom";
import Header from "@common/components/Header/Header/index";
import { useState, useEffect } from "react";

const Error = () => {
    const [errorVisible, setErrorVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setErrorVisible(true);
          }, 0);
    }, []);
    return (
      <div>
          <Header />
          <div style={{opacity: errorVisible ? '1' : '0'}} className={styles.wrapper}>
            <NavigationItem textList={[ 
              <p className={styles.error_title}>404 Not Found</p>
            ]} 
            image={<AppColor.home />} 
          />

          <div className={styles.flex_center}>
            <Typography variant="titleSmall" textTransform="uppercase" textAlign="center">
              Oops! That page can’t be found.          
            </Typography>
           <div className={styles.block_margin}>
            <Typography variant="body4" textAlign="center" color={AppColor.transparentBlack}>
                It looks like nothing was found at this location. Maybe try one of the links below or a search?
              </Typography>
           </div>
            <div style={{display: 'flex'}}>
              <MyButtonBlack onClick={() => navigate(-2)} padding="14px 26px">
                Back
              </MyButtonBlack>
              <SizeBox width="20px"/>
              <Link to={'/dashboard/home'}>
                <MyButtonOrange 
                onClick={() => {}}
                padding="14px 30px"
                >
                  Go to Home
                </MyButtonOrange>
              </Link>
            </div>
            </div>
            <AskedQuestion />
          </div>
          <Footer />
      </div>
    );
};


const Cookies = () => {
  return (
    <div className={styles.cookies}>
      <AppColor.cookies />
      <div className={styles.cookies_child}>
        <Typography variant="body4">
          This site uses cookies to improve your experience. Privacy Policy
        </Typography>
        <MyButtonBlack
        onClick={() => {}}
        >
          GOT IT
        </MyButtonBlack>
      </div>
    </div>
  )
};
export default Error;