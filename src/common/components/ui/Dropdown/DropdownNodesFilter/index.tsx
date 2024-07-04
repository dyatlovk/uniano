import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import {useEffect, useState} from 'react';
import Typography from "../../Typography/Typography";
import BigFilter from "../../BigFilter";
import SizeBox from "../../SizeBox";
import { ReviewsNoBorder } from "@common/components/ReviewsProgram/index";
import { fakeUserConstant } from "@common/models/user";
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import DropdownNumber from "../../SearchFilterBar/components/DropdownNumber";

type DropdownNodeFilterProps = {
    title:string;
    countNotifications: number;
    filters: string[];
    dropnodes?: React.ReactNode;
    noneIcon?: any;
    noneTitle?: string;
    noneText?: string;
    noneButton?: any;
    textAfterCount?: any;
    alwaysActive?: boolean;

}
const DropdownNodeFilter = ({title,countNotifications,dropnodes,filters,alwaysActive,noneText,noneTitle,noneButton,noneIcon,textAfterCount}:DropdownNodeFilterProps) => {
    const [isActive,setIsActive] = useState(alwaysActive ?? false);
    useEffect(() => {
        if(countNotifications == 0) {
            setIsActive(true);
        }
    },[])
    const [categoryActiveIndex,setCategoryActiveIndex] = useState(0);
    function changeState(event: any) {
        if(countNotifications > 0 && !alwaysActive) {
            setIsActive((prev) => !prev);
        }
    }
    return (
      <div className={styles.wrapper}>
           <div onClick={(event) => {changeState(event)}} className={styles.title_block}>
                <div className={styles.title_shell}>
                    <div className="gap_10">
                        <Typography variant="body3" color={isActive ? '#515151' : AppColor.colorWithOpacity('#515151', 0.5)}>
                            {title}
                        </Typography>
                        {countNotifications > 0 ? <span className={styles.count_notifications}> <Typography textLineHeight="100%" variant="body3" fontWeight="500" color="white"> {countNotifications}</Typography></span> : <></>}
                    </div>
                    {textAfterCount}
                </div>

                <div className={styles.filter_all_wrapper}>
                {filters.map((filter,index) =>
                    <FilterItem
                        text={filter}
                        activeIndex={categoryActiveIndex}
                        itemIndex={index}
                        onClick={() => { setCategoryActiveIndex(index)}}
                    />
                )}
                </div>

                {countNotifications > 0
                ? <div className="desktop"><DropdownNumber /></div>
                : <></>
                }
           </div>
           <div className={`${isActive ? styles.description_block_active :styles.description_block}`}>
                <div className={styles.horizontal_line}></div>
                <div className={styles.padding_reviews}>
                <BigFilter />
                <div className={styles.horizontal_line}></div>
                <SizeBox height="30px" />
                <ReviewsNoBorder likes="55" money="200" text="Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to."
                 user={fakeUserConstant} images={[test1,test2,test3]} addInfo={
                    {
                        icon: <AppColor.caseIcon height={'22px'} />,
                        text: 'Musguard OMNI: Rollable Bicycle Mudguards',
                        users: [fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant]
                    }
                 } afterPriceNode={
                    <div className="gap_10">
                        <AppColor.cart height={'25px'} width={'28px'} fill={AppColor.text} />
                        <AppColor.flag height={'25px'} width={'22px'} />
                    </div>
                 }
                />
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
}
const FilterItem = ({activeIndex,itemIndex,text,onClick}:FilterItemProps) => {
    const active = activeIndex == itemIndex;
    return ( 
        <div onClick={onClick} className={styles.filter_wrapper} style={{border: `1px solid ${active ? AppColor.orange : 'transparent'}`}}>
            <Typography variant="body4" fontWeight={active ? '500' : '400'} color={active ? AppColor.orange : AppColor.text}> {text} </Typography>
        </div>
    )
}

export default DropdownNodeFilter;