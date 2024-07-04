import HeaderNothAuthorized, { ChooseCategory } from '@common/components/Header/Header-not-authorized/Header-not-authorized';
import styles from './style.module.scss'
import {useState,useEffect, useRef} from 'react'
import chevronDownTransparent from '@assets/svg/chevron-down-transparent.svg'
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import MyButton from '@common/components/ui/MyButton/MyButton';

import fourthBcSvg from '@assets/svg/home-page-fourth-background.svg';
import listCheckedSvg from '@assets/svg/icon-checked.svg';
import mobileImage from '@assets/images/home_background_mobile.svg';
import desktopImage from '@assets/images/home_background_desktop.svg';
import searchIcon from '@assets/svg/search-icon.svg';
import testUserImage2 from '@assets/images/test-user-image2.png';
import pointIcon from '@assets/svg/point-icon.svg';

import peoplesImage1 from '@assets/images/home-page-peoples1.png';
import peoplesImage2 from '@assets/images/home-page-peoples2.png';
import peoplesImage3 from '@assets/images/home-page-peoples3.png';
import peoplesImage4 from '@assets/images/home-page-peoples4.png';
import peoplesImage5 from '@assets/images/home-page-peoples5.png';
import peoplesImage6 from '@assets/images/home-page-peoples6.png';
import peoplesImage7 from '@assets/images/home-page-peoples7.png';
import peoplesImage8 from '@assets/images/home-page-peoples8.png';

import { AdvantagesSectionCardProps, PopularCategorysCatalogCardProps, PopularCategorysServiceCardProps, sixSectionCardProps } from './models';
import { advantanges_section_card_content, popular_categorys_content_services, six_section_cards_content } from './content';
import Slider from '@common/components/ui/Slider/Slider';
import { popular_services } from '@common/content/services';
import CardTime from '@common/components/cards/CardTime/CardTime';
import { fakeUserConstant, userModel } from '@common/models/user';
import { useGetImage } from '@common/helpers/UseGetImage';
import Footer from '@common/components/Footer/Footer';
import { useScreenSize } from '@common/helpers/useScreenSize';
import SizeBox from '@common/components/ui/SizeBox/index';
import { Link } from 'react-router-dom';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';



const popular_categorys_content:PopularCategorysCatalogCardProps[] = [
  {
    icon: <AppColor.cart height={'15px'} width={'20px'} fill={AppColor.text} />,
    activeIcon: <AppColor.cart height={'15px'} width={'20px'} fill={AppColor.white} />,
    width: 36,
    height: 28,
    title: 'Catalog',
    subtitle: 'Services',
    activeIndex: 0,
    cardIndex: 0,
  },
  {
    icon: <AppColor.orders height={'15px'} width={'20px'} />,
    activeIcon: <AppColor.ordersWhite height={'15px'} width={'20px'}/>,
    width: 27,
    height: 33,
    title: 'Catalog',
    subtitle: 'Orders',
    activeIndex: 0,
    cardIndex: 1,
  },
  {
    icon: <AppColor.caseIcon height={'15px'} width={'20px'} />,
    activeIcon: <AppColor.caseWhite height={'15px'} width={'20px'}/>,
    width: 33,
    height: 21,
    title: 'Catalog',
    subtitle: 'Sponsorships',
    activeIndex: 0,
    cardIndex: 2,
  },
];

