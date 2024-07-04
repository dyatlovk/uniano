
import InputBarChat from '@common/components/ui/Chat/InputBar/index';
import { MessagesDisplayUsers } from '@common/components/ui/Chat/MessagesDisplay/index';
import styles from './style.module.scss';

const GeneralChat = () => {

    return (
        <div>
             <MessagesDisplayUsers 
               maxHeight='calc(50vh - 80px)'
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
                    time: '12:30'
                },
              
               ]}
             />
  
             <InputBarChat />
        </div>
      );
};

export default GeneralChat;