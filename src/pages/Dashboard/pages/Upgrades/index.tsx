
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import Header from '@common/components/Header/Header/index';
import NavigationBar from '@common/components/NavigationBar/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { useState } from 'react';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DropdownNode from '@common/components/ui/Dropdown/DropdownNodes/index';
import DropdownNodeFilter from '@common/components/ui/Dropdown/DropdownNodesFilter/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import DropdownNodeActivity from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';

const skillsContent:SkillsItemProps[] = [
    {
        icon: <AppColor.development />,
        title: 'Website Development1',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development2',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development3',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development4',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development5',
        skills: ['Wordpress', 'Wix']
    },
]


const Upgrades = () => {

    const {width,height} = useScreenSize();
    const [activeUpgradeSection,setActiveUpgradeSection] = useState('Opened Projects');

    const [selectedCategory,setSelectedCategory] = useState('Website Development1');
    
    return (
      <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={4}
            />
          <div className={styles.wrapper}>
            <DynamicPadding 
                desktop='50px'
                mobile='30px'
            />
               <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem image={<AppColor.home />} textList={['Dashboard']} />
                        <Typography variant='titleBig' textTransform='uppercase' fontWeight='600'>
                           upgrades 
                        </Typography>
                    </div>
                    <ButtonDropdownSelect text='Projects' variants={['Projects','2','3']} />
                </div>
                <DynamicPadding />
                <div className={styles.after_top_section}>
                    {
                    width > 769
                    ? skillsContent.map(item =>
                        <SkillsItem 
                            callback={(item) => {setSelectedCategory(item)}}
                            activeTitle={selectedCategory}
                            icon={item.icon}
                            skills={item.skills}
                            title={item.title}
                        />
                    )
                    : <DropdownSkills />}
                </div>
                <DynamicPadding />

                <div className={styles.main_section}>
                    <div className={styles.main_section_left}>
                        <div className={styles.left_first}>
                            <div className={styles.flex}>
                                <div className={styles.black_circle}><AppColor.zeroOfFive /></div>
                                <div>
                                    <Typography variant='body5' color={AppColor.transparentBlack}>
                                    Level & Skill
                                    </Typography>
                                    <Typography variant='body4' fontWeight='500'>
                                    5 lvl <Typography color={AppColor.whiteGreen }> Beginner</Typography>
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles.vertical_line}></div>
                            <div className={styles.flex}>
                                <div className={styles.orange_circle}><AppColor.star /></div>
                               <div>
                                    <Typography variant='body5' color={AppColor.transparentBlack}>
                                    Level Points
                                    </Typography>
                                    <Typography variant='body4' fontWeight='500'>
                                    0 
                                    </Typography>
                               </div>
                            </div>
                        </div>

                        <DynamicPadding desktop='70px' mobile='30px' />
                        <div className={styles.upgrade_items_wrapper}>
                            <UpgradeItemSection activeTitle={activeUpgradeSection} onMouseEnter={(item) => {setActiveUpgradeSection(item)}} title='Opened Projects' count={'3'} grade={<div>Grade 1/5</div>} icon={<AppColor.overlays />} />
                            <UpgradeItemSection activeTitle={activeUpgradeSection} onMouseEnter={(item) => {setActiveUpgradeSection(item)}} title='Projects Lifetime' count={'3 days'} grade={<div>Grade 1/<AppColor.infinity /> </div>} icon={<AppColor.clock />} />
                            <UpgradeItemSection activeTitle={activeUpgradeSection} onMouseEnter={(item) => {setActiveUpgradeSection(item)}} title='Teams Count' count={'1'} grade={<div>Grade 1/<AppColor.infinity /></div>} icon={<AppColor.teamThree />} />
                            <UpgradeItemSection activeTitle={activeUpgradeSection} onMouseEnter={(item) => {setActiveUpgradeSection(item)}} title='Sponsorship Campaigns' count={'4'} grade={<div>Grade 1/5</div>} icon={<AppColor.caseIcon />} />
                            <UpgradeItemSection activeTitle={activeUpgradeSection} onMouseEnter={(item) => {setActiveUpgradeSection(item)}} title='Boost Count' count={'2'} grade={<div>Grade 1/<AppColor.infinity /></div>} icon={<AppColor.graphicColumnsThree />} />
                        </div>
                    </div>
                    <div className={styles.main_section_right}>
                        <ActiveUpgradeMenu 
                            bottomBarText={<Typography variant='body4' fontWeight='400'> ensures a trusted marketplace for all users by confirming their identity through the submission and verification of valid documentation. </Typography>}
                            bottomBarTitle='Opened Projects Upgrade'
                            buttonText='+1 Opened Project'
                            canDoIt={false}
                            currentGrade={1}
                            topBarText={<Typography variant='body4' fontWeight='500'>Opened Projects <Typography variant='body4'>ensures a trusted marketplace for all users by confirming their identity through the submission and verification of valid documentation.</Typography> </Typography>}
                        />
                    </div>
                </div>

                <DynamicPadding />
                <AskedQuestion />
          </div>
        <Footer />
      </div>
    );
};


type UpgradeItemSectionProps = {
    icon: any;
    title: string;
    grade: React.ReactNode;
    count: string;
    onMouseEnter: (item:string) => void;
    activeTitle: string;
}
const UpgradeItemSection = ({count,grade,icon,title,onMouseEnter,activeTitle}:UpgradeItemSectionProps) => {
    return (
        <div style={{backgroundColor: activeTitle == title ? AppColor.white : 'transparent'}}  onMouseEnter={() => { onMouseEnter(title) }} className={styles.upgrade_item_section}>
            {icon}
            <div className={styles.upgrade_item_text}>
                <Typography variant='body5' fontWeight='500'>
                    {title} <Typography color={AppColor.transparentBlack}> ({count})</Typography>
                </Typography>
                <Typography variant='body5'>
                    {grade}
                </Typography>
            </div>
        </div>
    )
}

