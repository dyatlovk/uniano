
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import FilterList from '@common/components/FilterList/index';
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index';
import DetailsWithdraw from '@common/components/ui/DetailsTable/variants/DetailsWithdraw/index';
import { fakeUserConstant } from '@common/models/user';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import { DropdownCustomNodesCenter, StarItem, SkillLevel, ButtonsRemoveList, YesNoTable, TableChooseDropdown } from '../AdminPartnerships';
import { useState } from 'react';
import AnimateHeight from '@common/components/AnimateHeight/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';

const AdminTopUp = () => {

    const [showSettingsModal,setShowSettingsModal] = useState(false);

    return (
      <div className='admin_wrapper'>
        {
        showSettingsModal && <ModalCenterBasic desktopMinWidth='800px' desktopMaxWidth='800px' bottomPartPadding='30px' callbackClose={() => {setShowSettingsModal(false)}}
        title='Withdraw settings' 
        >


            <>
                <Typography textLineHeight='1' variant='body3' fontWeight='500'>Payment system</Typography>
                <DynamicPadding desktop='30px' mobile='20px' />
                <DropdownCustom nodes={[
                    <AppColor.visa />,
                    <AppColor.visa />,
                    <AppColor.visa />,
                    <AppColor.visa />,
                ]} />
                <DynamicPadding desktop='20px' mobile='15px' />
                <div className='gap_20'>
                    <div className='gap_10'>
                        <Typography variant='body4'>Active</Typography>
                        <SwitchButton width='44px' height='24px' />
                    </div>
                    <div className='gap_10'>
                        <Typography variant='body4'>Withdrawal with SMS</Typography>
                        <SwitchButton width='44px' height='24px' />
                    </div>
                    <div className='gap_10'>
                        <Typography variant='body4'>Withdrawal with PIN</Typography>
                        <SwitchButton width='44px' height='24px' />
                    </div>
                </div>
                <DynamicPadding desktop='20px' mobile='15px' />
                
                <div className={styles.grid_3_row}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Min amount</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Max amount</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Max per day</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />
                    </div>
                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <div className={styles.grid_2_row}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Payment fee percent</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Payment fee amount</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <InputCommon callback={() => {}} placeholder='' padding='15px 20px' />
                    </div>
                </div>

                <DynamicPadding desktop='30px' mobile='20px' />

                <div className={styles.grid_2_row}>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Time to withdraw</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 300 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} of 300</Typography>,
                            }))}
                        />
                    </div>
                    <div>
                        <Typography variant='body3' fontWeight='500'>Withdrawal type</Typography>
                        <DynamicPadding desktop='30px' mobile='20px' />
                        <DropdownCustomNodesCenter 
                            nodes={Array.from({ length: 300 }, (_, index) => ({
                                id: (index + 1).toString(),
                                item: <Typography variant='body4'>{index + 1} of 300</Typography>,
                            }))}
                        />
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
           <DynamicPadding />

           <div className={styles.top_part}>
                <div className={styles.gap_20_10}>
                    <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Top up</Typography>
                    <div className={styles.orange_circle}>
                        <AppColor.plus stroke='white'/>
                    </div>
                </div>
               <div className={styles.top_end_part}>
                    <div className='gap_5'>
                        <Typography variant='body4'>Active</Typography>
                        <SwitchButton width='44px' height='24px' startValue={true}/>
                    </div>
                    <div className='cursor' onClick={() => {setShowSettingsModal(true)}}>
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' className={styles.hover_text}>partnership settings</Typography>
                    </div>
               </div>
           </div>

           <DynamicPadding desktop='30px' mobile='20px'/>

           <SearchFilterBar exportIcon={true}  date='10/29/22 - 11/29/22' />

           <DynamicPadding />

            <DetailsWithdraw 
                information={[
                    {
                        operation: '',
                        id: '3311',
                        date: 'Feb 26, 2021 16:32 ',
                        amount:'-$10 353.54',
                        method: 'visa',
                        status: 'Pending',
                        user: fakeUserConstant
                    }
                ]}
            />
            <DynamicPadding />
      </div>
    );
};

type DropdownCustomProps = {
    nodes: React.ReactNode[];
}
const DropdownCustom = ({nodes}:DropdownCustomProps) => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [showDropdown,setShowDropdown] = useState(false);

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };

    const [hovered,setHovered] = useState(false);

    return (
        <div className={styles.dropdown_wrapper_custom} style={{position: 'relative'}}>
            <div 
            onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => {setHovered(false)}}
            style={{...borderStyles}} onClick={() => {setShowDropdown(prev => !prev)}} 
            
            className={`${styles.custom_dropdown} cursor ${(hovered || showDropdown) ? styles.dropdown_hover : ''}`}>
                {nodes[activeIndex]}
                {showDropdown
                ? <AppColor.chevronTop fill={AppColor.transparentBlack} />
                : <AppColor.chevronBottom fill={AppColor.transparentBlack} />}
            </div>

            <div style={!showDropdown ? { boxShadow: 'none', WebkitBoxShadow: 'none', MozBoxShadow: 'none' } : {}} className={styles.abs_dropdown}>
                <AnimateHeight show={showDropdown}>
                    <div className={styles.dropdown_styles_children}>
                        {nodes.map((item,index) => {
                            return (
                                <div onClick={() => {setActiveIndex(index); setShowDropdown(false)}} className={`${styles.dropdown_item} cursor`}>{item}</div>
                            )
                        })}
                    </div>
                </AnimateHeight>
            </div>
        </div>
    )
}
export default AdminTopUp;