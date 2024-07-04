
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import { useEffect, useState } from 'react';

type ButtonsSelectListProps = {
    text: string[];
    callback: (item:string[]) => void;
    gap: string;
}
const ButtonsSelectList = ({callback,text,gap}:ButtonsSelectListProps) => {
    const [activeButton, setActiveButton] = useState<string[]>([]);

    useEffect(() => {
        callback(activeButton);
        
    },[activeButton])
    const handleClick = (item:string) => {
        if(activeButton.includes(item)) {
            setActiveButton(activeButton.filter(button => button != item));
            return
        }
        setActiveButton(prev => [...prev,item]);
    }
    return (
        <div style={{ gap: gap }} className={styles.buttons_wrapper}>
            {text.map((item) => (
                <div
                    onClick={() => {
                        handleClick(item)
                    }}
                    style={{
                        border: `1px solid ${
                            activeButton.includes(item)
                                ? AppColor.orange
                                : AppColor.transparent
                        }`,
                    }}
                    className={styles.button_item}
                    >
                    <Typography
                        variant="body4"
                        fontWeight={
                            activeButton.includes(item) ? '500' : '400'
                        }
                        color={
                            activeButton.includes(item)
                                ? AppColor.orange
                                : AppColor.text
                        }>
                        {item}
                    </Typography>
                </div>
            ))}
        </div>
    )
};

export default ButtonsSelectList;
