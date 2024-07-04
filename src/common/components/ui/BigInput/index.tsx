
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import AppColor from '@common/styles/variables-static';
import MyButtonOrange from '../MyButton/variants/MyButtonOrange';
import SizeBox from '../SizeBox';
import MyButtonTransparent from '../MyButton/variants/MyButtonTransparent';

type BigInputProps = {

}
const BigInput = () => {
    const [text, setText] = useState('');
    const [selectedText,setSelectedText] = useState('');
    const [showMarkdown,setShowMarkdown] = useState(false)

    useEffect(() => {
        if(selectedText.length > 0) {
            setShowMarkdown(true);
            
        } else {
            setShowMarkdown(false)
        }
    },[selectedText])

    const handleSelect = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const selectedText = event.currentTarget.value.substring(
            event.currentTarget.selectionStart,
            event.currentTarget.selectionEnd
        );
        setSelectedText(selectedText);
    };
    
    return (
      <div className={styles.wrapper_input_field}>
            <textarea onSelect={handleSelect} maxLength={3000}  value={text} onChange={(event) => setText(event.currentTarget.value)} />
            <AbsoluteMarkdown  show={showMarkdown} />
           <div className={styles.bottom_part_wrapper}>
    
                <Typography variant='body4' color={AppColor.transparentBlack}>{text.length} / 3000</Typography>
                <MyButtonOrange textTransform='uppercase' onClick={() => {}}> <AppColor.moveOn /> Publish review</MyButtonOrange>
           </div>
      </div>
    );
};


type BigInputOutsideProps = {

}
export const BigInputOutside = ({callback,initValue}: {callback:(item:string) => void,initValue?: string;}) => {
    const [text, setText] = useState(initValue ?? '');
    const [selectedText,setSelectedText] = useState('');
    const [showMarkdown,setShowMarkdown] = useState(false)

    useEffect(() => {
        if(selectedText.length > 0) {
            setShowMarkdown(true);
            
        } else {
            setShowMarkdown(false)
        }
    },[selectedText])

    const handleSelect = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const selectedText = event.currentTarget.value.substring(
            event.currentTarget.selectionStart,
            event.currentTarget.selectionEnd
        );
        setSelectedText(selectedText);
    };
    
    return (
      <div className={styles.flex_end}>
          <div className={styles.wrapper_input_field}>
                <textarea onSelect={handleSelect} maxLength={3000}  value={text} onChange={(event) => {
                    setText(event.currentTarget.value)
                    callback(event.currentTarget.value)
                }} />
                <AbsoluteMarkdown  show={showMarkdown} />
          </div>
          <SizeBox height='10px'/>
          <Typography variant='body4' color={AppColor.transparentBlack}>{text.length} / 3000</Typography>
      </div>
    );
}

type BigInputNoBorderProps = {
    callback:(item:string) => void;
    initValue?: string;
    modalClose?: (item:boolean) => void;
}
export const BigInputNoBorder = ({callback,initValue,modalClose}: BigInputNoBorderProps) => {
    const [text, setText] = useState(initValue ?? '');
    const [selectedText,setSelectedText] = useState('');
    const [showMarkdown,setShowMarkdown] = useState(false)

    useEffect(() => {
        if(selectedText.length > 0) {
            setShowMarkdown(true);
            
        } else {
            setShowMarkdown(false)
        }
    },[selectedText])

    const handleSelect = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const selectedText = event.currentTarget.value.substring(
            event.currentTarget.selectionStart,
            event.currentTarget.selectionEnd
        );
        setSelectedText(selectedText);
    };
    
    return (
      <div className={styles.flex_start}>
          <div className={styles.wrapper_input_field_no_border}>
                <textarea onSelect={handleSelect} maxLength={3000} value={text}  onChange={(event) => {
                    setText(event.currentTarget.value)
                }} />
                <AbsoluteMarkdown  show={showMarkdown} />
          </div>
          <SizeBox height='10px'/>
         <div style={{width: '100%'}} className='flex_space_between'>
            <Typography variant='body4' color={AppColor.transparentBlack}>{text.length} / 3000</Typography>
                <div className='gap_10'>
                    <MyButtonTransparent onClick={() => {
                        modalClose(false);
                    }} fontWeight='500' textTransform='uppercase'>
                    Cancel
                    </MyButtonTransparent>
                    <MyButtonOrange onClick={() => {
                        modalClose(false);
                        callback(text);
                    }} fontWeight='500' textTransform='uppercase'>
                    Save
                    </MyButtonOrange>
                </div>
         </div>
      </div>
    );
}

type AbsoluteMarkdownProps = {
    show: boolean
}
const AbsoluteMarkdown = ({show}:AbsoluteMarkdownProps) => {
    return (
        <div style={{display: show ? 'flex' : 'none'}} className={styles.absolute_select}>
                <div className={styles.activity_item}>
                    <Typography textLineHeight='1' variant='body4' fontWeight='400' color='white'>Normal text</Typography>
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <AppColor.textAlingleft />
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <div className={styles.color_box}></div>
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <AppColor.bold />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.cursive />
        
                </div>
                <div className={styles.activity_item}>
                    <AppColor.underline />
        
                </div>
                <div className={styles.activity_item}>
                    <AppColor.idontknow />
          
                </div>
                <div className='gap_5'>
                    <AppColor.ul />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.ol />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.pin />
         
                </div>
                <div className={styles.activity_item}>
                    <AppColor.image />
         
                </div>
                <div className={styles.activity_item}>
                    <AppColor.code fill='white' />
     
                </div>
            </div>
    )
}

export default BigInput;