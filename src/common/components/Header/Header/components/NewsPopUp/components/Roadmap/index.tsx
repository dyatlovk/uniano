
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';
import HoverDotsBox from '@common/components/ui/HoverDotsBox/index';


type RoadmapProps = {
    completed?: boolean;
    title: string;
    text: string;
    steps?: string;
}
const Roadmap = ({completed,text,title,steps}:RoadmapProps) => {

    return (
      <div className={styles.roadmap_wrapper}>
           <div>
                {completed
                ? <AppColor.taskCheck />
                : <MyCheckbox disabled={true}  borderRadius='50%' width='15px' height='15px'/>}
           </div>
           <div className={styles.flex_column}>
                  <Typography textLineHeight='1' variant='body4' fontWeight='500'>
                    {title} {steps && <span style={{color: AppColor.orange}}>{steps}</span>}
                </Typography>  
              
               <div className='gap_10'>
                    <Typography style={{textOverflow: 'ellipsis',maxWidth: '310px'}} textLineHeight='1' variant='body4'>
                        {text}
                    </Typography>

                    {completed && <HoverDotsBox />}
               </div>
           </div>
       
                {completed
                ? <div className={styles.flex_column} style={{marginLeft: 'auto',alignItems: 'end'}}>
                   
                        <div style={{display: 'flex',gap: '5px'}}>
                            <UserAvatar name='' active={true} variant='image' url={fakeUserConstant.image} width='20px' height='20px' />
                            <Typography variant='body4' fontWeight='500' color={AppColor.text}>John Doe</Typography>
                        </div>
                    <div className='gap_5'>
                        <AppColor.pigCoins />
                        <Typography variant='body4'>25</Typography>
                    </div>
                </div>
                : <div className={styles.flex_center} style={{marginLeft: 'auto'}}>
                <Typography className={'underline_appearance orange'} textLineHeight='1' variant='body5' color={AppColor.orange}>Go to profile</Typography>
                </div>}
       
      </div>
    );
};

export const RoadmapFlex = ({completed,text,title,steps}:RoadmapProps) => {

    return (
      <div style={{alignItems: 'center'}} className={styles.roadmap_wrapper}>
           <div>
                {completed
                ? <AppColor.taskCheck />
                : <MyCheckbox disabled={true}  borderRadius='50%' width='15px' height='15px'/>}
           </div>
           <div className={styles.flex_column}>
                  <Typography textLineHeight='1' variant='body4' fontWeight='500'>
                    {title} {steps && <span style={{color: AppColor.orange}}>{steps}</span>}
                </Typography>  
              
               <div className='gap_10'>
                    <Typography style={{textOverflow: 'ellipsis',maxWidth: '310px'}} textLineHeight='1' variant='body4'>
                        {text}
                    </Typography>

                    {completed && <HoverDotsBox />}
               </div>
           </div>
       
                {completed
                ? <div className={styles.flex_column} style={{marginLeft: 'auto',alignItems: 'end'}}>
                   
                        <div style={{display: 'flex',gap: '5px'}}>
                            <UserAvatar name='' active={true} variant='image' url={fakeUserConstant.image} width='20px' height='20px' />
                            <Typography variant='body4' fontWeight='500' color={AppColor.text}>John Doe</Typography>
                        </div>
                </div>
                : <div className={styles.flex_center} style={{marginLeft: 'auto'}}>
                <Typography className={'underline_appearance orange'} textLineHeight='1' variant='body5' color={AppColor.orange}>Go to profile</Typography>
                </div>}

                {completed && <div style={{marginLeft: 'auto'}} className='gap_5'>
                        <AppColor.pigCoins />
                        <Typography variant='body4'>25</Typography>
                    </div>}
       
      </div>
    );
};

export default Roadmap;