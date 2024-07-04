
import DetailsTableTicketsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableTicketsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import TemplateItem from '@common/components/Header/Header/components/NewsPopUp/components/TemplateItem/index';
import FiltersTemplate, { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index';
import { DropdownCustomNodesCenter, SkillLevel, StarItem } from '../AdminPartnerships';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import BigInput, { BigInputOutside } from '@common/components/ui/BigInput/index';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';

const AdminMailing = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    const [showSettingsModal,setShowSettingsModal] = useState(false);
    const [addScript,setAddScript] = useState(false);

    return (    
      <div className={styles.wrapper}>
        {
        addScript && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setAddScript(false)}}
            title='Create script' nodeAfterTitle={
                <div className='gap_20' style={{width: '100%'}}>
                    <ButtonChooseList buttonPadding='3px 14px' buttons={['Text','Survey']} callback={() => {}} gap='0px' initValue='Text'/>
                    <div style={{flexGrow: '1'}}></div>
                    <FilterTemplateDropdown />
                    <SizeBox width='0px' />
                </div>
            }
            >
                <>
                <div className={styles.top_grid_4}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Recipients</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 10 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>Freelancers</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Condition</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={
                                Array.from({ length: 10 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>Completed project without a review</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Freequency</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 5 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} times</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Start in after condition</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 24 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} hrs</Typography>,
                            }))}
                        />
                    </div>
                </div>
                     <DynamicPadding desktop='30px' mobile='20px' />

                     <Typography variant='body3' fontWeight='500' textLineHeight='1'>Notification</Typography>

                     <DynamicPadding desktop='30px' mobile='20px' />

                     <InputDropdown padding='15px 20px' marginLeft={true} dropdownVariants={['Email & site', '1', '2']} initText='Email & site' labelIcon={<></>}/>
                    <DynamicPadding desktop='30px' mobile='20px' />

                     <Typography variant='body3' fontWeight='500' textLineHeight='1'>Subject</Typography>

                     <DynamicPadding desktop='30px' mobile='20px' />

                     <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />

                    <DynamicPadding desktop='30px' mobile='20px' />

                     <Typography variant='body3' fontWeight='500' textLineHeight='1'>Description</Typography>

                     <DynamicPadding desktop='30px' mobile='20px' />

                     <BigInputOutside callback={() => {}} />

                     <DynamicPadding desktop='30px' mobile='20px' />



                   <div className='flex_space_between'>
                       <div className='gap_20'>
                            <div className='gap_10'>
                                <MyCheckbox height='22px' width='22px'/>
                                <Typography variant='body4'>Schedule</Typography>
                            </div>
                            <div className='gap_10'>
                                <AppColor.calendar />
                                <Typography variant='body4' color={AppColor.transparentBlack} fontWeight='500'>10 oct 2023 00:00 AM</Typography>
                            </div>
                       </div>
                       <div style={{display: 'flex'}}>
                       <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        create
                        </MyButtonOrange>
                       </div>
                   </div>
                </>
        </ModalCenterBasic>
        }
        {
        showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
            title='Mailing settings' nodeAfterTitle={
                <div style={{width: '100%'}} className='gap_20'>
                    <div style={{flexGrow: '1'}}></div>
                    <MyButtonTransparentOrange textTransform='uppercase' onClick={() => {}} fontWeight='500' >
                    Test send
                    </MyButtonTransparentOrange>
                    <SizeBox width='20px' />
                </div>
            }
            >
                <>
                    <div className={styles.grid_2}>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>Sender email</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon padding='13px' callback={() => {}} placeholder=''/>
                        </div>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>Sender name</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon padding='13px' callback={() => {}} placeholder=''/>
                        </div>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>SMTP server</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon padding='13px' callback={() => {}} placeholder=''/>
                        </div>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>SMTP port</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon padding='13px' callback={() => {}} placeholder=''/>
                        </div>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>SMTP username</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon padding='13px' callback={() => {}} placeholder=''/>
                        </div>
                        <div>
                            <Typography textLineHeight='1' variant='body3' fontWeight='500'>SMTP password</Typography>
                            <DynamicPadding desktop='30px' mobile='25px' />
                            <InputCommon type='password' padding='13px' callback={() => {}} placeholder=''/>
                        </div>
    
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
        </ModalCenterBasic>
        }
           <div className={styles.mobile_padding}>
            <DynamicPadding />
    

               <div className={styles.top_part_flex}>
                    <div className={styles.title_plus}>
                        <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Mailing</Typography></div>
                        <div className={`${styles.orange} cursor`} onClick={() => {setAddScript(true)}}>
                            <AppColor.plus stroke='white' width={'fit-content'}/>
                        </div>
                    </div>
                    <div className='cursor' onClick={() => {setShowSettingsModal(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>mailing settings</Typography>
                    </div>
               </div>
 
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableTicketsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            emails: '30 195',
                            recipients: 'Freelancer',
                            status: 'Scheduled',
                            unsubscribes: '5%'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

export default AdminMailing;