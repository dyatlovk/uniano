
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import MyButtonBlack from '../ui/MyButton/variants/MyButtonBlack';
import Dropdown from '../ui/Dropdown';
import { ReactComponent as CommunityImage} from '@assets/svg/community-white.svg';
import { ReactComponent as ManagersImage} from '@assets/svg/managers-white.svg';
import { ReactComponent as GeneralHelpImage} from '@assets/svg/general-help.svg';
import { ReactComponent as ContactUs} from '@assets/svg/contact-us.svg';
import {useContext, useState} from 'react'
import { useScreenSize } from '@common/helpers/useScreenSize';
import { FooterTriggerContext } from '@common/context/footer_trigger'
const AskedQuestion = () => {
    const {width,height} = useScreenSize();

    const {activeCategory,setActiveCategory} = useContext(FooterTriggerContext); 
    return (
       <div>
        {width <= 768 && <Cookies />}
            <div className={styles.dropdown_parent}>
            <div className={styles.absolute}>
                 <div className={styles.flex_center_child}>
                 <Cookies />
                 </div>
                  </div>
                    
                <div className={styles.flex_center}>
                  <Typography variant="body2">
                    Frequently Asked Questions
                  </Typography>
                </div>
                <div className={styles.line}></div>
                <div className={styles.dropdown_wrapper}>
                 
                  <Dropdown 
                  title="What if your requirements does not meet any of my package?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What software do you use?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What is freelance ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="Why I see 404 page ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  />
                  <Dropdown 
                  title="What to do being in staff ?"
                  description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                  showLine= {width <= 768 ? false : true}
                  />
                
              </div>
            </div>
            <div className={styles.card_links_wrapper}>
              <LinkCard 
              image={<CommunityImage />}
              title="Community"
              description="FAQ & Discussions"
              color={AppColor.orange}
              onClick={() => {setActiveCategory('main.community')}}
              />
              <LinkCard 
              image={<ManagersImage />}
              title="Managers"
              description="Help You With Solutions"
              color={AppColor.text}
              onClick={() => {setActiveCategory('main.managers')}}
              />
              <LinkCard 
              image={<GeneralHelpImage />}
              title="General Help"
              description="Chat With Moderators"
              color={AppColor.green}
              onClick={() => {setActiveCategory('main.general help')}}
              />
              <LinkCard 
              image={<ContactUs />}
              title="Contact Us"
              description="Still need help?"
              color='#F2C94C'
              onClick={() => {setActiveCategory('main.contact us')}}
              />
            </div> 
          </div>
    );
};

type LinkCardProps = {
    image: any;
    title: string;
    description:string;
    color: string;
    onClick?: (item) => void;
  }
  const LinkCard = ({image,title,description,color,onClick}:LinkCardProps) => {
    return (
      <div onClick={onClick} className={styles.link_card}>
        <div className={styles.link_card_image} style={{backgroundColor: color}}>
        {image}
        </div>
        <div className={styles.link_card_child}> 
          <Typography variant="body7">
          {title}
          </Typography>
          <Typography variant="body5">
          {description}
          </Typography>
        </div>
      </div>
    )
  };


const Cookies = () => {
    const [show,setShow] = useState(true);
    return (
      <div style={{display: show ? 'flex' : 'none'}} className={styles.cookies}>
        <AppColor.cookies />
        <div className={styles.cookies_child}>
          <Typography variant="body4">
            This site uses cookies to improve your experience. Privacy Policy
          </Typography>
          <MyButtonBlack
          onClick={() => {setShow(false)}}
          >
            GOT IT
          </MyButtonBlack>
        </div>
      </div>
    )
  };

export default AskedQuestion;