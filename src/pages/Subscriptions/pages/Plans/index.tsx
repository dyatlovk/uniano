
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import PageDetails from '@common/components/ui/PageDetails/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ComparisonTable from '@common/components/ComparisonTable/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useState } from 'react';
import SaleCard from './components/SaleCard';
import DropdownText from '@common/components/ui/Dropdown/DropdownText/index';
import Typography from '@common/components/ui/Typography/Typography';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import InfoBox from '@common/components/ui/InfoBox/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { Selectbox } from '@pages/Service/Service/index';
import RadioButton from '@common/components/ui/RadioButton/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';

const SubscriptionsPlans = () => {

    const [activePlan,setActivePlan] = useState('Start');

    const [addModal,setAddModal] = useState(false);

    const [radioSelection,setRadioSelection] = useState(1);

    const [name,setName] = useState('');
    const [promt,setPromt] = useState('');

    return (
      <div>
        {addModal && <ModalCenterBasic 
        desktopMinWidth='360px'
        bottomPartPadding='30px' callbackClose={() => {setAddModal(false)}} title='Add own service' prevClose={true}
        >
            <div className='gap_5'>
                <Typography variant='body3' fontWeight='500'>
                Service name
                </Typography>
                <InfoBox />    
            </div>    
            <DynamicPadding desktop='30px' mobile='20px' />
            <InputCommon padding='15px 20px' maxSymbolCount={18} callback={(item) => {setName(item)}} placeholder='Write service name' />
            <SizeBox height='5px'/>
            <div className={styles.flex_end}><Typography variant='body4' color={AppColor.transparentBlack}>{name.length} / 18</Typography></div>
            <SizeBox height='5px'/>
            <div className='gap_5'>
                <Typography variant='body3' fontWeight='500'>
                Service display type
                </Typography>
                <InfoBox />    
            </div> 

            <DynamicPadding desktop='25px' mobile='15px' />

            <RadioButton 
                text='Checkbox'
                activeSelection={radioSelection == 1}
                indexItem={1}
                callback={(item) => {setRadioSelection(item)}}
            />
            <SizeBox height='10px'/>
             <RadioButton 
                text='Text'
                activeSelection={radioSelection == 2}
                indexItem={2}
                callback={(item) => {setRadioSelection(item)}}
            />

            <DynamicPadding desktop='30px' mobile='20px' />
            <div className='gap_5'>
                <Typography variant='body3' fontWeight='500'>
                Customer prompt
                </Typography>
                <InfoBox />    
            </div> 
            <DynamicPadding desktop='30px' mobile='20px' />
            <InputCommon padding='15px 20px' callback={(item) => {setPromt(item)}} maxSymbolCount={100} placeholder='Write customer promt' />
            <SizeBox height='5px'/>
          <div className={styles.flex_end}>  <Typography variant='body4' color={AppColor.transparentBlack}>{promt.length} / 100</Typography></div>

            <DynamicPadding desktop='30px' mobile='20px' />
            <div className={styles.flex_end}>
                <MyButtonTransparent textTransform='uppercase' fontWeight='500' onClick={() => {setAddModal(false)}}>
                Cancel
                </MyButtonTransparent>
                <MyButtonOrange textTransform='uppercase' fontWeight='500' onClick={() => {setAddModal(false)}}>
                Add
                </MyButtonOrange>
            </div>

            </ModalCenterBasic>}
          <Header /> 
          <NavigationBar activePageIndex={0} currentCategoryTitle='Subscriptions' />

          <div className={styles.wrapper}>
            <PageDetails
                historyNode={<NavigationItem image={<AppColor.home/>} textList={['Subscriptions',]} />}
                pageTitle='plans'
                pageTitleIcon={<AppColor.openEye />}
                
            />
            <DynamicPadding />
            <ComparisonTable 
            switchButton={true}
                card1={
                    <SaleCard
                        filter='Start'
                        description='All the basics for start to work with your freelancer'
                        price={0}
                        isActive={activePlan == 'Start'}
                        callback={(item) => {setActivePlan(item)}}
                    />
                }
                card2={ <SaleCard
                    filter='Pro'
                    description='In case you need a little bit more from your freelancer'
                    price={39}
                    isActive={activePlan == 'Pro'}
                    callback={(item) => {setActivePlan(item)}}
                />}
                card3={<SaleCard
                    filter='Ultimate'
                    description='For teams and organizations to build business'
                    price={59}
                    isActive={activePlan == 'Ultimate'}
                    callback={(item) => {setActivePlan(item)}}
                />}

                rows={[
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Service Queue',
                        titleInfo: 'Dolor urna augue augue leo. Elit lacus mauris non in euismod amet in tristique netus.',
                    },
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Support',
                        titleInfo: '',
                    },
                    {
                        title: 'Guarantee',
                        titleInfo: '',
                        card1Text: <DropdownText 
                                        callback={() => {}}
                                        dropTitles={Array.from({ length: 34 }, (_, index) => `${index + 7} days`)}
                                          title='7 days'
                                    />,
                        card2Text: <DropdownText 
                                    callback={() => {}}
                                    dropTitles={['Unlimited', 'General', 'Higher priority']}
                                    title='Unlimited'
                                />,
                        card3Text: <DropdownText 
                        callback={() => {}}
                        dropTitles={['Unlimited', 'General', 'Higher priority']}
                        title='Unlimited'
                    />,
                    },
                    {
                        title: 'Special Groups',
                        titleInfo: '',
                        card1Text: true,
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Missions',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Leagues',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Badges',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Promo',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Consultation',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    }
                ]}
            />
            <DynamicPadding desktop='20px' mobile='10px' />
           <div onClick={() => {setAddModal(true)}}>
                <Typography style={{paddingLeft: '20px'}} className='cursor' variant='body4' color={AppColor.orange}>
                Add own service
                </Typography>
           </div>
            <AskedQuestion />
          </div>
          <Footer/>
      </div>
    );
};

export default SubscriptionsPlans;