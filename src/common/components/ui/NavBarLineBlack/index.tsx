import { useEffect, useState } from "react";
import styles from './style.module.scss'
import Typography from "../Typography/Typography";
import AppColor from "@common/styles/variables-static";
const NavBarLineBlack = ({callback,maxCountPage}: {callback: (item:number) => void,maxCountPage:number}) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIdx = Math.max(1, currentPage - 3);
  
    const endIdx = startIdx + 6;
  
    const numberBoxes = [];
  
    useEffect(() => {
      callback(currentPage)
    }, [currentPage])
  
    for (let i = startIdx; i <= endIdx; i++) {
      const [hovered, setHovered] = useState(false);

      numberBoxes.push(
          i < maxCountPage
          ? <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => {
              if(i <= maxCountPage) {
                setCurrentPage(i)
              }
          }}
          key={i}
          className={styles.box}
          style={i == currentPage || hovered ? {opacity: 1} : {}}>
          <Typography
              variant="subtitle"
              >
              {i}
          </Typography>
      </div>
      : <></>
      )
    }

    const [dotsHovered, setDotsHovered] = useState(false);
    const [lastHovered, setLastHovered] = useState(false);

    numberBoxes.push(
        currentPage + 30 < maxCountPage && <div 
        onMouseEnter={() => setDotsHovered(true)}
        onMouseLeave={() => setDotsHovered(false)}
        style={dotsHovered ? {opacity: 1} : {}}
         className={styles.box}>...</div>,
        currentPage + 30 < maxCountPage && <div
        onMouseEnter={() => setLastHovered(true)}
        onMouseLeave={() => setLastHovered(false)}
        style={lastHovered ? {opacity: 1} : {}}
        onClick={() => {
          if(currentPage+30 < maxCountPage) {
              setCurrentPage(currentPage+30)
            }
      }} className={styles.box}>
          <Typography variant="subtitle">{currentPage+30}</Typography>
      </div>
    )
  
    function prevFunction() {
      if(currentPage - 7 > 0) {
        setCurrentPage(prev => prev - 7)
      }
    }
  
    function nextFunction() {
      if(currentPage + 7 <= maxCountPage) {
        setCurrentPage(prev => prev + 7)
      }
    }
  
  
    return (
      <div className={styles.navbar_wrapper}>
        
        {numberBoxes}
      </div>
    )
  }
  
  export default NavBarLineBlack;