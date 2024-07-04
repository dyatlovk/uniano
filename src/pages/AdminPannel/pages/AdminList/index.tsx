
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import AppColor from '@common/styles/variables-static';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailsUsers from '@common/components/ui/DetailsTable/variants/DetailsUsers/index';
import { fakeUserConstant } from '@common/models/user';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, ButtonsRemoveList, YesNoTable, StarItem, SkillLevel, CombinedYesAndChangeTable } from '../AdminPartnerships';

const AdminList = () => {

    const [freelancerSettings,setFreelancerSettings] = useState(false);
    const [managerSettings,setManagerSettings] = useState(false);
    const [moderatorSettings,setModeratorSettings] = useState(false);
    const [arbitratorSettings,setArbitratorSettings] = useState(false);



    const [locationsArbitrator,setLocationsArbitrator] = useState<string[]>([]);
    const [languagesArbitrator,setLanguageArbitrators] = useState<string[]>([]);
    const [filtersOtherArbitrator,setFiltersOtherArbitrator] = useState<string[]>([]);

    const [locationsManager, setLocationsManager] = useState<string[]>([]);
    const [languagesManager, setLanguagesManager] = useState<string[]>([]);
    const [filtersOtherManager, setFiltersOtherManager] = useState<string[]>([]);

    const [locationsModerator, setLocationsModerator] = useState<string[]>([]);
    const [languagesModerator, setLanguagesModerator] = useState<string[]>([]);
    const [filtersOtherModerator, setFiltersOtherModerator] = useState<string[]>([]);

    const [locationsFreelancer, setLocationsFreelancer] = useState<string[]>([]);
    const [languagesFreelancer, setLanguagesFreelancer] = useState<string[]>([]);
    const [filtersOtherFreelancer, setFiltersOtherFreelancer] = useState<string[]>([]);


    const [selectedVariantArbitrator,setSelectedVariantArbitrator] = useState(1);
    return (
      <div className='admin_wrapper'>

{managerSettings && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setManagerSettings(false)}}
        title='Manager settings' nodeAfterTitle={
            <div style={{width: '100%'}} className='gap_20'>
                <DarkBox triangleDown={true} fonstSize='13px' text={'Logo design'.toUpperCase()} />
                <div className='gap_10'>
                    <Typography variant='body4'>Active</Typography>
                    <SwitchButton startValue={true} width='44px' height='24px'/>
                </div>
            </div>
        }
        >


            <>


                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Hired freelancers</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown padding='15px 20px' dropdownVariants={['200 of unlimited ','1,2','3,5']} initText='200 of unlimited ' labelIcon={<></>} marginLeft={true}/>

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Location</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add regions, countries or cities' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLocationsManager(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={locationsManager} />
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Languages </Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add languages' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLanguagesManager(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={languagesManager} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Other filters</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add any filter' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setFiltersOtherManager(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={filtersOtherManager} />

                <DynamicPadding desktop='30px' mobile='20px' />

               
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Affect on</Typography>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className='gap_20'>
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 1}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
                        indexItem={1}
                        text=' New programs' />
                  
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 2}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
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
        </ModalCenterBasic>}

{freelancerSettings && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setFreelancerSettings(false)}}
        title='Freelancer settings' nodeAfterTitle={
            <div style={{width: '100%'}} className='gap_20'>
                <DarkBox triangleDown={true} fonstSize='13px' text={'Logo design'.toUpperCase()} />
                <div className='gap_10'>
                    <Typography variant='body4'>Active</Typography>
                    <SwitchButton startValue={true} width='44px' height='24px'/>
                </div>
            </div>
        }
        >


            <>


                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Hired freelancers</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown padding='15px 20px' dropdownVariants={['200 of unlimited ','1,2','3,5']} initText='200 of unlimited ' labelIcon={<></>} marginLeft={true}/>

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Location</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add regions, countries or cities' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLocationsFreelancer(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={locationsFreelancer} />
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Languages </Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add languages' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLanguagesFreelancer(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={languagesFreelancer} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Other filters</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add any filter' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setFiltersOtherFreelancer(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={filtersOtherFreelancer} />

                <DynamicPadding desktop='30px' mobile='20px' />

               
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Affect on</Typography>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className='gap_20'>
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 1}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
                        indexItem={1}
                        text=' New programs' />
                  
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 2}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
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
        </ModalCenterBasic>}

