
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
import { fakeUserConstant } from '@common/models/user';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import CategoryRemoveItem from './components/CategoryRemoveItem';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import CategorySelect from './components/CategorySelect';
import { developmentDropdown } from '@common/models/constants';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import {SelectFilterItem} from '@common/components/ui/SearchFilterBar/index'
import { BigInputNoBorder, BigInputOutside } from '@common/components/ui/BigInput/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import DarkBox from '@common/components/ui/DarkBox/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import DropdownPortfolio from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownPortfolio/index';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';
import LevelProgress from '@common/components/ui/LevelProgress/index';
import InfoBox from '@common/components/ui/InfoBox/index';

const activityItems = [
    {
      filter: 'Service',
      image: <AppColor.freelancer />,
      percent: 39,
      present: '16 Oct - Present',
      price: '100',
      tag: ['Logo Design', 'A. Markevych'],
      title: 'Logo by sample in vector in maximum quality ',
      iconNode: (
        <div>
          <AppColor.cart height={22} fill={AppColor.text} />
          <AppColor.flag height={22} />
        </div>
      ),
    },
    {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
  ];

const tagsText:string[] = [
    'Logos','Logo Design','Logo','Logo Maker','Modern Logo '
]
const statistic:StatisticTextProps[] = [
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
]

type SkillType = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
}

type LanguageType = {
    language: string;
    level: string;
    flag: React.ReactNode;
}


const allCountries:LanguageType[] = [
    {
        flag: <AppColor.usaFlag />,
        language: 'English (USA)',
        level: 'Fluent',
    },
    {
        flag: <AppColor.ukFlag />,
        language: 'English (United Kingdom)',
        level: 'Fluent',
    },
    {
        flag: <AppColor.ukraineFlag />,
        language: 'Ukrainian',
        level: 'Fluent',
    },
    {
        flag: <AppColor.franchFlag />,
        language: 'French',
        level: 'Fluent',
    },
    {
        flag: <AppColor.spanishFlag />,
        language: 'Spanish',
        level: 'Fluent',
    },
];

const skills = [
    "WordPress",
    "NFT Development",
    "Chatbots",
    "Website Builders & CMS",
    "Crypto Wallet Development",
    "Databases",
    "Crypto Coins & Tokens",
    "Trading Apps",
    "Blockchain Development",
    "Databases",
    "Windows",
    "Android",
    "E-Commerce Development",
    "Linux/Unix",
    "iOS",
    "Web Programming",
    "3D",
    "OSX",
    "Other",
    "Mobile Web",
    "2D",
    "Other"
  ]
  
