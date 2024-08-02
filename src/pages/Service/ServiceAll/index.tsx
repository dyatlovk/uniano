import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SliderByRef from '@common/components/ui/SliderByRef/index'
import Typography from '@common/components/ui/Typography/Typography'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import { useCallback, useEffect, useRef, useState } from 'react'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DoubleRangeSlider from '@common/components/ui/DoubleRangeSlider/index'
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack'
import CardStatisticsParthnershipConstant from '@common/components/cards/CardStatiscticsPartnership/variants/CardStatisticsParthnershipConstant/CardStatisticTest'
import { useScreenSize } from '@common/helpers/useScreenSize'
import NavBarLineBlack from '@common/components/ui/NavBarLineBlack/index'
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'
import minimalist from '@assets/images/minimalist.png'
import mascot from '@assets/images/mascot.png'
import freestyle from '@assets/images/freestyle.png'
import threeD from '@assets/images/threeD.png'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import SliderItem from '@pages/Partnership/pages/PartnershipManager/components/SliderItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import FiltersTemplate from '@common/components/ui/FiltersTemplate/index'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import SkillsFilter from '@common/components/ui/Filters/Skills/index'
import FilterSection from '@common/components/Partnership/Filters/List/index'
import FilterSectionManager from '@common/domain/Partnership/filtersSection'
import useUpdater from '@common/helpers/useUpdater'