type ActiveUpgradeMenuProps = {
    topBarText: React.ReactNode;
    bottomBarTitle: string;
    bottomBarText: React.ReactNode;
    buttonText: string;
    canDoIt: boolean;
    currentGrade: number;
}
const ActiveUpgradeMenu = ({bottomBarText,bottomBarTitle,buttonText,canDoIt,topBarText,currentGrade}:ActiveUpgradeMenuProps) => {
    return (
        <div>
            <DynamicPadding mobile='30px' desktop='0px' />
            <div className={styles.top_bar_text}>
                {topBarText}
            </div>
            <DynamicPadding mobile='75px' desktop='90px' />
            <div className={styles.active_menu_grades_wrapper}>
                <div className={styles.grade_absolute}>
                    <MyButtonTransparentOrange onClick={() => {}}>+1 Opened Project</MyButtonTransparentOrange>
                </div>
                <ActiveUpgradeGradeCircle bottomText='1 Project' insideText='1' active={true} />
                <ActiveUpgradeGradeCircle bottomText='2 Project' insideText='2' isNext={true} />
                <ActiveUpgradeGradeCircle bottomText='3 Project' insideText='3' disabled={true} />
                <ActiveUpgradeGradeCircle bottomText='4 Project' insideText='4' disabled={true} />
                <ActiveUpgradeGradeCircle bottomText='5 Project' insideText='5' disabled={true} />
            </div>
            <DynamicPadding desktop='50px' mobile='0px' />
            <div className={styles.botom_bar_wrapper}>
                <Typography variant='body3' fontWeight='500'>{bottomBarTitle}</Typography>
                {bottomBarText}
                <MyButtonOrange onClick={() => {}}>{buttonText}</MyButtonOrange>
            </div>
        </div>
    )
}

type ActiveUpgradeGradeCircle = {
    active?: boolean;
    isNext?: boolean;
    disabled?: boolean;
    insideText: string;
    bottomText: string;
}
const ActiveUpgradeGradeCircle = ({active,disabled,isNext,bottomText,insideText}:ActiveUpgradeGradeCircle) => {
    return (
     
         <div className={styles.not_active}>
                <div className={styles.menu_wrapper}>
                   <div className={styles.arrow_wrapper}>
                        <div className={styles.active_upgrade_circle} style={{border: isNext ? '1px solid #515151' : '1px solid transparent',backgroundColor: active ? AppColor.orange : isNext ? 'white' : AppColor.transparentBlack}}>
                            <Typography textLineHeight='1' textTransform='uppercase' variant='body4' color={isNext ? AppColor.text : 'white'}>
                                Grade
                            </Typography>
                            <Typography textLineHeight='1' variant='titleSmall' color={isNext ? AppColor.text : 'white'}>
                                {insideText}
                            </Typography>
                        </div>
                        {active 
                    && <div className={styles.chevron_absolute}><AppColor.chevronRight fill={AppColor.text} width={14} height={24} /></div> 
                    }
                   </div>

                   <div style={{display: 'flex'}}>
                   <DynamicPadding desktop='10px' mobile='0px' side='right'/>
                        <div style={{display: 'flex',width: '100%',justifyContent: 'center'}}>
                            <Typography textLineHeight='100%' variant='body4' color={active ? AppColor.orange : isNext ? AppColor.text : AppColor.transparentBlack}> 
                                {bottomText}
                            </Typography>
                        </div>
                   </div>
                </div>
                {!active && <DynamicPadding desktop='34px' mobile='px' side='right'/>}
         </div>
    )
}


const DropdownSkills = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [showDropdown,setShowDropdown] = useState(false);
    const currentItem = skillsContent[activeIndex];
    return (
        <div className={styles.dropdown_skills_wrapper}>
            <span onClick={() => { setShowDropdown(prev => !prev)}}><SkillsItem callback={() => {}} icon={currentItem.icon} skills={currentItem.skills} title={currentItem.title} showDropdown={true} /></span>
            <div className={`${styles.dropdown_wrapper} ${showDropdown ? styles.active_d : styles.disabled_d}`}>
                {skillsContent.map((item,index) =>
                    {
                        if(index != activeIndex) {
                            return <span onClick={() => { setActiveIndex(index) }}>
                                <SkillsItem
                                callback={() => {}}
                                icon={item.icon}
                                skills={item.skills}
                                title={item.title}
                            />
                            </span>
                        } else {
                            return <></>
                        }
                    }
                )}
            </div>
        </div>
    )
}
type SkillsItemProps = {
    title: string;
    icon: any;
    skills: string[]
    showDropdown?: boolean;
    activeTitle?: string;
    callback?: (item:string) => void;
}
const SkillsItem = ({icon,skills,title,showDropdown=false,activeTitle,callback}:SkillsItemProps) => {
    return (
        <div onClick={() => {callback(title)}} style={activeTitle == title ? {backgroundColor: AppColor.white} : {}} className={styles.skills_wrapper}>
            {icon}
            <div>
                <Typography variant='body5' fontWeight='500'>{title}</Typography>
                <Typography variant='body5'>
                    {skills.map((item,index) => {
                        if(index != skills.length -1) {
                            return `${item},`
                        } else {
                            return `${item}, other`
                        }
                    }
                    )}
                </Typography>
            </div>
            {showDropdown
            ? <div className={styles.skills_chevron}><AppColor.chevronBottom fill={AppColor.text} /></div>
            : <></>}
        </div>
    )
}
export default Upgrades;