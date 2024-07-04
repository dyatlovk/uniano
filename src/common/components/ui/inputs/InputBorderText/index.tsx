
import { useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type InputBorderTextProps = {
    borderText: string;
    placeholderText: string;
    labelIcon: any;
    isRequired?: boolean;
    callback?: (item:string) => void;
    inputText?: string;
    emptyChangeColor?: boolean
    type?: string;
    prevIcon?: React.ReactNode;
    padding?: string;
    multiline?: boolean;
}
const InputBorderText = ({padding,multiline,prevIcon,emptyChangeColor=true,borderText,placeholderText,labelIcon,isRequired,callback,inputText='',type}:InputBorderTextProps) => {
    const [text,setText] = useState(inputText);
    function handleInput(event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        if(callback != null) {
            callback(event.target.value)
        }
        setText(event.target.value)
    }

    
    return (
    <div  className={styles.border_input}>
        <label htmlFor="example">{borderText} {isRequired && <span className={styles.red_text}>*</span>} </label>
        {multiline ? <textarea style={{padding: padding ?? '10px'}} value={text} onChange={(event) => handleInput(event)}
        placeholder={placeholderText} /> : <input  
        style={{backgroundColor: emptyChangeColor && text == '' ? AppColor.ligthWhite : 'white',padding: padding}}
         value={text} onChange={(event) => handleInput(event)} type={type ?? 'text'} id="example" name="example" placeholder={placeholderText}/>}
        <div style={{opacity: emptyChangeColor && text == '' ? '0.5' : '1'}} className={styles.label_icon}>
            {labelIcon}
        </div>
        {prevIcon && <div className={styles.prev_icon}>
            {prevIcon}
        </div>}
    </div>
    );
};

export default InputBorderText;