import AppColor from '@common/styles/variables-static'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '../../../Dropdown/Base'
import styles from './style.module.scss'

type Group = DetailsTable.Filter.Group

interface Props {
  data: Group[]
  initActiveGroup: string
  onSelect: (group: Group | null) => void
}
const Filters = ({ data, onSelect, initActiveGroup }: Props): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(initActiveGroup)
  const [placeholder, setPlaceholder] = useState<ReactNode>('')

  const [allFilterTitle, setAllFilterTitle] = useState<string[]>([])

  const findActive = useCallback(
    (title?: string) => {
      if (!title) return null
      if (title.length === 0) return null
      const found = data.find(el => el.title === title)
      if (!found) return null
      return found
    },
    [data]
  )

  useEffect(() => {
    let titles: string[] = []
    data.map(el => titles.push(el.title))
    setAllFilterTitle(titles)
  }, [data])

  useEffect(() => {
    const active = findActive(initActiveGroup)
    const id = data.indexOf(active)
    onSelect(active)
    setSelectedItem({ id: id, listNode: active.title })
  }, [])

  return (
    <>
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <div className={styles.dropdown}>
          <DropDownBase
            useOverlappedList={true}
            selectBoxInnerSpace={false}
            css={{
              boxShadow: 'none',
            }}
            listCss={{
              boxShadow: 'none',
              padding: '15px',
            }}
            listWrapperCss={{
              marginTop: '10px',
              paddingTop: '0',
              top: '100%',
              width: 'fit-content',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            selectBoxCss={{
              justifyContent: 'center',
              padding: '5.5px 14px',
              boxShadow: 'none',
              border: 'transparent',
            }}
          >
            {allFilterTitle.map((filter, id) => (
              <DropDownSimpleItem
                key={id}
                css={{
                  padding: '5.5px 14px',
                  borderRadius: AppColor.borderRadius,
                }}
                onSelect={(id: number) => {
                  onSelect(findActive(filter))
                }}
                data={{
                  id: id,
                  listNode: filter,
                }}
              />
            ))}
          </DropDownBase>
        </div>
      </DropDownContext.Provider>
    </>
  )
}

export default Filters
