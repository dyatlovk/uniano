import { useEffect } from 'react'
import styles from './style.module.scss'

type ResponsiveLayoutTwo = {
    item1: React.ReactNode
    item2: React.ReactNode
    item1MaxWidth: string
    item2MaxWidth: string
    gap: string
    orderItem1Mobile?: number
    orderItem2Mobile?: number
    orderItem1Desktop?: number
    orderItem2Desktop?: number
    item1ToAModalLeftMobile?: boolean
    item0MobileWhenModal?: React.ReactNode;
    showModal?: boolean;
    callbackModal?: (item:boolean) => void;
}
const ResponsiveLayoutTwo = ({
    item1ToAModalLeftMobile,
    item1,
    item1MaxWidth,
    item2MaxWidth,
    item2,
    gap,
    orderItem1Desktop,
    orderItem1Mobile,
    orderItem2Desktop,
    orderItem2Mobile,
    item0MobileWhenModal,
    showModal,
    callbackModal
}: ResponsiveLayoutTwo) => {
    const styleItem = {
        '--maxWidth1': item1MaxWidth,
        '--maxWidth2': item2MaxWidth,
        '--order1M': orderItem1Mobile ?? 0,
        '--order2M': orderItem2Mobile ?? 1,
        '--order1D': orderItem1Desktop ?? 0,
        '--order2D': orderItem2Desktop ?? 1,
        '--gap': gap,
        display: 'flex',
    }
    
    const height = window.innerHeight;
    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    },[showModal])
    return (
        <div style={styleItem} className={styles.main_part}>
            <div className={styles.left_item_modal}>{item0MobileWhenModal}</div>
            <div className={`${styles.left_part} ${item1ToAModalLeftMobile ? styles.modal : styles.no_modal}
                 ${showModal ? styles.show_modal : styles.hide_modal}`}><div style={{width: '100%'}} className={showModal && styles.overflow_modal}>{item1}</div></div>
            {showModal && <div onClick={() => {callbackModal(false)}} className={styles.modal_remove}></div>}
            <div className={styles.right_part}>{item2}</div>
        </div>
    )
}

export default ResponsiveLayoutTwo
