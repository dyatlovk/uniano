
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';

export type SettingsCardSecurityprops = {
    icon: any;
    title: string;
    text: string;
    onClick: () => void;
    buttonText:string;
    isSolved: boolean;
    solveText?: string;
}
const SettingsCardSecurity = ({buttonText,icon,onClick,text,title,isSolved,solveText}:SettingsCardSecurityprops) => {

    return (
      <div className={styles.wrapper}>
           <div>
               <div className={styles.top_info}>
                    {icon}
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
               </div>
               <Typography variant='body4'>{text}</Typography>
    
           </div>
           {!isSolved
           ? <MyButtonTransparentOrange padding='5px' onClick={onClick}>{buttonText}</MyButtonTransparentOrange>
            : <div className={styles.button_solve}>{solveText}</div> }
      </div>
    );
};

export default SettingsCardSecurity;