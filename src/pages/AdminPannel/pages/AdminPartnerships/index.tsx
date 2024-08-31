import AnimateHeight from '@common/components/AnimateHeight/index'
import DetailsPartnershipsAdmin from '@common/components/ui/DetailsTable/variants/DetailsPartnershipsAdmin/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import PartnerShipModal from '../../components/PartnerShipModal'
import styles from './style.module.scss'

const AdminPartnerships = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Development')
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.scroll_bar}>
          <div className={styles.top_gap_30_15}>
            <div className="mobile">
              <SizeBox height="5px" width="20px" />
            </div>
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.development />}
              title="Development"
            />
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.desing />}
              title="Design"
            />
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.marketing />}
              title="Marketing"
            />
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.writing />}
              title="Writing"
            />
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.managment />}
              title="Management"
            />
            <TopItem
              activeSelect={selectedCategory}
              callbackSelect={item => {
                setSelectedCategory(item)
              }}
              icon={<AppColor.consulting />}
              title="Consulting"
            />
            <div className="mobile">
              <SizeBox height="5px" width="20px" />
            </div>
          </div>
        </div>

        <div className={styles.mobile_padding}>
          <DynamicPadding />

          <div className="center_mobile_text">
            <Typography
              variant="titleBig"
              fontWeight="600"
              textTransform="uppercase"
            >
              Crypto Wallet Development partnerships
            </Typography>
          </div>

          <DynamicPadding />

          <div className={styles.top_part}>
            <div className={styles.buttons_top}>
              <div className="gap_10">
                <Typography variant="body4">Create</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
              <div className="gap_10">
                <Typography variant="body4">Active</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
            </div>

            <div
              className="cursor"
              onClick={() => {
                setShowSettingsModal(true)
              }}
            >
              <Typography
                variant="body4"
                fontWeight="500"
                textTransform="uppercase"
                className={styles.hover_text}
              >
                partnership settings
              </Typography>
            </div>
          </div>

          <DynamicPadding />

          <SearchFilterBar date="10/29/22 - 11/29/22" exportIcon={true} />

          <DynamicPadding />

          <DetailsPartnershipsAdmin
            information={[
              {
                user: fakeUserConstant,
                date: 'Feb 26, 2021 16:32 ',
                category: 'Web Sites',
                rate: '5% - 10% ',
                cr: '10%',
                epc: '5$',
                cr48Hours: '8%',
              },
            ]}
          />
          <DynamicPadding />
        </div>
      </div>

      {showSettingsModal && (
        <PartnerShipModal
          onClose={() => {
            setShowSettingsModal(false)
          }}
          onCancel={() => {
            setShowSettingsModal(false)
          }}
          onSave={() => {
            setShowSettingsModal(false)
          }}
        />
      )}
    </>
  )
}

type YesNoTableProps = {
  title: string
  items: {
    text: string
    initValue: boolean
    info?: boolean
    nodeAfterDots?: React.ReactNode
  }[]
}
export const YesNoTable = ({ items, title }: YesNoTableProps) => {
  return (
    <div>
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        {title}
      </Typography>
      <DynamicPadding desktop="30px" mobile="20px" />

      <div className={styles.column_15}>
        {items.map(item => (
          <YesNoItem item={item} />
        ))}
      </div>
    </div>
  )
}

type CombinedYesAndChangeTableProps = {
  title: string
  items: {
    text: string
    isBoolean: boolean
    initValue: boolean
    items: string[]
    info?: boolean
    nodeAfterDots?: React.ReactNode
  }[]
}

export const CombinedYesAndChangeTable = ({
  items,
  title,
}: CombinedYesAndChangeTableProps) => {
  return (
    <div>
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        {title}
      </Typography>
      <DynamicPadding desktop="30px" mobile="20px" />

      <div className={styles.column_15}>
        {items.map(item => {
          if (item.isBoolean) {
            return <YesNoItem item={item} />
          } else {
            return <ChosoeItem item={item} />
          }
        })}
      </div>
    </div>
  )
}

