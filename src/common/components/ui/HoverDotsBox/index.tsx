
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import { useState } from 'react';
import ModalCenterBasic from '../../ModalPopUps/ModalCenter/components/ModalCenterBasic';
import Typography from '../Typography/Typography';
import DynamicPadding from '../DynamicPadding';
import HorizontalLine from '../Lines/HorizontalLine';
import DarkBox from '../DarkBox';
import Roadmap from '../../Header/Header/components/NewsPopUp/components/Roadmap';
import SliderByRef from '../SliderByRef';
import SizeBox from '../SizeBox';
import DaysLeftTimer from '../DaysLeftTimer/DaysLeftTimer';
import PercentBar from '../PercentBar/PercentBar';
import CardsSliderRelated, { CardsSliderParticipates } from '../../CardsSliderRelated';

const HoverDotsBox = () => {

    const [showModal, setShowModal] = useState(false);

    return (
      <div onClick={() => {setShowModal(true)}} className={`${styles.wrapper_dots} cursor`}>
          {
            showModal && <ModalCenterBasic desktopMaxWidth='620px' desktopMinWidth='620px'  bottomPartPadding='0px' callbackClose={() => {setShowModal(false)}}
            title='Mission’s details'
            >

              <>
                <div style={{padding: '30px',paddingBottom: '0px'}}>
                  <div className='gap_10'>
                    <AppColor.taskCheck />
                    <div className={styles.flex_column}>
                      <div className='gap_5'>
                        <Typography variant='body4' fontWeight='500'>Entrance challenge</Typography>
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>1 of 3 completed</Typography>
                        <AppColor.subscriptions fill={AppColor.text} width={'16px'} height={'14px'}/>
                        <AppColor.repeat fill={AppColor.text} width={'16px'} height={'14px'}/>
                      </div>
                      <div className='gap_5'>
                        <Typography variant='body4' className={styles.hover_text}>A. Markevych</Typography>
                        <Typography variant='body4'>•</Typography>
                        <Typography variant='body4' className={styles.hover_text}>A. Markevych</Typography>
                        <Typography variant='body4'>•</Typography>
                        <Typography variant='body4' className={styles.hover_text}>A. Markevych</Typography>
                      </div>
                    </div>
                  </div>
  
                  <DynamicPadding desktop='30px' mobile='20px' />
                  <Typography variant='body4'>I will provide you with my professional skills for making professional  
                  plans in 2d or 3d from your own sketches, pictures or simple renovation of old plans or from your idea.</Typography>
  
                  <DynamicPadding desktop='30px' mobile='20px' />
  
                  <MiddleLineText text='Rewards' />
  
                  <DynamicPadding desktop='30px' mobile='20px' />
  
                  <div className='gap_20'>
                    <AppColor.pigBonuses className={styles.pig_bonuses} />
  
                    <div className={styles.flex_column}>
                      <Typography variant='body4' fontWeight='500'>250 Bonuses</Typography>
  
                      <Typography variant='body4'>Users holding 1-10 places will receive a Gold Reward Pack 
                      containing Navination memorabilia items. More: https://go.dmarket.com/reward-gold</Typography>
                    </div>
                  </div>  
  
                  <DynamicPadding desktop='30px' mobile='20px' />
  
                  <MiddleLineText text='purpose' />
  
                  <DynamicPadding desktop='40px' mobile='30px' />
                </div>

                <Roadmap completed={false} text='Thanks for signing up - we’re happy to have you on board! ' title='Create an account' />
                <Roadmap completed={false} text='Thanks for signing up - we’re happy to have you on board! ' title='Create an account' />
                <Roadmap completed={false} text='Thanks for signing up - we’re happy to have you on board! ' title='Create an account' />

                <DynamicPadding desktop='30px' mobile='20px' />


              </>
            </ModalCenterBasic>
          }
           <AppColor.threePoints />
      </div>
    );
};

export const HoverDotsBoxService = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => {setShowModal(true)}} className={`${styles.wrapper_dots} cursor`}>
        {
          showModal && <ModalCenterBasic desktopMaxWidth='900px' desktopMinWidth='700px'  bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}}
          title='' nodeAfterTitle={
            <div style={{maxWidth: '400px',whiteSpace: 'nowrap'}}>
              <SliderByRef 
                nodes={[
                  <div style={{width: '400px'}} className='gap_5'>
                     <SizeBox width='10px' />
                      <Typography variant='body3'>-20% sale for all packages till 13 Oct</Typography>
                      <AppColor.fire />
                      <SizeBox width='10px' />
                  </div>,
                  <div style={{width: '400px'}} className='gap_5'>
                    <SizeBox width='10px' />
                    <Typography variant='body3'>+20% sale for all packages till 13 Oct</Typography>
                    <AppColor.fire />
                    <SizeBox width='10px' />
                </div>
                ]}
              />
            </div>
          }
          >

            <>
              <Typography variant='body4'>Pixel scrolling vector figma strikethrough main list. Align style blur rectangle link share vertical. Duplicate vertical underline opacity clip pencil overflow create arrange. Select flatten figma list flatten
               bullet figjam scrolling. Overflow ipsum asset line editor fill group list. Auto star clip flatten auto opacity.</Typography>
               
               <SizeBox height='15px'/>
                <div className='flex_space_between'>
                    <div style={{display: 'flex',alignItems: 'baseline'}}>
                        <Typography variant='body3' fontWeight='500'>131</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack}>of 4000</Typography>
                    </div>
                    <Typography variant='body3' color={AppColor.orange} fontWeight='500'>22%</Typography>
                </div>
                <SizeBox height='10px'/>
                <PercentBar
                    currentPercent={35}
                    height='15px'
                />
                <DynamicPadding desktop='20px' mobile='15px'/>
  
                    <DaysLeftTimer fontWeightTextTime='500' dotsHeight='5px' dotsWidth='5px' width='65px' height='65px' borderRadius='20px' time={(new Date())}/>

                <CardsSliderParticipates />
            </>
          </ModalCenterBasic>
        }
         <AppColor.threePoints />
    </div>
  );
};


const MiddleLineText = ({text}) => {
  return (
    <div style={{position: 'relative'}}>
        <HorizontalLine />
        <div className={styles.abs_line}>
          <DarkBox text={text}/>
        </div>
    </div>
  )
}
export default HoverDotsBox;