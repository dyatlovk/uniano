
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import styles from './style.module.scss';
import { CareServiceChildProps } from '../..';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/project_chat.png';
import test3 from '@assets/images/project_chat2.png';
import test4 from '@assets/images/project_chat3.png';
import test5 from '@assets/images/project_chat4.png';
import test6 from '@assets/images/project_chat5.png';
import test7 from '@assets/images/project_chat6.png';
import test8 from '@assets/images/project_chat7.png';
import test9 from '@assets/images/project_chat8.png';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MainCare = ({setActiveSwitch}:CareServiceChildProps) => {
    const location = useLocation();
    const [authorisedUser,setAuthotizedUser] = useState(false);
    useEffect(() => {
     //    console.log('Current route is ' + location.pathname);
     //    if(location.pathname === '/') {
     //        setAuthotizedUser(false);
     //    } else {
     //        setAuthotizedUser(true);
     //    }
        
    }, [location.pathname]);
    


    
    return (
      <div className={styles.main_care_grid}>
        {authorisedUser && <>
            <div onClick={() => {setActiveSwitch('main.solutions nopadding')}}>
               <CareServiceItem
                    description='Projects & Sponsorships' title='Solutions' 
                    icon={<AppColor.chatSolutions />}
                    image={test2}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.direct')}}>
               <CareServiceItem
                    description='Communication With Other ' title='Direct  ' 
                    icon={<AppColor.chatDirect />}
                    image={test3}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.groups')}}>
               <CareServiceItem
                    description='Share Ideas' title='Groups' 
                    icon={<AppColor.chatGroups />}
                    image={test4}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.care')}}>
               <CareServiceItem
                    description='Find Everything' title='Care Services' 
                    icon={<AppColor.chatCare />}
                    image={test5}
               />
          </div>
        </>}
          {!authorisedUser && <>
            <div onClick={() => {setActiveSwitch('main.community')}}>
               <CareServiceItem
                    description='FAQ & Discussions' title='Community' 
                    icon={<AppColor.communityWhite />}
                    image={test6}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.managers')}}>
               <CareServiceItem
                    description='Help You With Solutions' title='Managers' 
                    icon={<AppColor.managersWhite />}
                    image={test7}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.general help')}}>
               <CareServiceItem
                    description='Chat With Moderators' title='General Help' 
                    icon={<AppColor.infoWhite />}
                    image={test8}
               />
          </div>
          <div onClick={() => {setActiveSwitch('main.contact us')}}>
               <CareServiceItem
                    description='Still Need Help?' title='Contact Us' 
                    icon={<AppColor.helpWhite />}
                    image={test9}
               />
          </div>
          </>}
      </div>
    );
};

type CareServiceItemProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
}
const CareServiceItem = ({description,title,icon,image}:CareServiceItemProps) => {
    return (
        <div style={{backgroundImage: `url(${image ?? test1})`}} className={`${styles.care_service_item} cursor`}>
            <div style={{zIndex: 1}}>
                <Typography variant='body4' className={styles.care_text} fontWeight='500'>{title}</Typography>
                <SizeBox height='5px'/>
                <Typography variant='body5' className={styles.care_text}>{description}</Typography>
            </div>
            <div className={styles.background_dark}></div>
            <div className={styles.care_service_abs}>
                {icon}
            </div>
        </div>
    )
}

export default MainCare;