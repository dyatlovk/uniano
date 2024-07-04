
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';

const filters = ['Most Recent', 'Top Rated', 'Recommended', 'Price: Low to High','Price: High to Low']
const DropdownRecent = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [activeFilter, setActiveFilter] = useState(filters[0])

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.stopPropagation()
        setShowDropdown((prev) => !prev);
    }
    return (
        <div style={{
            position: 'relative',
        }}>
            <div
                onClick={(event) => {handleClick(event)}}
                className='gap_5 cursor'>
                 <AppColor.recent />
                         <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{activeFilter}</Typography>
            </div>
            <div
                style={{ display: showDropdown ? 'block' : 'none' }}
                className={styles.absolute_list}>
                {filters.map((item) => (
                    <div className={`${styles.filter_item} cursor`}
                        onClick={() => {
                            setShowDropdown(false);
                            setActiveFilter(item)}}>
                        <Typography
                            variant="body5"
                            fontWeight={
                                item == activeFilter ? '500' : '400'
                            }>
                            {item}
                        </Typography>
                    </div>
                ))}
            </div>
            <div
                style={{ display: showDropdown ? 'block' : 'none' }}
                className={styles.triangle}></div>
        </div>
    )
};

export default DropdownRecent;