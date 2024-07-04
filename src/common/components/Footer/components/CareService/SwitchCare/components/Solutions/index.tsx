
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import styles from './style.module.scss';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { CareServiceChildProps } from '../..';
import test1 from '@assets/images/test1.png';
import { useState } from 'react';
import AnimatedSvg from '@common/components/AnimatedSvg/index';

const CareSolutions = ({setActiveSwitch}:CareServiceChildProps) => {

    return (
      <div>
           <div className={styles.padding}><InputCommon callback={() => {}} placeholder='Search' /></div>

           <DynamicPadding desktop='20px' mobile='10px' />
           <SolutionItem ago='1 min ago' callback={(item) => {setActiveSwitch(item)}}
            image={<img src={test1} alt='test1' />} name='John Doe' title='Logo by sample in vector in qood qual...' />
           <SolutionItem ago='1 min ago' callback={(item) => {setActiveSwitch(item)}}
            image={<img src={test1} alt='test1' />} name='John Doe' title='Logo by sample in vector in qood qual...' />
      </div>
    );
};


const SolutionItem = ({image,title,ago,name,callback}) => {
    const [hover,setHover] = useState(false);
    const [pin,setPin] = useState(false);

    return (
        <div 
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
        className={`${styles.question_item}`}>
            <div onClick={() => {}} className={styles.abs_pin}>
                {
                    !pin
                    ? <AppColor.pinned_process onClick={() => {setPin(prev => !prev)}} className='cursor' />
                    : <AppColor.pinned_true onClick={() => {setPin(prev => !prev)}} className='cursor' />
                }
                
            </div>
            <div onClick={(event) => {callback('main.solutions nopadding.details');event.stopPropagation()}} className='cursor'>
                <div className='gap_10'>
                    {image}
    
                    <div>
                        <Typography style={{whiteSpace: 'nowrap'}} variant='body5' fontWeight='500'>
                        {title}
                        </Typography>
                        <SizeBox height='5px' />
                        <div className='gap_5'>
                        <Typography variant='body5' color={AppColor.transparentBlack}>Order</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack}>{name}</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack}>{ago}</Typography>
                        </div>
                    </div>
                </div>
    
                <SizeBox height='10px' />
                <Typography variant='body4'>Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. </Typography>
            </div>

            <div className={styles.orange}>
                <Typography variant='body5' color={'white'}>3</Typography>
            </div>
       </div>
    )
}

export default CareSolutions;