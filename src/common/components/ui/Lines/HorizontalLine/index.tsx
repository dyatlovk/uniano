
import styles from './style.module.scss';

const HorizontalLine = ({width}: {width?:string}) => {

    return (
      <div style={width != null ? {width: width} : {}} className={styles.line}>
           
      </div>
    );
};

export default HorizontalLine;