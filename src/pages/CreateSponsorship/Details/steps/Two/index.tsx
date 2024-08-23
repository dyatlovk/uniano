import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import { developmentDropdown, NavItemType } from '@common/models/constants'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
}

const StepTwo = ({ onReady }: Props): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('Development')
  const currentList: NavItemType | undefined = developmentDropdown.find(
    item => item.title === activeCategory
  )
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')

  return (
    <div>
      <div className={styles.category_wrapper}>
        <CategorySelect
          itemIcon={<AppColor.development />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Development"
        />
        <CategorySelect
          itemIcon={<AppColor.desing />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Design"
        />
        <CategorySelect
          itemIcon={<AppColor.marketing />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Marketing"
        />
        <CategorySelect
          itemIcon={<AppColor.writing />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Writing"
        />
        <CategorySelect
          itemIcon={<AppColor.managment />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Management"
        />
        <CategorySelect
          itemIcon={<AppColor.consulting />}
          activeCategory={activeCategory}
          callback={item => {
            setActiveCategory(item)
            onReady(item)
          }}
          title="Consulting"
        />
      </div>
      <DynamicPadding desktop="10px" mobile="10px" />
      <div className={styles.search_result}>
        {currentList &&
          currentList.items.map(item => (
            <div style={{ whiteSpace: 'nowrap' }}>
              <Typography
                variant="body4"
                fontWeight="500"
                color={AppColor.transparentBlack}
              >
                {item.title}
              </Typography>
              <DynamicPadding desktop="11px" mobile="20px" />
              <div className={styles.list_item}>
                {item.links.map((item, id) => (
                  <div
                    key={id}
                    className="gap_5"
                    onClick={() => {
                      setSelectedSubCategory(item)
                      onReady(item)
                    }}
                  >
                    <div
                      className={`${styles.select_box} ${selectedSubCategory == item ? styles.select_box_active : styles.select_box_disabled}`}
                    ></div>
                    <Typography
                      color={
                        selectedSubCategory == item
                          ? AppColor.orange
                          : AppColor.text
                      }
                      fontWeight={selectedSubCategory == item ? '500' : '400'}
                      variant="body4"
                    >
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

type CategorySelectProps = {
  itemIcon: React.ReactNode

  activeCategory: string
  callback: (item: string) => void
  title: string
}
const CategorySelect = ({
  itemIcon,
  title,
  activeCategory,
  callback,
}: CategorySelectProps) => {
  return (
    <div
      onClick={() => {
        callback(title)
      }}
      className={`gap_5 ${styles.category_select} ${title == activeCategory && styles.category_active}`}
    >
      {itemIcon}
      <Typography
        variant="body4"
        fontWeight={activeCategory == title ? '500' : '400'}
      >
        {title}
      </Typography>
    </div>
  )
}

export default StepTwo