const Account = () => {

    const [skillsContent,setSkillsContent] = useState<SkillType[]>([
        {
            icon: <AppColor.development />,
            title: 'Website Development',
            skills: ['WordPress']
        },
    ])

    const {width,height} = useScreenSize();

    const [editModal,setEditModal] = useState(false);
    const [editModalCategory,setEditModalCategory] = useState('Development');
    const [selectedCategory,setSelectedCategory] = useState('Website Development');

    const currentDropdonw = developmentDropdown.find(item => item.title == editModalCategory);

    const activeSkills = skillsContent.map(item => item.skills).flat();
    const skillsTitles = skillsContent.map(item => item.title);

    const [descriptionModal,setDescriptionModal] = useState(false);

    const [descriptionText,setDescriptionText] = useState('');

    const [showLevelModal,setShowLevelModal] = useState(false);
    const [languageModal,setLanguageModal] = useState(false);

    const [languages,setLanguages] = useState<LanguageType[]>([
        {
            language: 'English (USA)',
            level: 'Fluent',
            flag: <AppColor.usaFlag />  ,
        },
    ])

    const [educationModal,setEducationModal] = useState(false);

    const [educationPlaces,setEducationPlaces] = useState([]);

    const [addEducationModal,setAddEducationModal] = useState(false);


    const [editLanguageModal,setEditLanguageModal] = useState('');
    const [processEditLanguage,setProcessEditLangauge] = useState<LanguageType>({flag: <></>,language: '',level: ''});
    const editableLanguage = languages.find(item => item.language == editLanguageModal);

    const [skillsModal,setSkillsModal] = useState(false);

    return (
      <div>

    {showLevelModal && <ModalCenterBasic desktopMinWidth='900px'
            bottomPartPadding='30px' nodeAfterTitle={<div className='gap_10'>
                <DarkBox fontWeight='400' text={'Logo design'.toUpperCase()} />
                <div className={styles.profile_top_level}>
                                <AppColor.twoOFFive />
                                <Typography variant='body4' color={AppColor.text}>
                                3 lvl 
                                </Typography>
                                <div onClick={() => {setShowLevelModal(true)}} className={`${styles.margin_left} cursor`}>
                                    <Typography variant='body4' fontWeight='500' color={AppColor.green}>
                                    Junior 
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant='body4' color={AppColor.transparentBlack}>
                            Points to middle level
                            </Typography>
                            <Typography variant='body4' fontWeight='500'>
                            1623
                            </Typography>
            </div>}

            topPartPadding='20px 30p' callbackClose={() => {setShowLevelModal(false)}} title='Current skill level'>

              <Typography variant='body4'>
              Earn points to level up to have a higher income.
              </Typography>

              <DynamicPadding desktop='25px' mobile='15px' />
              <LevelProgress percent={25} />


              <DynamicPadding desktop='25px' mobile='15px' />

              <div className='gap_5' style={{gap: '30px'}}>
                <LevelRowItem description={'increases skill points  '} icon={<AppColor.doubleChevronsUp/>} title={'Complete Project'} />
                <LevelRowItem description={'reduces skill points  '} icon={<AppColor.close fill={'white'} />} title={'Unsuccesfull Projects'} />
                <LevelRowItem description={'reduces skill level     '} icon={<AppColor.statusOffline/>} title={'6 months Offline'} />

              </div>
            </ModalCenterBasic>}
        
         {skillsModal && <ModalCenterBasic desktopMinWidth='360px'
            bottomPartPadding='30px' nodeAfterTitle={<div className='gap_10'>
                <DarkBox text={`${languages.length}`} />
                <InputCommon callback={() => {}} placeholder='Search' />
                <div className='gap_5'>
                    <Typography variant='body4'>
                    1 of 3 skills selected
                    </Typography>
                    <AppColor.upCirlcle />
                </div>
            </div>}

            topPartPadding='20px 30p' callbackClose={() => {setSkillsModal(false)}} title='Skills'>
                <div className={styles.skills_grid}>
                {skills.map(item => <SkillCheckBox text={item} />)}
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>

                <div className='gap_10' style={{justifyContent: 'end'}}>
                    <MyButtonTransparent onClick={() => {
                        setSkillsModal(false)
                    }} fontWeight='500' textTransform='uppercase'>
                        Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {
                      

                    }} fontWeight='500' textTransform='uppercase'>
                    Save
                    </MyButtonOrange>
                </div>

            </ModalCenterBasic>}
        {educationModal && <ModalCenterBasic desktopMinHeight='80vh' desktopMinWidth='360px'
            bottomPartPadding='0px' nodeAfterTitle={<DarkBox text={`${languages.length}`} />}
            topPartPadding='20px 30p' callbackClose={() => {setEducationModal(false)}} title='Education'>
                {languages.map(item =>
                    <EducationModalItem college='Ukranian National Technical University' degree='M.A. Degree. Ecommerce'
                        graduated='Graduated 2017'
                    />    
                )}
                <DynamicPadding desktop='30px' mobile='20px'/>

                <div className={styles.flex_end}>
                    <MyButtonOrange textTransform='uppercase' fontWeight='500' onClick={() => {
                        setAddEducationModal(true);
                    }}>
                       <div className={styles.white}>
                            <AppColor.plus width={'10px'} height={'10px'} stroke={AppColor.orange} />
                        </div> Add education
                    </MyButtonOrange>
                </div>

            </ModalCenterBasic>}

            {addEducationModal && <ModalCenterBasic desktopMinWidth='360px'
            bottomPartPadding='25px 30px'
            topPartPadding='20px 30p' callbackClose={() => {setAddEducationModal(false)}} prevClose={true} title='Add education'>
                
                <Typography variant='body3' fontWeight='500'>University/College</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>
               
                <InputCommon callback={() => {}} placeholder='' padding='15px 30px'/>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <Typography variant='body3' fontWeight='500'>Degree</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <InputCommon callback={() => {}} placeholder='' padding='15px 30px'/>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <Typography variant='body3' fontWeight='500'>Graduated</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <InputDropdown
                marginLeft={true}
                initText='Select year' labelIcon={<></>}
                dropdownVariants={Array.from({ length: 2025 }, (_, index) => index.toString())}
                />
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className='gap_10' style={{justifyContent: 'end'}}>
                    <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {
                        let tmpCopy = [...languages];
                        let neededIndex = tmpCopy.findIndex(item => item.language == editLanguageModal)

                        tmpCopy[neededIndex] = processEditLanguage;
                        setLanguages(tmpCopy);
                        setEditLanguageModal('');

                    }} fontWeight='500' textTransform='uppercase'>
                    Add
                    </MyButtonOrange>
                </div>
            </ModalCenterBasic>}

        {editLanguageModal != '' && <ModalCenterBasic desktopMinHeight='80vh' desktopMinWidth='360px'
            bottomPartPadding='25px 30px'
            topPartPadding='20px 30p' callbackClose={() => {setEditLanguageModal('')}} prevClose={true} title='Edit'>
                
                <Typography variant='body3' fontWeight='500'>Language</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>
               
                <DropdownLanguages callback={(item) => {setProcessEditLangauge(item)}} initLanguage={editableLanguage} />

                <DynamicPadding desktop='30px' mobile='20px'/>

                <Typography variant='body3' fontWeight='500'>Level</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <InputDropdown callback={(item) => {
                    setProcessEditLangauge({...processEditLanguage, level: item});
                }} dropdownVariants={['Fluent','b1','b2','c1','c2']} initText='Fluent' labelIcon={<></>} 
                    marginLeft={true} padding='15px 20px'
                />
                <DynamicPadding desktop='30px' mobile='20px'/>

                <div className='gap_10' style={{justifyContent: 'end'}}>
                    <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {
                        let tmpCopy = [...languages];
                        let neededIndex = tmpCopy.findIndex(item => item.language == editLanguageModal)

                        tmpCopy[neededIndex] = processEditLanguage;
                        setLanguages(tmpCopy);
                        setEditLanguageModal('');

                    }} fontWeight='500' textTransform='uppercase'>
                    Save
                    </MyButtonOrange>
                </div>
            </ModalCenterBasic>}
        {languageModal && <ModalCenterBasic desktopMinHeight='80vh' desktopMinWidth='360px'
            bottomPartPadding='0px' nodeAfterTitle={<DarkBox text={`${languages.length}`} />}
            topPartPadding='20px 30p' callbackClose={() => {setLanguageModal(false)}} title='Languages'>
                {languages.map(item =>
                    <LanduageModalItem  level={item.level} text={item.language} callbackRemove={(passLanguage) => {
                        setLanguages(prev => prev.filter(item => item.language !== passLanguage))
                    }} openEditModal={(item) => {setEditLanguageModal(item)}} />    
                )}
                <DynamicPadding desktop='30px' mobile='20px'/>

                <div className={styles.flex_end}>
                    <MyButtonOrange textTransform='uppercase' fontWeight='500' onClick={() => {}}>
                       <div className={styles.white}>
                            <AppColor.plus width={'10px'} height={'10px'} stroke={AppColor.orange} />
                        </div> Add language
                    </MyButtonOrange>
                </div>

            </ModalCenterBasic>}
        {descriptionModal && <ModalCenterBasic topPartPadding='20px 30p' callbackClose={() => {setDescriptionModal(false)}} title='Description'
            bottomPartPadding='25px 30px' desktopMinWidth='880px'
        >
            <BigInputNoBorder callback={(item) => {
                setDescriptionText(item);
            }}
                modalClose={() => {setDescriptionModal(false)}}
            />
            </ModalCenterBasic>}
        {editModal && 
            <ModalCenterBasic bottomPartPadding='0px' callbackClose={() => {setEditModal(false)}} title='Categories'
            nodeAfterTitle={<div><Typography variant='body3' fontWeight='500' color='white'>{skillsContent.length}</Typography></div>}
            topPartPadding='20px 30px'>
            
                <div className={styles.filters_remove_part}>
                    <DynamicPadding desktop='30px' mobile='20px' />
                   <div className={styles.filters_remove_wrapper}>
                        {skillsContent.map((item,index) => 
                            <>
                                {item.skills.map(item => <CategoryRemoveItem
                                key={item}
                                callbackRemove={(item) => {
                                   
                                }}
                                title={item}
                            />)}
                            </>
                        )}
                   </div>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    <HorizontalLine />
                </div>

                <div className={styles.edit_grid}>
                    <div className={styles.edit_grid_left}>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <InputCommon
                            callback={() => {}} placeholder='Search' padding='8px 15px'
                            width='190px'
                        />
                        <DynamicPadding desktop='30px' mobile='20px'/>

                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.development />} title='Development'/>
                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.desing />} title='Design'/>
                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.marketing />} title='Marketing'/>
                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.writing />} title='Writing'/>
                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.managment />} title='Management'/>
                        <CategorySelect activeSelect={editModalCategory} callback={(item) => {setEditModalCategory(item)}}
                            icon={<AppColor.consulting />} title='Consulting'/>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                    </div>
                    <div className={styles.edit_grid_right}>
                        {currentDropdonw.items.map(skillItem =>
                            <div>
                                <Typography variant='body4' fontWeight='500'>
                                    {skillItem.title}
                                </Typography>
                                <DynamicPadding desktop='20px' mobile='15px' />

                                <div className={styles.grid_10}>
                                    {skillItem.links.map(item =>
                                        {
                
                                            
                                            
                                            return (
                                                <SelectFilterItem 
                                            initState={activeSkills.includes(item)}
                                            callback={(item) => {
                                                console.log('top level');
                                                
                                                let newArray:SkillType[] = []
                                                for(let i = 0;i< skillsContent.length;i++) {
                                                    console.log('array iterration');
                                                    if(skillsTitles.includes(skillItem.title)) {
                                                        console.log('includes');
                                                        
                                                        if(skillsContent[i].title == skillItem.title) {
                                                            newArray.push(
                                                                {
                                                                    icon: skillsContent[i].icon,
                                                                    skills: [...skillsContent[i].skills,item],
                                                                    title: skillsContent[i].title
                                                                }
                                                            )
                                                        } else {
                                                            newArray.push(skillsContent[i])
                                                        }
                                                        setSkillsContent(newArray);
                                                    } else {
                                                        console.log('new');
                                                        
                                                        setSkillsContent(prev => [...prev,{
                                                            icon: <AppColor.development />,
                                                            skills: [item],
                                                            title: skillItem.title,
                                                        }])
                                                    }
                                                }
                                               
                             
                                                console.log('after map');
                                                
                                            
                                            }}
                                            callbackRemove={(item) => {
                                                setSkillsContent(prev => prev.map(skill => {
                                                    
                                                    if(skill.title == currentDropdonw.title) {
                                                        return {
                                                            icon: skill.icon,
                                                            skills: skill.skills.filter(skilltmp => skilltmp !== item),
                                                            title: skill.title
                                                        }
                                                    }
                                                    return skill;
                                                }))
                                            }}
                                            text={item}
                                        />
                                            )
                                        }
                                    )}
                                </div>
                            </div>    
                        )}
                    </div>
                </div>


            </ModalCenterBasic>}
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={1}
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
                            <div className={styles.flex_center}>Account <AppColor.openEye /></div>
                        </Typography>
                    </div>
                  <ButtonDropdownSelect text='PROJECTS' variants={['PROJECTS','2','3']} />
                </div>
                <DynamicPadding desktop='40px' mobile='20px' />
                <div className='gap_10'>
                    <div className={styles.after_top_section}>
                        {
                        width > 769
                        ? skillsContent.map(item =>
                            <SkillsItem 
                                activeCategory={selectedCategory}
                                callback={(item) => {setSelectedCategory(item)}}
                                icon={item.icon}
                                skills={item.skills}
                                title={item.title}
                            />
                        )
                        : <DropdownSkills />}
                    </div>
                    <AppColor.edit onClick={() => {setEditModal(true)}} className='cursor' fill={AppColor.text} />
                </div>
                <DynamicPadding />

                <div className={styles.main_section}>
                    <div className={styles.main_left}>
                        <UserAvatar url={fakeUserConstant.image} active={true} name='Adrew B.' variant='column' flag={<AppColor.UkraineFlagIcon />}/>
                       <div className={styles.profile_level_wrapper}>
                            <div className={styles.profile_top_level}>
                                <AppColor.twoOFFive />
                                <Typography variant='body4' color={AppColor.text}>
                                3 lvl 
                                </Typography>
                                <div onClick={() => {setShowLevelModal(true)}} className={`${styles.margin_left} cursor`}>
                                    <Typography variant='body4' fontWeight='500' color={AppColor.green}>
                                    Junior 
                                    </Typography>
                                </div>
                            </div>
                            <PercentBar currentPercent={22} backgroundColor={AppColor.white} color={AppColor.orange}/>
                            <div className={styles.profile_bottom_level}>
                                <Typography variant='subtitle' fontWeight='500' textLineHeight='80%'>
                                  <div className={styles.text_flex}>  31 <Typography textLineHeight='80%' variant='body4' color={AppColor.transparentBlack}>of 150 XP</Typography></div>
                                </Typography>
                                <Typography fontWeight='500' color={AppColor.orange} variant='body4'>
                                22%
                                </Typography>
                            </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.user_details_wrapper}>
                           <DetailInfo details='Dnipro, Ukraine ' title='From'/> 
                           <DetailInfo details='23:51' title='Local time'/> 
                           <DetailInfo details='Aug 2021' title='Member since'/> 
                           <DetailInfo details='Avg 2 hours' title='Response time'/> 
                           <DetailInfo details='1 hour ago' title='Last visit'/> 
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div>
                            <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                Skills
                            </Typography>
                            <div className={styles.tags_wrapper}>
                                {tagsText.map(item => <TagDisplay text={item} />)}
                            </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div>
                        <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                        <div className={styles.text_flex_gap}> Languages <AppColor.noteText className='cursor' onClick={() => {setLanguageModal(true)}} /> </div>
                                </Typography>
                                <DynamicPadding mobile='30px' desktop='30px' />
                                <div className={styles.user_details_wrapper}>
                                    <DetailInfo details='Fluent' title='English'/> 
                                    <DetailInfo details='Native/Bilingual' title='Russian'/> 
                                </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />

                       <div>
                                <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Education <AppColor.noteText onClick={() => {setEducationModal(true)}} className='cursor' /> </div>
                                </Typography>
                                <DynamicPadding mobile='30px' desktop='30px' />
                                <div>
                                    <Typography variant='body4' fontWeight='500'>
                                    Ukranian National Technical University
                                    </Typography>
                                    <DynamicPadding mobile='10px' desktop='10px' />
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    M.A. Degree. Ecommerce
                                    </Typography>
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    Graduated 2017
                                    </Typography>
                                </div>
                       </div>

                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />

                       <div>
                                <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                    <div className='gap_10'> Certifications <AppColor.noteText /> </div>
                                </Typography>
                                <DynamicPadding mobile='20px' desktop='30px' />
                                <div>
                                    <Typography variant='body4' fontWeight='500'>
                                    UX mind School Certificate
                                    </Typography>
                                    <DynamicPadding mobile='10px' desktop='10px' />
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    Graduated 2017
                                    </Typography>
                                </div>
                       </div>

                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                        
                        <div>
                                 <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Last sponsors <InfoBox /> </div>
                                </Typography>
                                <DynamicPadding desktop='30px' mobile='20px'/>

                                <div className={styles.users_wrapper}>
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                    <UserAvatar url={fakeUserConstant.image} variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} money='4 305' />
                                </div>
                        </div>
                        <DynamicPadding desktop='30px' mobile='20px'/>

                    </div>
                    <div className={styles.main_right}>
                        <ContentShell 
                            title={
                                <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Description <div className={styles.info_box}><AppColor.noteText className='cursor' onClick={() => {setDescriptionModal(true)}} /></div> </div>
                                </Typography>
                            }
                            node={
                                <Typography color={AppColor.transparentBlack} variant='body4'>{descriptionText != '' ? descriptionText : 'No info'}</Typography>
                            }
                        />
                        <ContentShell 
                            title={
                                <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                     Statistics 
                                </Typography>
                            }
                            node={
                                <div className={styles.statistic_text_wrapper}>
                                    {statistic.map(item =>
                                        <StatisticText text={item.text} title={item.title} />
                                    )}
                                </div>
                            }
                        />
                        <ContentShell 
                            title={
                                <Typography textLineHeight='1' variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Skills <div className={styles.info_box}><AppColor.noteText className='cursor' onClick={() => {setSkillsModal(true)}} /></div> </div>
                                </Typography>
                            }
                            node={
                                <div className={styles.grid_skills}>
                                    <SkillItemNode filter='Logos' fixed='$100' hourly='$10/hr' />
                                    <SkillItemNode filter='Logos' fixed='$100' hourly='$10/hr' />
                                    <SkillItemNode filter='Logos' fixed='$100' hourly='$10/hr' />
                                </div>
                            }
                        />
                        <DropdownNodeFilter alwaysActive={true}
                            countNotifications={5}
                            filters={[]}
                            title='Reviews'
                            textAfterCount={<Typography textLineHeight='80%' variant='body4' color={AppColor.green}>95% positive reviews </Typography>}
                        />
                         <DropdownNodeActivity filters={
                            [
                                {
                                    hasChildren: true,
                                    title: 'All'
                                },
                                {
                                    hasChildren: true,
                                    title: 'Service'
                                },
                                {
                                    hasChildren: false,
                                    title: 'Sponsorship'
                                }
                            ]
                         } countNotification={activityItems.length} activityItems={activityItems} />
                         <DropdownPortfolio />
                    </div>
                </div>

                <DynamicPadding />
                <AskedQuestion />
          </div>
        <Footer />
      </div>
    );
};

