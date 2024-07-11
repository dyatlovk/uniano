import styles from './style.module.scss'
import MessageItem, { MessageItemUser, MessageProps } from '../Message'
import MyCheckbox from '../../inputs/Checkbox'
import { useCallback, useState } from 'react'

type MessagesDisplayProps = {
  messages: MessageProps[]
  maxHeight: string
  messageColorLeft: string
  messageColorRight: string
  selectBox?: boolean
  note?: boolean
  callBack?: (state: boolean) => void
}
const MessagesDisplay = ({
  selectBox,
  messages,
  maxHeight,
  messageColorLeft,
  messageColorRight,
  note = false,
}: MessagesDisplayProps) => {
  const [selectedMessage, setMessageSelected] = useState<{
    idx: number
    state: boolean
  }>({ idx: -1, state: false })

  const onClickHandler = useCallback((e: boolean, index: number) => {
    setMessageSelected({ idx: index, state: e })
  }, [])

  return (
    <div style={{ maxHeight: maxHeight }} className={styles.messages_grid}>
      {messages.map((item, index) => (
        <div
          className={styles.message_item}
          style={{ alignSelf: item.side == 'left' ? 'start' : 'end' }}
        >
          {selectBox && item.side == 'right' && (
            <div className={styles.select_box}>
              <MyCheckbox
                borderRadius="50%"
                width="30px"
                height="30px"
                callback={e => {
                  onClickHandler(e, index)
                }}
              />
            </div>
          )}
          <MessageItem
            backgroundColor={
              note
                ? index % 2 == 0
                  ? messageColorLeft
                  : messageColorRight
                : item.side == 'left'
                  ? messageColorLeft
                  : messageColorRight
            }
            side={item.side}
            text={item.text}
            time={item.time}
            isSelected={selectedMessage.idx === index && selectedMessage.state}
          />
          {selectBox && item.side == 'left' && (
            <div className={styles.select_box}>
              <MyCheckbox
                borderRadius="50%"
                width="30px"
                height="30px"
                callback={e => {
                  onClickHandler(e, index)
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const MessagesDisplayUsers = ({
  selectBox,
  messages,
  maxHeight,
  messageColorLeft,
  messageColorRight,
  note = false,
}: MessagesDisplayProps) => {
  const [selectedMessage, setMessageSelected] = useState<number>(-1)
  const onClickHandler = useCallback((e: boolean, index: number) => {
    console.log(index, e)
    setMessageSelected(index)
  }, [])

  return (
    <div
      style={{ maxHeight: maxHeight, minHeight: maxHeight }}
      className={`MessagesDisplayUsersComponent ${styles.messages_grid}`}
    >
      {messages.map((item, index) => (
        <div
          className={styles.message_item}
          style={{ alignSelf: item.side == 'left' ? 'start' : 'end' }}
        >
          {selectBox && item.side == 'right' && (
            <div className={styles.select_box}>
              <MyCheckbox
                borderRadius="50%"
                width="30px"
                height="30px"
                callback={e => {
                  onClickHandler(e, index)
                }}
              />
            </div>
          )}
          <MessageItemUser
            backgroundColor={
              note
                ? index % 2 == 0
                  ? messageColorLeft
                  : messageColorRight
                : item.side == 'left'
                  ? messageColorLeft
                  : messageColorRight
            }
            side={item.side}
            text={item.text}
            time={item.time}
            isSelected={selectedMessage === index}
          />
          {selectBox && item.side == 'left' && (
            <div className={styles.select_box}>
              <MyCheckbox borderRadius="50%" width="30px" height="30px" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MessagesDisplay
