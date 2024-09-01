import {
  DropDownBase,
  DropDownContext,
} from '@common/components/ui/Dropdown/Base/index'
import styles from '@common/components/ui/Dropdown/Base/shared/style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import { ReactNode, useContext, useEffect, useState } from 'react'

const UserStep = ({ onReady }: Props): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select User')

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
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          selectBoxCss={{
            height: '50px',
            padding: '13px 20px',
          }}
        >
          <DropDownUser
            key={1}
            css={{ padding: '13px 20px' }}
            onSelect={onReady}
            data={{
              id: 1,
              Name: 'Artem',
              listNode: (
                <UserAvatar
                  width="22px"
                  height="22px"
                  active={true}
                  variant={'image'}
                  margin="0"
                  name={'Artem'}
                />
              ),
            }}
          />
          <DropDownUser
            key={2}
            onSelect={onReady}
            css={{ padding: '13px 20px' }}
            data={{
              id: 2,
              Name: 'User',
              listNode: (
                <UserAvatar
                  width="22px"
                  height="22px"
                  active={false}
                  variant={'image'}
                  margin="0"
                  name={'User'}
                />
              ),
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

interface UserDropDownItem extends DropDown.Item {
  Name: string
}

interface UserProps {
  data: UserDropDownItem
  css?: React.CSSProperties
  onSelect?: (userName: string) => void
}

const DropDownUser = ({ data, css, onSelect }: UserProps): JSX.Element => {
  const { setSelectedItem, setVisible, setSelectedNode, selectedItem } =
    useContext<DropDown.Context>(DropDownContext)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (!selectedItem) return
    setIsActive(selectedItem.id === data.id)
  }, [data.id, selectedItem])

  return (
    <div
      style={css}
      className={styles.simple_item}
      onClick={() => {
        setSelectedItem(data)
        setVisible(false)
        setSelectedNode(
          <>
            {data.listNode}
            <Typography>{data.Name}</Typography>
          </>
        )
        onSelect(data.Name)
        setIsActive(prev => !prev)
      }}
    >
      {data.listNode}
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.Name}
      </Typography>
    </div>
  )
}

interface Props {
  onReady: (title: string) => void
}

export default UserStep
