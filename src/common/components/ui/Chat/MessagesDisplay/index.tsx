
import styles from './style.module.scss';
import MessageItem, { MessageItemUser, MessageProps } from '../Message';
import MyCheckbox from '../../inputs/Checkbox';

type MessagesDisplayProps = {
    messages: MessageProps[];
    maxHeight: string;
    messageColorLeft: string;
    messageColorRight: string;
    selectBox?: boolean
    note?: boolean;
}
const MessagesDisplay = ({selectBox,messages,maxHeight,messageColorLeft,messageColorRight,note=false}:MessagesDisplayProps) => {

    return (
      <div style={{maxHeight: maxHeight}} className={styles.messages_grid}>
           {messages.map((item,index) => <div className={styles.message_item} style={{alignSelf: item.side == 'left' ? 'start' : 'end'}}>
           {selectBox && item.side == 'right' && <div className={styles.select_box}><MyCheckbox borderRadius='50%' width='30px' height='30px'/></div>}
            <MessageItem 
                backgroundColor={note ? (index % 2 == 0 ? messageColorLeft : messageColorRight) : item.side == 'left' ? messageColorLeft : messageColorRight}
                side={item.side}
                text={item.text}
                time={item.time}
           />
           {selectBox && item.side == 'left' && <div className={styles.select_box}><MyCheckbox borderRadius='50%' width='30px' height='30px'/></div>}
           </div>)}
      </div>
    );
};

export const MessagesDisplayUsers = ({selectBox,messages,maxHeight,messageColorLeft,messageColorRight,note=false}:MessagesDisplayProps) => {

    return (
      <div style={{maxHeight: maxHeight,minHeight: maxHeight}} className={styles.messages_grid}>
           {messages.map((item,index) => <div className={styles.message_item} style={{alignSelf: item.side == 'left' ? 'start' : 'end'}}>
           {selectBox && item.side == 'right' && <div className={styles.select_box}><MyCheckbox borderRadius='50%' width='30px' height='30px'/></div>}
            <MessageItemUser 
                backgroundColor={note ? (index % 2 == 0 ? messageColorLeft : messageColorRight) : item.side == 'left' ? messageColorLeft : messageColorRight}
                side={item.side}
                text={item.text}
                time={item.time}
           />
           {selectBox && item.side == 'left' && <div className={styles.select_box}><MyCheckbox borderRadius='50%' width='30px' height='30px'/></div>}
           </div>)}
      </div>
    );
};

export default MessagesDisplay;