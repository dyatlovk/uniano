import { MessagesDisplayUsers } from '@common/components/ui/Chat/MessagesDisplay/index'
import styles from './style.module.scss'
import { useRef } from 'react'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import AppColor from '@common/styles/variables-static'

const GeneralChat = () => {
  return (
    <div className={`MessagesDisplayUsers ${styles.messages_chat_wrapper}`}>
      <MessagesDisplayUsers
        maxHeight="auto"
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
            time: '12:30',
          },
          {
            side: 'right',
            text: 'I need help with my project',
            time: '12:01',
          },
          {
            side: 'left',
            text: 'Hello, how can I help you?',
            time: '12:30',
          },
          {
            side: 'right',
            text: 'I need help with my project',
            time: '12:01',
          },
          {
            side: 'left',
            text: 'Hello, how can I help you?',
            time: '12:30',
          },
        ]}
      />

      <InputBarChat />
    </div>
  )
}

const InputBarChat = () => {
  const inputFileRef = useRef(null)

  const handleClickFile = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  return (
    <div className={styles.input_wrapper}>
      <InputCommon
        icon={
          <div
            onClick={handleClickFile}
            className="cursor"
            style={{ position: 'relative' }}
          >
            <input
              ref={inputFileRef}
              type="file"
              className={`${styles.input_abs}`}
            />
            <AppColor.attach />
          </div>
        }
        callback={() => {}}
        placeholder="Message"
        disableClose={true}
        padding="15px 100px 15px 50px"
        width="100%"
      />
      <div className={styles.right_abs}>
        <AppColor.smile />
        <AppColor.sendEmail />
      </div>
    </div>
  )
}

export default GeneralChat
