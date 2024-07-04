
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import DetailsCrowdfreelanceAdmin from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelanceAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { fakeUserConstant } from '@common/models/user';
import { useState } from 'react';
import DetailsTableSubscriptionsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableSubscriptionsAdmin/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { ButtonsRemoveList, DropdownCustomNodesCenter, SkillLevel, StarItem, TableChooseDropdown, YesNoTable } from '../AdminPartnerships';

const AdminSubscriptions = () => {

    const [showSettingsModal,setShowSettingsModal] = useState(false);

    const [locations,setLocations] = useState<string[]>([]);
    const [languages,setLanguages] = useState<string[]>([]);
    const [filtersOther,setFiltersOther] = useState<string[]>([]);

    const [selectedVariant,setSelectedVariant] = useState(1);

    return (    
      <div className={styles.wrapper}>

    {showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
        title='Partnership settings' nodeAfterTitle={
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
                <div className={styles.flex_3}>
                    <div style={{flex: '0 0 100%'}}>
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
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
                        <Typography variant='body3' fontWeight='500'>Skill level</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 5 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <SkillLevel lvl={(index + 1)} />,
                            }))}
                        />
                    </div>
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
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
                    title='Negotiation'
                    items={[
                        {
                            "text": "Start subscription",
                            "initValue": true
                        },
                        {
                            "text": "Pro subscription",
                            "initValue": true
                        },
                        {
                            "text": "Unlimited subscription",
                            "initValue": true
                        },
                        {
                            "text": "Monthly payment",
                            "initValue": true
                        },
                        {
                            "text": "Annually payment",
                            "initValue": true
                        }
                    ]                    
                    }
                />

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Subscription options'
                    items={[
                        {
                            "text": "Queue",
                            "initValue": true
                        },
                        {
                            "text": "Support",
                            "initValue": true
                        },
                        {
                            "text": "Guarantee",
                            "initValue": true
                        },
                        {
                            "text": "Subscribers group",
                            "initValue": true
                        },
                        {
                            "text": "Missions",
                            "initValue": true
                        },
                        {
                            "text": "Leagues",
                            "initValue": true
                        },
                        {
                            "text": "Badges",
                            "initValue": true
                        },
                        {
                            "text": "Penalty",
                            "initValue": true
                        }
                    ]                                   
                    }
                />



                <DynamicPadding desktop='30px' mobile='20px' />

                <TableChooseDropdown 
                 title='Conditions'
                 items={[
                    {
                        items: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
                        text: 'Freelancer fee'
                    },
                
                    
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

                   <div className='flex_end'>
                        <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Save
                        </MyButtonOrange>
                   </div>

            </>
        </ModalCenterBasic>}
     

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className={styles.top_title_part}>
                   <div className='center_mobile_text'>
                    <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Subscriptions</Typography>
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
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>subscription settings</Typography>
                        </div>
                   </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableSubscriptionsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            plan: 'Start',
                            price: 'Free',
                            subscriptions: '552'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

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

export default AdminSubscriptions;