import classNames from 'classnames'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

interface Props {
  lineWidth?: string
  lineColor?: string
  width?: string
}
const Preloader = ({
  lineWidth = '3px',
  lineColor = '#f4a72a #0000',
  width = '30px',
}: Props): JSX.Element => {
  const stylePass = {
    '--preloaderLineWidth': lineWidth,
    '--preloaderLineColor': lineColor,
    '--preloaderWidth': width,
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      const openModals = document.querySelectorAll('.preloader_overlay')
      if (openModals.length > 0) return
      document.body.style.overflow = 'auto'
    }
  }, [])

  return createPortal(
    <div
      id="preloader_overlay"
      // @ts-ignore
      style={{ ...stylePass }}
      className={classNames(styles.overaly, 'preloader_overlay')}
      onClick={() => {}}
    >
      <div className={styles.loader}></div>
    </div>,
    document.body
  )
}

export default Preloader
