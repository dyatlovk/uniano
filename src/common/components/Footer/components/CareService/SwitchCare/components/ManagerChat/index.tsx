import { MessagesDisplayUsers } from '@common/components/ui/Chat/MessagesDisplay/index'
import styles from './style.module.scss'
import InputBarChat from '@common/components/ui/Chat/InputBar/index'

const ManagerChat = () => {
  return (
    <div className={`ManagerChat ${styles.padding}`}>
      <MessagesDisplayUsers
        maxHeight="400px"
        messageColorLeft="white"
        messageColorRight="#DDEAEF"
        messages={[
          {
            side: 'left',
            text: 'Hello, how can I help you?',
            time: '12:00',
          },
          {
            side: 'right',
            text: 'I need help with my project',
            time: '12:01',
          },
          {
            side: 'left',
            text: 'Hello, how can I help you?',
            time: '12:00',
          },
          {
            side: 'right',
            text: 'I need help with my project',
            time: '12:01',
          },
        ]}
      />

      <InputBarChat />
    </div>
  )
}

export default ManagerChat
