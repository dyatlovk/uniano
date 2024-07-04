
import styles from './style.module.scss';

type ModalBottomCenterProps = {
    node: React.ReactNode;
    isActive: boolean;
}
const ModalBottomCenter = ({node,isActive}:ModalBottomCenterProps) => {

    return (
      <div style={{display: isActive ? 'block' : 'none'}} className={styles.wrapper}>
            {node}
      </div>
    );
};

export default ModalBottomCenter;