type SkillCheckBoxProps = {
    text: string;
    removeDropdown?: boolean;
    callback?: (item: string,isTrue: boolean) => void;
    initValue?: boolean;
}

const LevelRowItem = ({title,description,icon}) => {
    return (
        <div className='gap_10' style={{alignItems: 'stretch'}}>
            <div className={styles.level_green_circle}>
                {icon}
            </div>

            <div className={styles.flex_column_level}>
                <Typography textLineHeight='1' variant='body4' fontWeight='500'>{title}</Typography>

                <Typography textLineHeight='1' variant='body5'>{description}</Typography>
            </div>
        </div>
    )
}
export const SkillCheckBox = ({initValue,text,callback,removeDropdown=false}:SkillCheckBoxProps) => {
    
    const [selected,setSelected] = useState(initValue ?? false);
    return (
        <div>
            <div className={`${styles.skills_box} cursor`}>
                <MyCheckbox basicValue={initValue ?? false} width='20px' height='20px' callback={(item) => {
                    setSelected(item)
                    if(callback) {
                        callback(text,item);
                    }
                }}/>
                <Typography variant='body4' fontWeight={selected ? '500' : '400'}>
                    {text}
                </Typography>
            </div>
            {!removeDropdown && selected && <div style={{paddingLeft: '32px'}}>
                <SizeBox height='10px'/>
                <div className='gap_5'>
                    <Typography variant='body4' color={AppColor.transparentBlack}>
                    Fixed Budget
                    </Typography>
                    <InputCommon rightPadding={2} callback={() => {}} placeholder='$320' padding='4px 2px' textAlingCenter={true} width='55px' />
                </div>
                <SizeBox height='10px'/>
                <div className='gap_5'>
                    <Typography variant='body4' color={AppColor.transparentBlack}>
                    Hourly Rate
                    </Typography>
                    <InputCommon rightPadding={2} callback={() => {}} placeholder='$32/hr' padding='4px 2px' textAlingCenter={true} width='75px' />
                </div>
                </div>}
        </div>
    )
}

