import AppColor from '@common/styles/variables-static';
import styles from './MyButton.module.scss'
import { MyButtonProps } from './models';

const MyButton = ({
    children,
    onClick,
    color,
    hoverColor,
    padding,
    border,
    borderHover,
    borderRadius,
    fontWeight,
    textColor,
    textSize,
    hoverTextColor,
    width,
    textTransform,
    disabled,
}: MyButtonProps) => {
    const style = !disabled ? {
        '--backgroundColor': color ?? 'transparent',
        '--padding': padding ?? '10px 12px',
        '--hoverBcColor': hoverColor ?? AppColor.orange,
        '--border': border ?? `1px solid ${AppColor.orange}`,
        '--hoverBorder': borderHover ?? `1px solid ${AppColor.orange}`,
        '--borderRadius': borderRadius ?? '20px',
        'pointer-events': 'all',
        '--textSize': textSize ?? '1rem',
        '--textColor': textColor ?? AppColor.orange,
        '--fontWeight': fontWeight ?? '400',
        '--hoverTextColor': hoverTextColor ?? 'white',
        '--width': width ?? 'auto',
        '--textTransform': textTransform,
    } : {
        '--backgroundColor': color ?? 'transparent',
        '--padding': padding ?? '10px 12px',
        '--hoverBcColor': color ?? 'transparent',
        '--border': border ?? `1px solid ${AppColor.orange}`,
        '--hoverBorder': border ?? `1px solid ${AppColor.orange}`,
        '--borderRadius': borderRadius ?? '20px',
        'border': border,
        '--textSize': textSize ?? '1rem',
        '--textColor': textColor ?? AppColor.orange,
        '--fontWeight': fontWeight ?? '400',
        '--hoverTextColor': textColor ?? AppColor.orange,
        '--width': width ?? 'auto',
        '--textTransform': textTransform,
        'opacity': !disabled ? '1' : '0.3',
        cursor: 'auto'
    }
    return (
        <button
            style={style}
            onClick={onClick}
            className={styles.button}
            disabled={disabled}
            >
            {children}
        </button>
    )
}

export default MyButton;