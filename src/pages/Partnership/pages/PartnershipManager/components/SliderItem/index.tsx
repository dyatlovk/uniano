import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

type SliderItemProps = {
  icon: React.ReactNode
  text: string
  onClick: (item: string) => void
  removedTag: string
  tags: string[]
}

const SliderItem = ({
  icon,
  text,
  onClick,
  removedTag,
  tags,
}: SliderItemProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClickItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClick(text)
    setIsSelected(prev => !prev)
  }

  useEffect(() => {
    if (removedTag === text) {
      setIsSelected(false)
    }
    if (tags.length === 0) {
      setIsSelected(false)
    }
  }, [removedTag, tags, text])

  return (
    <div
      onClick={event => {
        handleClickItem(event)
      }}
      className={classNames(
        isSelected ? styles.slider_item__active : styles.slider_item
      )}
    >
      <div
        style={{ opacity: isSelected ? 1 : 0 }}
        className={styles.absolute_close}
      >
        <AppColor.close fill={AppColor.text} />
      </div>
      {icon}
      <Typography fontWeight={isSelected ? '500' : '400'} variant="body4">
        {text}
      </Typography>
    </div>
  )
}
export default SliderItem
