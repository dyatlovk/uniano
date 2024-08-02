import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'

type SliderByRefProps = {
  nodes: React.ReactNode[]
  endToFrontIndex?: number
  buttons?: boolean
}

const SliderByRef = ({ nodes, buttons = true }: SliderByRefProps) => {
  const gap = 10
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalTransform, setTotalTransform] = useState(0)
  const currentItemRef = useRef<HTMLDivElement | null>(null)
  const previousItemRef = useRef<HTMLDivElement | null>(null)
  const totalRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isNavVisible, setNavVisible] = useState<boolean>(buttons)

  const navVisibilityHandler = useCallback(() => {
    if (getContentWidth() <= getMainWrapperWidth()) setNavVisible(false)
    if (getContentWidth() >= getMainWrapperWidth()) setNavVisible(true)
  }, [])

  useEffect(() => {
    navVisibilityHandler()
  }, [navVisibilityHandler])

  useEffect(() => {
    const handleResize = () => {
      navVisibilityHandler()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navVisibilityHandler])

  function handleMoveOn() {
    if (currentItemRef.current && currentItemRef.current.offsetWidth) {
      if (currentIndex < nodes.length - 1) {
        const currentItemWidth = currentItemRef.current.offsetWidth
        setTotalTransform(prev => prev + currentItemWidth + gap)
        setCurrentIndex(prev => prev + 1)
      } else {
        setTotalTransform(0)
        setCurrentIndex(0)
      }
    }
  }
  function handleMoveUndo() {
    if (previousItemRef.current && previousItemRef.current.offsetWidth) {
      if (currentIndex > 0) {
        const previousWidth = previousItemRef.current.offsetWidth
        setTotalTransform(prev => prev - previousWidth - gap)
        setCurrentIndex(prev => prev - 1)
      } else {
        const totalTransform = totalRef.current.offsetWidth
        setTotalTransform(totalTransform)
        setCurrentIndex(nodes.length - 1)
      }
    }
  }

  function handleDragStart(e: React.MouseEvent | React.TouchEvent) {
    setStartX(getClientX(e))
    setIsDragging(true)
  }

  function handleDragMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDragging) return

    const currentX = getClientX(e)
    const deltaX = startX - currentX

    if (deltaX > 0) {
      // Swiping left
      handleMoveOn()
    } else if (deltaX < 0) {
      // Swiping right
      handleMoveUndo()
    }

    setIsDragging(false)
  }

  function handleDragEnd() {
    setIsDragging(false)
  }

  function getClientX(e: React.MouseEvent | React.TouchEvent) {
    return 'touches' in e ? e.touches[0].clientX : e.clientX
  }

  function getMainWrapperWidth(): number {
    if (!wrapperRef) return 0
    return wrapperRef.current.clientWidth
  }

  function getContentWidth(): number {
    if (!totalRef) return 0

    return totalRef.current.clientWidth
  }

  return (
    <div
      className={classNames(
        isNavVisible ? styles.relative : styles.relative_no_nav
      )}
    >
      <div
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        className={styles.wrapper}
        ref={wrapperRef}
      >
        <div
          ref={totalRef}
          className={styles.flex_wrapper}
          style={{ transform: `translateX(-${totalTransform}px)`, gap: gap }}
        >
          {nodes.map((node, index) => (
            <div
              style={{ userSelect: 'none' }}
              key={index}
              ref={
                index === currentIndex
                  ? currentItemRef
                  : index === currentIndex - 1
                    ? previousItemRef
                    : null
              }
            >
              {node}
            </div>
          ))}
        </div>
      </div>
      {isNavVisible && (
        <>
          <div onClick={handleMoveUndo} className={styles.left}>
            <AppColor.chevronLeft fill="white" width={'30px'} height={'15px'} />
          </div>
          <div onClick={handleMoveOn} className={styles.right}>
            <AppColor.chevronRight
              fill="white"
              width={'30px'}
              height={'15px'}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default SliderByRef
