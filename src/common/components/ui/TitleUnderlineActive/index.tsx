
import HorizontalLine from '../Lines/HorizontalLine';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

type TitleUnderlineActiveProps = {
    title: string;

}
const TitleUnderlineActive = ({title}:TitleUnderlineActiveProps) => {

    return (
      <div className={styles.wrapper}>
          <div style={{width: '100%'}}>
               <div className={styles.title_cell}>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
               </div>
               <HorizontalLine />
          </div>
      </div>
    );
};

export default TitleUnderlineActive;