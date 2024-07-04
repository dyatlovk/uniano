import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import { useEffect, useState } from 'react'

import imageBc from '@assets/svg/start-guide.svg'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'

import {ReactComponent as PlayButton} from '@assets/svg/play-button.svg';
import SizeBox from '@common/components/ui/SizeBox/index'
import { Link } from 'react-router-dom'

const goals: GoalProps[] = [
    {
        title: 'Create an account',
        text: 'Thanks for signing up - we’re happy to have you on board!',
        isRiched: true,
        solveLink: <div></div>,
    },
    {
        title: 'Upload your profile picture',
        text: 'You can upload or update your profile picture in Settings - Profile',
        isRiched: false,
        solveLink: (
            <div className={styles.goal_solve_link}>
               <span className={styles.text_underline}>
                    <Typography fontWeight='500' color={AppColor.orange} variant="body5">
                        Go to profile
                    </Typography>{' '}
               </span>
            </div>
        ),
    },
    {
        title: 'Complete your account information',
        text: 'You can upload or update your profile picture in Settings - Profile',
        isRiched: false,
        solveLink: (
            <div className={styles.goal_solve_link}>
                <span className={styles.goal_solve_button}>
                <PlayButton/>
                </span>
                <span className={styles.text_underline}>
                    <Typography fontWeight='500' color={AppColor.orange} variant="body5">
                        Go to profile
                    </Typography>{' '}
                </span>
            </div>
        ),
    },
]
const StartGuide = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
          }, 0);
    }, []);
    
    return (
        <div style={{opacity: visible ? '1' : '0'}} className={styles.wrapper}>
            <div className={styles.image_part}>
                <img src={imageBc} width={'100%'} style={{maxWidth: '320px'}} height={'auto'} alt="" />
            </div>
            <div className={styles.content_part}>
                <div className={styles.content_wrapper}>
                    <DynamicPadding desktop='100px' mobile='0px'/>
                    <div className={styles.center_text}>
                        <Typography
                            variant="titleSmall"
                            textTransform="uppercase">
                            Quick Start Guide
                        </Typography>
                    </div>
                    <DynamicPadding desktop="25px" mobile="13px" />
                   <div className={styles.center_text}>
                        <Typography
                            variant="body4"
                            color={AppColor.transparentBlack}>
                            Here is a concise and user-friendly document
                            that provides step-by-step instructions to
                            help you quickly get started with Uniano's
                            services.
                        </Typography>
                   </div>
                    <DynamicPadding desktop="50px" mobile="30px" />
                    <DropdownNode
                    boolean={true}
                        amount="25"
                        icon={<AppColor.colorFlag />}
                        node={
                            <div className={styles.goal_list}>
                                {goals.map((goal) => (
                                    <Goal
                                        isRiched={goal.isRiched}
                                        solveLink={goal.solveLink}
                                        text={goal.text}
                                        title={goal.title}
                                    />
                                ))}
                            </div>
                        }
                        title={
                            <Typography
                                textTransform="uppercase"
                                fontWeight="500"
                                variant="body4">
                                Getting started{' '}
                                <span className={styles.orange}>
                                    1 of 3 completed
                                </span>
                            </Typography>
                        }
                    />
                    <DynamicPadding desktop="20px" mobile="15px" />
                    <DropdownNode
                        
                        amount="25"
                        title={
                            <Typography
                                textTransform="uppercase"
                                fontWeight="500"
                                variant="body4">
                                Getting started{' '}
                                <span className={styles.orange}>
                                    1 of 3 completed
                                </span>
                            </Typography>
                        }
                        icon={<AppColor.cart />}
                        node={
                            <div className={styles.goal_list}>
                                {goals.map((goal) => (
                                    <Goal
                                        isRiched={goal.isRiched}
                                        solveLink={goal.solveLink}
                                        text={goal.text}
                                        title={goal.title}
                                    />
                                ))}
                            </div>
                        }
                    />
                    <DynamicPadding desktop="50px" mobile="24px" />
                    <div className={styles.content_part_bottom}>
                       <div className={styles.center_text}>
                            <Typography variant="body4">
                                You can leave this page without issues and
                                continue later on Dashboard
                            </Typography>
                       </div>

                       <Link to={'/dashboard/home'}>
                            <MyButtonOrange textTransform='uppercase' fontWeight='500'
                                onClick={() => {}}
                                padding="8px 19px">
                                Complete later
                            </MyButtonOrange>
                       </Link>
                    </div>

                    <DynamicPadding />
                </div>
            </div>
        </div>
    )
}

type DropdownNodeProps = {
    title: React.ReactNode
    node: React.ReactNode
    icon: React.ReactNode
    amount: string
   
    boolean?: boolean;
}
const DropdownNode = ({
    title,
    node,
    icon,
    amount,
   
    boolean
}: DropdownNodeProps) => {
    const [isShow, setShow] = useState(boolean ?? false)
    return (
        <div>
            <div
                style={{backgroundColor: isShow ? '#F5F5F5' : 'transparent'}}
                onClick={() => {
                    setShow((prev) => !prev)
                }}
                className={styles.dropdown}>
                {isShow ? (
                    <AppColor.chevronTop fill={AppColor.text} />
                ) : (
                    <AppColor.chevronBottom fill={AppColor.transparentBlack} />
                )}
                <div>
                    {icon}
                    {title}
                </div>
                <div className={styles.dropdown_margin}>
                    <AppColor.pigCoins />
                    <Typography variant="body4">{amount}</Typography>
                </div>
            </div>
            <div
                style={{
                    transform: !isShow ? 'scaleY(0)' : 'scaleY(1)',
                    maxHeight: !isShow ? '0px' : '100vh',
                }}
                className={styles.dropdown_child}>
                {node}
            </div>
        </div>
    )
}

type GoalProps = {
    isRiched: boolean
    title: string
    text: string
    solveLink: React.ReactNode
}
const Goal = ({ isRiched, text, title, solveLink }: GoalProps) => {
    return (
        <div className={styles.goal_wrapper}>
            {isRiched ? (
                <div className={styles.goal_riched}>
                    <AppColor.singTrue stroke='white' />
                </div>
            ) : (
                <div className={styles.goal_unriched}></div>
            )}
            <div className={styles.goal_text}>
                <Typography
                    textLineHeight="100%"
                    variant="body4"
                    fontWeight="500">
                    {title}
                </Typography>
                <DynamicPadding mobile="7px" desktop="10px" />
                <Typography
                    color={AppColor.transparentBlack}
                    variant="body4">
                    {text}
                </Typography>
            </div>
            <div className={styles.goal_margin}>{solveLink}</div>
        </div>
    )
}

export default StartGuide
