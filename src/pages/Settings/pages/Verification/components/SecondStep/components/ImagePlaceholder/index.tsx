
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import SizeBox from '@common/components/ui/SizeBox/index';
import { ChangeEvent, useState } from 'react';

type ImagePlaceholderProps = {
    image: string | null;
    onImageChange?: (file: File) => void;
    height?: string;
}
const ImagePlaceholder = ({image,onImageChange,height}:ImagePlaceholderProps) => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
    
        if (file) {
          // Read the selected file
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

    return (
     <div>
        {!selectedImage &&  <SizeBox height='15px'/>}
          <div className={styles.wrapper}>
            <input style={{top: selectedImage ? '20px' : '0px'}} accept="image/*" onChange={handleFileChange} className={styles.absolute_file_wrapper} type="file" />
               {selectedImage != null
               ? <div className={styles.image_wrapper}>
                   <div onClick={() => {setSelectedImage(null)}}> <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red}/></div>
                    <img width={'196px'} height={'115px'} src={selectedImage.toString()} alt="Selected" />
               </div>
               : <div style={{height: height}} className={styles.empty_wrapper}>
                    <div className={styles.column}>
                        <AppColor.iconImage />
                        <SizeBox height='15px'/>
                        <Typography variant='body5'>Drop image to upload or <span style={{fontWeight: '500',color: AppColor.orange}}>browse</span></Typography>
                    </div>
               </div> }
          </div>
     </div>
    );
};

export default ImagePlaceholder;