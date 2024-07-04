
import { useState } from 'react';
import styles from './style.module.scss';

type ImageCardsShowProps = {
    images: string[];
    widthTotalMobile?: string;
    widthTotalDesktop?: string;
}
const ImageCardsShow = ({images,widthTotalMobile,widthTotalDesktop}:ImageCardsShowProps) => {

    const styleImage = {
        '--mobileWidth': widthTotalMobile,
        '--desktopWidt': widthTotalDesktop,
        border: 'none'
    }
    const [activeImage,setActiveImage] = useState(images[0]);
    return (
      <div style={{...styleImage}} className={styles.wrapper}>
           <img className={styles.active_image} src={activeImage} alt="" />
           <div className={styles.small_images}>
                {images.map(item =>
                    <img style={{opacity: activeImage == item ? 1 : 0.4}} onClick={() => {setActiveImage(item)}} src={item} alt="" />    
                )}
           </div>
      </div>
    );
};

export default ImageCardsShow;