
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import DynamicPadding from '../ui/DynamicPadding';

type ImageCardsShowProps = {
    images: string[];
    widthTotalMobile?: string;
    widthTotalDesktop?: string;
    height?: string;
    callback?: (item: string[]) => void;
}
const ImageCardsPlaceholder = ({callback,images,widthTotalMobile,widthTotalDesktop,height}:ImageCardsShowProps) => {
    
    const styleImage = {
        '--mobileWidth': widthTotalMobile,
        '--desktopWidt': widthTotalDesktop,
        border: 'none'
    }
    const [imagesLocal, setImagesLocal] = useState(images);
    const [activeImage,setActiveImage] = useState(imagesLocal[0]);
    useEffect(() => {

        if(callback) {
            callback(imagesLocal);
        }
    },[imagesLocal]);
    return (
      <div style={{...styleImage}} className={styles.wrapper}>
           {activeImage != '' ? 
           <img style={{minHeight: height}} className={styles.active_image} src={activeImage} alt="" /> 
           : <BigImagePlaceholder height={height} callback={(item) => {
                const newArray = [...imagesLocal];
                newArray[0] = item;

                setImagesLocal(newArray);
                setActiveImage(item);
            }} />}
           <div className={styles.small_images}>
                {imagesLocal.map((item,index) =>
                    {
                        if(item != '') {
                            return (
                                <img style={{opacity: activeImage == item ? 1 : 0.4}} onClick={() => {setActiveImage(item)}} src={item} alt="" />  
                            )
                        } else {
                            return <SmallImagePlaceholder callback={(item) => {
                                const newArray = [...imagesLocal];
                                newArray[index] = item;

                                setImagesLocal(newArray);
                            }} />
                        }
                    }  
                )}
           </div>
      </div>
    );
};


const BigImagePlaceholder = ({callback,height}:SmallImagePlaceholderProps) => {
    
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();   
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
           callback(URL.createObjectURL(file));
        }
    };

    return (
        <div style={{minHeight: height}} onClick={handleClick} className={`${styles.image_big_placeholder} cursor`}>
             <input
                ref={inputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <AppColor.imageIcon fill={AppColor.text}/>
            <DynamicPadding desktop='20px' mobile='10px' />
            <Typography variant='body4'>Drop your image to upload or <span style={{color: AppColor.orange,fontWeight: '500'}}>browse</span></Typography>
        </div>
    )

}

type SmallImagePlaceholderProps = {
    callback?: (item: string) => void;
    height?: string;
}
const SmallImagePlaceholder = ({callback}:SmallImagePlaceholderProps) => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();   
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
           callback(URL.createObjectURL(file));
        }
    };

    return (
        <div onClick={handleClick} className={`${styles.image_small_placeholder} cursor`}>
             <input
                ref={inputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <AppColor.imageIcon fill={AppColor.text}/>
        </div>
    )
}
export default ImageCardsPlaceholder;