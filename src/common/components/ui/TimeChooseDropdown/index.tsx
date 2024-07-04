
import { useEffect, useRef, useState } from 'react';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import SwitchButton from '../SwitchButton';
import HorizontalLine from '../Lines/HorizontalLine';


const timeArray = [
    "00:00 AM",
    "00:30 AM",
    "01:00 AM",
    "01:30 AM",
    "02:00 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "04:00 AM",
    "04:30 AM",
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM"
  ]
  
const TimeChooseDropdown = () => {

    const [selectedTimeFrom,setSelectedTimeFrom] = useState('00:00 AM');
    const [selectedTimeTo,setSelectedTimeTo] = useState('00:00 AM');
    const [daysOff,setDaysOff] = useState(false);
    const [showDropdown,setShowDropdown] = useState(false);



    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef]);

    return (
      <div ref={dropdownRef} style={{position: 'relative'}}>
          <div style={{...borderStyles}} className={`${styles.time_choose} cursor`} onClick={() => {setShowDropdown(prev => !prev)}}>
               <Typography color={AppColor.transparentBlack} variant='body5'>{daysOff ? 'Day off' : `${selectedTimeFrom} - ${selectedTimeTo}`}</Typography>
    
               {showDropdown
               ? <AppColor.chevronTop fill={AppColor.text} />
                : <AppColor.chevronBottom fill={AppColor.text} />}
    
          </div>
        {showDropdown && <HorizontalLine />}
          <div style={{opacity: showDropdown ? '1' : '0',pointerEvents: showDropdown ? 'all' : 'none'}} className={styles.dropdown_absolute}>
                
                <div className={styles.flex_space}>
                    <Typography variant='body5'>Day off</Typography>
                    <SwitchButton startValue={daysOff} width='44px' height='24px' callback={(item) => {
                        if(item) {
                            setDaysOff(true);
                        } else {
                            setDaysOff(false);
                            setSelectedTimeFrom('00:00 AM');
                            setSelectedTimeTo('00:00 AM')
                        }
                    }} />
                </div>

                <div style={{display: !daysOff ? 'grid' : 'none'}} className={styles.time_main_grid}>
                    <div className={`${styles.time_items_grid} ${styles.item_grid_border}`}>
                        {timeArray.map(item => 
                            <div className={`${styles.time_item} cursor`} onClick={() => {
                                if(daysOff) {
                                    setDaysOff(false)
                                }
                                setSelectedTimeFrom(item)}}>
                                <Typography fontWeight={item == selectedTimeFrom ? '500' : '400'} variant='body5'>{item}</Typography>
                            </div>    
                        )}
                    </div>
                    <div className={styles.time_items_grid}>
                        {timeArray.map(item => 
                            <div className={`${styles.time_item} cursor`} onClick={() => {
                                if(daysOff) {
                                    setDaysOff(false)
                                }
                                setSelectedTimeTo(item)}}>
                                <Typography fontWeight={item == selectedTimeTo ? '500' : '400'} variant='body5'>{item}</Typography>
                            </div>    
                        )}
                    </div>
                </div>
          </div>
      </div>
    );
};

export default TimeChooseDropdown;