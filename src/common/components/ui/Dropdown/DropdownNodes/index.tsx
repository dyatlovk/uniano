import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import {useEffect, useState} from 'react';
import Typography from "../../Typography/Typography";
import DropdownNumber from "../../SearchFilterBar/components/DropdownNumber";

type DropdownNodeProps = {
    title:string;
    countNotifications: number;
    filters: {
        hasChildren: boolean;
        title: string;
    }[];
    dropnodes?: React.ReactNode;
    noneIcon?: any;
    noneTitle?: string;
    noneText?: string;
    noneButton?: any;
    textAfterCount?: any;
    callback?: (item:string) => void;
    nodeAfterTitle?: React.ReactNode;

}
const DropdownNode = ({title,countNotifications,nodeAfterTitle,dropnodes,filters,noneText,noneTitle,noneButton,noneIcon,textAfterCount,callback}:DropdownNodeProps) => {
   
    
    
    const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);
    return (
      <div className={styles.wrapper}>
           <div  className={styles.title_block}>
                <div className={`gap_10 ${styles.full_mobile_width}`}>
                    <div className={styles.title_shell}>
                        <Typography variant="body3" color={AppColor.text}>
                            {title}
                        </Typography>
                        {countNotifications > 0 ? <span className={styles.count_notifications}> <Typography textLineHeight="100%" variant="body3" fontWeight="500" color="white"> {countNotifications}</Typography></span> : <></>}
                        {textAfterCount}
                        {nodeAfterTitle && nodeAfterTitle}
                    </div>
                    <div style={{marginLeft: 'auto'}} className="mobile">
                    {countNotifications > 0
                    ? <div  className={styles.close_chevron}>
                    <DropdownNumber />
                </div>
                : <></>
                }
                    </div>
                </div>

                <div className={styles.filter_all_wrapper}>
                {filters.map((filter,index) =>
                    <FilterItem
                        hasChildren={filter.hasChildren}
                        text={filter.title}
                        activeIndex={categoryActiveIndex}
                        itemIndex={index}
                        onClick={() => { setCategoryActiveIndex(index); callback(filter.title);}}
                    />
                )}
                </div>

                <div className="desktop">
                {countNotifications > 0
                ? <div className={styles.close_chevron}>
                <DropdownNumber />
                </div>
                : <></>
                }
                </div>
           </div>
           <div className={styles.description_block_active}>
                <div className={styles.horizontal_line}></div>
                <div className={styles.nodes_hover_wrapper}>
                    {dropnodes != null
                    ? dropnodes
                    : 
                    <div className={styles.none_wrapper}>
                      <div className={styles.icon_wrapper_none}>
                      {noneIcon}
                      </div>
                        <Typography variant="body2" fontWeight="500">{noneTitle}</Typography>
                        <Typography variant="body1" fontWeight="400" color={AppColor.transparentBlack}>{noneText}</Typography>
                        {noneButton}
                    </div>
                    }
                </div>
           </div>
      </div>
    );
};

type FilterItemProps = {
    text: string;
    activeIndex: number;
    itemIndex: number;
    onClick: any;
    hasChildren: boolean;
}
const FilterItem = ({activeIndex,itemIndex,text,onClick,hasChildren}:FilterItemProps) => {
    const active = activeIndex == itemIndex;
    return ( 
        <div onClick={() => {
            if(hasChildren) {
                onClick();
            }
        }} className={styles.filter_wrapper} style={{border: `1px solid ${active ? AppColor.orange : 'transparent'}`}}>
            <Typography variant="body4" fontWeight={active ? '500' : '400'} color={active ? AppColor.orange : !hasChildren ? AppColor.transparentBlack : AppColor.text}> {text} </Typography>
        </div>
    )
}

export default DropdownNode;