
import { useEffect } from 'react';
import styles from './style.module.scss';
import {createPortal} from 'react-dom';

type ModalCenterProps = {
    onClickHandler: () => void;
    children: React.ReactNode
}
const ModalCenter = ({children,onClickHandler}:ModalCenterProps) => {

    useEffect(() => {

      document.body.style.overflow = "hidden"
      
      return () => {
        const openModals = document.querySelectorAll('.overlay_prevent_close');
        console.log(openModals);
        if(openModals.length > 0) return;
        document.body.style.overflow = 'auto';
      };  

  },[])

    return createPortal(
        <div id='overlay_prevent_close' className={`${styles.overaly} overlay_prevent_close`} onClick={onClickHandler}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        document.body
      );
};

export default ModalCenter;