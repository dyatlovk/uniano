
import AskedQuestion from '@common/components/AskedQuestions/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import Footer from '@common/components/Footer/Footer';
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import CardStatisticPartnership from '@common/components/cards/CardStatiscticsPartnership/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DoubleRangeSlider from '@common/components/ui/DoubleRangeSlider/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import InfoBox from '@common/components/ui/InfoBox/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import NavBarLineBlack from '@common/components/ui/NavBarLineBlack/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SizeBox from '@common/components/ui/SizeBox/index';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import Typography from '@common/components/ui/Typography/Typography';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { crowdfreelancerNav, developmentDropdown } from '@common/models/constants';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import SideBarCategory from '@pages/Partnership/pages/PartnershipManager/components/SideBarCategory/index';
import SliderItem from '@pages/Partnership/pages/PartnershipManager/components/SliderItem/index';
import { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';
import minimalist from '@assets/images/minimalist.png';
import mascot from '@assets/images/mascot.png';
import freestyle from '@assets/images/freestyle.png';
import threeD from '@assets/images/threeD.png';
import CardTime from '@common/components/cards/CardTime/CardTime';
import { Link } from 'react-router-dom';
import FiltersTemplate from '@common/components/ui/FiltersTemplate/index';

const CrowdfreelanceAll = () => {
    const { width, height } = useScreenSize()
    const [tags, setTags] = useState<string[]>([])
    const [priceValue, setPriceValue] = useState<{
        min: number
        max: number
    }>({ min: 0, max: 100 })
    const [itemsToshow, setItemsToShow] = useState([])

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    
    const [skills, setSkills] = useState([
        'Logos',
        'Logo Design',
        'Logo',
        'Logo Maker',
        'Modern Logo ',
    ])
    const minValueRef = useRef(null)
    const maxValueRef = useRef(null)
    const [removedTagFromSideBar,setRemovedTagFromSideBar] = useState('');

    const [removeLastElement,setRemoveLastElement] = useState(false);

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('removeLastElement'));
        if(value === true) {
            setRemoveLastElement(true);
        }
    },[])

    useEffect(() => {
        const arrayLengthStart = width <= 768 ? 4 : 9

        setItemsToShow(
            Array.from(
                { length: arrayLengthStart },
                (a, index) => index
            )
        )
    }, [width])

    const handleAddTag = (item: string) => {
        if (!tags.includes(item)) {
            setTags((prev) => [...prev, item])
        } else {
            setTags(tags.filter((tag) => tag != item))
        }
    }

    const handleAddTagFromSideBar = (passedText?:string) => {
   
        setTags(tags.filter((tag) => tag != passedText))
        setRemovedTagFromSideBar(passedText);
      
    }

    
    const [showModalSideBar,setShowModalSideBar] = useState(false);
    return (
        <div>
            <Header />

            <NavigationBarDropdowns
                title="Crowdfreelance"
                navItems={crowdfreelancerNav}
                titleIcon={<AppColor.caseWhite />}
            />

            <div className={styles.wrapper}>
                <PageDetails
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Crowdfreelance']}
                        />
                    }
                    endNode={
                        <div className={styles.details_end_node}>
                            <MyButtonTransparentOrange
                                fontWeight="500"
                                textTransform="uppercase"
                                onClick={() => {}}>
                                All campaigns
                                <AppColor.chevronBottom
                                    fill={AppColor.orange}
                                />
                            </MyButtonTransparentOrange>
                        </div>
                    }
                    pageTitle="eCommerce"
                />

                <DynamicPadding />
                <SliderByRef
                    endToFrontIndex={4}
                    nodes={[
                        <SliderItem
                            icon={<img src={minimalist}  height={'30px'}/>}
                            text="Minimalist"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={threeD}  height={'30px'}/>}
                            text="3D"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={freestyle}  height={'30px'}/>}
                            text="Freestyle"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                            icon={<img src={mascot}  height={'30px'}/>}
                            text="Mascot"
                            onClick={handleAddTag}
                            removedTag={removedTagFromSideBar}
                            tags={tags}
                        />,
                        <SliderItem
                        icon={<img src={minimalist}  height={'30px'}/>}
                        text="Minimalist"
                        onClick={handleAddTag}
                        removedTag={removedTagFromSideBar}
                        tags={tags}
                    />,
                    <SliderItem
                        icon={<img src={threeD}  height={'30px'}/>}
                        text="3D"
                        onClick={handleAddTag}
                        removedTag={removedTagFromSideBar}
                        tags={tags}
                    />,
                    <SliderItem
                        icon={<img src={freestyle}  height={'30px'}/>}
                        text="Freestyle"
                        onClick={handleAddTag}
                        removedTag={removedTagFromSideBar}
                        tags={tags}
                    />,
                    <SliderItem
                        icon={<img src={mascot}  height={'30px'}/>}
                        text="Mascot"
                        onClick={handleAddTag}
                        removedTag={removedTagFromSideBar}
                        tags={tags}
                    />,
                    <SliderItem
                    icon={<img src={minimalist}  height={'30px'}/>}
                    text="Minimalist"
                    onClick={handleAddTag}
                    removedTag={removedTagFromSideBar}
                    tags={tags}
                />,
                <SliderItem
                    icon={<img src={threeD}  height={'30px'}/>}
                    text="3D"
                    onClick={handleAddTag}
                    removedTag={removedTagFromSideBar}
                    tags={tags}
                />,
                <SliderItem
                    icon={<img src={freestyle}  height={'30px'}/>}
                    text="Freestyle"
                    onClick={handleAddTag}
                    removedTag={removedTagFromSideBar}
                    tags={tags}
                />,
                <SliderItem
                    icon={<img src={mascot}  height={'30px'}/>}
                    text="Mascot"
                    onClick={handleAddTag}
                    removedTag={removedTagFromSideBar}
                    tags={tags}
                />,
                        
                    ]}
                />
                <DynamicPadding />

                <ResponsiveLayoutTwo
                    callbackModal={(item) => {setShowModalSideBar(item)}}
                    item1ToAModalLeftMobile={true}
                    showModal={showModalSideBar}
                    gap='80px'
                    item1MaxWidth='290px'
                    item2MaxWidth='830px'
                    item0MobileWhenModal={
                        <div style={{width: '100%'}}>
                           
                           <FiltersTemplate />

                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <InputCommon 
                                placeholder='Search'
                                callback={() => {}}
                            />
                             <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                        </div>
                    }
                    item1={
                        <FilterBlock />
                    }
                    item2={
                        <div style={{width: '100%'}}>
                             <div className={styles.justify_flex}>
                                <div className='desktop'>
                                <Typography variant="body4">
                                <span style={{fontWeight: '500'}}>11 841 </span>programs
                                </Typography>
                            </div>
                            <div className={styles.flex_center}>
                                <div onClick={() => {setShowModalSideBar(true)}} className={'gap_5 mobile'}>
                                        <AppColor.filter />
                                        <Typography
                                            variant="body4"
                                            fontWeight="500"
                                            color={
                                                AppColor.transparentBlack
                                            }
                                            textTransform="uppercase">
                                            Filters
                                        </Typography>
                                </div>
                                    <div className={'gap_5'}>
                                        <AppColor.relevant />
                                        <Typography
                                            variant="body4"
                                            fontWeight="500"
                                            color={
                                                AppColor.transparentBlack
                                            }
                                            textTransform="uppercase">
                                            Relevant
                                        </Typography>
                                </div>
                                <div>
                                    <AppColor.chevronBottom
                                        fill={AppColor.text}
                                    />
                                </div>
                            </div>
                        </div>
                        <DynamicPadding />

                        <div className={styles.cards_wrapper}>
                            {itemsToshow.map((item,index) => (
                             
                               <div className={styles.card_center}>
                                    <CardTime 
                                    setRemoveLastElementProps={setRemoveLastElement}
                                    navigateTo='/crowdfreelance/campaign'
                                    removeLastElementProps={removeLastElement}
                                    topUsers={[fakeUserConstant,fakeUserConstant,fakeUserConstant]}
                                        showBottomActions={true}
                                        title='Logo by sample in vector in maximum quality' 
                                        currentMoneyRange={500} totalMoneyRange={5000} 
                                        date={new Date('2023-01-01T12:00:00')}
                                        tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
                                        user={fakeUserConstant}

                                        />
                               </div>
                            ))}
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <MyButtonTransparentBlack
                                onClick={() => {
                                    setItemsToShow((prev) => [
                                        ...prev,
                                        1,
                                        2,
                                        3,
                                    ])
                                }}>
                                Show more +3
                            </MyButtonTransparentBlack>
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <NavBarLineBlack
                                callback={() => {}}
                                maxCountPage={100}
                            />
                        </div>
                        <DynamicPadding />
                        </div>
                    }
                />
                
            </div>
            <CardsSliderRelated />
            <div className={styles.wrapper}>
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};


