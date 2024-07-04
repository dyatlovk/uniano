import cl from './Typography.module.scss'

const allVariants: Record<string, React.FC<React.HTMLProps<any>>> = {
  title: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  titleSmall: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  titleBig: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  subtitle: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
  body1: ({ children, ...props }) => <span {...props}>{children}</span>,
  body2: ({ children, ...props }) => <p {...props}>{children}</p>,
  body3: ({ children, ...props }) => <p {...props}>{children}</p>,
  body4: ({ children, ...props }) => <p {...props}>{children}</p>,
  body5: ({ children, ...props }) => <p {...props}>{children}</p>,
  body6: ({ children, ...props }) => <p {...props}>{children}</p>,
  body7: ({ children, ...props }) => <p {...props}>{children}</p>,
  body8: ({ children, ...props }) => <p {...props}>{children}</p>,
  body9: ({ children, ...props }) => <p {...props}>{children}</p>,
  inputText: ({ children, ...props }) => <p {...props}>{children}</p>,
};


type VariantListTypes =
    | 'title'
    | 'titleBig'
    | 'titleSmall'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'body7'
    | 'body8'
    | 'body9'
    | 'inputText';
type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit' | 'start';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial';
export type fontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type TextDecoration = 'none' | 'underline' | 'overline' | 'line-through' | 'initial' | 'inherit';
type TextDecorationStyle = 'dashed'
type TextFontStyle = 'italic'

interface TypographyProps {
  variant?: VariantListTypes;
  color?: string;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  children?: React.ReactNode;
  [x: string]: any;
  fontWeight?: fontWeight;
  textLineHeight?: string;
  textDecoration?: TextDecoration;
  textDecorationStyle?: TextDecorationStyle
  fontSizeStatic?: string;
  fontStyle?: TextFontStyle;
  className?: string;
}

const Typography = ({
    variant,
    color,
    fontSizeStatic,
    children,
    textAlign,
    textTransform,
    style,
    textLineHeight,
    fontWeight,
    textDecoration,
    className,
    textDecorationStyle,
    fontStyle,
    ...props
}: TypographyProps) => {
    const Component = variant
        ? allVariants[variant]
        : allVariants['body1']
    const dynamicClassName = variant ? cl[variant] : cl['body1']

    return (
        <Component
            {...props}
            className={`${dynamicClassName} ${className ? className : ''}`}
            style={{
                fontStyle: fontStyle,
                fontSize: fontSizeStatic,
                textDecorationStyle: textDecorationStyle,
                textDecoration: textDecoration,
                transition: 'all 0.3s ease',
                fontWeight: fontWeight,
                lineHeight: textLineHeight,
                color: color,
                textAlign: textAlign,
                textTransform: textTransform,
                ...style,
            }}>
            {children}
        </Component>
    )
}

export default Typography;