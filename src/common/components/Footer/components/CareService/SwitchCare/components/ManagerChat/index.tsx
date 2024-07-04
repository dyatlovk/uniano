
import MessagesDisplay, { MessagesDisplayUsers } from '@common/components/ui/Chat/MessagesDisplay/index';
import styles from './style.module.scss';
import InputBarChat from '@common/components/ui/Chat/InputBar/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';

const ManagerChat = () => {

    return (
      <div className={styles.padding}>
           <MessagesDisplayUsers 
           maxHeight='400px'
             messageColorLeft='white'
             messageColorRight='#DDEAEF'
             messages={[
                {
                    side: 'left',
                    text: 'Hello, how can I help you?',
                    time: '12:00'
                },
                {
                    side: 'right',
                    text: 'I need help with my project',
                    time: '12:01'
                },
                {
                  side: 'left',
                  text: 'Hello, how can I help you?',
                  time: '12:00'
              },
              {
                  side: 'right',
                  text: 'I need help with my project',
                  time: '12:01'
              },

             ]}
           />

           <DynamicPadding desktop='30px' mobile='20px'/>

           <InputBarChat />
           
           
      </div>
    );
};

export default ManagerChat;