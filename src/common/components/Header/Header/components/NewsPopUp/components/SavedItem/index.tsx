
import UserAvatar from '@common/components/ui/UserAvatar/index';
import styles from './style.module.scss';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import { useState } from 'react';
import SizeBox from '@common/components/ui/SizeBox/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ModalCenter from '@common/components/ModalPopUps/ModalCenter/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import MessageItem from '@common/components/ui/Chat/Message/index';
import MessagesDisplay from '@common/components/ui/Chat/MessagesDisplay/index';
import InputBarChat from '@common/components/ui/Chat/InputBar/index';
import UserListSelect from '@common/components/ui/UserListSelect/index';

type SavedItemProps = {
    text?: string;
    callback: (item:number) => void;
    activeOpenFilter: number;
    index: number;
}

const listFilters = [
    'No list','My services','Freelancers','My partners'
]
const SavedItem = ({text,activeOpenFilter,callback,index}:SavedItemProps) => {

    const [listFilter,setListFilter] = useState('My freelancers');
    const [showModal,setShowModal] = useState(false);

    const [modalEdit,setModalEdit] = useState(false);


    const handleClose = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setShowModal(prev => !prev)
    }

    return (
      <div className={styles.saved_wrapper}>
        {modalEdit && 
            <ModalCenter onClickHandler={() => {setModalEdit(false)}}>
                <div className='modal_wrapper_item'>
                    <div style={{padding: '20px'}} className='flex_space_between'>
                        <div className='gap_20'>
                            <Typography variant='body3' fontWeight='500'>
                            Note about freelancer
                            </Typography>
                            <UserListSelect index={index} activeFilterIndex={activeOpenFilter} callback={callback} />
                        </div>
                        <div className='cursor' onClick={() => {setModalEdit(false)}}>
                        <AppColor.close width={'17px'} height={'17px'} fill={AppColor.text}/>
                        </div>
                    </div>
                    <HorizontalLine />
                    <div style={{padding: '30px',maxHeight: '100%',overflowY: 'auto'}}>
                            <MessagesDisplay
                                maxHeight='60vh'
                                selectBox={true}
                                messageColorLeft='#FFF7E9'
                                messageColorRight='#DDEAEF'
                                note={true}
                                messages={[
                                    {
                                        side:'right',
                                        text:'My fear of stairs is escalating',
                                        time:'08:21',
                                    },
                                    {
                                        side:'right',
                                        text:'My fear of stairs is escalating. Another text is just for example to shw',
                                        time:'08:21',
                                    },
                                    {
                                        side:'right',
                                        text:'Another text is just for example to shw',
                                        time:'08:21',
                                    },
                                    {
                                        side:'right',
                                        text:'Another text is just for example to shw. My fear of stairs is escalating. ',
                                        time:'08:21',
                                    },
                                   
                                ]}
                            />

                            <DynamicPadding desktop='30px' mobile='20px'/>

                            <InputBarChat />
                    
                    </div>
                </div>
            </ModalCenter>}
           <div className={styles.saved_flex}>
             
                <UserListSelect index={index} callback={callback} activeFilterIndex={activeOpenFilter} />
       
               <div className={styles.icons_grid}>
                    <div className={styles.icon_border}>
                        <AppColor.message fill={AppColor.text} />
                    </div>
                    <div onClick={() => {setModalEdit(true)}} className={`${styles.icon_border} cursor`}>
                        <AppColor.edit fill={AppColor.text} />
                    </div>
                    <div className={styles.icon_border}>
                        <AppColor.heart fill={AppColor.orange} />
                    </div>
               </div>
           </div>
           <SizeBox height='10px'/>
           {text && <Typography variant='body5'>{text}</Typography>}
      </div>
    );
};

export default SavedItem;