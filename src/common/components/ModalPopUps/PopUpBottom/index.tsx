
import { useHover } from '@common/helpers/useHover';
import styles from './style.module.scss';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from 'react';
import { useScreenSize } from '@common/helpers/useScreenSize';

type PopUpBottomProps = {
        showNode: React.ReactNode;
        showNodeHover?: React.ReactNode;
        popUpNode: React.ReactNode;
        topPaddingFromNode?: string;
        showBackgroundHover?: boolean;
        positionRight?: string;
        callbackShow?: (show:boolean) => void;
}
const PopUpBottom = ({popUpNode,showNode,showBackgroundHover=false,topPaddingFromNode,showNodeHover,positionRight='',callbackShow}:PopUpBottomProps) => {

    const [show,setShow] = useState(false);

    const {height,width} = useScreenSize();
    const [elementPosition, setElementPosition] = useState({top: 0, left: 0});
    

    const nodeRef = useRef(null);

    // useEffect(() => {
    //     const updatePosition = () => {
    //       const element = nodeRef.current;
    //       if (element) {
    //         const rect = element.getBoundingClientRect();
    //         setElementPosition({
    //             top: rect.top,
    //             left: rect.left,
    //         });
    //       }
    //     };
    
    //     updatePosition();
    
        
    //   }, []);

    useEffect(() => {
     const handleOutsideClick = (event: MouseEvent) => {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement.closest('.overlay_prevent_close')) return;  //ignore overlay modal and modals children

        
         if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
             setShow(false);
             
         } else {
            
            
         }
     };

     document.addEventListener('mousedown', handleOutsideClick);

     return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
     };
 }, []);

    useEffect(() => {

        if(callbackShow){
            callbackShow(show);
        }
    },[show]);

    return (
      <div  ref={nodeRef}  style={{position:'relative'}}>
           <div className='cursor' onClick={() => {setShow(prev => !prev)}} >
           {showNodeHover ?
           <SwitchTransition mode='out-in'>
               
           <CSSTransition
                key={show ? "Goodbye, world!" : "Hello, world!"}
                addEndListener={() => {}}
                classNames={{
                     enter: styles.fadeEnter,
                     enterActive: styles.fadeEnterActive,
                     exit: styles.fadeExit,
                     exitActive: styles.fadeExitActive,
                     exitDone: styles.exitDone
                }}
                timeout={100} // 0.15s in milliseconds
                >
                {show ? <div className={showBackgroundHover && styles.hover_item}>
                    {showNodeHover}
                </div> : <div className={showBackgroundHover && styles.hover_item}>
                    {showNode}     
               </div>}
           </CSSTransition>
      </SwitchTransition>
      : <div className={showBackgroundHover &&  styles.hover_item}>
          {showNode}     
     </div>}
               
           </div>
           <div style={positionRight != '' ? {
            right: positionRight,
            left: 'auto',
            transform: 'translateX(0)',
            top: `calc(100% + ${topPaddingFromNode})`,
            opacity: show ? '1' : '0',
            pointerEvents: show ? 'all' : 'none',
            display: show ? 'block' : 'none'
           } : {
            top: `calc(100% + ${topPaddingFromNode})`,
            opacity: show ? '1' : '0',
            pointerEvents: show ? 'all' : 'none',
            display: show ? 'block' : 'none'
           }} className={styles.popup_node}>
                {popUpNode}
           </div>
      </div>
    );
};

export default PopUpBottom;