
import { useState } from 'react';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import SwitchButton from '../ui/SwitchButton';
import MyButtonTransparentOrange from '../ui/MyButton/variants/MyButtonTransparentOrange';
import SizeBox from '../ui/SizeBox';
import AppColor from '@common/styles/variables-static';
import React from 'react';

type ComparisonTableProps = {
    card1: any;
    card2: any;
    card3: any;

    rows: RowType[];
    switchButton?: boolean;
}

type RowType = {
    title: string;
    titleInfo: string;
    card1Text: CardRowContent;
    card2Text: CardRowContent;
    card3Text: CardRowContent;  
}

type CardRowContent = string | React.ReactNode | boolean;

const ComparisonTable = ({card1,card2,card3,rows,switchButton}:ComparisonTableProps) => {

    const [isMonthly,setIsMonthly] = useState(true);
    const [isSwitchActive2,setIsSwitchActive2] = useState(false);
    const [isSwitchActive3,setIsSwitchActive3] = useState(false);
    return (
        <div className={styles.wrapper}>
            <div className={styles.top_wrapper}>
                <div className={styles.top_month_button_wrapper}>
                    <div className={styles.wrapper_absolute}>
                        <Typography variant="body4" fontWeight="500">
                            Monthly
                        </Typography>{' '}
                        <SwitchButton />{' '}
                        <Typography variant="body4" fontWeight="500">
                            Annually
                        </Typography>
                        <div className={styles.monthly_absolute}>
                            {' '}
                            <span className={styles.span}>
                                10% OFF
                            </span>{' '}
                        </div>
                    </div>
                </div>
                <div className={styles.details_box}>
                    {card1}
                </div>
                <div style={{opacity: switchButton && !isSwitchActive2 ? 0.3 : 1}}  className={styles.details_box}>{card2}
                <div className={styles.absolute_switch}>{switchButton &&  <SwitchButton callback={(item) => setIsSwitchActive2(item)} />} </div>
                </div>
                <div style={{opacity: switchButton && !isSwitchActive3 ? 0.3 : 1}} className={styles.details_box}>{card3}
                <div className={styles.absolute_switch}>{switchButton &&  <SwitchButton callback={(item) => setIsSwitchActive3(item)} />} </div>
                </div>
            </div>

            <div className={styles.bottom_wrapper}>
                {rows.map((row, index) => (
                    <div
                        className={styles.bottom_row}
                        style={{
                            backgroundColor:
                                index % 2 != 0
                                    ? 'white'
                                    : AppColor.white,
                        }}>
                        <div className={styles.bottom_row_title}>
                            <div className={styles.title_wrapper}>
                                <Typography
                                    variant="body4"
                                    fontWeight="500">
                                    {row.title}
                                </Typography>
                            </div>
                        </div>
                        <div className={styles.bottom_row_item}>
                            <RowItem item={row.card1Text} />
                        </div>
                        <div style={{opacity: switchButton && !isSwitchActive2 ? 0.3 : 1,pointerEvents: !isSwitchActive2 ? 'none' : 'auto'}} className={styles.bottom_row_item}>
                            <RowItem item={row.card2Text} />
                        </div>
                        <div style={{opacity: switchButton && !isSwitchActive3 ? 0.3 : 1,pointerEvents: !isSwitchActive2 ? 'none' : 'auto'}} className={styles.bottom_row_item}>
                            <RowItem item={row.card3Text} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


const RowItem = ({item}: {item:CardRowContent}) => {
    const [isChecked,setIsCheked] = useState(item);
    const typeComponentMap = {
        object: (item: React.ReactNode) => React.isValidElement(item) ? item : <></>,
        string: (item: string) => <Typography variant='body4'>{item}</Typography>,
        boolean: () =>  <div 
                        style={!isChecked ? {backgroundColor:'white', boxShadow: '-1px 1px 6px 2px rgba(0,0,0,0.11)'} : {}}
                        onClick={() => {setIsCheked(prev => !prev)}} className={styles.checked}> {isChecked && <AppColor.singTrue stroke='white' width={14} height={10}/>} </div>,
    };
    
    const itemType = typeof item;
    const component = typeComponentMap[itemType];
    return component ? component(item) : null;
    
}

export default ComparisonTable;