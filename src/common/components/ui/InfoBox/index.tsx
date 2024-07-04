
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';

type InfoBox = {
    
}
const InfoBox = () => {

    return (
      <div className={styles.info_box}>
           <AppColor.info />
      </div>
    );
};

export default InfoBox;