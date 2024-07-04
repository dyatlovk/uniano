import { useState } from 'react'
import styles from './style.module.scss'
import Typography from '../ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'

type ButtonChooseListProps = {
    callback: (item: string) => void
    buttons: string[]
    buttonPadding: string
    initValue?: string
    gap: string
}
const ButtonChooseList = ({
    buttonPadding,
    buttons,
    callback,
    initValue,
    gap,
}: ButtonChooseListProps) => {
    const [activeButton, setActiveButton] = useState(initValue)
    return (
        <div style={{ gap: gap }} className={styles.buttons_wrapper}>
            {buttons.map((item) => (
                <div
                    onClick={() => {
                        callback(item);setActiveButton(item)
                    }}
                    style={{
                        border: `1px solid ${
                            activeButton == item
                                ? AppColor.orange
                                : AppColor.transparent
                        }`,
                        padding: buttonPadding
                    }}
                    className={styles.button_item}
                    >
                    <Typography
                        variant="body4"
                        fontWeight={
                            item == activeButton ? '500' : '400'
                        }
                        color={
                            item == activeButton
                                ? AppColor.orange
                                : AppColor.text
                        }>
                        {item}
                    </Typography>
                </div>
            ))}
        </div>
    )
}

export default ButtonChooseList
