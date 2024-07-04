
import DetailsTableServiceAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableServiceAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsTableOrdersAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableOrdersAdmin/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, StarItem, SkillLevel, ButtonsRemoveList, YesNoTable, TableChooseDropdown } from '../AdminPartnerships';

const AdminOrder = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    const [selectedVariant,setSelectedVariant] = useState(1);
    const [showSettingsModal,setShowSettingsModal] = useState(false);

    return (    
      <div className={styles.wrapper}>
        {
        showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
        title='Orders settings' nodeAfterTitle={
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
                        <Typography variant='body3' fontWeight='500'>The number of bids per day</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 10 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{(index + 1)*5}</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Order lifetime in days</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                             nodes={Array.from({ length: 30 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{(index + 1)}</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>The number of boosts</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                             nodes={Array.from({ length: 30 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{(index + 1)}</Typography>,
                            }))}
                        />
                    </div>
                </div>

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
                            text: 'Customer info',
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
                        },
                        {
                            text: 'Interviews',
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
                <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Crypto Wallet Development orders</Typography>
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
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>orders settings</Typography>
                    </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableOrdersAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Crypto Wallet Development',
                            price: 'From $200 ',
                            delivery: 'avg. 3 days',
                            bids: '5',
                            needToHire: '1 of 10'
                        }
                    ]}
               />
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

export default AdminOrder;