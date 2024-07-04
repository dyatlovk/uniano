
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import ChooseVariant from './components/ChooseVariant';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import ImagePlaceholder from './components/ImagePlaceholder';
import AppColor from '@common/styles/variables-static';

const SecondStep = ({callbackUndo,callbackOn}: {callbackUndo:() => void,callbackOn:() => void;}) => {

    return (
        <div>
        <div className={styles.wrapper}>
             <div className={styles.left}>
                  <div>
                      <Typography variant='body4'>Step 2/3 - User ID document</Typography>
                      <PercentBar
                          currentPercent={66}
                          height='13px'
                      />
                  </div>
                  <SizeBox height='30px'/>
                  <Typography variant='body3' fontWeight='500'>Kind of document</Typography>
                  <DynamicPadding desktop='30px' mobile='20px' />
                  <ChooseVariant
                    items={['id cards', 'passport', 'Driving licence']}
                    callback={() => {}}
                  />

                  <DynamicPadding desktop='20px' mobile='15px'/>

                  <div className={styles.flex_center}>
                    <MyCheckbox
                        height='20px'
                        width='20px'
                    />
                    <Typography variant='body5'>No expiration</Typography>
                  </div>
                  <DynamicPadding desktop='30px' mobile='20px'/>
                  <div className={styles.middle_details}>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>Issued сountry</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <InputDropdown 
                                padding='15px'
                                dropdownVariants={['Ukraine', 'England', 'Poland', 'USA']}
                                initText='Select country'
                                labelIcon={null}
                            />
                        </div>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>ID card number</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <InputCommon 
                                placeholder='SJ 123 345'
                                callback={() => {}}  
                                padding='15px 20px'
                                rightPadding={20} 

                            />
                        </div>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>Expiration date</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <InputCommon 
                                placeholder='MM/YY'
                                callback={() => {}}  
                                padding='15px 20px'
                                rightPadding={20} 

                            />
                        </div>
                  </div>
                  <DynamicPadding desktop='30px' mobile='20px'/>
                  <div className={styles.middle_details_picker}>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>ID front</Typography>
                            <DynamicPadding desktop='10px' mobile='10px'/>
                            <ImagePlaceholder image={null} />
                        </div>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>ID back</Typography>
                            <DynamicPadding desktop='10px' mobile='10px'/>
                           <ImagePlaceholder image={null} />
                        </div>
                        <div className={styles.middle_details_item}>
                            <Typography variant='body3' fontWeight='500'>Selfie with ID</Typography>
                            <DynamicPadding desktop='10px' mobile='10px'/>
                            <ImagePlaceholder image={null} />
                        </div>
                  </div>
                  <DynamicPadding />
                  <div className={styles.flex_justify}>
                  <div onClick={callbackUndo} className={styles.justify}>
                  <div className={styles.box}><AppColor.longChevronLeft/></div>
                        <div style={{alignItems: 'start'}} className={styles.column}>
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500'>User info</Typography>
                            <Typography variant='body5' fontWeight='400'>Step back</Typography>
                        </div>
                     </div>
                      <div onClick={callbackOn} className={styles.justify}>
                        
                        <div style={{alignItems: 'end'}} className={styles.column}>
                            <Typography textTransform='uppercase' variant='body4' fontWeight='500'>Proof of address</Typography>
                            <Typography variant='body5' fontWeight='400'>Next step</Typography>
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

export default SecondStep;