const HomeNotAuth = () => {
  
  const [bcImageFirst, setBcImageFirst] = useState('');
  const {width,height} = useScreenSize();
  useEffect(() => {
    let imageUrl;

    if (width <= 768) {
      imageUrl = mobileImage;
    } else {
      imageUrl = desktopImage;
    }

    setBcImageFirst(imageUrl);
  }, [width]);

  const [activeFilter,setActiveFilter] = useState('Search Master');

    const divStyle = {
        backgroundImage: `url(${bcImageFirst})`,
        backgroundSize: 'contain', // You can customize these styles based on your requirements
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        width: '100%', // Set the width and height as needed
        height: '100%',
      };
    
      const fakeUser:userModel = {
        country: 'Ukraine',
        image: fakeUserConstant.image,
        name: 'Artem M.',
        roles: 'Customer',
        activeAgo: '2 days',
        lvl: '55',
        isActive: true,
        statistic: {
          comments_count: 55,
          sponsorship_count: 55,
          rating: 98,
          responses_count: 900
        }
      }
      const fakeUser2:userModel = {
        country: 'Ukraine',
        image: fakeUserConstant.image,
        name: 'Antonio L.',
        roles: 'Sponsor',
        activeAgo: '2 days',
        lvl: '55',
        isActive: true,
        statistic: {
          comments_count: 55,
          sponsorship_count: 55,
          rating: 98,
          responses_count: 900
        }
      }

      const flagImage = useGetImage(`flags/${fakeUser2.country}`,false);

      const [catalogIndex,setCatalogIndex] = useState(0);

    return (
      <div className={styles.overflow_max}>
        <div style={divStyle} className={styles.home_back_image}>
        <HeaderNothAuthorized />
            <div className={styles.wrapper}>
            <div className={styles.emptyLine}></div>
            <div className={styles.welcome_text}>
                <Typography textTransform='uppercase' textAlign={width <= 768 ? 'center' : 'start'} variant='title' color={AppColor.text}>
                    Empower Your Projects with
                   <span className={styles.welcome_text_orange_span}> Zero Commission</span>
                </Typography>
                
                <div className={styles.welcome_text_line}></div>
           </div>

           <div className={styles.input_wrapper}>
            <span className={styles.input_wrapper_search}>
              <img width={20} height={20} src={searchIcon} alt="search" />
            </span>
           
              <span className={styles.input_wrapper_search_button}>
                <Typography textLineHeight='1' style={{letterSpacing: '0.48px'}} variant='body1' color='white' textTransform='uppercase'>
                  Search
                </Typography>
              </span>
        
                <input type="text" placeholder='I’m looking for'/>
                <div className={styles.input_wrapper_absolute}>
                    <span></span>
                    <PopUpBottom 
                    activeFilter={activeFilter}
                      
                  topPaddingFromNode='8px'
                  popUpNode={
                    <ThreeLinesPopUpCustom

                      items={[
                        {
                          icon: <AppColor.search height={'15px'} width={'20px'} />,
                          title: 'Search Master',
                          color: activeFilter == 'Search Master' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Search Master' ? '500' : '400',
                          onClick: () => {setActiveFilter('Search Master')}
                        },
                        {
                          icon: <AppColor.cart height={'15px'} width={'20px'} fill={AppColor.text} />,
                          title: 'Services Catalog',
                          color: activeFilter == 'Services Catalog' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Services Catalog' ? '500' : '400',
                          onClick: () => {setActiveFilter('Services Catalog')}
                        },
                        {
                          icon: <AppColor.orders height={'15px'} width={'20px'} />,
                          title: 'Create Order',
                          color: activeFilter == 'Create Order' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Create Order' ? '500' : '400',
                          onClick: () => {setActiveFilter('Create Order')}
                        },
                        {
                          icon: <AppColor.caseIcon height={'15px'} width={'20px'} />,
                          title: 'Sponsorships Catalog',
                          color: activeFilter == 'Sponsorships Catalog' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Sponsorships Catalog' ? '500' : '400',
                          onClick: () => {setActiveFilter('Sponsorships Catalog')}
                        },
                        {
                          icon: <AppColor.freelancer height={'15px'} width={'20px'} />,
                          title: 'Freelancers Catalog',
                          color: activeFilter == 'Freelancers Catalog' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Freelancers Catalog' ? '500' : '400',
                          onClick: () => {setActiveFilter('Freelancers Catalog')}
                        },
                        {
                          icon: <AppColor.managers height={'15px'} width={'20px'} />,
                          title: 'Contact Managers',
                          color: activeFilter == 'Contact Managers' ? AppColor.text : AppColor.transparentBlack,
                          fontWeight: activeFilter == 'Contact Managers' ? '500' : '400',
                          onClick: () => {setActiveFilter('Contact Managers')}
                        }
                      ]}
                    />
                  }

                    />
                </div>
           </div>

          
              <span className={styles.welcome_button}>
              <MyButton 
              color={AppColor.orange}
              textColor='white'
              border='none'
              borderHover='none'
              width='296px'
              textTransform='uppercase'
              onClick={() => {}}>
                      Search
              </MyButton>
             </span>
      
          <span className={styles.welcome_text_bottom}>
           <Typography variant='body1' fontWeight='400'>
           Explore a world of possibilities! Choose the perfect fit for your projects
           </Typography>
           </span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <DynamicPadding desktop='80px' mobile='30px'/>
        <section className={styles.advantanges_section}>
          <Typography textTransform='uppercase' variant='titleSmall' color={AppColor.orange}>
            One Account, <span className={styles.advantanges_section_title_grey}>Four Distinct Roles</span>       
          </Typography>

          <div className={styles.advantanges_section_subtitle}>
            <Typography textAlign='center' variant='body4' color={AppColor.transparentBlack}>
              Explore endless opportunities with our unified account for all user types
            </Typography>
          </div>

          <DynamicPadding />

          <div className={styles.advantanges_section_cards}>
            {advantanges_section_card_content.map(item => <AdvantangesSectionCard img={item.img} description={item.description} title={item.title}/>)}
          </div>
        </section>
      </div>
      <div className={styles.popular_categorys_wawe}>
          <div className={styles.wawe}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
              </svg>
          </div>
          <div className={styles.wrapper}>

          
          <section className={styles.popular_categorys}>
            <Typography textAlign={width <= 768 ? 'center' : 'start'} textTransform='uppercase' variant='titleSmall'>
              Explore Popular <span className={styles.popular_categorys_title_orange}>Categories</span> in Demand
            </Typography>

            <div className={styles.popular_categorys_subtitle}>
              <Typography textAlign='center' variant='body4' color={AppColor.transparentBlack}>
                Browse services, orders, and sponsorships - unlock the path to success!
              </Typography>
            </div>

            <DynamicPadding desktop='0px' mobile='30px'/>

            <div style={{width: '260px'}} className='mobile'>
            <ChooseCategory />
            </div>
            <DynamicPadding desktop='0px' mobile='30px' />
            {
              width <= AppColor.tabletSize
            ? <div></div>
              :
            <div className={styles.popular_categorys_categorysDisplay}>
                {popular_categorys_content.map((item,index) => <PopularCategorysCatalogCard 
                callback={(item) => {setCatalogIndex(index)}}
                activeIndex={catalogIndex} 
                cardIndex={index} 
                height={item.height} 
                activeIcon={item.activeIcon}
                icon={item.icon}
                subtitle={item.subtitle}
                title={item.title}
                width={item.width}
                />)}
            </div>
            }

            <DynamicPadding mobile='0px' desktop='50px'/>
            <div  className={styles.popular_categorys_slider}>
            <Slider maxShowCount={4} itemWidth={260} maxWidth={width <= AppColor.tabletSize ? 260 : 1100} elementsCount={popular_categorys_content_services.length} gap={20}>
              {popular_categorys_content_services.map(item => <PopularCategorysServiceCard img={item.img} svg={item.svg} title={item.title}/>)}
            </Slider>

            <DynamicPadding desktop='30px' mobile='20px' />
            </div>
            <div className={styles.popular_categorys_buttons}>
           
              <MyButton textTransform='uppercase' onClick={() => {}} fontWeight="500">
              Browse all services
              </MyButton>
              <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                Create own service
                </MyButtonTransparent>
            </div>
            <div className={styles.popular_categorys_skills}>
              <div className={styles.popular_categorys_skills_title}>
                <Typography variant='body3'>
                Popular Skills
                </Typography>
              </div>
              <section className={styles.popular_categorys_skills_list}>
                {popular_services.map(service =>
                  <Link to={'/service/all'}>
                     <div className={`${styles.hover_text_popular} cursor`}>
                    <Typography title={service} className={styles.hover_text_item} variant='body4'>{service}</Typography>
                    </div>
                  </Link>
                  
                  )}
              </section>
              <DynamicPadding desktop='0px' mobile='30px'/>
              <div className={styles.popular_categorys_buttons_mobile}>
           
              <MyButton onClick={() => {}} textTransform='uppercase' fontWeight="500">
              Browse all services
              </MyButton>
              <MyButton
                border="1px solid transparent"
                color="transparent"
                textColor={AppColor.text}
                hoverColor="transparent"
                hoverTextColor={AppColor.orange}
                fontWeight="500"
                onClick={() => {}}
                textTransform='uppercase'
                >
                Create own service
              </MyButton>
            </div>
            </div>
          </section>
          </div>
        </div>
        <DynamicPadding desktop='80px' mobile='30px'/>
        <div className={`${styles.wrapper} ${styles.margin_top_slider}`}>
        <section className={styles.fourth_screen}>
            <div className={styles.fourth_screen_shell}>
              <div className={styles.fourth_screen_slider}>
                <img className={styles.fourth_screen_bc_image} src={fourthBcSvg} alt="" />
              <Slider
              buttonLeft='-60px'
              buttonRight='-55px'
              maxShowCount={2} paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250} maxWidth={width <= AppColor.tabletSize ? 250 : 540} gap={40}>
                <CardTime 
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]}
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]} 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]} 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]} 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]} 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
                <CardTime 
                topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]} 
                title='Logo by sample in vector in maximum quality' 
                currentMoneyRange={500} totalMoneyRange={5000} 
                date={new Date('2023-01-01T12:00:00')}
                tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                user={fakeUser}
                />
              </Slider>
              </div>
              
              <div className={styles.fourth_screen_text}>
             
                  <Typography variant='titleSmall' color={AppColor.orange} textTransform='uppercase'>
                    Ignite <span className={styles.fourth_screen_text_grey}>Change Together</span>
                  </Typography>
  
                  <div className={styles.fourth_screen_text_margin_top}>
                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                    Explore featured campaigns and contribute to projects that resonate with you
                    </Typography>
                
                </div>

                <div className={styles.fourth_screen_details_none_mobile}>
                  <ul className={styles.fourth_screen_list_ul}>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Innovation:</span> Support groundbreaking projects and be part of their success story.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Engagement:</span> Connect with creators, exchange ideas, and collaborate on unique ventures.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Exclusive Rewards:</span> Enjoy special perks, from early access to products to recognition for your contribution.
                      </Typography>
                    </li>
                  </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    color={AppColor.orange}
                    textColor='white'
                    hoverColor='transparent'
                    hoverTextColor={AppColor.orange}
                    onClick={() => {}} textTransform='uppercase'>
                    try sponsorship
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      Create own service
                    </MyButton>
                  </div>
                </div>
              </div>  
              <div className={styles.fourth_screen_sponsor_wrapper}>
                <DynamicPadding desktop='50px' mobile='30px' side='right' />
                <div className={styles.fourth_screen_sponsor_wrapper}>
                  <img width={38} height={38} src={testUserImage2} alt="userImage" />
                
                  <div className={styles.fourth_screen_details_wrapper}>
                    <div>
                    <img width={16} height={13} src={flagImage} alt="" />
                    <span className={styles.fourth_screen_inline_text}>
                      <Typography variant='body4'>
                      <span style={{color:'transparent'}}>a</span>
                        <span style={{fontWeight: '500'}} className='underline_appearance'>{fakeUser2.name}</span>
                        <span style={{color:'transparent'}}>a</span>
                        sponsored $2 500 in 
                        <span style={{color:'transparent'}}>a</span>
                        <span style={{fontWeight: '500'}} className='underline_appearance'>GameWithMe launch </span>
                      </Typography>
                    </span>
                    </div>
                    <Typography variant='body4' color={AppColor.transparentBlack}>
                      2 hours ago
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.fourth_screen_details_none_desktop}>
                  <ul className={styles.fourth_screen_list_ul}>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Innovation:</span> Support groundbreaking projects and be part of their success story.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Engagement:</span> Connect with creators, exchange ideas, and collaborate on unique ventures.
                      </Typography>
                      <SizeBox height='5px'/>
                    </li>
                    <li style={{listStyleImage: `url(${listCheckedSvg})`}}>
                      <Typography variant='body4' fontWeight='400'>
                      <span className={styles.fourth_screen_list_bold_text}>Exclusive Rewards:</span> Enjoy special perks, from early access to products to recognition for your contribution.
                      </Typography>
                    </li>
                  </ul>
                  <div className={styles.fourth_screen_buttons} style={{gap: '5px'}}>
                    <MyButton
                    color={AppColor.orange}
                    textColor='white'
                    hoverColor='transparent'
                    hoverTextColor={AppColor.orange}
                    width='210px'
                    onClick={() => {}} textTransform='uppercase'>
                    try sponsorship
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      Create own service
                    </MyButton>
                  </div>
                </div>
            </div>
          </section>
        </div>
        <DynamicPadding desktop='80px' mobile='30px'/>
        <div className={styles.fifth_section_background}>
          <div className={styles.wrapper}>
          <section className={styles.fifth_sectin_wrapper}>
          <div className={styles.fifth_sectin_wrapper_flex}>
            <div className={styles.fifth_sectin_wrapper_details_wrapper}>
              <div className='center_mobile_text'>
                <Typography variant='titleSmall' textTransform='uppercase'>
                  Elevate Projects with Professional <span style={{color: AppColor.orange}}>Management</span>
                </Typography>
              </div>
              <span className={`${styles.fifth_sectin_details_text_margin} center_mobile_text`}>
              <Typography variant='body4' color={AppColor.transparentBlack}>
                Experience the advantages of being a manager on our platform
              </Typography>
              </span>
              <div className={styles.fourth_screen_details_none_mobile}>
                <ul className={styles.fourth_screen_list_ul}>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Strategic Alliances:</span> Establish lucrative partnerships with freelancers, earning a portion of project revenues for introducing clients or contributing to project success. 
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Project Facilitation:</span> Guide clients through the project journey, ensuring a smooth experience and optimal utilization of our platform.
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Expert Advisory:</span> Offer valuable advice to users, covering platform usage, project execution, and leveraging our services for maximum impact.
                    </Typography>
                  </li>
                </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    width='210px'
                    textSize='14px'
                    onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                    contact managers
                    </MyButton>
                    <MyButton
                    textSize='14px'
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      View partnerships
                    </MyButton>
                  </div>
                </div>
            </div>
            
            <div className={styles.fourth_screen_details_none_desktop}>
                <ul className={styles.fourth_screen_list_ul}>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Strategic Alliances:</span> Establish lucrative partnerships with freelancers, earning a portion of project revenues for introducing clients or contributing to project success. 
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Project Facilitation:</span> Guide clients through the project journey, ensuring a smooth experience and optimal utilization of our platform.
                    </Typography>
                    <SizeBox height='5px'/>
                  </li>
                  <li style={{listStyleImage: `url(${pointIcon})`}}>
                    <Typography variant='body4' fontWeight='400'>
                    <span className={styles.fourth_screen_list_bold_text}>Expert Advisory:</span> Offer valuable advice to users, covering platform usage, project execution, and leveraging our services for maximum impact.
                    </Typography>
                  </li>
                </ul>
                  <div className={styles.fourth_screen_buttons}>
                    <MyButton
                    onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                    contact managers
                    </MyButton>
                    <MyButton
                      border="1px solid transparent"
                      color="transparent"
                      textColor={AppColor.text}
                      hoverColor="transparent"
                      hoverTextColor={AppColor.orange}
                      textTransform='uppercase'
                      fontWeight="500"
                      onClick={() => {}}>
                      View partnerships
                    </MyButton>
                  </div>
                </div>
                <div className={styles.fifth_section_images_wrapper}>
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage1} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage2} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage3} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage4} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage5} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage6} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage7} alt="image" />
                  <img width={width <= AppColor.tabletSize ? 61 : 112} height={width <= AppColor.tabletSize ? 61 : 112} src={peoplesImage8} alt="image" />
                </div>
                <div>

                </div>
            </div>
          </section>
          </div>
        </div>
        <DynamicPadding desktop='80px' mobile='30px'/>
        <div className={styles.wrapper}>

          
   
              <ResponsiveLayoutTwo
                gap='80px'
                item1MaxWidth='730px'
                item2MaxWidth='380px'
                orderItem1Desktop={0}
                orderItem1Mobile={1}
                orderItem2Desktop={1}
                orderItem2Mobile={0}
                item1={
                  <div>
                    <div style={{paddingBottom: '5px'}} className={styles.six_section_cards_wrapper}>
                    {six_section_cards_content.map((item,index) => 
                    <div className={styles.center_card}>
                      <SixSectionCard index={index} 
                      title={item.title} description={item.description} image={item.image}/>
                    </div>
                    )}
                  </div>
                  <DynamicPadding desktop='0px' mobile='30px' />
                 <div className='mobile justify_center'>
                    
                    <MyButtonOrange textTransform='uppercase' onClick={() => {}} >
                    join us now
                    </MyButtonOrange>
                 </div>
                  </div>
                }
                item2={
                 <div className='responsive_layout_child'>
                    <div className={styles.six_section_details}>
                      <Typography variant='titleSmall' textTransform='uppercase'>
                        <span style={{color: AppColor.orange}}>Unveiling</span> More Features
                      </Typography>
                    <div className='center_mobile_text'>
                        <span className={styles.six_section_details_span}>
                        <Typography variant='body4' color={AppColor.transparentBlack}>
                        Unlock your projects' complete potential. Explore the extra benefits we offer
                        </Typography>
                        </span>
                    </div>
                    <div className='desktop'>
                        <MyButton
                        color={AppColor.orange}
                        textColor='white'
                        hoverColor='transparent'
                        hoverTextColor={AppColor.orange}
                        onClick={() => {}} textTransform='uppercase'>
                          join us now
                        </MyButton>
                    </div>
                </div>
                 </div>
                }
              />
             
        </div>
        <Footer />
      </div>
    );
};


