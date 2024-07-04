
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailsTableVerification from '@common/components/ui/DetailsTable/variants/DetailsTableVerification/index';
import { fakeUserConstant } from '@common/models/user';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { ButtonsRemoveList } from '../AdminPartnerships';

const AdminVerification = () => {

    const [locations,setLocations] = useState<string[]>([]);
    const [languages,setLanguages] = useState<string[]>([]);
    const [filtersOther,setFiltersOther] = useState<string[]>([]);

    const [selectedVariant,setSelectedVariant] = useState(1);
    const [showSettingsModal,setShowSettingsModal] = useState(false);
    
    return (
      <div className='admin_wrapper'>
        {showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
        title='Verification settings' nodeAfterTitle={
            <div style={{width: '100%'}} className='gap_20'>
                
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
        </ModalCenterBasic>}
           <DynamicPadding />

           <div className={styles.top_part}>
                <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Verification</Typography>
                <div className='cursor' onClick={() => {setShowSettingsModal(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>Verification settings</Typography>
                    </div>
           </div>

           <DynamicPadding />

           <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />

           <DynamicPadding />

           <DetailsTableVerification 
                information={[
                    {
                        date: 'Feb 26, 2021 16:32 ',
                        status: 'Request',
                        user: fakeUserConstant
                    }
                ]}
           />

           <DynamicPadding />
      </div>
    );
};

export default AdminVerification;