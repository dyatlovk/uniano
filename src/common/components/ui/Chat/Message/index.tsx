
import AppColor from '@common/styles/variables-static';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';
import UserAvatar from '../../UserAvatar';
import { fakeUserConstant } from '@common/models/user';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ThreeLinesPopUpCustom } from '../../ThreeLinesPopUp';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import DynamicPadding from '../../DynamicPadding';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';

export type MessageProps = {
    side: 'right' | 'left';
    backgroundColor?: string;
    text: string;
    time: string;
}
const MessageItem = ({backgroundColor,side,text,time}:MessageProps) => {

    const borderStyle = side == 'left' ?
    {
        borderTopLeftRadius: '0px'
    } :
    {
        borderTopRightRadius: '0px'
    }
    return (
      <div className={styles.wrapper_top}>
        {side == 'left' && <AppColor.threePoints />}
          <div style={{alignItems: side == 'left' ? 'start' : 'end'}} className={styles.message_flex}>
            <Typography color={AppColor.transparentBlack} variant='body5'>{time}</Typography>
            <div style={{...borderStyle,backgroundColor: backgroundColor}} className={styles.message_item}>
               <Typography variant='body4'>{text}</Typography>
            </div>
          </div>
          {side == 'right' && <AppColor.threePoints />}
      </div>
    );
};

export const MessageItemUser = ({backgroundColor,side,text,time}:MessageProps) => {

  const borderStyle = side == 'left' ?
  {
      borderTopLeftRadius: '0px'
  } :
  {
      borderTopRightRadius: '0px'
  }
  return (
    <div className={styles.wrapper_top}>
      {side == 'left' && <ColumnDetails role='Another' />}
        <div style={{alignItems: side == 'left' ? 'start' : 'end'}} className={styles.message_flex}>
          <div className='gap_10' style={{alignItems: 'end'}}>
          {side == 'right' && <Typography color={AppColor.transparentBlack} variant='body5'>{time}</Typography>}
            {side == 'left'
            ? <div className='gap_5'>
            <AppColor.UkraineFlagIcon />
            <Typography fontWeight='500' variant='body5'>John Doe</Typography>
          </div>
          :<div className='gap_5'>
             <Typography fontWeight='500' variant='body5'>John Doe</Typography>
          <AppColor.UkraineFlagIcon />
         
        </div>}
            {side == 'left' && <Typography color={AppColor.transparentBlack} variant='body5'>{time}</Typography>}</div>
          <div style={{...borderStyle,backgroundColor: backgroundColor}} className={styles.message_item}>
             <Typography variant='body4'>{text}</Typography>
          </div>
        </div>
        {side == 'right' && <ColumnDetails role='Me' />}
    </div>
  );
};



type ColumnDetailsProps = {
  role: "Me" | "Another";
}
const ColumnDetails = ({role}:ColumnDetailsProps) => {

  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
    {deleteModal && <ModalCenterBasic
      title='Delete Message' bottomPartPadding='30px' callbackClose={() => setDeleteModal(false)} 
    >
      <Typography variant='body4'>
      Do you want to delete this message ?
      </Typography>
      <DynamicPadding desktop='30px' mobile='20px' />
      <div className='flex_end'>
        <MyButtonTransparent onClick={() => setDeleteModal(false)} fontWeight='500' textTransform='uppercase'>
          Cancel
        </MyButtonTransparent>
        <MyButtonOrange onClick={() => setDeleteModal(false)} fontWeight='500' textTransform='uppercase'>
          Delete
        </MyButtonOrange>
      </div>
      </ModalCenterBasic>}
      <div className={styles.flex_column_details}>
          <UserAvatar variant='image' active={true} name='John Doe' url={fakeUserConstant.image} />
          <PopUpBottom 
            topPaddingFromNode='20px'
            showNode={<AppColor.threePoints className='cursor' style={{padding: '5px',boxSizing: 'content-box'}} width={'17px'} height={'3px'} />}
            showBackgroundHover={false}
            showNodeHover={<AppColor.threePointsActive className='cursor' style={{padding: '5px',boxSizing: 'content-box'}} width={'17px'} height={'3px'} />}
            popUpNode={
              <ThreeLinesPopUpCustom
                
                items={
                  role == "Me"
                  ? [
                    {
                      icon: <AppColor.reply />,
                      title: 'Reply',
                    },
                    {
                      icon: <AppColor.edit fill={AppColor.text} />,
                      title: 'Edit',
                    },
                    {
                      icon: <AppColor.close fill={AppColor.red} />,
                      title: 'Delete',
                      color: AppColor.red,
                      onClick: () => setDeleteModal(true)
                    }
                  ] :
                  [
                    {
                      icon: <AppColor.report />,
                      title: 'Report',
                    },
                    {
                      icon: <AppColor.reply />,
                      title: 'Reply',
                    },
                  ]
                }
              />
            }
          />
      </div>
    </>
  )
}
export default MessageItem;