
import styles from './style.module.scss';

type DynamicPaddingProps = {
    mobile?: string;
    desktop?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
}
const DynamicPadding = ({ mobile='30px', desktop='50px', side='top' }: DynamicPaddingProps) => {
    const styleSide = styles[side];
  
    return <div className={`${styles.dynamic_padding} ${styleSide}`} style={{ '--tablet-padding': mobile, '--desktop-padding': desktop } as React.CSSProperties}></div>;
  };
  
  export default DynamicPadding;    