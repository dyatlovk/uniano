
import styles from './style.module.scss';

type CenterShadowBoxProps = {
    elements: React.ReactNode[];
    gap: string;
    paddingBoxDesktop: string;
    paddingBoxMobile?: string;
    direction?: 'column' | 'row';
    absoluteItem?: React.ReactNode;
    align?: 'center' | 'start' | 'end'
}
const CenterShadowBox = ({direction,elements,gap,paddingBoxDesktop,absoluteItem,paddingBoxMobile,align}:CenterShadowBoxProps) => {
    const styleBox = {
        '--gap': gap,
        '--paddingMobile': paddingBoxMobile ?? paddingBoxDesktop,
        '--paddoingDesktop': paddingBoxDesktop,
        '--align': align as string ?? 'center',
        '--direction': direction ?? 'column',
        border: 'none'
    }
    return (
      <div style={styleBox} className={styles.box_shadow}>
        <div className={styles.absolute_node}>{absoluteItem}</div>
           {...elements}
      </div>
    );
};

export default CenterShadowBox;