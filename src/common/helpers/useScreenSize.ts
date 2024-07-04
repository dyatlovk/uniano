import {useState,useEffect} from 'react'

type useScreenSizeType = {
    width:number;
    height: number;
}
export const useScreenSize = ():useScreenSizeType => {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    return {width:width,height:height}
}