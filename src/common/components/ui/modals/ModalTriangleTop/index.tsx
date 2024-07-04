
import styles from './style.module.scss';

type ModalTriangleTopProps = {
    contentNode: React.ReactNode;
    isActive:boolean;
    padding?: string;
}
const ModalTriangleTop = ({contentNode,isActive,padding}:ModalTriangleTopProps) => {

    return (
      <div style={{padding: padding,display: isActive ? 'block' : 'none'}} className={styles.wrapper}>
           {contentNode}
      </div>
    );
};

export default ModalTriangleTop;