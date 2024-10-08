import HeaderDummy from '@common/components/Header/Dummy/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/search/statesModel'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

const SearchMasterRequirements = () => {
  const [activeTitle, setActiveTitle] = useState('')

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }, [])
  const navigate = useNavigate()

  return (
    <div>
      <HeaderDummy logoText="Search Master">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          currentState={'Requirements'}
          useBg={false}
          padding="0"
        />
      </HeaderDummy>

      <div className={styles.wrapper}>
        <DynamicPadding desktop="43px" />
        <div className={styles.text_flex}>
          <Typography variant="titleBig" textTransform="uppercase">
            Requirements
          </Typography>
          <div className={styles.template_icon}>
            <FilterTemplateDropdown />
          </div>
        </div>

        <DynamicPadding desktop="10px" mobile="20px" />
        <div style={{ textAlign: 'center' }} className="justify_center">
          <Typography variant="body4" color={AppColor.transparentBlack}>
            Choose the specific features and functionalities you want to
            implement.
          </Typography>
        </div>
        <DynamicPadding desktop="46px" />

        <div className={styles.switch_wrapper}>
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
          <SelectItem
            title="Creating a website"
            icon={<AppColor.news height={'25px'} />}
            activeTitle={activeTitle}
            callback={item => {
              setActiveTitle(item)
            }}
          />
        </div>

        <DynamicPadding />
        <div
          style={{ maxWidth: '530px', margin: '0 auto' }}
          className={'flex_space_between'}
        >
          <Link to={'/search-master/category'}>
            <ChevronMoveTo
              variant="left"
              onClick={() => {
                navigate(-1)
              }}
              text="Step back"
              title="category"
            />
          </Link>
          <Link to={'/search-master/skills'}>
            <ChevronMoveTo
              variant="right"
              onClick={() => {}}
              text="Next step"
              title="skills"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

type SelectItemProps = {
  title: string
  icon: React.ReactNode
  activeTitle: string
  callback: (item: string) => void
}
const SelectItem = ({
  activeTitle,
  callback,
  icon,
  title,
}: SelectItemProps) => {
  const [isActiveItem, setIsActiveItem] = useState(false)

  return (
    <div
      onClick={() => {
        setIsActiveItem(!isActiveItem)
      }}
      className={
        isActiveItem
          ? styles.select_item_switch_active
          : styles.select_item_switch
      }
    >
      <div className="gap_10">
        <MyCheckbox
          height="14px"
          width="14px"
          basicValue={isActiveItem}
          callback={item => {}}
        />
        <div
          style={{ lineHeight: 1, fontSize: 0 }}
          className={isActiveItem ? styles.active_icon : styles.disabled}
        >
          {icon}
        </div>
        <Typography
          variant="body4"
          fontWeight={isActiveItem ? '500' : '400'}
          color={isActiveItem ? AppColor.orange : AppColor.text}
        >
          {title}
        </Typography>
      </div>
    </div>
  )
}

export default SearchMasterRequirements
