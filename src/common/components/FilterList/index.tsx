
import { useState } from 'react';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../ui/Lines/HorizontalLine';
import DynamicPadding from '../ui/DynamicPadding';

type FilterListProps = {
    category?: string[];
    filters: string[];
    callback?: (item:string) => void;
    activeStartItem?: string;
    noPadding?: boolean;
}
const FilterList = ({filters,noPadding,callback,category=[],activeStartItem='All'}:FilterListProps) => {

    const [activeFilter,setActiveFilter] = useState(activeStartItem);
    const [currentCategory,setCurrentCategory] = useState(category[0]);
    function setActive(item:string) {
        if(callback != null) {
            callback(item);
        }
        setActiveFilter(item);
    } 
    return (
        <div>
             <div className={styles.wrapper}>
                 {category.length > 0 &&
                    <div className={styles.flex_center}>
                    <div style={{display: 'flex',alignItems: 'center',gap: '5px',cursor: 'pointer'}}>
                        <Typography variant="body4" fontWeight="500">
                            {currentCategory}
                        </Typography>
                        <AppColor.chevronBottom fill={AppColor.text} />
                    </div>
                    <div className={styles.vertical_lone}></div>
                    </div>
                }
                <div className={styles.filters_wrapper}>
    
                    {filters.map((filter) => (
                        <div
                            className={styles.filter_item}
                            style={noPadding ? {padding: '0px'} : {}}
                            onClick={() => {
                                setActive(filter)
                            }}>
                            <Typography
                                fontWeight={
                                    activeFilter == filter ? '500' : '400'
                                }
                                color={
                                    activeFilter == filter
                                        ? AppColor.orange
                                        : AppColor.text
                                }
                                variant="body4">
                                {filter}
                            </Typography>
                        </div>
                    ))}
                </div>
             </div>
            <DynamicPadding mobile="15px" desktop="15px" />
            <HorizontalLine />
        </div>
    )
};

type FilterListBigProps = {
    category?: string[];
    filters: string[];
    callback?: (item:string) => void;
    activeStartItem: string;
    orangeText: string;
}
export const FilterListBig = ({filters,callback,category=[],activeStartItem,orangeText}:FilterListBigProps) => {

    const [activeFilter,setActiveFilter] = useState(activeStartItem);
    const [currentCategory,setCurrentCategory] = useState(category[0]);
    function setActive(item:string) {
        if(callback != null) {
            callback(item);
        }
        setActiveFilter(item);
    } 
    return (
        <div>
             <div className={styles.wrapper}>
                 {category.length > 0 &&
                    <div className={styles.flex_center}>
                    <div style={{display: 'flex',alignItems: 'center',gap: '5px',cursor: 'pointer'}}>
                        <Typography variant="body4" fontWeight="500">
                            {currentCategory}
                        </Typography>
                        <AppColor.chevronBottom fill={AppColor.text} />
                    </div>
                    <div className={styles.vertical_lone}></div>
                    </div>
                }
                <div className={styles.filters_wrapper}>
    
                    {filters.map((filter,index) => (
                        <div
                            style={{borderBottom: `2px solid ${filter == activeFilter ? AppColor.orange : AppColor.transparent}`}}
                            className={styles.filter_item}
                            onClick={() => {
                                setActive(filter)
                            }}>
                            <Typography
                                fontWeight={
                                    activeFilter == filter || filter == orangeText ? '500' : '400'
                                }
                                textTransform={activeFilter == filter ? 'uppercase' : 'none'}
                                color={
                                    filter == orangeText && AppColor.orange
                                }
                                variant={activeFilter == filter ? 'subtitle' : 'body4'}>
                                {filter}
                            </Typography>
                        </div>
                    ))}
                </div>
             </div>
            <HorizontalLine />
        </div>
    )
};

export default FilterList;