type SkillItemNodeProps = {
    filter: string;
    fixed: string;
    hourly: string;
}
const SkillItemNode = ({filter,fixed,hourly}:SkillItemNodeProps) => {
    return (
        <div>
            <div className={styles.orange_box}>
                <Typography variant='body4' fontWeight='500' textLineHeight='1' color='white'>
                    {filter}
                </Typography>
            </div>
            <SizeBox height='15px'/>
            <Typography variant='body4'color={AppColor.transparentBlack}>
            Fixed Budget <span style={{fontWeight: '500',color: AppColor.text}}>from {fixed}</span>
            </Typography>
            <SizeBox height='10px'/>
            <Typography variant='body4'color={AppColor.transparentBlack}>
            Hourly Rate <span style={{fontWeight: '500',color: AppColor.text}}>from {hourly}</span>
            </Typography>
        </div>
    )
}

type StatisticTextProps = {
    title: string;
    text: string;
}
export const  StatisticText = ({text,title}:StatisticTextProps) => {
    return ( 
        <div className={styles.statistic_text}>
            <Typography variant='body5' color={AppColor.transparentBlack}>
                {title}
            </Typography>
            <Typography variant='body1' fontWeight='500'>
                {text}
            </Typography>
        </div>
    )
}
type ContentShellProps = {
    node?: React.ReactNode;
    title: React.ReactNode;
}
const ContentShell = ({node,title}:ContentShellProps) => {
    return (
        <div className={styles.content_shell_wrapper}>
            <div className={styles.content_shell_top}>
                {title}
            </div>
            <div className={styles.horizontal_line}></div>
            <div className={styles.content_shell_bottom}>
                {node != null ?
                node : <Typography variant='body4' color={AppColor.transparentBlack}>No info</Typography>}
            </div>
        </div>
    )
}
const TagDisplay = ({ text }: { text: string }) => {
    return (
        <span className={styles.tag}>
            <Typography textLineHeight={'100%'} variant="body5" fontWeight='500' color={AppColor.white}>
                {text}
            </Typography>
        </span>
    );
};
type DetailInfoProps = {
    title:string;
    details: string;
}
const DetailInfo = ({details,title}:DetailInfoProps) => {
    return (
        <div className={styles.details_info}>
            <Typography variant='body4' color={AppColor.transparentBlack} textLineHeight='60%'>{title}</Typography>
            <Typography variant='body4'  textLineHeight='60%' fontWeight='500'>{details}</Typography>
        </div>
    )
}

