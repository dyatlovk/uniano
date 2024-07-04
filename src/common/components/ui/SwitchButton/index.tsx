
import { useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type SwitchButtonProps = {
    callback?: (bool:boolean) => void;
    startValue?: boolean; 
    width?: string;
    height?: string;
    bakcgroundColorActive?: string;
    activeIcon?: React.ReactNode;
    disable?: boolean
}
const SwitchButton = ({disable=false,activeIcon,bakcgroundColorActive,callback,startValue=false,height,width}:SwitchButtonProps) => {
    const buttonsVariables = {
        '--colorActive': bakcgroundColorActive ?? AppColor.orange
    }
    const [isActive,setIsActive] = useState(startValue);

    function handleSwitch(item:boolean) {
        if(!disable) {
            if(callback != null) {
                callback(item);
            }
            setIsActive(item);
        }
    }
    return (
      <div>
           <label style={{width: width,height:height,...buttonsVariables}} className={styles.switch}>
                <input checked={isActive} onChange={(value) => {handleSwitch(value.target.checked)}} type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`}>
                   {activeIcon != null &&  <div style={{opacity: isActive ? 1 : 0}} className={styles.absolute_icon}>{activeIcon}</div>}
                </span>
            </label>
      </div>
    );
};

export default SwitchButton;