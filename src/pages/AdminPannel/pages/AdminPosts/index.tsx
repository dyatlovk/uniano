
import DetailsTableFormsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableFormsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsTablePostsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTablePostsAdmin/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, StarItem, SkillLevel, ButtonsRemoveList, YesNoTable, TableChooseDropdown } from '../AdminPartnerships';

const AdminPosts = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    const [showSettingsModal,setShowSettingsModal] = useState(false);
    const [locations,setLocations] = useState<string[]>([]);
    const [languages,setLanguages] = useState<string[]>([]);
    const [filtersOther,setFiltersOther] = useState<string[]>([]);

    const [selectedVariant,setSelectedVariant] = useState(1);
    return (    
      <div className={styles.wrapper}>
        {
        showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
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
                <div className={styles.top_grid_2}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Visibility</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={
                                [
                                    {
                                        id: '1',
                                        item: <Typography variant='body4'>All users and search engines</Typography>
                                    },
                                    {
                                        id: '2',
                                        item: <Typography variant='body4'>None</Typography>
                                    },
                                ]
                            }
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Can reply</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={
                                [
                                    {
                                        id: '1',
                                        item: <Typography variant='body4'>None</Typography>
                                    },
                                    {
                                        id: '2',
                                        item: <Typography variant='body4'>All</Typography>
                                    },
                                ]
                            }
                        />
                    </div>
                    
                </div>

                <DynamicPadding desktop='30px' mobile='20px' />

                <YesNoTable 
                    title='Modules'
                    items={[
                        {
                            text: ' Add poll',
                            initValue: true,
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
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Getting Started</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Subscription</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Projects</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Crowdfreelance</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Partnership</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Gamification</Typography>
                        <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                        </div>
                </div>
           </div>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className='center_mobile_text'>
                <div className={styles.title_plus}>
                    <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Posts</Typography></div>
                    <div className={styles.orange}>
                        <AppColor.plus stroke='white' width={'fit-content'}/>
                    </div>
                </div>
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
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>partnership settings</Typography>
                    </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTablePostsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            post: 'New to Uniano, Need assistance ',
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Registration',
                            creator: fakeUserConstant,
                            replies: '531',
                            status: 'Active'
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


export default AdminPosts;