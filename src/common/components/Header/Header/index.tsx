import Logo from '@common/components/Logo/Logo'
import AppColor from '@common/styles/variables-static'
import { useHover } from '@common/helpers/useHover'
import MenuLinks, { MenuLinksAuthorized } from '../components/MenuLinks'

import styles from './style.module.scss'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import UserAvatar from '../../ui/UserAvatar'
import HorizontalLine from '../../ui/Lines/HorizontalLine'
import DynamicPadding from '../../ui/DynamicPadding'
import { fakeUserConstant } from '@common/models/user'
import { useEffect, useRef, useState } from 'react'
import PopUpBottom from '../../ModalPopUps/PopUpBottom'
import SearchPopUp from './components/SearchPopUp'
import CreatePopUp from './components/CreatePopUp'
import NewsPopUp from './components/NewsPopUp'
import SoundPopUp from './components/SoundPopUp'
import ControllPannel from './components/ControllPannel'
import SizeBox from '../../ui/SizeBox'
import { SelectDropdown, MobileNavBar } from '../Header-not-authorized/Header-not-authorized'
import AnimateHeight from '../../AnimateHeight'

const Header = ({position='fixed',removeMaxWidth=false}: {position?: 'fixed' | 'relative',removeMaxWidth?: boolean}) => {
    const [hovered, setHovered] = useState(false);

    const [hoveredLink,setHoveredLink] = useState(3);

    const [headerVisible, setHeaderVisible] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [activeSelection,setActiveSelection] = useState('');

    const [prevSelection,setPrevSelection] = useState('');


    const handleChange = (item) => {
        if(activeSelection != '') {
        setActiveSelection('');
        setTimeout(() => {
            setActiveSelection(item);
            setPrevSelection(activeSelection);
        },400)
        } else {
        setActiveSelection(item);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setHeaderVisible(true);
          }, 0);
    }, []);

    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
      },[showModal])

    
    return (
       <>
       <div className={`${styles.header_modal_fixed} ${showModal && styles.active_modal}`}>
          <div className={styles.scroll_bar}>
            <SizeBox height="100px"/>
            <div className={styles.modal_padding}>
              <div className={styles.white_box}>
              <div className={styles.white_box_column}>
                  <PopUpBottom
                                           
                                           showNode={
                                               <div className={styles.transition_item}>
                                                   <MyButtonTransparentOrange
                                                 fontWeight="500"
                                                 padding='10px 14px'
                                                 onClick={() => {}}>
                                                 <div className={styles.button_content}>
                                                     <div className={styles.plus_box}>
                                                         
                                                         <AppColor.plus
                                                             width={'9px'}
                                                             height={'9px'}
                                                             stroke={AppColor.orange}
                                                         />
                                                     </div>
                                                     CREATE
                                                 </div>
                                             </MyButtonTransparentOrange>
                                               </div>
                                           }
                                           popUpNode={<CreatePopUp />}
                                           topPaddingFromNode='27px'
                                       />
                      <SelectDropdown 
                        activeTitle={activeSelection}
                        callback={(item) => {handleChange(item)}}
                        title="Service"
                      />
                      <SelectDropdown 
                        activeTitle={activeSelection}
                        callback={(item) => {handleChange(item)}}
                        title="Order"
                      />
                      <SelectDropdown 
                        activeTitle={activeSelection}
                        callback={(item) => {handleChange(item)}}
                        title="Partnership"
                      />
                      <SelectDropdown 
                        activeTitle={activeSelection}
                        callback={(item) => {handleChange(item)}}
                        title="Crowdfreelance"
                      /> 
                      <SelectDropdown 
                        activeTitle={activeSelection}
                        callback={(item) => {handleChange(item)}}
                        title="Users"
                      />  

                      <div className='gap_20'>
                      <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.searchOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.search height={'20px'} />
                                        }
                                        popUpNode={<SearchPopUp />}
                                        topPaddingFromNode='30px'
                                    />
                                    <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.newsOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.news fill={AppColor.text} height={'20px'} />
                                        }
                                        popUpNode={<NewsPopUp />}
                                        topPaddingFromNode='30px'
                                    />
    
                                     <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.soundOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.sound height={'20px'}/>
                                        }
                                        popUpNode={<SoundPopUp />}
                                        topPaddingFromNode='30px'
                                    />
                                    
                                    
                      </div>
              </div>
              </div>
  
              <SizeBox height="50px"/>
  
              <AnimateHeight show={activeSelection != ''}>
              <MobileNavBar removeCategory={true} callbackSelection={(item) => {handleChange(item)}} prevSelection={prevSelection} />
              </AnimateHeight>
          </div>
          </div>
        </div>
           <div>
            
            {position == 'fixed' && <DynamicPadding desktop='92px' mobile='92px'/> }
                <div  style={{opacity: headerVisible ? '1' : '0',position: position}} className={styles.fixed_header}>
                    <div style={removeMaxWidth ? {maxWidth: 'none',padding: '0px 30px'} : {}} className={styles.wrapper}>
                        <header className={styles.header}>
                            <div className={styles.header__container}>
                            <div onClick={() => {setShowModal(prev => !prev)}} style={{backgroundColor: showModal ? AppColor.orange : 'transparent'}} className={styles.hamburger__wrapper}>
                  <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
                  <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
                  <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
                </div>
                               
                                <div className={styles.header_first_part}>
                                   <span className={styles.logo}>
                                        <Logo />
                                    </span>
                                   <div className={`${styles.button_wrapper} desktop`}>
                                   <PopUpBottom
                                       
                                        showNode={
                                            <div className={styles.transition_item}>
                                                <MyButtonTransparentOrange
                                              fontWeight="500"
                                              padding='10px 14px'
                                              onClick={() => {}}>
                                              <div className={styles.button_content}>
                                                  <div className={styles.plus_box}>
                                                      
                                                      <AppColor.plus
                                                          width={'9px'}
                                                          height={'9px'}
                                                          stroke={AppColor.orange}
                                                      />
                                                  </div>
                                                  CREATE
                                              </div>
                                          </MyButtonTransparentOrange>
                                            </div>
                                        }
                                        popUpNode={<CreatePopUp />}
                                        topPaddingFromNode='27px'
                                    />
                                      
                                   </div>
                                </div>
                                <div className={styles.hamburger__wrapper_user}>
                                  
                                  <PopUpBottom
                                  positionRight='0px'
                                        showNodeHover={<div style={{opacity: '0.8'}}>
                                          <UserAvatar
                                    active={true}
                                    name='Artem M.'
                                    role='Customer'
                                    url={fakeUserConstant.image}
                                    preventMobileNone={false}
                                  />
                                  
                                        </div>}
                                        showNode={
                                            <UserAvatar
                                            active={true}
                                            name='Artem M.'
                                            role='Customer'
                                            url={fakeUserConstant.image}
                                            preventMobileNone={false}
                                          />
                                        }
                                        popUpNode={<ControllPannel />}
                                        topPaddingFromNode='30px'
                                    />
                                    
                                </div>
                                <div className={styles.header_second_part}>
                                    <li>
                                        <ul title='Service' onClick={() => {setHovered(prev => !prev)
                                        setHoveredLink(0);
                                        }}>
                                            <div title='Service'>
                                            Service
                                            </div>
                                            <AppColor.chevronBottom
                                                width={10}
                                                height={6}
                                                fill={AppColor.text}
                                            />
                                        </ul>
                                        <ul title='Order' onClick={() => {
                                             setHoveredLink(1);
                                            setHovered(prev => !prev)
                                           
                                        }}>
                                            <div title='Order'>Order</div>
                                            <AppColor.chevronBottom
                                                width={10}
                                                height={6}
                                                fill={AppColor.text}
                                            />
                                        </ul>
                                        <ul title='Partnership' onClick={() => {setHovered(prev => !prev)
                                        setHoveredLink(2);
                                        }}>
                                          <div title='Partnership'>  Partnership</div>
                                            <AppColor.chevronBottom
                                                width={10}
                                                height={6}
                                                fill={AppColor.text}
                                            />
                                        </ul>
                                        <ul title='Crowdfreelance' onClick={() => {setHovered(prev => !prev)
                                        setHoveredLink(3);
                                        }}>
                                            <div title='Crowdfreelance' >Crowdfreelance</div>
                                            <AppColor.chevronBottom
                                                width={10}
                                                height={6}
                                                fill={AppColor.text}
                                            />
                                        </ul>
                                        <ul title='Users' onClick={() => {setHovered(prev => !prev)
                                        setHoveredLink(4);
                                        }}>
                                           <div  title='Users'> Users</div>
                                            <AppColor.chevronBottom
                                                width={10}
                                                height={6}
                                                fill={AppColor.text}
                                            />
                                        </ul>
                                        
                                    </li>
                                    <div
                                        onMouseDown={(event) => {}}
                                        
                                        className={`${styles.hover_wrapper} ${
                                            hovered
                                                ? styles.active
                                                : styles.disabled
                                        }`}>
                                        <MenuLinksAuthorized hoveredLink={hoveredLink} />
                                    </div>
                                </div>
                                <div className={styles.header_third_part}>
                                    <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.searchOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.search height={'20px'} />
                                        }
                                        popUpNode={<SearchPopUp />}
                                        topPaddingFromNode='30px'
                                    />
                                    <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.newsOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.news fill={AppColor.text} height={'20px'} />
                                        }
                                        popUpNode={<NewsPopUp />}
                                        topPaddingFromNode='30px'
                                    />
    
                                     <PopUpBottom
                                        showBackgroundHover={true}
                                        showNodeHover={<AppColor.soundOrange height={'20px'} />}
                                        showNode={
                                            <AppColor.sound height={'20px'}/>
                                        }
                                        popUpNode={<SoundPopUp />}
                                        topPaddingFromNode='30px'
                                    />
                                    
                                    
                                    <PopUpBottom
                                        showNodeHover={<div style={{opacity: '0.8'}}>
                                            <UserAvatar
                                    url={fakeUserConstant.image}
                                      active={true}
                                      name='Artem M.'
                                      role='Customer'
                                    />
                                        </div>}
                                        showNode={
                                            <UserAvatar
                                                url={fakeUserConstant.image}
                                                active={true}
                                                name='Artem M.'
                                                role='Customer'
                                            />
                                        }
                                        popUpNode={<ControllPannel />}
                                        topPaddingFromNode='30px'
                                    />
                                    
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className={styles.bottom_line}>
                    <HorizontalLine />
                    </div>
                </div>
           </div>
       </>
    )
}




export default Header
