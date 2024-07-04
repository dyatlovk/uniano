
import styles from './style.module.scss';

type AnimateHeightProps = {
    children: React.ReactNode;
    show: boolean;
}
const AnimateHeight = ({children,show}:AnimateHeightProps) => {

    return (
      <div className={`${styles.grid_item} ${show ? styles.show : ''}`}>
           <div>{children}</div>
      </div>
    );
};

export default AnimateHeight;