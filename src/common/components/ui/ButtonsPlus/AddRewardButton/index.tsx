
import { useState } from 'react';
import { PlusButton } from '../CreateTeamButton';
import styles from './style.module.scss';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import Typography from '../../Typography/Typography';
import DynamicPadding from '../../DynamicPadding';
import InputDropdown from '../../inputs/InputDropdown';
import AppColor from '@common/styles/variables-static';
import InputCommon from '../../inputs/InputCommon';
import { fakeUserConstant } from '@common/models/user';
import MyButtonBlack from '../../MyButton/variants/MyButtonBlack';
import SizeBox from '../../SizeBox';
import { SelectItemSix } from '../../Dropdown/DropdownNodes/variants/DropdownPortfolio/Steps';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';

const AddRewardButton = () => {

    const [showModal,setShowModal] = useState(false);
    const [activeSelection,setActiveSelection] = useState('');
    return (
      <div>
        {showModal && <ModalCenterBasic 
        
        desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Add reward'
            nodesBeforeClose={[]}>
                <Typography variant='body3' fontWeight='500'>Add reward</Typography>
                <DynamicPadding desktop='30px' mobile='20px' />
                <InputDropdown 
                labelIcon={<></>}
                    iconBeforeVariant={<AppColor.gift />}
                    initText='Custom reward'
                    marginLeft={true}
                    padding='15px 20px 15px 50px'
                    dropdownVariants={['Custom reward']}
                />
                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography variant='body3' fontWeight='500'>Title</Typography>
                <InputCommon padding='15px 20px' placeholder='Enter title' callback={() => {}}/>
                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography variant='body3' fontWeight='500'>Image</Typography>

                <div className='gap_20'>
                    <img src={fakeUserConstant.image} width={'124px'} height={'124px'} style={{objectFit: 'cover'}} alt="" />
                    <div>
                        <div className='gap_15'>
                            <MyButtonBlack onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                            Update  Picture
                            </MyButtonBlack>
                            <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red} />
                        </div>
                        <SizeBox height='15px'/>
                        <Typography variant='body4'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</Typography>
                    </div>

                </div>
                <DynamicPadding desktop='30px' mobile='20px' />
                <Typography variant='body3' fontWeight='500'>Amount</Typography>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div className={styles.grid_20}>
                        <InputCommon padding='15px 30px' textAlingCenter={true} callback={(item) => {setActiveSelection(item);}}
                            placeholder='Enter Manually' type='number' width='100%'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);}} 
                            text='5'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);}} 
                            text='10'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);}} 
                            text='20'
                        />
                    </div>
                <DynamicPadding desktop='30px' mobile='20px' />
                <div className={styles.flex_end}>
                    <MyButtonTransparent onClick={() => {setShowModal(false)}} fontWeight='500' textTransform='uppercase'>
                        Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {setShowModal(false)}} fontWeight='500' textTransform='uppercase'>
                        Add
                    </MyButtonOrange>
                </div>
            </ModalCenterBasic>}
           <PlusButton callbackOpen={() => {setShowModal(true)}} />
      </div>
    );
};

export default AddRewardButton;