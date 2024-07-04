import { useState } from 'react';
import styles from './style.module.scss';
import { SwitchTransition, CSSTransition } from "react-transition-group";

type AnimatedSvgProps = {
    node1: React.ReactNode;
    node2: React.ReactNode;
    showNode2?: boolean;
    showNode3?: boolean;
    node3?: React.ReactNode;
  };
  
const AnimatedSvg = ({ node1, node2,showNode2=null,node3,showNode3 }:AnimatedSvgProps) => {
    const [hover,setHover] = useState(false);

    const hovermodified = showNode2 != null ? showNode2 || hover : hover;

    const handleMouseEnter = () => {
      if (!isMobile()) {
        setHover(true);
        // Your additional logic for onMouseEnter on non-mobile devices
      }
    };
  
    const handleMouseLeave = () => {
      if (!isMobile()) {
        setHover(false);
        // Your additional logic for onMouseLeave on non-mobile devices
      }
    };
  
    const isMobile = () => {
      // You can customize this logic based on your requirements
      return window.innerWidth <= 768; // Adjust the threshold as needed
    };

    return (
      <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={styles.animatedSvgContainer}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={showNode3 ? 'node3'  : hovermodified ? 'node1': 'node2'}
            addEndListener={() => {}}
            classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
                exitDone: styles.exitDone
           }}
            timeout={100} // Adjust timeout as needed
          >
            {  showNode3 ? (
              <div className={`${styles.animatedNode} cursor`}>{node3}</div>
            ) :
            !hovermodified ? (
              <div className={`${styles.animatedNode} cursor`}>{node1}</div>
            ) :
            (
              <div className={`${styles.animatedNode} cursor`}>{node2}</div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  };
  
  export default AnimatedSvg;