type PopUpBottomProps = {
  popUpNode: React.ReactNode;
  topPaddingFromNode?: string;
  showBackgroundHover?: boolean;
  positionRight?: string;
  activeFilter: string;
}
const PopUpBottom = ({popUpNode,topPaddingFromNode,activeFilter,positionRight=''}:PopUpBottomProps) => {

  const [show,setShow] = useState(false);

  const nodeRef = useRef(null);
  useEffect(() => {
  const handleOutsideClick = (event: MouseEvent) => {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.closest('.overlay_prevent_close')) return;  //ignore overlay modal and modals children

    
    if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setShow(false);
        
    } else {
        
        
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
  }, []);


  const currentColor = show ? AppColor.text : AppColor.transparentBlack;

  const handleClick = () => {
    setShow(prev => !prev);console.log('cliclk');
  }

  return (
  <div  ref={nodeRef}  style={{position:'relative'}}>
      <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',width: '130px',textAlign: 'center'}} className='cursor' onClick={handleClick} >

      <Typography variant='body1' color={currentColor}>
                          {activeFilter}
      </Typography>

      <AppColor.chevronBottom fill={currentColor} height={'10px'} width={'10px'} />
          
      </div>
      <div  style={positionRight != '' ? {
        right: positionRight,
        left: 'auto',
        transform: 'translateX(0)',
        top: `calc(100% + ${topPaddingFromNode})`,
        opacity: show ? '1' : '0',
        pointerEvents: show ? 'all' : 'none',
        display: show ? 'block' : 'none'
      } : {
        top: `calc(100% + ${topPaddingFromNode})`,
        opacity: show ? '1' : '0',
        pointerEvents: show ? 'all' : 'none',
        display: show ? 'block' : 'none'
      }} className={styles.popup_node}>
            {popUpNode}
      </div>
  </div>
  );
};

