import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import { useState } from 'react'
import { useHover } from '@common/helpers/useHover';

type InputCommonProps = {
    placeholder: string;
    callback: (item:string) => void;
    padding?: string;
    rightPadding?: number;
    textAlingCenter?: boolean;
    backgroundColor?: string;
    textColor?: string;
    type?: React.HTMLInputTypeAttribute;
    width?: string;
    icon?: React.ReactNode;
    initText?: string;
    multiLine?: boolean;
    disableClose?: boolean
    borderRadius?: string;
    boxShadowNone?: boolean;
    maxSymbolCount?: number;
    endNode?: React.ReactNode;
}
const InputCommon = ({boxShadowNone,endNode,borderRadius,maxSymbolCount,multiLine,disableClose=false,initText='',width, icon,placeholder,callback,padding,rightPadding,textAlingCenter=false,backgroundColor,textColor,type }: InputCommonProps) => {
    const [text,setText] = useState(initText);

    function handleChange(item:string) {
        callback(item);
        setText(item)
    } 

    const [hovered, eventHandlers] = useHover({delayInMilliseconds: 100,hoverDelay: 50});
    return (
        <div {...eventHandlers} className={styles.wrapper} style={{width: width,height: multiLine ? '100%' : 'auto'}}>
            {icon && <div className={styles.dynamic_icon}>{icon}</div>}
          {multiLine
          ? <>
            <textarea 
            maxLength={maxSymbolCount}
            value={text}
            onChange={(item) => {handleChange(item.target.value)}}
            className={styles.input}
            style={{boxShadow: boxShadowNone && 'none',borderRadius: borderRadius ?? '20px',height: '100%',color: textColor ?? AppColor.text,padding:padding,paddingRight: `${rightPadding+20}px`,
            paddingLeft: icon ? `${rightPadding+25}px` : '15px',textAlign: textAlingCenter ? 'center' : 'start',backgroundColor: backgroundColor ?? 'white'}}
            placeholder={placeholder}
            ></textarea>
          </>
        :<>
              <input
                maxLength={maxSymbolCount}
                value={text}
                onChange={(item) => {handleChange(item.target.value)}}
                className={styles.input}
                type={type ?? 'text'}
                style={{boxShadow: boxShadowNone && 'none',borderRadius: borderRadius ?? '20px',color: textColor ?? AppColor.text,padding:padding,paddingRight: `${rightPadding+20}px`,
                paddingLeft: icon ? `${rightPadding+25}px` : '15px',textAlign: textAlingCenter ? 'center' : 'start',backgroundColor: backgroundColor ?? 'white'}}
                placeholder={placeholder}
            />
            <div onClick={() => {setText('')}} style={{opacity: text != '' && hovered && !disableClose ? '1' : '0',right: `${rightPadding}px`}} className={styles.close_icon}><AppColor.close fill={AppColor.text} width={'12px'} height={'12px'} /></div>
        </>}
        {endNode && <div className={styles.dynamic_icon_end}>{endNode}</div>}
        </div>
    )
}

export default InputCommon