type TableChooseDropdownProps = {
  title: string
  items: {
    items: string[]
    text: string
    info?: boolean
    nodeAfterDots?: React.ReactNode
  }[]
}

export const TableChooseDropdown = ({
  items,
  title,
}: TableChooseDropdownProps) => {
  return (
    <div>
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        {title}
      </Typography>
      <DynamicPadding desktop="30px" mobile="20px" />

      <div className={styles.column_15}>
        {items.map(item => (
          <ChosoeItem item={item} />
        ))}
      </div>
    </div>
  )
}

type ChooseItemProps = {
  item: {
    text: string
    items: string[]
    info?: boolean
    nodeAfterDots?: React.ReactNode
  }
}
export const ChosoeItem = ({ item }: ChooseItemProps) => {
  return (
    <div style={{ width: '100%' }}>
      <TextDotted
        info={item.info}
        text={item.text}
        endNode={
          <div className="gap_10">
            <ChooseItemDropdown value={item.items} />
            {item.nodeAfterDots}
          </div>
        }
      />
    </div>
  )
}

export const ChooseItemDropdown = ({ value }: { value: string[] }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div
      className={styles.yes_no_dropdown_wrapper}
      style={{ position: 'relative' }}
    >
      <div
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
        className={`${styles.yes_no_item} cursor`}
      >
        <Typography variant="body4">{value[activeItemIndex]}</Typography>
        <AppColor.trianleDown fill={AppColor.text} />
      </div>

      <div className={styles.yes_no_dropdown}>
        <AnimateHeight show={showDropdown}>
          {value.map((item, index) => {
            return (
              <div
                style={
                  !showDropdown
                    ? {
                        boxShadow: 'none',
                        WebkitBoxShadow: 'none',
                        MozBoxShadow: 'none',
                      }
                    : {}
                }
                className={`${styles.yes_no_abs_item} cursor`}
              >
                <div
                  className="gap_5"
                  style={{ justifyContent: 'center' }}
                  onClick={() => {
                    setActiveItemIndex(index)
                    setShowDropdown(false)
                  }}
                >
                  <Typography variant="body4">{item}</Typography>
                </div>
              </div>
            )
          })}
        </AnimateHeight>
      </div>
    </div>
  )
}

type YesNoItemProps = {
  item: {
    text: string
    initValue: boolean
    info?: boolean
    nodeAfterDots?: React.ReactNode
  }
}
export const YesNoItem = ({ item }: YesNoItemProps) => {
  return (
    <div style={{ width: '100%' }}>
      <TextDotted
        info={item.info}
        text={item.text}
        endNode={
          <div className="gap_10">
            <YesNoDropdown value={item.initValue} />
            {item.nodeAfterDots}
          </div>
        }
      />
    </div>
  )
}

export const YesNoDropdown = ({ value }) => {
  const [isYes, setIsYes] = useState(value)

  const [showDropdown, setShowDropdown] = useState(false)
  const text = isYes ? 'yes' : 'no'
  const color = isYes ? AppColor.green : AppColor.red

  const vsText = isYes ? 'no' : 'yes'
  const vsColor = isYes ? AppColor.red : AppColor.green
  return (
    <div
      className={styles.yes_no_dropdown_wrapper}
      style={{ position: 'relative' }}
    >
      <div
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
        className={`${styles.yes_no_item} cursor`}
      >
        <Typography color={color} variant="body4">
          {text}
        </Typography>
        <AppColor.trianleDown fill={AppColor.text} />
      </div>

      <div className={styles.yes_no_dropdown}>
        <AnimateHeight show={showDropdown}>
          <div
            style={
              !showDropdown
                ? {
                    boxShadow: 'none',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                  }
                : {}
            }
            className={`${styles.yes_no_abs_item} cursor`}
          >
            <div
              className="gap_5"
              style={{ justifyContent: 'center' }}
              onClick={() => {
                setIsYes(prev => !prev)
                setShowDropdown(false)
              }}
            >
              <Typography color={vsColor} variant="body4">
                {vsText}
              </Typography>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </div>
  )
}

