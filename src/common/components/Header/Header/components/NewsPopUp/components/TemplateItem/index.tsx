
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import SizeBox from '@common/components/ui/SizeBox/index';

const TemplateItem = () => {

     const [editText,setEditText] = useState('');
     const [showEditModal,setShowEditModal] = useState(false);

    return (
      <div className={`${styles.template_wrapper} cursor`}>
          {
               showEditModal && <ModalCenterBasic desktopMinWidth='360px' bottomPartPadding='30px' callbackClose={() => {setShowEditModal(false)}}
               title='Edit portfolio'
               >
               <InputCommon maxSymbolCount={18} callback={(item) => {setEditText(item)}} placeholder='' padding='15px 20px' width='100%'/>
               <SizeBox height='5px' />
               <div className='flex_end'>
                    <Typography variant='body5' color={AppColor.transparentBlack}>{editText.length} / 18</Typography>
               </div>
               <DynamicPadding desktop='20px' mobile='15px' />
               <div className='flex_end'>
                    <MyButtonTransparent fontWeight='500' textTransform='uppercase' onClick={() => {setShowEditModal(false)}}>Cancel</MyButtonTransparent>
                    <MyButtonOrange fontWeight='500' textTransform='uppercase' onClick={() => {setShowEditModal(false)}}>Edit</MyButtonOrange>
               </div>
               </ModalCenterBasic>
          }
           <AppColor.template height={'35px'} width={'35px'} />
           <div className={styles.flex_column}>
                <Typography variant='body4' fontWeight='500'>Design portfolio</Typography>
                <Typography variant='body5'><span className={styles.hover_text} >Saved </span><span className={styles.hover_text} >• 16 Oct 2023 13:15</span></Typography>
           </div>
           <div style={{marginLeft: 'auto',alignSelf: 'center'}} className='gap_5'>
                <AppColor.edit className='cursor' onClick={() => {setShowEditModal(true)}}  fill={AppColor.text} height={'15px'}/>
                <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red}/>
           </div>
      </div>
    );
};

export default TemplateItem;