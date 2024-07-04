
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import PageDetails from '@common/components/ui/PageDetails/index';
import { developmentDropdown } from '@common/models/constants';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import Footer from '@common/components/Footer/Footer';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import CardManager from '@common/components/cards/CardStatiscticsPartnership/variants/CardManager/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import { fakeUserConstant } from '@common/models/user';
import { useEffect, useState } from 'react';
import { CategorySelect } from '@pages/Service/ServiceSelection/index';
import { SelectionItem } from '@pages/Partnership/pages/SelectionFreelancer/index';
import InfoBox from '@common/components/ui/InfoBox/index';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { Link } from 'react-router-dom';

const OrdersSelection = () => {
    const arrayHistory = ['Order', 'Development ', 'Web Development', 'WordPress'] 
    const title = 'Logo by sample in vector in maximum quality';
    const [activeSelection,setActiveSelection] = useState('New');
  const [itemsToshow, setItemsToShow] = useState([1,2,3])
  const {width,height} = useScreenSize();

  useEffect(() => {
    window.scrollTo({top: 0});
},[])
    return (
        <div>
        <Header />

        <NavigationBarSelection
         allItemsProgress={['Order', 'Selection', 'Negotiation', 'Progress', 'Completed']}
         currentItemProgress='Selection'
      />

        <div className={'wrapper_page'}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />
                <DynamicPadding desktop='30px' mobile='20px'/>
          <UserTopPageInfo settings={true} user={fakeUserConstant}/>
          <DynamicPadding />
          
          <ResponsiveLayoutTwo
            item1MaxWidth='290px'
            item2MaxWidth='830px'
            gap='80px'
            item1={
                <div>

                <div className={styles.selection_item_wrapper}>
                <SelectionItem
                                icon={<AppColor.newIcon width={'34px'} />}
                                text='New'
                                count='4'
                                color={AppColor.text}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
                             <SelectionItem
                                icon={<AppColor.shortlisted width={'34px'} />}
                                text='Shortlisted'
                                count='4'
                                color={AppColor.orange}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
                             <SelectionItem
                                icon={<AppColor.close width={'34px'} height={'32px'} fill={AppColor.red} />}
                                text='Cancelled'
                                count='0'
                                color={AppColor.red}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />

                            
                            <div className='desktop'>
                                <DynamicPadding desktop='10px' mobile='0px'/>
                                <HorizontalLine />
                                <DynamicPadding desktop='10px' mobile='0px'/>
                            </div>
                            
                             <SelectionItem
                                icon={<AppColor.hired width={'34px'} />}
                                text='Hired'
                                count='4'
                                color={AppColor.green}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
            </div>
            </div>  
            }
            item2={
              <div style={{width: '100%'}}>
                 <div className={styles.top_wrapper}>
                    <div className='desktop'><Typography variant='body4'><span style={{fontWeight: '500'}}>471</span> freelancers</Typography></div>
                      <div className={styles.filters}>
                          <div className="gap_5">
                            <AppColor.filter />
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
                          </div>
                          <div className="gap_5">
                            <AppColor.recent />
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Relevant</Typography>
                          </div>
                          <div className="gap_5">
                              <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>12</Typography>
                              <AppColor.chevronBottom fill={AppColor.transparentBlack} width={'15px'} height={'8px'} />
                          </div>
                      </div>
    
                 </div>
                  <DynamicPadding desktop='40px' mobile='20px' />

                  <div className={styles.cards_wrapper}>
                  {itemsToshow.map((item,index) => (
                               <div className={'center_card'}>
                                    <CardManager
                                    links={['aCCOUNT', 'Stats', 'services', 'portfolio', 'Reviews']}
                                    showCardManagerActions={true}
                                    position={
                                        width < 769 ? 'center' :
                                        index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'
                                    }
                                    absoluteIcons={[
                                        <AppColor.managerSettings fill='white' />,
                                        <AppColor.noteCompleted fill='white' />,
                                        <AppColor.subscriptionsWhite />,
                                        <AppColor.completed />,
                                    ]}
                                    role='Marketing'
                                    nodeAfterDetails={
                                       <div className='justify_center'>
                                            <div className='gap_10'>
                                                <div className='gap_5'>
                                                    <AppColor.moneyHummer/>
                                                    <Typography variant='body5'>$40</Typography>
                                                </div>
                                                <div className='gap_5'>
                                                    <AppColor.shield/>
                                                    <Typography variant='body5'>10 days</Typography>
                                                </div>
                                            </div>
                                       </div>
                                    }
                                    
                                    tags={['Logo', 'Logo Design', 'Logo Maker', 'Logo Create']}
                                    details={[
                                      {
                                        title: 'Price',
                                        node: <div className='gap_5'>
                                                <AppColor.fourOfFive />
                                                <Typography textLineHeight='1' variant='body5' fontWeight='500'>$5 753</Typography>
                                                <AppColor.puzle />
                                            </div>
                                      },
                                      {
                                        title: 'Delivery',
                                        node: <Typography textLineHeight='1' variant='body5' fontWeight='500'> 12 days</Typography>,
                                      },
                                      {
                                        title: 'Trust Score',
                                        node: <div className='gap_5'>
                                            
                                            <Typography textLineHeight='1' variant='body5' fontWeight='500'> 96</Typography>
                                            <InfoBox />
                                        </div>
                                      },
                                    
                                    ]}
                                    title=''
                                    user={fakeUserConstant}
                                    />
                               </div>
                            ))}

                  </div>

                  <DynamicPadding desktop='40px' mobile='20px'/>
                 <div className='justify_center'> <MyButtonBlack textTransform='uppercase' onClick={() => {setItemsToShow(prev => [...prev,1,2,3])}}>Show more +3</MyButtonBlack></div>
                  <DynamicPadding />

                  <div className="flex_space_between">
                    <Link to={'/service/'}>
                    <ChevronMoveTo onClick={() => {}} text='Step back' title='Service' variant='left' />
                    </Link>
                    <Link to={'/service/negotioation/freelancer'}>
                    <ChevronMoveTo onClick={() => {}} text='Next step' title='negotiation' variant='right' />
                    </Link>
                  </div>
              </div>
            }
          />
        </div>
        <CardsSliderRelated secondSlider={true} />
        <div className='wrapper_page'>
          <AskedQuestion />
        </div>
        <Footer />
           
      </div>
    );
};

export default OrdersSelection;