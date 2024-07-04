
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SizeBox from '@common/components/ui/SizeBox/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ImagePlaceholder from '../SecondStep/components/ImagePlaceholder';
import AppColor from '@common/styles/variables-static';

const ThirdStep = ({callbackUndo,callbackOn}: {callbackUndo:() => void,callbackOn:() => void;}) => {

    return (
        <div>
        <div className={styles.wrapper}>
             <div className={styles.left}>
                  <div>
                      <Typography variant='body4'>Step 3/3 - Proof of address document</Typography>
                      <PercentBar
                          currentPercent={100}
                          height='13px'
                      />
                  </div>
                  <SizeBox height='30px'/>
                  <Typography variant='body3' fontWeight='500'>Upload document</Typography>
                  <DynamicPadding desktop='30px' mobile='20px' />
                  <ImagePlaceholder height='156px' image={null} />
                  <DynamicPadding />
                  <div className={styles.flex_justify}>
                  <div onClick={callbackUndo} className={styles.justify}>
                  <div className={styles.box}><AppColor.longChevronLeft/></div>
                        <div className={styles.column}>
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500'>User ID</Typography>
                            <Typography variant='body5' fontWeight='400'>Step back</Typography>
                        </div>
                     </div>
                      <div onClick={callbackOn} className={styles.justify}>
                        
                        <div className={styles.column}>
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500'>Submit </Typography>
                            <Typography variant='body5' fontWeight='400'>Documents</Typography>
                        </div>
                        <div className={styles.box}><AppColor.longChevronRight/></div>
                     </div>
                  </div>
        </div>
        <div className={styles.right}>
                    <div className={styles.right_wrapper}>
                        <Typography variant='body4' fontWeight='500'>Requirements:</Typography>
                        <DynamicPadding desktop='15px' mobile='15px'/>
                        <div style={{marginLeft: '15px'}}>
                            <Typography variant='body4' fontWeight='400'>• Please include a picture of yourself holding the document and a piece of paper next to your face. Write 'Uniano' and today's date on the paper. Please make sure that the information on the document is clear, readable and identical to the data you have indicated in the request form, including: Full name, Date of birth.</Typography>
                            <Typography variant='body4' fontWeight='400'>• The identification document should expire in at least 6 months or more at the time of application submission.</Typography>
                            <Typography variant='body4' fontWeight='400'>• Please note that a driver's license can only be attached by US residents. </Typography>
                            <Typography variant='body4' fontWeight='400'>• All information from your ID must be readable. </Typography>
                            <Typography variant='body4' fontWeight='400'>• The size of one image must be less than 10 MB. </Typography>
                        </div>
                    </div>
               </div>
        </div>
           
      </div>
    );
};

export default ThirdStep;