
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ImagePlaceholder from '../../../SecondStep/components/ImagePlaceholder';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';

const AdressModal = () => {

    return (
      <>
           <Typography variant='body3' fontWeight='500'>Upload document</Typography>
            <DynamicPadding desktop='30px' mobile='20px' />
            <ImagePlaceholder height='156px' image={null} />
            <DynamicPadding desktop='30px' mobile='20px' />
            <div className={'text_box'}>
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
                  <DynamicPadding desktop='30px' mobile='20px' />
                  <div className='flex_end'>
                                <MyButtonTransparent onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                                    Cancel
                                </MyButtonTransparent>
                                <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                                Submit details
                                </MyButtonOrange>
                        </div>
      </>
    );
};

export default AdressModal;