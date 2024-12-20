import AppColor from '@common/styles/variables-static'
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import styles from './style.module.scss'
import { useState, useRef, useEffect } from 'react'

interface Props {
  activeSwitch: (state: string) => void
}

const Options = ({ activeSwitch }: Props): JSX.Element => {
  return (
    <PopUpBottom
      popUpNode={
        <ThreeLinesPopUpCustom
          items={[
            {
              icon: <AppColor.details />,
              title: 'View details',
              onClick: () => {
                activeSwitch('main.general help.helpchat showhelp.details')
              },
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
              color: AppColor.red,
            },
          ]}
        />
      }
      topPaddingFromNode="20px"
      showNode={<AppColor.chevronBottom fill={AppColor.text} />}
      showBackgroundHover={false}
      showNodeHover={<AppColor.chevronBottom fill={AppColor.orange} />}
    />
  )
}

export default Options

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
