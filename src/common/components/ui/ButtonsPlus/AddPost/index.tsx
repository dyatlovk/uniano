
import { useState } from 'react';
import { PlusButton } from '../CreateTeamButton';
import styles from './style.module.scss';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import Typography from '../../Typography/Typography';
import DynamicPadding from '../../DynamicPadding';
import InputCommon from '../../inputs/InputCommon';
import AppColor from '@common/styles/variables-static';
import AnimateHeight from '@common/components/AnimateHeight/index';
import SizeBox from '../../SizeBox';
import SwitchButton from '../../SwitchButton';
import MyCheckbox from '../../inputs/Checkbox';
import DatePicker from '../../DatePicker';
import BigInput, { BigInputOutside } from '../../BigInput';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';

const AddPost = () => {

    const [showModal, setShowModal] = useState(false);

    const [allowMultipleSelection, setAllowMultipleSelection] = useState(false);
    
    return (
      <div>
            {showModal && <ModalCenterBasic desktopMinWidth='600px' bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Create post'>
                <Typography variant='body3' fontWeight='500'>
                Subject
                </Typography>

                <DynamicPadding desktop='25px' mobile='15px'/>
                <InputCommon padding='15px 20px' callback={() => {}} placeholder='Subject'/>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <Typography variant='body3' fontWeight='500'>
                Category
                </Typography>

                <DynamicPadding desktop='25px' mobile='15px'/>
                <CategoryDropdown />

                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='gap_10'>
                    <Typography variant='body4'>
                    Add poll
                    </Typography>
                    <SwitchButton width='44px' height='24px' />
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <Typography variant='body3' fontWeight='500'>Poll subject</Typography>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <InputCommon padding='15px 20px' callback={() => {}} placeholder='What is your status ?'/>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='gap_10'>
                    <MyCheckbox width='20px' height='20px' />
                    <Typography variant='body4'>
                    Allow Multiple Selection
                    </Typography>
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='gap_10'>
                    <Typography variant='body4'>Expiration</Typography>
                    <SwitchButton callback={(item) => {setAllowMultipleSelection(item)}} width='44px' height='24px' />
                    <div style={{opacity: allowMultipleSelection ? '1' : '0.5',transition: '0.2s'}}>
                    <DatePicker />
                    </div>
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>

                <div className={styles.grid_20}>
                    <OptionItem text='Good feeling' />
                    <OptionItem text='Good feeling' />
                    <OptionItem text='Good feeling' />
                </div>

                <DynamicPadding desktop='25px' mobile='15px'/>
                <div>
                    <Typography variant='body5' color={AppColor.orange}>Add option</Typography>
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <Typography variant='body3' fontWeight='500'>Description</Typography>
                <DynamicPadding desktop='25px' mobile='15px'/>
                <BigInputOutside callback={() => {}} />
                <DynamicPadding desktop='25px' mobile='15px'/>
                <div className='flex_end'>
                    <MyButtonTransparent onClick={() => {setShowModal(false)}}
                    fontWeight='500' textTransform='uppercase'
                    >Cancel</MyButtonTransparent>
                     <MyButtonOrange onClick={() => {setShowModal(false)}}
                    fontWeight='500' textTransform='uppercase'
                    >Create</MyButtonOrange>
                </div>
                <DynamicPadding desktop='25px' mobile='15px'/>
                </ModalCenterBasic>}
           <PlusButton  callbackOpen={() => {setShowModal(true)}}/>
      </div>
    );
};

type OptionItemProps = {
    text: string;
}
const OptionItem = ({text}:OptionItemProps) => {
    return (
        <div className='gap_10'>
            <AppColor.arrowFour />
            <div className={styles.shadow_box}>
                <Typography variant='body4'>{text}</Typography>
            </div>
            <AppColor.close  width={'15px'} height={'15px'} fill={AppColor.red} />
        </div>
    )
}
const categories = [
    {
        title: 'Getting Started',
        items: ['Registration','Login','Profile','Settings']
    },
    {
        title: 'Subscription',
        items: ['What is subscription','How to subscribe','Create subsctiption']
    },
    {
        title: 'Getting Started',
        items: ['Registration','Login','Profile','Settings']
    },
    {
        title: 'Subscription',
        items: ['What is subscription','How to subscribe','Create subsctiption']
    }
]
const CategoryDropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };

    return (
        <div style={{position: 'relative'}}>
            <div style={{...borderStyles}} className={`${styles.category_select_dropdown} cursor`} onClick={() => {setShowDropdown(prev => !prev)}}>
                {selectedCategory.length > 1
                ?   <div className='gap_10'>
                    <Typography variant='body4'>{selectedCategory[0]}</Typography>
                    <AppColor.chevronRight width={'6px'} height={'12px'} fill={AppColor.text} />
                    <Typography variant='body4'>{selectedCategory[1]}</Typography>
                </div>
                : <Typography variant='body4' color={AppColor.transparentBlack}>Select category</Typography>}

                {showDropdown 
                ? <AppColor.chevronTop fill={AppColor.text} width={'16px'} height={'8px'} />
                : <AppColor.chevronBottom fill={AppColor.text} width={'16px'} height={'8px'} />
                }
            </div>

            <div className={styles.absolute_item}>
                <AnimateHeight show={showDropdown}>
                    <div className={styles.categories_wrappper}>
                       <div className={styles.bottom_top_border}>
                            <InputCommon 
                            padding='15px 20px 15px 50px'
                            borderRadius='0px'
                            boxShadowNone={true}
                            width='100%'
                            callback={() => {}} placeholder='Search' icon={<AppColor.search fill={AppColor.text} width={'16px'} height={'16px'}/>}/>
                       </div>
                       <SizeBox height='15px'/>
                        
                        {categories.map(item =>
                            <div>
                                <div style={{paddingLeft: '20px',paddingBottom: '15px'}}>
                                <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{item.title}</Typography>
                                </div>
                                {item.items.map(subItem =>
                                  <div className={`${styles.sub_item} cursor`} onClick={() => {setSelectedCategory([item.title,subItem]);setShowDropdown(false)}}>
                                    <Typography variant='body4'>{subItem}</Typography>
                                  </div>  
                                )}
                            </div>    
                        )}
    
                    </div>
                </AnimateHeight>
            </div>
        </div>
    )
}
export default AddPost;