export const FilterBlock = () => {
    const { width, height } = useScreenSize()
    const [tags, setTags] = useState<string[]>([])
    const [priceValue, setPriceValue] = useState<{
        min: number
        max: number
    }>({ min: 0, max: 100 })
    const [itemsToshow, setItemsToShow] = useState([])
    const [skills, setSkills] = useState([
        'Logos',
        'Logo Design',
        'Logo',
        'Logo Maker',
        'Modern Logo ',
    ])
    const minValueRef = useRef(null)
    const maxValueRef = useRef(null)
    const [removedTagFromSideBar,setRemovedTagFromSideBar] = useState('');

    useEffect(() => {
        const arrayLengthStart = width <= 768 ? 4 : 9

        setItemsToShow(
            Array.from(
                { length: arrayLengthStart },
                (a, index) => index
            )
        )
    }, [width])

    const handleAddTag = (item: string) => {
        if (!tags.includes(item)) {
            setTags((prev) => [...prev, item])
        } else {
            setTags(tags.filter((tag) => tag != item))
        }
    }

    const handleAddTagFromSideBar = (passedText?:string) => {
   
        setTags(tags.filter((tag) => tag != passedText))
        setRemovedTagFromSideBar(passedText);
      
    }
    return (
        <div style={{width: '100%'}}>
                           
                           <FiltersTemplate />
                            

                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <InputCommon 
                                placeholder='Search'
                                callback={() => {}}
                            />
                             <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <div className={styles.justify_flex}>
                                <Typography
                                    variant="body3"
                                    fontWeight="500">
                                    You chose
                                </Typography>
                               <div style={{cursor: 'pointer'}} onClick={() => {setTags([])}}>
                                  <Typography
                                      variant="body5"
                                      color={AppColor.transparentBlack}>
                                      Reset All
                                  </Typography>
                               </div>
                            </div>
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <div className={styles.skill_wrapper}>
                                {tags.map((item) => (
                                    <MyButtonTransparentOrange
                                        padding="5px 13px"
                                        onClick={() => {
                                          handleAddTagFromSideBar(item)
                                        }}>
                                        {item}{' '}
                                        <AppColor.close
                                            fill={AppColor.orange}
                                        />
                                    </MyButtonTransparentOrange>
                                ))}
                            </div>
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <SideBarCategory
                                title="Logo Style"
                                dropItems={[
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={minimalist}  height={'20px'}/>
                                        ),
                                        text: 'Minimalist',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={mascot}  height={'20px'}/>
                                        ),
                                        text: 'Mascot',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={freestyle}  height={'20px'}/>
                                        ),
                                        text: 'Freestyle',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={threeD}  height={'20px'}/>
                                        ),
                                        text: '3D',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={minimalist}  height={'20px'}/>
                                        ),
                                        text: 'Minimalist',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                          <img src={mascot}  height={'20px'}/>
                                        ),
                                        text: 'Mascot',
                                    },
                                ]}
                            />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <SideBarCategory
                                title="File Format"
                                dropItems={[
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.pngBox
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'PNG',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.jpgBox
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'JPG',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.gifBox
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'GIF',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.pdfBox
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'PDF',
                                    },
                                ]}
                            />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <SideBarCategory
                                title="Includes"
                                dropItems={[
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.code
                                                fill={AppColor.text}
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'Source File',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.vectorFiles
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'Vector FIle',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.chessBoard
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'Logo Transparency',
                                    },
                                    {
                                        count: 500,
                                        icon: (
                                            <AppColor.printer
                                                width={'20px'}
                                                height={'20px'}
                                            />
                                        ),
                                        text: 'Printable FIle',
                                    },
                                ]}
                            />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <Typography
                                variant="body3"
                                fontWeight="500">
                                Price
                            </Typography>
                            <DynamicPadding
                                desktop="40px"
                                mobile="20px"
                            />
                            <DoubleRangeSlider
                                min={0}
                                max={10000}
                                onChange={(item) => {}}
                            />
                            <DynamicPadding
                                desktop="15px"
                                mobile="0px"
                            />
                            <div className={styles.justify_flex}>
                                <input
                                    type="number"
                                    ref={minValueRef}
                                    onPaste={() => {
                                        return false
                                    }}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="min"
                                    className={styles.price_input}
                                />
                                <input
                                    type="number"
                                    ref={maxValueRef}
                                    onPaste={() => {
                                        return false
                                    }}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="max"
                                    className={styles.price_input}
                                />
                                <MyButtonBlack
                                    textTransform="uppercase"
                                    onClick={() => {
                                        setPriceValue({
                                            min: minValueRef.current
                                                .value,
                                            max: maxValueRef.current
                                                .value,
                                        })
                                    }}>
                                    OK
                                </MyButtonBlack>
                            </div>
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <HorizontalLine />
                            <DynamicPadding
                                desktop="30px"
                                mobile="15px"
                            />
                            <div>
                                <Typography
                                    variant="body3"
                                    fontWeight="500">
                                    Skills
                                </Typography>
                                <DynamicPadding
                                    desktop="20px"
                                    mobile="15px"
                                />
                                <div className={styles.skill_wrapper}>
                                    {skills.map((skill) => (
                                        <div
                                            className={
                                                styles.skill_item
                                            }>
                                            <Typography
                                                variant="body4"
                                                fontWeight="500"
                                                color="white">
                                                {skill}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
    )
}

export default CrowdfreelanceAll;