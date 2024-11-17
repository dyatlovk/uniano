import Typography, {
  fontWeight,
} from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import { FileItemNotific } from '@pages/Messenger/pages/MessengerPage/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import { fakeUserConstant } from '@common/models/user'
import { CareServiceChildProps } from '../..'
import { useState, useRef, useEffect } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const GeneralDetails = ({ setActiveSwitch }: CareServiceChildProps) => {
  return (
    <div>
      <div className="flex_space_between">
        <Typography fontWeight="500" variant="body3">
          How to create a job ?
        </Typography>
        <PopUpBottom
          positionRight="0px"
          popUpNode={
            <ThreeLinesPopUpCustom
              positionRight="12px"
              items={[
                {
                  icon: <AppColor.details />,
                  title: 'View details',
                },
                {
                  icon: <AppColor.search />,
                  title: 'Search',
                },
                {
                  icon: <AppColor.mute />,
                  title: 'Mute notifications',
                },
                {
                  icon: <AppColor.closeAsSolved />,
                  title: 'Close as solved',
                },
                {
                  icon: <AppColor.edit fill={AppColor.text} />,
                  title: 'Edit',
                },
                {
                  icon: <AppColor.close fill={AppColor.red} />,
                  title: 'Delete',
                  color: AppColor.red
                },
              ]}
            />
          }
          topPaddingFromNode="20px"
          showNode={
            <div className={styles.border_item}>
              <AppColor.threeLines height={'15px'} fill={AppColor.text} />
            </div>
          }
          showBackgroundHover={false}
          showNodeHover={
            <div className={styles.border_item}>
              <AppColor.threeLinesActive
                height={'15px'}
                fill={AppColor.orange}
              />
            </div>
          }
        />
      </div>

      <DynamicPadding desktop="20px" mobile="10px" />
      <Typography variant="body4">
        Odio purus ac ac sem vitae pulvinar viverra lacus, lectus.{' '}
      </Typography>
      <DynamicPadding desktop="20px" mobile="10px" />
      <HorizontalLine />
      <DynamicPadding desktop="20px" mobile="10px" />
      <div className="flex_space_between">
        <div className="gap_10">
          <Typography variant="body3" fontWeight="500">
            Files
          </Typography>
          <div className="black_box">
            <Typography
              variant="body3"
              textLineHeight="1"
              fontWeight="500"
              color="white"
            >
              12
            </Typography>
          </div>
        </div>
        <Typography
          variant="body5"
          fontWeight="500"
          className={styles.hover_all}
        >
          View All
        </Typography>
      </div>

      <SizeBox height="20px" />
      <FileItemNotific />
      <FileItemNotific />
      <FileItemNotific />

      <DynamicPadding desktop="20px" mobile="10px" />
      <HorizontalLine />
      <DynamicPadding desktop="20px" mobile="10px" />
      <div className="flex_space_between">
        <div className="gap_10">
          <Typography variant="body3" fontWeight="500">
            Members
          </Typography>
          <div className="black_box">
            <Typography
              variant="body3"
              textLineHeight="1"
              fontWeight="500"
              color="white"
            >
              125
            </Typography>
          </div>
        </div>
        <Typography
          variant="body5"
          fontWeight="500"
          className={styles.hover_all}
        >
          View All
        </Typography>
      </div>

      <DynamicPadding desktop="20px" mobile="10px" />

      <div
        onClick={() => {
          setActiveSwitch('main.general help.helpchat showhelp.details.user')
        }}
        className={`${styles.hover_item} cursor`}
      >
        <div className={styles.absolute_background_color}></div>
        <UserAvatar
          flag={<AppColor.UkraineFlagIcon />}
          active={true}
          name="Artem M. "
          role="Moderator"
          url={fakeUserConstant.image}
        />
      </div>
      <div
        onClick={() => {
          setActiveSwitch('main.general help.helpchat showhelp.details.user')
        }}
        className={`${styles.hover_item} cursor`}
      >
        <div className={styles.absolute_background_color}></div>
        <UserAvatar
          flag={<AppColor.UkraineFlagIcon />}
          active={true}
          name="Artem M. "
          role="Moderator"
          url={fakeUserConstant.image}
        />
      </div>
      <div
        onClick={() => {
          setActiveSwitch('main.general help.helpchat showhelp.details.user')
        }}
        className={`${styles.hover_item} cursor`}
      >
        <div className={styles.absolute_background_color}></div>
        <UserAvatar
          flag={<AppColor.UkraineFlagIcon />}
          active={true}
          name="Artem M. "
          role="Moderator"
          url={fakeUserConstant.image}
        />
      </div>
    </div>
  )
}

