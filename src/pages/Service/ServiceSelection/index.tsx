
import Header from '@common/components/Header/Header/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import Typography from '@common/components/ui/Typography/Typography';
import { useEffect, useState } from 'react';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import CardManager from '@common/components/cards/CardStatiscticsPartnership/variants/CardManager/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { Link } from 'react-router-dom';

const ServiceSelection = () => {
  const arrayHistory = ['Service', 'Development', 'Web Development', 'WordPress'] 
  const title = 'Logo by sample in vector in maximum quality';
  const [activeCategory,setActiveCategory] = useState('Team');
  const [itemsToshow, setItemsToShow] = useState([1,2,3])

  useEffect(() => {
    window.scrollTo({top: 0});
},[])


  return (
      <div>
      <Header />

      <NavigationBarSelection
         allItemsProgress={['Service', 'Selection','Negotiation', 'Progress', 'Completed']}
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
              <div style={{width: '100%'}}>
                  <div className='desktop'>
                    <InputCommon
                      width='100%'
                      callback={() => {}}
                      placeholder='Search'
                    />
                  </div>
                  <DynamicPadding desktop='40px' mobile='20px' />

                  <CategorySelect
                    activeCategory={activeCategory}
                    callbackCategory={(item) => {setActiveCategory(item)}}
                    title='Team'
                    count={470}
                    icon={<AppColor.teams height={'30px'}/>}
                    children={[
                      {
                        count: 172,
                        title: 'Developers'
                      },
                      {
                        count: 172,
                        title: 'Design'
                      },
                      {
                        count: 172,
                        title: 'Marketing'
                      }
                    ]}
                  />
                  <CategorySelect
                    activeCategory={activeCategory}
                    callbackCategory={(item) => {setActiveCategory(item)}}
                    title='Partnerships'
                    count={470}
                    icon={<AppColor.parthnershipTrue height={'35px'}/>}
                    children={[
                      
                    ]}
                  />
                  
                  <SizeBox height='10px' />
                  <HorizontalLine />
                  <SizeBox height='10px' />
                  <CategorySelect
                    activeCategory={activeCategory}
                    callbackCategory={(item) => {setActiveCategory(item)}}
                    title='Hired'
                    count={1}
                    icon={<AppColor.hired height={'44px'}/>}
                    children={[
                      {
                        count: 1,
                        title: 'Freelancers'
                      },
                      {
                        count: 0,
                        title: 'Managers'
                      },
                      
                    ]}
                  />

                  <div className='mobile'>
                    <SizeBox height='30px'/>
                    <InputCommon
                      callback={() => {}}
                      placeholder='Search'
                    />
                     <SizeBox height='20px'/>
                  </div>

              </div>
            }
            item2={
              <div style={{width: '100%'}}>
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

                  <DynamicPadding desktop='40px' mobile='20px' />

                  <div className={styles.cards_wrapper}>
                  {itemsToshow.map((item,index) => (
                               <div className={styles.center_card}>
                                    <CardManager
                                    links={['aCCOUNT', 'Stats', 'services', 'portfolio', 'Reviews']}
                                    switchButton={true}
                                    role='Marketing'
                                    specificIconsEnd={[
                                      <AppColor.speficChevronRight />,
                                      <AppColor.message fill={AppColor.text} />,
                                    ]}
                                    showCardManagerActions={false}
                                    tags={['Logo', 'Logo Design', 'Logo Maker', 'Logo Create']}
                                    details={[
                                      {
                                        title: 'Projects',
                                        node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>353</Typography>
                                      },
                                      {
                                        title: 'Successful Projects',
                                        node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>94%</Typography>,
                                      },
                                      {
                                        title: 'Delivery',
                                        node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>avg 2 days</Typography>
                                      },
                                      {
                                        title: 'Budget',
                                        node: <Typography textLineHeight='1' variant='body5' fontWeight='500'>avg $3 500</Typography>,
                                      }
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
        <CardsSliderRelated />
        <div className='wrapper_page'>
          <AskedQuestion />
        </div>
        <Footer />
           
      </div>
    );
};


type CategorySelectProps = {
  title: string;
  icon?: React.ReactNode;
  count: number;
  children?: CategorySelectProps[];
  activeCategory?: string;
  callbackCategory?: (item:string) => void;
}
export const CategorySelect = ({count,icon,title,children,activeCategory,callbackCategory}:CategorySelectProps) => {
  const [selectedChild,setSelectedChild] = useState('');
  
  useEffect(() => {
    if(activeCategory != title) {
      setSelectedChild('')
    }
    if(activeCategory == title && selectedChild == '' && children.length > 0) {
      setSelectedChild(children[0].title)
    }
  },[activeCategory])
  const handleChildClick = (item:string) => {
      if(activeCategory != title) {
        callbackCategory(title);
      }
      if(selectedChild != item) {
        setSelectedChild(item);
      }
  }
  const handleCategoryClick = () => {
    if(activeCategory != title) {
      callbackCategory(title);
    }
  }
  return (
    <div>
      <div onClick={handleCategoryClick} style={{backgroundColor: activeCategory == title ? AppColor.white : 'white'}} className={styles.category_select_wrapper}>
          {icon}
          <Typography variant='body4' fontWeight={activeCategory == title ? '500' : '400'}>{title} 
          <span color={activeCategory == title ? AppColor.text : AppColor.transparentBlack}>({count})</span></Typography>
          {
            children.length > 0 &&
            <div className={`mobile gap_5`}>
            <AppColor.chevronRight width={'18px'} height={'12px'} fill={AppColor.transparentBlack} />
            <Typography variant='body4' fontWeight={activeCategory == title ? '500' : '400'}>
                {selectedChild != '' ? selectedChild : children[0].title} 
                ({count})
            </Typography>
            <AppColor.chevronBottom width={'16px'} height={'7px'} fill={AppColor.text} />
          </div>
          }
      </div>
      <ul className={`${styles.category_select_children} ${styles.desktop}`}>
        {children.map(item =>
          <li style={{opacity: item.count == 0 ? 0.35 : 1,backgroundColor: item.title == selectedChild ? AppColor.white : 'white'}} onClick={() => {handleChildClick(item.title)}} className={styles.category_child}>
              <Typography variant='body4' fontWeight={selectedChild == item.title ? '500' : '400'}>• {item.title} 
              <span color={selectedChild == item.title ? AppColor.text : AppColor.transparentBlack}>({item.count})</span></Typography>
          </li>  
        )}
      </ul>
    </div>
  )
}
export default ServiceSelection;