const ServiceAll = () => {
  const { width, height } = useScreenSize()
  const [priceValue, setPriceValue] = useState<{
    min: number
    max: number
  }>({ min: 0, max: 100 })
  const [itemsToshow, setItemsToShow] = useState([])
  const minValueRef = useRef(null)
  const maxValueRef = useRef(null)
  const [removedTagFromSideBar, setRemovedTagFromSideBar] = useState('')
  const [removeLastElement, setRemoveLastElement] = useState(false)
  const [filterManager, setFilterManager] =
    useState<FilterSectionManager | null>(null)
  const renderUpdate = useUpdater()

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('removeLastElement'))
    if (value === true) {
      setRemoveLastElement(true)
    }
  }, [])

  useEffect(() => {
    const arrayLengthStart = width <= 768 ? 4 : 9
    setItemsToShow(
      Array.from({ length: arrayLengthStart }, (a, index) => index)
    )
  }, [width])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setFilterManager(new FilterSectionManager())
  }, [])

  const [showModalSideBar, setShowModalSideBar] = useState(false)

  function skillsFindSelectedTags(): number[] {
    if (!filterManager) return []
    const section = filterManager.getSection('skills')
    if (!section) return []
    return section.items.map(el => Number(el.uuid))
  }

  function skillsToggleTagState(id: string, title: string): void {
    if (!filterManager) return
    filterManager.toggle('skills', id.toString(), title)
  }

  function sliderFindSelectedTag(id: string): string[] {
    if (!filterManager) return []
    const present = filterManager.findItemById(id)
    if (!present) return []
    return [present.uuid]
  }

  function sliderToggleTagState(id: string, title: string): void {
    if (!filterManager) return
    filterManager.toggle('slider', id, title)
  }

  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Services"
        activeId={0}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All services',
            link: '/service/all',
          },
          {
            title: 'My services',
            link: '/service/my',
          },
        ]}
      />

      <div className={styles.wrapper}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={['Service']} />
          }
          pageTitle="Brand Identity Design "
        />

        <DynamicPadding desktop="35px" />

        <SliderByRef
          nodes={[
            <SliderItem
              icon={<img src={minimalist} height={'30px'} />}
              text="Minimalist"
              onClick={(title: string) => {
                sliderToggleTagState(
                  '80940dfe-2327-4d93-82a6-3433858fc101',
                  title
                )
                renderUpdate()
              }}
              removedTag={removedTagFromSideBar}
              tags={sliderFindSelectedTag(
                '80940dfe-2327-4d93-82a6-3433858fc101'
              )}
            />,
            <SliderItem
              icon={<img src={threeD} height={'30px'} />}
              text="3D"
              onClick={(title: string) => {
                sliderToggleTagState(
                  '58b66547-a614-4647-a6d8-4a6acb91ea29',
                  title
                )
                renderUpdate()
              }}
              removedTag={removedTagFromSideBar}
              tags={sliderFindSelectedTag(
                '58b66547-a614-4647-a6d8-4a6acb91ea29'
              )}
            />,
            <SliderItem
              icon={<img src={freestyle} height={'30px'} />}
              text="Freestyle"
              onClick={(title: string) => {
                sliderToggleTagState(
                  'a7967b42-a36b-495c-9d2d-3cbc63ac376e',
                  title
                )
                renderUpdate()
              }}
              removedTag={removedTagFromSideBar}
              tags={sliderFindSelectedTag(
                'a7967b42-a36b-495c-9d2d-3cbc63ac376e'
              )}
            />,
            <SliderItem
              icon={<img src={mascot} height={'30px'} />}
              text="Mascot"
              onClick={(title: string) => {
                sliderToggleTagState(
                  '676f2e3a-a2f6-452a-9868-c9702dcd4374',
                  title
                )
                renderUpdate()
              }}
              removedTag={removedTagFromSideBar}
              tags={sliderFindSelectedTag(
                '676f2e3a-a2f6-452a-9868-c9702dcd4374'
              )}
            />,
          ]}
        />
        <DynamicPadding />

        <ResponsiveLayoutTwo
          callbackModal={item => {
            setShowModalSideBar(item)
          }}
          item1ToAModalLeftMobile={true}
          showModal={showModalSideBar}
          gap="80px"
          item1MaxWidth="290px"
          item2MaxWidth="830px"
          item0MobileWhenModal={
            <div style={{ width: '100%' }}>
              <FiltersTemplate />
              <DynamicPadding desktop="30px" mobile="15px" />
              <InputCommon placeholder="Search" callback={() => {}} />
              <DynamicPadding desktop="30px" mobile="15px" />
            </div>
          }
          item1={
            <div style={{ width: '100%' }}>
              <FiltersTemplate />
              <DynamicPadding desktop="30px" mobile="15px" />
              <InputCommon placeholder="Search" callback={() => {}} />

              {filterManager && filterManager.total() > 0 && (
                <>
                  <DynamicPadding desktop="30px" mobile="15px" />
                  <HorizontalLine />
                  <DynamicPadding desktop="23px" mobile="15px" />
                  <div className={styles.justify_flex}>
                    <Typography variant="body3" fontWeight="500">
                      You chose
                    </Typography>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        filterManager.clear()
                        renderUpdate()
                      }}
                    >
                      <Typography
                        variant="body5"
                        color={AppColor.transparentBlack}
                        fontWeight="500"
                      >
                        Reset All
                      </Typography>
                    </div>
                  </div>
                  <DynamicPadding desktop="23px" mobile="15px" />
                </>
              )}

              <div className={styles.skill_wrapper}>
                {filterManager &&
                  filterManager.getStorage().map(item => (
                    <>
                      {item.items.map(el => (
                        <div className={styles.hover_white}>
                          <MyButtonTransparentOrange
                            onClick={() => {
                              filterManager.remove(item.label, el.uuid)
                              renderUpdate()
                            }}
                            padding="5px 13px"
                          >
                            {el.label}
                            <AppColor.close fill={AppColor.orange} />
                          </MyButtonTransparentOrange>
                        </div>
                      ))}
                    </>
                  ))}
              </div>
              <DynamicPadding desktop="32px" mobile="15px" />
              <HorizontalLine />
              <DynamicPadding desktop="30px" mobile="15px" />
              {filterManager && (
                <FilterSection
                  title="Logo Style"
                  callback={(id: string, title: string, state: boolean) => {
                    if (state) filterManager.add('Logo Style', id, title)
                    if (!state) filterManager.remove('Logo Style', id)
                    renderUpdate()
                  }}
                  dropItems={[
                    {
                      id: '29d873f5-4e67-4f7f-8a87-c515b909ece0',
                      count: 500,
                      icon: <img src={minimalist} height={'20px'} />,
                      text: 'Minimalist',
                      isActive: filterManager.isPresent(
                        '29d873f5-4e67-4f7f-8a87-c515b909ece0'
                      ),
                    },
                    {
                      id: '85245885-de73-43d5-9d46-2639c3800479',
                      count: 500,
                      icon: <img src={mascot} height={'20px'} />,
                      text: 'Mascot',
                      isActive: filterManager.isPresent(
                        '85245885-de73-43d5-9d46-2639c3800479'
                      ),
                    },
                    {
                      id: 'a873b1c7-5a08-4562-b9a6-735a29af3dd3',
                      count: 500,
                      icon: <img src={freestyle} height={'20px'} />,
                      text: 'Freestyle',
                      isActive: filterManager.isPresent(
                        'a873b1c7-5a08-4562-b9a6-735a29af3dd3'
                      ),
                    },
                    {
                      id: 'ee766e57-830b-47a4-ab24-40f92e7f1a24',
                      count: 500,
                      icon: <img src={threeD} height={'20px'} />,
                      text: '3D',
                      isActive: filterManager.isPresent(
                        'ee766e57-830b-47a4-ab24-40f92e7f1a24'
                      ),
                    },
                    {
                      id: '83a4a2c4-6d4c-408f-9628-07ac39bd6490',
                      count: 500,
                      icon: <img src={minimalist} height={'20px'} />,
                      text: 'Minimalist',
                      isActive: filterManager.isPresent(
                        '83a4a2c4-6d4c-408f-9628-07ac39bd6490'
                      ),
                    },
                    {
                      id: '3b1f455f-6fcf-45b5-bf30-bda5a80cdb77',
                      count: 500,
                      icon: <img src={mascot} height={'20px'} />,
                      text: 'Mascot',
                      isActive: filterManager.isPresent(
                        '3b1f455f-6fcf-45b5-bf30-bda5a80cdb77'
                      ),
                    },
                  ]}
                />
              )}

              <DynamicPadding desktop="30px" mobile="15px" />
              <HorizontalLine />
              <DynamicPadding desktop="30px" mobile="15px" />
              {filterManager && (
                <FilterSection
                  title="File Format"
                  callback={(id: string, title: string, state: boolean) => {
                    if (state) filterManager.add('File Format', id, title)
                    if (!state) filterManager.remove('File Format', id)
                    renderUpdate()
                  }}
                  dropItems={[
                    {
                      id: 'db8177ec-668c-4195-b13a-437a2501498d',
                      count: 500,
                      icon: <AppColor.pngBox width={'20px'} height={'20px'} />,
                      text: 'PNG',
                      isActive: filterManager.isPresent(
                        'db8177ec-668c-4195-b13a-437a2501498d'
                      ),
                    },
                    {
                      id: '3b601715-0a40-4422-b49a-fe9a554bc4e1',
                      count: 500,
                      icon: <AppColor.jpgBox width={'20px'} height={'20px'} />,
                      text: 'JPG',
                      isActive: filterManager.isPresent(
                        '3b601715-0a40-4422-b49a-fe9a554bc4e1'
                      ),
                    },
                    {
                      id: '2da72f69-2d01-4670-98b5-14acb1f0e1bb',
                      count: 500,
                      icon: <AppColor.gifBox width={'20px'} height={'20px'} />,
                      text: 'GIF',
                      isActive: filterManager.isPresent(
                        '2da72f69-2d01-4670-98b5-14acb1f0e1bb'
                      ),
                    },
                    {
                      id: 'fb4fcae3-d7f1-4436-bdcf-3aa62879d417',
                      count: 500,
                      icon: <AppColor.pdfBox width={'20px'} height={'20px'} />,
                      text: 'PDF',
                      isActive: filterManager.isPresent(
                        'fb4fcae3-d7f1-4436-bdcf-3aa62879d417'
                      ),
                    },
                  ]}
                />
              )}

              <DynamicPadding desktop="30px" mobile="15px" />
              <HorizontalLine />
              <DynamicPadding desktop="30px" mobile="15px" />
              {filterManager && (
                <FilterSection
                  title="Includes"
                  callback={(id: string, title: string, state: boolean) => {
                    if (state) filterManager.add('Includes', id, title)
                    if (!state) filterManager.remove('Includes', id)
                    renderUpdate()
                  }}
                  dropItems={[
                    {
                      id: '26755d85-af52-4edd-91ba-eb63890e5aab',
                      count: 500,
                      icon: (
                        <AppColor.code
                          fill={AppColor.text}
                          width={'20px'}
                          height={'20px'}
                        />
                      ),
                      text: 'Source File',
                      isActive: filterManager.isPresent(
                        '26755d85-af52-4edd-91ba-eb63890e5aab'
                      ),
                    },
                    {
                      id: '82fbd9d6-3373-40ac-b5b7-81f8cd15968c',
                      count: 500,
                      icon: (
                        <AppColor.vectorFiles width={'20px'} height={'20px'} />
                      ),
                      text: 'Vector FIle',
                      isActive: filterManager.isPresent(
                        '82fbd9d6-3373-40ac-b5b7-81f8cd15968c'
                      ),
                    },
                    {
                      id: 'b5bbb8a0-2545-4add-be11-850f7f97ddec',
                      count: 500,
                      icon: (
                        <AppColor.chessBoard width={'20px'} height={'20px'} />
                      ),
                      text: 'Logo Transparency',
                      isActive: filterManager.isPresent(
                        'b5bbb8a0-2545-4add-be11-850f7f97ddec'
                      ),
                    },
                    {
                      id: '4a05bedf-fc60-4272-b7a7-bc1562f63808',
                      count: 500,
                      icon: <AppColor.printer width={'20px'} height={'20px'} />,
                      text: 'Printable FIle',
                      isActive: filterManager.isPresent(
                        '4a05bedf-fc60-4272-b7a7-bc1562f63808'
                      ),
                    },
                  ]}
                />
              )}

              <DynamicPadding desktop="30px" mobile="15px" />
              <HorizontalLine />
              <DynamicPadding desktop="30px" mobile="15px" />
              <Typography variant="body3" fontWeight="500">
                Price
              </Typography>
              <DynamicPadding desktop="40px" mobile="20px" />
              <DoubleRangeSlider min={0} max={10000} onChange={item => {}} />
              <DynamicPadding desktop="15px" mobile="0px" />
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
                      min: minValueRef.current.value,
                      max: maxValueRef.current.value,
                    })
                  }}
                >
                  OK
                </MyButtonBlack>
              </div>
              <DynamicPadding desktop="30px" mobile="15px" />
              <HorizontalLine />
              <DynamicPadding desktop="30px" mobile="15px" />
              <SkillsFilter
                items={[
                  {
                    title: 'Logos',
                  },
                  {
                    title: 'Logo design',
                  },
                  {
                    title: 'Modern logo',
                  },
                ]}
                selected={skillsFindSelectedTags()}
                callback={(id: number, title: string, state: boolean) => {
                  skillsToggleTagState(id.toString(), title)
                  renderUpdate()
                }}
              />
            </div>
          }
          item2={
            <div className="responsive_layout_child">
              <div style={{ width: '100%' }}>
                <div className={styles.justify_flex}>
                  <div className="desktop">
                    <Typography variant="body4">
                      <span style={{ fontWeight: '500' }}>11 841 </span>programs
                    </Typography>
                  </div>
                  <div className={styles.flex_center}>
                    <div
                      onClick={() => {
                        setShowModalSideBar(true)
                      }}
                      className={'gap_5 mobile'}
                    >
                      <AppColor.filter />
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                      >
                        Filters
                      </Typography>
                    </div>
                    <div className={'gap_5'}>
                      <AppColor.relevant />
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                      >
                        Relevant
                      </Typography>
                    </div>
                    <div>
                      <AppColor.chevronBottom fill={AppColor.text} />
                    </div>
                  </div>
                </div>
                <DynamicPadding />

                <div className={styles.cards_wrapper}>
                  {itemsToshow.map(item => (
                    <div className="center_card">
                      <CardStatisticsParthnershipConstant
                        navigateTo="/service/"
                        removeLastElement={removeLastElement}
                        setRemoveLastElement={setRemoveLastElement}
                      />
                    </div>
                  ))}
                </div>
                <DynamicPadding desktop="40px" mobile="20px" />
                <div className={styles.justify_center}>
                  <MyButtonTransparentBlack
                    textTransform="uppercase"
                    fontWeight={'500'}
                    onClick={() => {
                      setItemsToShow(prev => [...prev, 1, 2, 3])
                    }}
                  >
                    Show more +3
                  </MyButtonTransparentBlack>
                </div>
                <DynamicPadding desktop="40px" mobile="20px" />
                <div className={styles.justify_center}>
                  <NavBarLineBlack callback={() => {}} maxCountPage={100} />
                </div>
                <DynamicPadding />

                <DynamicPadding />
              </div>
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
}

export default ServiceAll