export default GeneralDetails

type PopUpBottomProps = {
  showNode: React.ReactNode
  showNodeHover?: React.ReactNode
  popUpNode: React.ReactNode
  topPaddingFromNode?: string
  showBackgroundHover?: boolean
  positionRight?: string
  callbackShow?: (show: boolean) => void
}
const PopUpBottom = ({
  popUpNode,
  showNode,
  showBackgroundHover = false,
  topPaddingFromNode,
  showNodeHover,
  positionRight = '',
  callbackShow,
}: PopUpBottomProps) => {
  const [show, setShow] = useState(false)

  const nodeRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement
      if (clickedElement.closest('.overlay_prevent_close')) return //ignore overlay modal and modals children

      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setShow(false)
      } else {
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (callbackShow) {
      callbackShow(show)
    }
  }, [show])

  return (
    <div ref={nodeRef} style={{ position: 'relative', lineHeight: 1 }}>
      <div
        className="cursor"
        onClick={() => {
          setShow(prev => !prev)
        }}
      >
        {showNodeHover ? (
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={show ? 'Goodbye, world!' : 'Hello, world!'}
              addEndListener={() => {}}
              classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
                exitDone: styles.exitDone,
              }}
              timeout={100} // 0.15s in milliseconds
            >
              {show ? (
                <div className={showBackgroundHover && styles.hover_item}>
                  {showNodeHover}
                </div>
              ) : (
                <div className={showBackgroundHover && styles.hover_item}>
                  {showNode}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <div className={showBackgroundHover && styles.hover_item}>
            {showNode}
          </div>
        )}
      </div>
      <div
        style={
          positionRight != ''
            ? {
                right: positionRight,
                left: 'auto',
                transform: 'translateX(0)',
                top: `calc(100% + ${topPaddingFromNode})`,
                opacity: show ? '1' : '0',
                pointerEvents: show ? 'all' : 'none',
                display: show ? 'block' : 'none',
              }
            : {
                top: `calc(100% + ${topPaddingFromNode})`,
                opacity: show ? '1' : '0',
                pointerEvents: show ? 'all' : 'none',
                display: show ? 'block' : 'none',
              }
        }
        className={styles.popup_node}
      >
        {popUpNode}
      </div>
    </div>
  )
}

type ThreeLinesPopUpProps = {
  items: ItemProps[]
  positionRight?: string
}
export const ThreeLinesPopUpCustom = ({
  items,
  positionRight = '',
}: ThreeLinesPopUpProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.items_grid}>
        {items.map((item, index) => (
          <Item
            key={index}
            color={AppColor.text}
            fontWeight={'400'}
            {...item}
          />
        ))}
      </div>
      <div
        style={
          positionRight != ''
            ? {
                transform: 'translateX(50%)',
                left: 'auto',
              }
            : {}
        }
        className={styles.triangle}
      ></div>
    </div>
  )
}

type ItemProps = {
  title: string
  icon: React.ReactNode
  onClick?: () => void
  color?: string
  fontWeight?: fontWeight
}
const Item = ({ title, icon, onClick, color, fontWeight }: ItemProps) => (
  <div
    style={{ whiteSpace: 'nowrap' }}
    className={`${styles.item} cursor`}
    onClick={onClick}
  >
    {icon}
    <Typography
      title={title}
      className={styles.text_of_item}
      color={color ?? AppColor.red}
      variant="body5"
      fontWeight={fontWeight ?? '400'}
    >
      {title}
    </Typography>
  </div>
)
