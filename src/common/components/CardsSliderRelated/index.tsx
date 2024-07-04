
import FilterList, { FilterListBig } from '../FilterList';
import CardStatisticTest from '../cards/CardStatistics/variants/CardStatisticTest';
import Slider from '../ui/Slider/Slider';
import styles from './style.module.scss';
import DynamicPadding from '../ui/DynamicPadding';
import ButtonChooseList from '../ButtonChooseList';
import { fakeUserConstant, userModel } from '@common/models/user';
import Typography from '../ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { levelMap } from '../Footer/Footer';
import test1 from '@assets/images/test1.png'
import SizeBox from '../ui/SizeBox';
const CardsSliderRelated = ({secondSlider=false}: {secondSlider?:boolean}) => {

    return (
    <div>
      <DynamicPadding />
        <div className={styles.wrapper}>
             <div className={styles.content}>
                 <div style={{display: 'flex'}}>
                  <SizeBox width='50px'/>
                   <div style={{flexGrow: '1'}}>
                      <FilterListBig
                        activeStartItem='Related'
                        orangeText='History'
                        filters={['Related', 'Partnership', 'Projects', 'History']}
                      />
                   </div>
                   <SizeBox width='50px'/>
                 </div>
                 <DynamicPadding desktop='20px' mobile='10px'/>
                   <Slider showDots={true} padding='0px 40px' maxShowCount={4} swiper={true} paddingBottom='10px' paddingTop='20px' elementsCount={10} itemWidth={250} gap={40}>
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                  </Slider>
                 {secondSlider &&
                 <>
                   <DynamicPadding />
                  <FilterListBig
                      activeStartItem='Suitable'
                      orangeText='Services'
                      filters={['Suitable', 'Services', 'Freelancers']}
                    />
                  <DynamicPadding desktop='30px' mobile='20px'/>
                  <ButtonChooseList buttons={['Web Development', 'Web Design', 'IT Support']} buttonPadding='5px 13px' callback={() => {}}
                    gap='0px' initValue='Web Development'/>
                    <Slider swiper={true} paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250}  gap={20}>
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                      <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    </Slider>
                 </>}
             </div>

        </div>
    </div>
    );
};

type SliderItemProps = {
  user: userModel;
  text: string;
  lvl: 1 | 2 | 3 | 4 | 5
  priceFrom: string;
  priceWithoutDiscount: string
}
const SliderItem = ({lvl,priceFrom,priceWithoutDiscount,text,user}:SliderItemProps) => {
  const levelIcon = levelMap[lvl];

  return (
    <div className={styles.slider_wrapper_item}>
      <img className={styles.absolute_image} src={test1} alt="" />
      <div className={styles.absolute_shadow}></div>
      <div className='gap_10'>
        <img src={user.image} height={'38px'} alt="" />
        <Typography variant='body5' fontWeight='500' color='white'>{text}</Typography>
      </div>
      <div className='gap_5'>
        {levelIcon}
        <div style={{display: 'flex',gap: '5px'}}> 
          <Typography variant='body5' color='white' fontWeight='500'>from ${priceFrom}</Typography>
          <Typography variant='body5' color={AppColor.grey} textDecoration='line-through' fontWeight='500'>{priceWithoutDiscount}</Typography> 
        </div>
        <div style={{marginLeft: 'auto'}}><AppColor.hearPlus fill='white' /></div>
      </div>
    </div>
  )
}

export const CardsSliderParticipates = ({secondSlider=false}: {secondSlider?:boolean}) => {

  return (
  <div>
    <DynamicPadding />
   
     
               <div style={{display: 'flex'}}>
       
                 <div style={{flexGrow: '1'}}>
                    <FilterListBig
                      activeStartItem='Services Participated'
                      orangeText='History'
                      filters={['Services Participated']}
                    />
                 </div>
            
               </div>
               <DynamicPadding desktop='20px' mobile='10px'/>
                 <Slider showDots={true} removeButtons={true} padding='0px 0px' maxShowCount={4} swiper={true} paddingBottom='10px' paddingTop='20px' elementsCount={10} itemWidth={250} gap={40}>
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                    <CardStatisticTest />
                </Slider>
               {secondSlider &&
               <>
                 <DynamicPadding />
                <FilterListBig
                    activeStartItem='Suitable'
                    orangeText='Services'
                    filters={['Suitable', 'Services', 'Freelancers']}
                  />
                <DynamicPadding desktop='30px' mobile='20px'/>
                <ButtonChooseList buttons={['Web Development', 'Web Design', 'IT Support']} buttonPadding='5px 13px' callback={() => {}}
                  gap='0px' initValue='Web Development'/>
                  <Slider swiper={true} paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250}  gap={20}>
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                    <SliderItem lvl={1} priceFrom='5' priceWithoutDiscount='15' text='Professional business logo with copyrights ' user={fakeUserConstant} />
                  </Slider>
               </>}


  </div>
  );
};

export default CardsSliderRelated;