const AdvantangesSectionCard = ({img,title,description}:AdvantagesSectionCardProps) => {
  return (
    <div className={styles.advantanges_section_card_item}>
      <div ><img src={img} className={styles.image_auto}  alt="image" /></div>
      <span className={styles.advantanges_section_card_title}>
        <Typography textAlign='center' variant='body2'>
          {title}
        </Typography>
      </span>
      <span className={styles.advantanges_section_card_description}>
        <Typography textAlign='center' variant='body4'>
          {description}
        </Typography>
      </span>
    </div>
  )
}

const PopularCategorysCatalogCard = ({icon,title,subtitle,width,height,activeIndex,cardIndex,callback,activeIcon}:PopularCategorysCatalogCardProps) => {
  return (
    <div
    onClick={() => callback(cardIndex)}
    style={{backgroundColor: activeIndex == cardIndex ? AppColor.orange : AppColor.white}} className={`${styles.popular_categorys_card} cursor`}>
      {cardIndex == activeIndex ? activeIcon : icon}
      <div>
        <Typography variant='body5' color={activeIndex == cardIndex ? 'white' : AppColor.transparentBlack}>
        {title}
        </Typography>
        <Typography fontWeight='500' variant='body4' color={activeIndex == cardIndex ? 'white' : AppColor.text}>
        {subtitle}
        </Typography>
      </div>
    </div>
  );
};

const PopularCategorysServiceCard = ({img,title,svg}:PopularCategorysServiceCardProps) => {
  return (
    <div style={{}} className={styles.popular_categorys_services_card}>
      <img width={260} height={240} src={img} alt=""  className={styles.popular_categorys_card_image}/>
     <div className={styles.popular_categorys_services_card_shell}>
      
      <img src={svg} alt="svg" />
        <Typography variant='body2' color='white'>
          {title}
        </Typography>
     </div>
    </div>
  );
};


const SixSectionCard = ({title,description,image,index}: sixSectionCardProps) => {
  return (
   <div className={styles.six_section_card_wrapper}>
    {index % 2 != 0 && <div className='desktop'><SizeBox height='40px'/></div>}
      <div className={styles.six_section_card}>
        <div className={styles.six_section_card_image}>
          <img src={image} width={30} height={30} alt="icon" />
        </div>
        <Typography variant='body3'>
          {title}
        </Typography>
        <span className={styles.orange_line}></span>
        <SizeBox height='5px'/>
        <Typography variant='body1' fontWeight='400' textAlign='center'>
          {description}
        </Typography>
      </div>
   </div>
  );
};
export default HomeNotAuth;