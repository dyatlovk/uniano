
import DetailsTableOrdersAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableOrdersAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsCrowdfreelanceAdmin from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelanceAdmin/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, StarItem, SkillLevel, ButtonsRemoveList, YesNoTable, TableChooseDropdown } from '../AdminPartnerships';

const AdminCrowdfreelance = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');

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
                        <Typography variant='body3' fontWeight='500'>Active campaigns</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 300 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} of 300</Typography>,
                            }))}
                        />
                    </div>
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
                        <Typography variant='body3' fontWeight='500'>Campaign lifetime in days</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 100 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1}</Typography>,
                            }))}
                        />
                    </div>
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
                        <Typography variant='body3' fontWeight='500'>The number of boosts</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 30 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1}</Typography>,
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
                    items={
                        [
                            {
                                "text": "Images",
                                "initValue": true
                            },
                            {
                                "text": "Description",
                                "initValue": true
                            },
                            {
                                "text": "Roadmap",
                                "initValue": true
                            },
                            {
                                "text": "Customer info",
                                "initValue": true
                            },
                            {
                                "text": "Reviews",
                                "initValue": true
                            },
                            {
                                "text": "FAQ",
                                "initValue": true
                            },
                            {
                                "text": "Documents",
                                "initValue": true
                            },
                            {
                                "text": "Replies",
                                "initValue": true
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
        </ModalCenterBasic>}
           <div className={styles.scroll_bar}>
                <div className={styles.top_gap_30_15}>
                    <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                    </div>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.business />} title='Business'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.creation />} title='Creation'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.IT />} title='IT'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.tech />} title='Tech'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.publicIcon />} title='Public'/>
                        <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                        </div>
                </div>
           </div>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className='center_mobile_text'>
                <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>creation sponsorships</Typography>
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
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>Sponsorships settings</Typography>
                    </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsCrowdfreelanceAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Web Sites',
                            lifetime: '25 days left',
                            sponsored: '$20 000',
                            sponsoredTotal: 'of $50 000'
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

export default AdminCrowdfreelance;