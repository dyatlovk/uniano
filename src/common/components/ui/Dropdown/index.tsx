import AppColor from "@common/styles/variables-static";
import Typography from "../Typography/Typography";
import styles from './style.module.scss';
import {useState} from 'react';

type DropdownProps = {
    title:string;
    description:string;
    showLine?: boolean;
}
const Dropdown = ({title,description,showLine=true}:DropdownProps) => {
    const [isActive,setIsActive] = useState(true);
    const [hover,setHover] = useState(false);

    const changeState = () => {
        setIsActive(prev => !prev);
    }
    return (
      <div className={styles.wrapper}>
           <div
           onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
           onClick={changeState} className={styles.title_block}>
                <div className={styles.title_shell}>
                    <Typography variant="body1" fontWeight="500" color={isActive || hover ? '#515151' : AppColor.transparentBlack}>
                        {title}
                    </Typography>
                </div>
                {isActive
                ? <AppColor.chevronTop fill={AppColor.text}/>
                : <AppColor.chevronBottom fill={AppColor.text} fillOpacity={0.5}/>
                }
           </div>
           <div className={`${isActive ? styles.description_block_active :styles.description_block}`}>
                <Typography variant="body4">
                    {description}
                </Typography>
           </div>
           {showLine 
           ? <div className={styles.line}></div>
           : <></>
           }
      </div>
    );
};

export default Dropdown;