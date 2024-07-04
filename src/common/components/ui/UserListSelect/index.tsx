
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../Lines/HorizontalLine';
import Typography from '../Typography/Typography';
import UserAvatar from '../UserAvatar';
import styles from './style.module.scss';
import { useState } from 'react';
import ModalCenter from '../../ModalPopUps/ModalCenter';
import InputCommon from '../inputs/InputCommon';
import SizeBox from '../SizeBox';
import MyButtonTransparent from '../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../MyButton/variants/MyButtonOrange';
import DynamicPadding from '../DynamicPadding';


const UserListSelect = ({activeFilterIndex,callback,index}) => {
    const [listFilter,setListFilter] = useState('My freelancers');
    const [listFilters,setListFilters] = useState([
        'No list','My services','Freelancers','My partners'
    ]);

    const handleClose = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        if(activeFilterIndex == index){
            callback(0);
        } else {
            callback(index);
        }
    }

    const [showAddModal,setShowAddModal] = useState(false);

    const [newListName,setNewListName] = useState('');

    return (
        <div className='gap_10' style={{alignItems: 'stretch'}}>
                {showAddModal && <ModalCenter onClickHandler={() => {setShowAddModal(false)}}>
                    <div className='modal_wrapper_item'>
                        <div style={{padding: '25px 30px 30px 30px'}} className='flex_space_between'>
                            <Typography variant='body3' fontWeight='500'>
                            New list name
                            </Typography>
                            <AppColor.close width={'15px'} height={'15px'} fill={AppColor.text}/>
                        </div>

                        <HorizontalLine />

                        <div className={styles.add_bottom_part}>
                            <InputCommon 
                                callback={(item) => {setNewListName(item)}}
                                placeholder='Write list name'
                                padding='15px 20px'
                                rightPadding={20}
                            />
                            <SizeBox height='10px'/>
                            <Typography variant='body4'>{newListName.length} / 18</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className='gap_5'>
                                <MyButtonTransparent textTransform='uppercase' fontWeight='500' onClick={() => {setShowAddModal(false)}}>
                                Cancel
                                </MyButtonTransparent>
                                <MyButtonOrange disabled={newListName.length > 18} textTransform='uppercase' fontWeight='500' onClick={() => {setShowAddModal(false);setListFilters(prev => [...prev,newListName])}}>
                                Create
                                </MyButtonOrange>
                            </div>
                        </div>
                    </div>
                </ModalCenter>
                }
                <UserAvatar variant='image' url={fakeUserConstant.image} active={true} name={fakeUserConstant.name}/>
                <div className={styles.flex_column}>
                    <div className='gap_5'>
                        <AppColor.UkraineFlagIcon />
                        <Typography variant='body4' fontWeight='500'>Artem M.</Typography>
                    </div>
                    <div onClick={(event) => {handleClose(event)}} className='gap_5 cursor' style={{position: 'relative'}}>
                        <Typography variant='body5' color={AppColor.transparentBlack}>
                        Users • <span style={{fontWeight: activeFilterIndex == index ? '500' : '400'}}>{listFilter}</span> 
                    
                        </Typography>
                        <div className={styles.chevrons}>
                            {activeFilterIndex == index
                            ? <AppColor.chevronTop fill={AppColor.transparentBlack}/>
                            : <AppColor.chevronBottom fill={AppColor.transparentBlack}/>}
                        </div>

                        {activeFilterIndex == index && <div className={styles.absolute_show}>
                                    <div className={styles.absolute_top}>
                                        <div onClick={() => {setShowAddModal(true)}} className={`${styles.orange_box} cursor`}>
                                            <AppColor.plus stroke='white'/>
                                        </div>
                                        <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                                        New list
                                        </Typography>
                                    </div>
                                    <HorizontalLine />
                                    <div className={styles.absolute_grid}>
                                        {listFilters.map(item => <div onClick={(event) => {setListFilter(item);handleClose(event)}} className={`${styles.absolute_item_grid} cursor`}>
                                            <Typography fontWeight={item == listFilter ? '500' : '400'} variant='body5'>{item}</Typography>
                                        </div>)}
                                    </div>
                            </div>}
                    </div>
                </div>
        </div>
    );
};

export default UserListSelect;