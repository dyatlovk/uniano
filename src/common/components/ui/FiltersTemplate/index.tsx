
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import { useState } from 'react';
import AnimateHeight from '../../AnimateHeight';
import SizeBox from '../SizeBox';

const FiltersTemplate = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <div style={{position: 'relative'}}>
          <div onClick={() => {setShowDropdown(prev => !prev)}} className='flex_space_between'>
            <Typography className={`${styles.title} cursor`} variant='body4' textTransform='uppercase'>My filter templates</Typography>
            <AppColor.template />           
          </div>

          <div className={styles.abs_item} style={{opacity: showDropdown ? '1' : '0'}}>
                <AnimateHeight show={showDropdown}>
                    <div className={styles.padding}><Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Recent</Typography></div>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} />
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} />

                    <SizeBox height='10px'/>
                    <div className={styles.padding}><Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Saved</Typography></div>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} edit={true}/>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} edit={true}/>
                    <SizeBox height='10px'/>
                </AnimateHeight>
          </div>
      </div>
    );
};


export const FilterTemplateDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <div style={{position: 'relative'}}>
          <div onClick={() => {setShowDropdown(prev => !prev)}} className='flex_space_between cursor'>
            <AppColor.template />           
          </div>

          <div className={styles.abs_item} style={{opacity: showDropdown ? '1' : '0',right: '-50px'}}>
                <AnimateHeight show={showDropdown}>
                    <div className={styles.padding}><Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Recent</Typography></div>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} />
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} />

                    <SizeBox height='10px'/>
                    <div className={styles.padding}><Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Saved</Typography></div>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} edit={true}/>
                    <Recent text={'01/23/2023 23:10 - Crypto Wall ...'} edit={true}/>
                    <SizeBox height='10px'/>
                </AnimateHeight>
          </div>
      </div>
    );
}
const Recent = ({text,edit}: {text:string;edit?: boolean}) => {
    return (
        <div className={`${styles.recent} cursor`}>
            <Typography variant='body5'>{text}</Typography>

            <div className='gap_10'>
                {edit && <AppColor.edit width={'15px'} height={'15px'} fill={AppColor.text} />}
            <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red} />
            </div>
        </div>
    )
}



export default FiltersTemplate;