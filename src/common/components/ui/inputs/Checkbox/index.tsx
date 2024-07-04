import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'

type MyCheckboxProps = {
    width: string
    height: string
    callback?: (isTrue: boolean) => void
    basicValue?: boolean
    checkWidth?: string;
    checkHeight?: string;
    borderRadius?: string;

    disabled?: boolean;
}
const MyCheckbox = ({
    width,
    height,
    callback,
    checkHeight='12px',
    borderRadius='5px',
    checkWidth='12px',
    basicValue = false,
    disabled=false
}: MyCheckboxProps) => {
    const [isTrue, setIsTrue] = useState(basicValue)

    useEffect(() => {
        setIsTrue(basicValue);
    },[basicValue])
    function handleChange(item:boolean) {
        if(!disabled) {
            if(callback != null) {
                callback(item)
            }
            setIsTrue(item)
        }
    }
    return (
        <div
            className={styles.checkbox}
            style={
                !isTrue
                    ? {
                          backgroundColor: 'white',
                          boxShadow:
                              '-1px 1px 6px 2px rgba(0,0,0,0.11)',
                              maxWidth:width,maxHeight:height,width:width,height:height,borderRadius: borderRadius,minHeight: height,minWidth: width
                      }
                    : {
                        maxWidth:width,maxHeight:height,width:width,height:height,borderRadius: borderRadius,minHeight: height,minWidth: width
                    }
            }
            onClick={() => {
                handleChange(!isTrue);
            }}>
            {isTrue && <AppColor.singTrue width={checkWidth} height={checkHeight} stroke="white" />}
        </div>
    )
}

export default MyCheckbox
