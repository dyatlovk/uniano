
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import { useState } from 'react';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import DetailsTableServiceAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableServiceAdmin/index';
import { fakeUserConstant } from '@common/models/user';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, StarItem, SkillLevel, ButtonsRemoveList, YesNoTable, TableChooseDropdown } from '../AdminPartnerships';

const AdminService = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');

    const [locations,setLocations] = useState<string[]>([]);
    const [languages,setLanguages] = useState<string[]>([]);
    const [filtersOther,setFiltersOther] = useState<string[]>([]);

    const [selectedVariant,setSelectedVariant] = useState(1);
    const [showSettingsModal,setShowSettingsModal] = useState(false);


    const [optionsArray,setOptionsArray] = useState([
        {
            text: 'Revisions (Add Revisions)',
            initValue: true,
            info: true,
            nodeAfterDots: <OptionEndNode />
        },
        {
            text: 'Source File (Add Source File)',
            initValue: true,
            info: true,
            nodeAfterDots: <OptionEndNode />
        },
        {
            text: 'High Resolution (Add High Resolution)',
            initValue: true,
            info: true,
            nodeAfterDots: <OptionEndNode />
        }
    ]  );

    return (    
      <div className={styles.wrapper}>
        {
        showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
        title='Service settings' nodeAfterTitle={
            <div style={{width: '100%'}} className='gap_20'>
                <DarkBox triangleDown={true} fonstSize='13px' text={'Logo design'.toUpperCase()} />
                <div className='gap_10'>
                    <Typography variant='body4'>Create</Typography>
                    <SwitchButton startValue={true} width='44px' height='24px'/>
                </div>
                <div className='gap_10'>
                    <Typography variant='body4'>Active</Typography>
                    <SwitchButton startValue={true} width='44px' height='24px'/>
                </div>
            </div>
        }
        >


            <>
                <div className={styles.top_grid_4}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Active programs</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 300 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} of 300</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Positive reviews</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={
                                Array.from({ length: 10 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <StarItem percent={(index + 1)*10} />,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Skill level</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 5 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <SkillLevel lvl={(index + 1)} />,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Account level</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 5 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>idk what should be written here</Typography>,
                            }))}
                        />
                    </div>
                </div>

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Location</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add regions, countries or cities' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLocations(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={locations} />
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Languages </Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add languages' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLanguages(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={languages} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Other filters</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add any filter' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setFiltersOther(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={filtersOther} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Modules'
                    items={[
                        {
                            text: 'Images',
                            initValue: true,
                        },
                        {
                            text: 'Description',
                            initValue: true,
                        },
                        {
                            text: 'Freelancer info',
                            initValue: true,
                        },
                        {
                            text: 'Reviews',
                            initValue: true,
                        },
                        {
                            text: 'FAQ',
                            initValue: true,
                        },
                        {
                            text: 'Sponsorships',
                            initValue: true,
                        },
                        {
                            text: 'Promo',
                            initValue: true,
                        },
                        {
                            text: 'Specification forms',
                            initValue: true,
                        },
                        {
                            text: 'Custom specification text',
                            initValue: true,
                        },
                        {
                            text: 'Documents',
                            initValue: true,
                        }
                    ]                    
                    }
                />

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Negotiation'
                    items={[
                        {
                            text: 'Fixed payment',
                            initValue: true,
                        },
                        {
                            text: 'Milestones payment',
                            initValue: true,
                        },
                        {
                            text: 'Custom requirements',
                            initValue: true,
                        },
                        {
                            text: 'Packages',
                            initValue: true,
                        }
                    ]                                    
                    }
                />

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Package inclusions & options'
                    items={optionsArray}
                />

                <DynamicPadding desktop='25px' mobile='15px' />

                <Typography textLineHeight='1' variant='body5' color={AppColor.orange} fontWeight='500'>Add inclusion & option</Typography>

                <DynamicPadding desktop='25px' mobile='15px' />

                <TableChooseDropdown 
                 title='Conditions'
                 items={[
                    {
                        items: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
                        text: 'Freelancer fee'
                    },
                    {
                        items: ["$10", "$20", "$30", "$40", "$50"],
                        text: 'Beginner skill level low price'
                    },
                    {
                        items: ["$40", "$50", "$60", "$70", "$80"],
                        text: 'Junior skill level low price'
                    },
                    {
                        items: ["$70", "$80", "$90", "$100", "$110"],
                        text: 'Middle skill level low price'
                    },
                    {
                        items: ["$100", "$150", "$200", "$250", "$300"],
                        text: 'Senior skill level low price'
                    },
                    {
                        items: ["$150", "$200", "$250", "$300", "$350"],
                        text: 'Lead skill level low price'
                    }
                ]
                
                }
                />

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Promo conditions'
                    items={[
                        {
                            text: 'Minimum service purchase',
                            initValue: true,
                        },
                        {
                            text: 'Buy specific package',
                            initValue: true,
                        },
                        {
                            text: 'Buy custom requirements',
                            initValue: true,
                        },
                        {
                            text: 'Only fixed payment',
                            initValue: true,
                        },
                        {
                            text: 'Only milestones payment',
                            initValue: true,
                        },
                        {
                            text: 'Only for Pro and Ultimate subscribers',
                            initValue: true,
                        },
                        {
                            text: 'Only for Ultimate subscribers',
                            initValue: true,
                        },
                        {
                            text: 'Were previous projects with customers',
                            initValue: true,
                        }
                    ]                                                    
                    }
                />

                 <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Promo conditions'
                    items={[
                        {
                            text: 'Sale',
                            initValue: true,
                        },
                        {
                            text: 'Bonuses',
                            initValue: true,
                        },
                        {
                            text: 'Next service discount for fixed payment',
                            initValue: true,
                        },
                        {
                            text: 'Next service discount for hourly payment',
                            initValue: true,
                        },
                        {
                            text: 'Next service discount for milestones payment',
                            initValue: true,
                        },
                        {
                            text: 'Next service discount for specific package',
                            initValue: true,
                        },
                        {
                            text: 'Next service discount for custom requirements',
                            initValue: true,
                        },
                        {
                            text: '1 month Pro subscription',
                            initValue: true,
                        },
                        {
                            text: '1 month Ultimate subscription',
                            initValue: true,
                        }
                    ]                                                               
                    }
                />

                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Affect on</Typography>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className='gap_20'>
                        <RadioButton 
                        activeSelection={selectedVariant == 1}
                        callback={(item) => {setSelectedVariant(item)}}
                        indexItem={1}
                        text=' New programs' />
                  
                        <RadioButton 
                        activeSelection={selectedVariant == 2}
                        callback={(item) => {setSelectedVariant(item)}}
                        indexItem={2}
                        text='  All programs          ' />
                   </div>

                   <DynamicPadding desktop='30px' mobile='20px' />
                   <Typography textLineHeight='1' variant='body3' fontWeight='500'>Copy to other categories</Typography>

                   <DynamicPadding desktop='30px' mobile='20px' />

                   <MyButtonOrange fontWeight='500' textTransform='uppercase' onClick={() => {}}>

                    <div className={styles.white_box}>
                        <AppColor.plus stroke={AppColor.orange} />
                    </div>
                   Add category
                   </MyButtonOrange>

                   <DynamicPadding desktop='30px' mobile='20px' />

                   <div className='flex_end'>
                        <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Save
                        </MyButtonOrange>
                   </div>

            </>
        </ModalCenterBasic>
     }
           <div className={styles.scroll_bar}>
                <div className={styles.top_gap_30_15}>
                    <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                    </div>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.development />} title='Development'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.desing />} title='Design'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.marketing />} title='Marketing'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.writing />} title='Writing'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.managment />} title='Management'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.consulting />} title='Consulting'/>
                        <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                        </div>
                </div>
           </div>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className='center_mobile_text'>
                <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Crypto Wallet Development services</Typography>
               </div>
    
               <DynamicPadding />
    
               <div className={styles.top_part}>
                    <div className={styles.buttons_top}>
                        <div className='gap_10'>
                            <Typography variant='body4'>Create</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                        <div className='gap_10'>
                            <Typography variant='body4'>Active</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                    </div>
    
                    <div className='cursor' onClick={() => {setShowSettingsModal(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>service settings</Typography>
                    </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableServiceAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Crypto Wallet Development',
                            price: 'From $200 ',
                            delivery: 'avg. 3 days',
                            queue: '35'
                        }
                    ]}
               />
           </div>
      </div>
    );
};


const OptionEndNode = ({}) => {
    return (
        <div className='gap_10'>
            <AppColor.close width={'16px'} height={'16px'} fill={AppColor.red} />
            <AppColor.edit width={'16px'} height={'16px'} fill={AppColor.text} />
        </div>
    )
}
type TopItemProps = {
    icon: React.ReactNode;
    title: string;
    activeSelect: string;
    callbackSelect: (item:string) => void;
}
const TopItem = ({icon,title,activeSelect,callbackSelect}:TopItemProps) => {
    const isActive = activeSelect == title;
    return (
        <div onClick={() => {if(!isActive) {callbackSelect(title)}}} className='gap_10'>
            {icon}
            <Typography variant='body4' fontWeight={isActive ? '500' : '400'}>{title}</Typography>
        </div>
    )
}

export default AdminService;