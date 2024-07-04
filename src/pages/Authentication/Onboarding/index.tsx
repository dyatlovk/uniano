import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import AppColor from '@common/styles/variables-static'

import image1 from '@assets/images/onboarding-1.svg'
import image2 from '@assets/images/onboarding-2.svg'
import image3 from '@assets/images/onboarding-3.svg'
import image4 from '@assets/images/onboarding-4.svg'
import { useEffect, useState } from 'react'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { useNavigate } from 'react-router-dom'

const cards: CardProps[] = [
    {
        image: image1,
        text: 'Enjoy Commission-Free Projects and Focus on Your Business Growth!',
        title: 'Customer',
        currentIndex: 0,
    },

    {
        image: image2,
        text: 'Keep All Your Earnings, Just 5% Commission!',
        title: 'Freelancer',
        currentIndex: 1,
    },

    {
        image: image3,
        text: 'Make a Difference by Sponsoring Innovative and Impactful Projects',
        title: 'Sponsor',
        currentIndex: 2,
    },

    {
        image: image4,
        text: 'Streamline Your Project Management with Our Intuitive Tools and Features',
        title: 'Manager',
        currentIndex: 3,
    },
]
const Onboarding = () => {

    const [currentIndex,setCurrentIndex] = useState<number | undefined>(undefined);
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
          }, 0);
    }, []);

    return (
        <div style={{opacity: visible ? '1' : '0'}} className={styles.wrapper}>
            <div className={styles.content}>
                <Typography
                    variant="titleSmall"
                    textTransform="uppercase">
                    Welcome to uniano
                </Typography>
                <DynamicPadding 
                desktop='25px'
                mobile='20px'
                />
                <div className={styles.text}>
                <Typography
                    variant="body4"
                    textAlign="center"
                    color={AppColor.transparentBlack}>
                    Thanks for signing up - we’re happy to have you on
                    board! Let us to know who is you ? Don’t worry,
                    this can be changed later in two clicks.
                </Typography>
                </div>
                <DynamicPadding 
                desktop='50px'
                mobile='30px'
                />
                <section className={styles.cards}>
                    {cards.map((card) => (
                        <div onClick={() => {setCurrentIndex(card.currentIndex)}}>
                            <Card
                                image={card.image}
                                text={card.text}
                                title={card.title}
                                currentIndex={card.currentIndex}
                                activeIndex={currentIndex}
                            />
                        </div>
                    ))}
                </section>
                <DynamicPadding 
                desktop='50px'
                mobile='30px'
                />
               <div className={styles.button}>
               <MyButtonOrange onClick={() => { 
                    navigate('/start-guide');
                 }} width="100%" padding='15px'>
                    Let’s Start
                </MyButtonOrange>
               </div>
            </div>
        </div>
    )
}

type CardProps = {
    image: string
    text: string
    title: string
    activeIndex?: number
    currentIndex: number
}
const Card = ({ image, text, title,currentIndex,activeIndex }: CardProps) => {
    return (
        <div className={styles.card}>
            <DynamicPadding desktop='20px' mobile='15px'/>
            <img src={image} alt="" />
            <DynamicPadding desktop='20px' mobile='15px'/>
            <Typography color={currentIndex == activeIndex ? AppColor.orange : AppColor.text} variant="body8">{title}</Typography>
            <Typography color={currentIndex == activeIndex ? AppColor.orange : AppColor.text} variant="body4" textAlign="center">
            Posuere sed at erat justo, fames maecenas orci iaculis vel. 
            </Typography>
        </div>
    )
}

export default Onboarding
