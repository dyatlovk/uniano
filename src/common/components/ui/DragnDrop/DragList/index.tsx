import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

type Item = DragnDrop.DraggableItem

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
}

interface Props {
  items: Item[]
  forceUpdate?: boolean
  afterDrop: () => void
}

const DragList = ({ items, afterDrop, forceUpdate }: Props): JSX.Element => {
  const [list, setList] = useState<Item[]>(items)
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState)

  useEffect(() => {
    setList(items)
  }, [items])

  function isDragged(id: number): boolean {
    return dragAndDrop && dragAndDrop.draggedTo === id
  }

  const onDragStart = event => {
    const initialPosition = Number(event.currentTarget.dataset.position)

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    })

    event.dataTransfer.setData('text/html', '')
  }

  const onDragOver = event => {
    event.preventDefault()
    let newList = dragAndDrop.originalOrder
    const draggedFrom = dragAndDrop.draggedFrom
    const draggedTo = Number(event.currentTarget.dataset.position)
    const itemDragged = newList[draggedFrom]
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    )
    if (!itemDragged) return

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ]

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      })
    }
  }

  const onDrop = event => {
    setList(dragAndDrop.updatedOrder)
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    })
    afterDrop()
  }

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    })
  }

  return (
    <ul className={styles.list}>
      {list.map((item, index: number) => {
        return (
          <li
            draggable
            onDrop={onDrop}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            data-position={index}
            className={isDragged(index) ? styles.dropArea : styles.item}
            key={index}
          >
            <div>
              {item.dragIcon && item.dragIcon}
              {!item.dragIcon && <AppColor.arrowFour width={15} height={15} />}
            </div>
            {item.body}
          </li>
        )
      })}
    </ul>
  )
}

class DragListManager {
  private list: Item[] = []
  constructor() {}

  public clear(): void {
    this.list = []
  }

  public append(item: Item): void {
    this.list.push(item)
  }

  public remove(id: number): void {
    this.list = this.list.filter(el => el.id !== id)
  }

  public count(): number {
    return this.list.length
  }

  public getAll(): Item[] {
    return this.list
  }
}

export { DragList, DragListManager }
