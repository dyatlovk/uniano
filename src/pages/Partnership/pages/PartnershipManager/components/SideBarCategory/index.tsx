import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import { useCallback, useState } from 'react'
import AppColor from '@common/styles/variables-static'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import classNames from 'classnames'
import FiltersManager from '@common/domain/Partnership/filters'
import useUpdater from '@common/helpers/useUpdater'

type SideBarCategoryProps = {
  title: string
  callbackSelected?: (id: number, title: string) => void
  dropItems: {
    text: string
    icon: React.ReactNode
    count: number
  }[]
}
const SideBarCategory = ({
  dropItems,
  title,
  callbackSelected,
}: SideBarCategoryProps) => {
  const update = useUpdater()
  const [showDropdown, setShowDropdown] = useState(true)
  const [countShow, setCountShow] = useState(4)
  const [filterManager, setFilterManager] = useState<FiltersManager>(
    new FiltersManager()
  )
  const [showMoreHovered, setShowMoreHovered] = useState<boolean>(false)

  const showMoreEnterHandle = useCallback(() => {
    setShowMoreHovered(true)
  }, [])
  const showMoreLeaveHandle = useCallback(() => {
    setShowMoreHovered(false)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
        className={styles.top_part}
      >
        <Typography variant="body3" fontWeight="500">
          {title}
        </Typography>
        {showDropdown ? (
          <AppColor.chevronTop
            fill={AppColor.text}
            width={'20px'}
            height={'10px'}
          />
        ) : (
          <AppColor.chevronBottom
            fill={AppColor.text}
            width={'20px'}
            height={'10px'}
          />
        )}
      </div>

      <div
        className={styles.wrapper_scroll}
        style={{
          display: showDropdown ? 'block' : 'none',
          marginTop: '30px',
          maxHeight: `${35 * countShow + 30}px`,
        }}
      >
        <div
          style={{ paddingBottom: '10px' }}
          className={styles.dropdown_wrapper}
        >
          {dropItems.map((item, idx) => (
            <div
              className={classNames(
                filterManager.isInList(idx)
                  ? styles.filter_item__selected
                  : styles.filter_item
              )}
              key={idx}
            >
              <MyCheckbox
                callback={state => {
                  if (state) {
                    callbackSelected(idx, item.text)
                    filterManager.add(idx)
                  }
                  if (!state) {
                    filterManager.remove(idx)
                    update()
                  }
                }}
                height="20px"
                width="20px"
              />
              {item.icon}
              <Typography variant="body4">{item.text}</Typography>
              <div className={styles.margin}>
                <Typography variant="body4" color={AppColor.transparentBlack}>
                  {item.count}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      {countShow != dropItems.length && showDropdown && (
        <div
          onClick={() => {
            setCountShow(dropItems.length)
          }}
          className={styles.show_more}
          onMouseEnter={showMoreEnterHandle}
          onMouseLeave={showMoreLeaveHandle}
        >
          <Typography
            className={classNames(
              showMoreHovered
                ? styles.show_more_text_hovered
                : styles.show_more_text
            )}
            variant="body4"
            fontWeight="500"
          >
            Show {dropItems.length - countShow} more
          </Typography>
        </div>
      )}
    </div>
  )
}

export default SideBarCategory