export const ButtonsRemoveList = ({ buttons }: { buttons: string[] }) => {
  return (
    <div className={styles.buttons_remove_list}>
      {buttons.map(item => {
        return (
          <div className={`${styles.remove_button} cursor`} key={item}>
            <Typography
              textLineHeight="1"
              variant="body5"
              color={AppColor.orange}
            >
              {item}
            </Typography>
            <AppColor.close fill={AppColor.orange} />
          </div>
        )
      })}
    </div>
  )
}

export const SkillLevel = ({ lvl }) => {
  const lvlMap = {
    1: <AppColor.oneOfFive />,
    2: <AppColor.twoOFFive />,
    3: <AppColor.threeOfFive />,
    4: <AppColor.fourOfFive />,
    5: <AppColor.fiveOfFive />,
  }

  const colorMap = {
    1: AppColor.green,
    2: AppColor.green,
    3: AppColor.yellow,
    4: AppColor.orange,
    5: AppColor.red,
  }

  const textMap = {
    1: 'Beginner',
    2: 'Beginner',
    3: 'Middle',
    4: 'Advanced',
    5: 'Advanced',
  }

  return (
    <div
      style={{ width: '160px', justifyContent: 'start', whiteSpace: 'nowrap' }}
      className="gap_5"
    >
      {lvlMap[lvl]}
      <Typography variant="body4" fontWeight="500" color={colorMap[lvl]}>
        {textMap[lvl]} and Up
      </Typography>
    </div>
  )
}
export const StarItem = ({ percent }) => {
  const itemColor =
    percent < 40
      ? AppColor.red
      : percent < 70
        ? AppColor.orange
        : AppColor.green
  return (
    <div className="gap_5">
      <AppColor.starColored fill={itemColor} />
      <Typography color={itemColor} variant="body4">
        {percent}% and Up{' '}
      </Typography>
    </div>
  )
}

type DropdownCustomNodesProps = {
  nodes: {
    id: string
    item: React.ReactNode
  }[]
}
export const DropdownCustomNodesCenter = ({
  nodes,
}: DropdownCustomNodesProps) => {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)

  const [hovered, setHovered] = useState(false)

  const borderStyles = {
    borderTopLeftRadius: showDropdown ? '20px' : '20px',
    borderTopRightRadius: showDropdown ? '20px' : '20px',
    borderBottomLeftRadius: showDropdown ? '0px' : '20px',
    borderBottomRightRadius: showDropdown ? '0px' : '20px',
  }

  return (
    <div
      className={styles.dropdown_wrapper_custom}
      style={{ position: 'relative', padding: '5px' }}
    >
      <div
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        className={`${styles.dropdown_wrapper} cursor ${hovered || showDropdown ? styles.dropdown_hover : ''}`}
        style={{ ...borderStyles }}
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
      >
        <div className={`${styles.dropdown_custom_main}`}>
          {nodes[activeNodeIndex].item}
          <AppColor.chevronBottom fill={AppColor.transparentBlack} />
        </div>
      </div>
      <div
        style={
          !showDropdown
            ? {
                boxShadow: 'none',
                WebkitBoxShadow: 'none',
                MozBoxShadow: 'none',
              }
            : {}
        }
        className={styles.abs_wrapper}
      >
        <AnimateHeight show={showDropdown}>
          <div className={styles.dropdown_child_abs}>
            {nodes.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveNodeIndex(index)
                  setShowDropdown(false)
                }}
                className={`${styles.dropdown_custom_child} cursor`}
              >
                {item.item}
              </div>
            ))}
          </div>
        </AnimateHeight>
      </div>
    </div>
  )
}
type TopItemProps = {
  icon: React.ReactNode
  title: string
  activeSelect: string
  callbackSelect: (item: string) => void
}
const TopItem = ({
  icon,
  title,
  activeSelect,
  callbackSelect,
}: TopItemProps) => {
  const isActive = activeSelect == title
  return (
    <div
      onClick={() => {
        if (!isActive) {
          callbackSelect(title)
        }
      }}
      className="gap_10"
    >
      {icon}
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {title}
      </Typography>
    </div>
  )
}

export default AdminPartnerships
