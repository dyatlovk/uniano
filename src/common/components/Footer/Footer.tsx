import Logo from '../Logo/Logo'
import Typography from '../ui/Typography/Typography'
import styles from './style.module.scss'
import copyrightIcon from '@assets/svg/copyright-icon.svg'

import instagram from '@assets/svg/instagram.svg'
import twitter from '@assets/svg/twitter.svg'
import facebook from '@assets/svg/facebook.svg'
import telegram from '@assets/svg/telegram.svg'
import AppColor from '@common/styles/variables-static'
import AnimatedSvg from '../AnimatedSvg'
import { useState, useEffect, useCallback, useContext } from 'react'
import HorizontalLine from '../ui/Lines/HorizontalLine'
import AnimateHeight from '../AnimateHeight'
import { CareComponent } from './components/CareService/SwitchCare'
import { FooterTriggerContext } from '@common/context/footer_trigger';

export const levelMap = {
    1: <AppColor.oneOfFive />,
    2: <AppColor.twoOFFive />,
    3: <AppColor.threeOfFive />,
    4: <AppColor.fourOfFive />,
    5: <AppColor.fiveOfFive />,
}
const Footer = ({ removeMargin }: { removeMargin?: boolean }) => {

    const [tmpSwitch, setTmpSwitch] = useState('');

    const {activeCategory,setActiveCategory} = useContext(FooterTriggerContext);

    useEffect(() => {
        if(activeCategory != '') {
            setShowHelper(true);
        }
    },[activeCategory])

    const [y, setY] = useState(window.scrollY)

    const [showHelper, setShowHelper] = useState(false);

    const [scrollDirection, setScrollDirection] = useState<
        'up' | 'down'
    >('down')

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
        setTimeout(() => {
            setScrollDirection('up');
        },200)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setTimeout(() => {
            setScrollDirection('down');
        },200)
    }

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget
            if (y > window.scrollY) {
                if (scrollDirection !== 'up') {
                    setScrollDirection('up')
                }
            } else if (y < window.scrollY) {
                if (scrollDirection !== 'down') {
                    setScrollDirection('down')
                }
            }
            setY(window.scrollY)
        },
        [y]
    )

    useEffect(() => {
        setY(window.scrollY)
        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    }, [handleNavigation])

    return (
        <>
            <div style={{position: 'relative',zIndex: '4'}}>
                <div className="absolute_right_buttons">
                    <AnimatedSvg
                        showNode2={showHelper}
                        node1={
                            <div onClick={() => {setShowHelper(prev => !prev)}} className="absolute_button">
                                {' '}
                                <AppColor.messageChat />
                            </div>
                        }
                        node2={
                            <div onClick={() => {setShowHelper(prev => !prev)}} className="absolute_button">
                                <AppColor.messageChatOrange />
                            </div>
                        }
                    />
    
                    {scrollDirection === 'up' ? (
    
                            <AnimatedSvg
                                node1={
                                    <div onClick={() => {scrollToTop()}} className="absolute_button">
                                        <AppColor.chevronTop
                                            fill={AppColor.text}
                                        />
                                    </div>
                                }
                                node2={
                                    <div onClick={() => {scrollToTop()}} className="absolute_button">
                                        {' '}
                                        <AppColor.chevronTop
                                            fill={AppColor.orange}
                                        />
                                    </div>
                                }
                            />
                    ) : (
                        <AnimatedSvg
                            node1={
                                <div onClick={() => {scrollToBottom()}} className="absolute_button">
                                    <AppColor.chevronBottom
                                        fill={AppColor.text}
                                    />
                                </div>
                            }
                            node2={
                                <div onClick={() => {scrollToBottom()}} className="absolute_button">
                                  
                                    <AppColor.chevronBottom
                                        fill={AppColor.orange}
                                    />
                                </div>
                            }
                        />
                    )}
    
        
                        <CareComponent callback={(item) => {setShowHelper(item)}} showHelper={showHelper} />
        
                </div>
            </div>
            <footer
                style={removeMargin ? { marginTop: '0px' } : {}}
                className={styles.wrapper}>
                <div className={styles.margin_wrapper}>
                    <div className={styles.wrapper_content}>
                        <div className={styles.first}>
                            <span className={styles.logo}>
                                <Logo color="white" />
                            </span>
                            <span
                                className={styles.copyright_desktop}>
                                <Copyright />
                            </span>
                        </div>
                        <div className={styles.links_mobile}>
                            <ul className={styles.list}>
                                <li>
                                    <a href="#">
                                        <img
                                            src={instagram}
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={facebook}
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={telegram}
                                            alt="telegram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.text_links_wrapper}>
                            <div className={styles.second}>
                                <p className={styles.title}>
                                    Company
                                </p>
                                <ul className={styles.list}>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Terms and Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Releases</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.third}>
                                <p className={styles.title}>Useful</p>
                                <ul className={styles.list}>
                                    <li>
                                        <a href="#">Community</a>
                                    </li>
                                    <li>
                                        <a href="#">Managers</a>
                                    </li>
                                    <li>
                                        <a href="#">General Help</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.second}>
                            <p className={styles.title}>Company</p>
                            <ul className={styles.list}>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Terms and Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Releases</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.third}>
                            <p className={styles.title}>Useful</p>
                            <ul className={styles.list}>
                                <li>
                                    <a href="#">Community</a>
                                </li>
                                <li>
                                    <a href="#">Managers</a>
                                </li>
                                <li>
                                    <a href="#">General Help</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.fourth}>
                            <p className={styles.title}>Social</p>
                            <ul className={styles.list}>
                                <li>
                                    <a href="#">
                                        <img
                                            src={instagram}
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={facebook}
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src={telegram}
                                            alt="telegram"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.copyright_mobile}>
                            <Copyright />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

const Copyright = () => {
    return (
        <div className={styles.copiright_wrapper}>
            <img
                src={copyrightIcon}
                width={13}
                height={13}
                alt="copyright"
            />
            <p>2023 Uniano. All rights reserved</p>
        </div>
    )
}
export default Footer