{moderatorSettings && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setModeratorSettings(false)}}
        title='Moderator settings' nodeAfterTitle={
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
                        <Typography variant='body3' fontWeight='500'>User type</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={[
                                {
                                    id: '1',
                                    item: <Typography variant='body4'>freelancers and managers</Typography>,
                                },
                                {
                                    id: '2',
                                    item: <Typography variant='body4'>freelancers and managers</Typography>,
                                }
                            ]}
                        />
                    </div>
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
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
                            nodes={Array.from({ length: 120 }, (_, index) => ({
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
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLocationsModerator(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={locationsModerator} />
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Languages </Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add languages' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLanguagesModerator(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={languagesModerator} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Other filters</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add any filter' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setFiltersOtherModerator(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={filtersOtherModerator} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <CombinedYesAndChangeTable 
                    title='Conditions'
                    items={
                        [
                            {
                                text: ' Profit of the moderator from resolving user complaint',
                                initValue: true,
                                isBoolean: false,
                                items: [
                                    "0.01",
                                    "0.1",
                                    "1",
                                    "10",
                                    "100",
                                    "1000",
                                    "10000",
                                    
                                 
                                  ]                                  
                            },
                            {
                                text: 'Available to receive tips',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            },
                            {
                                text: 'Access to ban users for violations of the website\'s rules',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            },
                            {
                                text: 'Access to unban users for violations of the website\'s rules',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            }
                          
                        ]
                        
                        
                    }
                />

                

                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Affect on</Typography>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className='gap_20'>
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 1}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
                        indexItem={1}
                        text=' New programs' />
                  
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 2}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
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
        </ModalCenterBasic>}

{arbitratorSettings && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setArbitratorSettings(false)}}
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
                        <Typography variant='body3' fontWeight='500'>User type</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={[
                                {
                                    id: '1',
                                    item: <Typography variant='body4'>freelancers and managers</Typography>,
                                },
                                {
                                    id: '2',
                                    item: <Typography variant='body4'>freelancers and managers</Typography>,
                                }
                            ]}
                        />
                    </div>
                    <div style={{flex: '0 0 calc(50% - 15px)'}}>
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
                            nodes={Array.from({ length: 120 }, (_, index) => ({
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
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLocationsArbitrator(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={locationsArbitrator} />
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Languages </Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add languages' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setLanguageArbitrators(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={languagesArbitrator} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Other filters</Typography>
                
                <DynamicPadding desktop='30px' mobile='20px' />

                <InputDropdown dropdownVariants={['Ukraine', 'England', 'Poland', 'Norvey']} initText='Add any filter' labelIcon={<></>}
                 marginLeft={true} padding='13px 20px' callback={(item) => {setFiltersOtherArbitrator(prev => [...prev,item])}} />
                
                <DynamicPadding desktop='20px' mobile='15px' />

                
                <ButtonsRemoveList buttons={filtersOtherArbitrator} />

                <DynamicPadding desktop='30px' mobile='20px' />

                <CombinedYesAndChangeTable 
                    title='Conditions'
                    items={
                        [
                            {
                                text: ' Arbitrator project profit',
                                initValue: true,
                                isBoolean: false,
                                items: [
                                    "1%",
                                    "2%",
                                    "3%",
                                    "4%",
                                    "5%",
                                    "6%",
                                    "7%",
                                    "8%",
                                    "9%",
                                    "10%",
                                    "11%",
                                    "12%",
                                    "13%",
                                    "14%",
                                    "15%",
                                    "16%",
                                    "17%",
                                    "18%",
                                    "19%",
                                    "20%"
                                  ]                                  
                            },
                            {
                                text: 'Access to chat with participants',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            },
                            {
                                text: 'Access to read chats all participants',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            },
                            {
                                text: 'Access to download files',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            },
                            {
                                text: 'Access to complete and close projects',
                                initValue: true,
                                isBoolean: true,
                                items: []
                            }
                        ]
                        
                        
                    }
                />

                

                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Affect on</Typography>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className='gap_20'>
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 1}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
                        indexItem={1}
                        text=' New programs' />
                  
                        <RadioButton 
                        activeSelection={selectedVariantArbitrator == 2}
                        callback={(item) => {setSelectedVariantArbitrator(item)}}
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
        </ModalCenterBasic>}
           <DynamicPadding />
           <div className='center_mobile_text'>
                <Typography variant='titleBig' textTransform='uppercase' fontWeight='600'>Users list</Typography>
           </div>
           <DynamicPadding />
           <div className={styles.top_part_wrapper}>
                <div className='gap_10'>
                    <Typography variant='body4'>Registration</Typography>
                    <SwitchButton width='44px' height='24px' />
                </div>
                <div className={styles.settings_role_grid}>
                    <div className='cursor' onClick={() => {setFreelancerSettings(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>FREELANCER settings</Typography>
                    </div>
                    <div className='cursor' onClick={() => {setManagerSettings(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>MANAGER settings</Typography>
                    </div>
                    <div className='cursor' onClick={() => {setModeratorSettings(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>MODERATOR settings</Typography>
                    </div>
                    <div className='cursor' onClick={() => {setArbitratorSettings(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>Arbitrator settings</Typography>
                    </div>
                </div>
           </div>
            <DynamicPadding />

           <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />

           <DynamicPadding />

           <DetailsUsers 
            information={[
                {
                    memberSince: 'Feb 26, 2021 16:32 ',
                    roles: 'Customer, Freelancer, Manager, Sponsor',
                    status: 'Active', 
                    user: fakeUserConstant,
                }
            ]}
           />

           <DynamicPadding />
      </div>
    );
};

export default AdminList;