type DropdownLanguagesProps = {
    initLanguage: LanguageType;
    callback: (item:LanguageType) => void;
}
export const DropdownLanguages = ({initLanguage,callback}:DropdownLanguagesProps) => {
    
    const [currentLanguage,setCurrentlaguage] = useState<LanguageType>(initLanguage);
    const [showDropdown,setShowDropdown] = useState(false);

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };

    return (
        <div style={{position: 'relative'}}>
            <div onClick={(event) => {setShowDropdown(prev => !prev);event.stopPropagation();}} style={{...borderStyles}} className={`${styles.dropdown_languages} cursor`}>
                {currentLanguage.flag && currentLanguage.flag}
                <Typography variant='body4'>{currentLanguage.language}</Typography>

                {showDropdown
                ? <AppColor.chevronTop fill={AppColor.text} width={'12px'} height={'6px'} style={{marginLeft: 'auto'}} />
                : <AppColor.chevronBottom fill={AppColor.text} width={'12px'} height={'6px'} style={{marginLeft: 'auto'}} />}
            </div>
            <div className={styles.absolute_language} style={{display: showDropdown ? 'grid' : 'none'}}>
                <div className={styles.input_language}>
                    <InputCommon callback={() => {}} placeholder='Search'
                    padding='20px 15px'
                    rightPadding={15}
                    borderRadius='0px'
                    boxShadowNone={true}
                    icon={<AppColor.search height={'16px'} />} />
                </div>

                {
                    allCountries.map(item =>
                        <div className='cursor'>
                             <CountrySelect activeCountry={currentLanguage.language} callback={(item) => {
                            setCurrentlaguage(item);
                            callback(item);
                            setShowDropdown(false);
                            }} country={item} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

type CountrySelectProps = {
    country: LanguageType;
    activeCountry: string;
    callback: (item:LanguageType) => void;
}
const CountrySelect = ({country,callback,activeCountry}:CountrySelectProps) => {
    return (
        <div className={styles.country_select} onClick={() => {callback(country)}}>
            {country.flag && country.flag}
            <Typography variant='body4' fontWeight={country.language == activeCountry ? '500' : '400'}>
                {country.language}
            </Typography>
        </div>
    )
}

const DropdownSkills = () => {
    const [skillsContent,setSkillsContent] = useState([
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
    ])

    const [activeIndex,setActiveIndex] = useState(0);
    const [selectedCategory,setSelectedCategory] = useState('Website Development');
    const [showDropdown,setShowDropdown] = useState(false);
    const currentItem = skillsContent[activeIndex];
    return (
        <div className={styles.dropdown_skills_wrapper}>
            <span onClick={() => { setShowDropdown(prev => !prev)}}><SkillsItem
            activeCategory={selectedCategory}
            callback={(item) => {setSelectedCategory(item)}}
            icon={currentItem.icon} skills={currentItem.skills} title={currentItem.title} showDropdown={true} /></span>
            <div className={`${styles.dropdown_wrapper} ${showDropdown ? styles.active_d : styles.disabled_d}`}>
                {skillsContent.map((item,index) =>
                    {
                        if(index != activeIndex) {
                            return <span onClick={() => { setActiveIndex(index) }}>
                                <SkillsItem
                                activeCategory={selectedCategory}
                                callback={(item) => {setSelectedCategory(item)}}
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

type EducationModalItemProps = {
    college: string;
    degree: string;
    graduated: string;
}
const EducationModalItem = ({college,degree,graduated}:EducationModalItemProps) => {
    return (
        <div className={`${styles.education_item} cursor`}>
            <div>
                <Typography variant='body4' fontWeight='500'>{college}</Typography>
                <Typography variant='body4'>{degree} </Typography>
                <Typography variant='body4'>{graduated}</Typography>
            </div>
            <AppColor.close fill={AppColor.red} width={'15px'} height={'15px'} />
        </div>
    )
} 
type LanduageModalItemProps = {
    text: string;
    level: string;
    callbackRemove: (item:string) => void;
    openEditModal: (item:string) => void;
}
const LanduageModalItem = ({level,openEditModal,text,callbackRemove}:LanduageModalItemProps) => {
    return (
        <div onClick={() => {openEditModal(text)}} className={`${styles.language_select} cursor`}>
            <Typography variant='body4'>{text}</Typography>

            <div className='gap_20' style={{marginLeft: 'auto'}}>
                <Typography variant='body4' fontWeight='500'>{level}</Typography>
                <AppColor.close width={'15px'} fill={AppColor.red} height={'15px'} onClick={() => {callbackRemove(text)}}/>
            </div>
        </div>
    )
}
type SkillsItemProps = {
    title: string;
    icon: any;
    skills: string[]
    showDropdown?: boolean;
    activeCategory: string;
    callback: (item:string) => void;
}
const SkillsItem = ({icon,skills,title,showDropdown=false,activeCategory,callback}:SkillsItemProps) => {
    return (
        <div onClick={() => {callback(title)}} style={activeCategory == title ? {backgroundColor: AppColor.white} : {}} className={styles.skills_wrapper}>
            {icon}
            <div>
                <Typography variant='body5' fontWeight='500'>{title}</Typography>
                <Typography variant='body5'>
                    {skills.map((item,index) => {
                        if(index >= 2) return ''
                        if(index < 1) {
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
export default Account;