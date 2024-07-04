
import PercentBar from '../PercentBar/PercentBar';
import SizeBox from '../SizeBox';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';


type LevelProgressProps = {
    percent: number;
}
const LevelProgress = ({percent}:LevelProgressProps) => {

    return (
      <div className={styles.wrapper}>


        <div style={{position: 'relative'}}>
        <SizeBox height='100px' />
            <PercentBar currentPercent={percent}  />
    
            <AbsoluteItemDetails
                accentColor='#B6DE59' leftPercentPosition='0%' profit='10' riched={true} title='Beginner '
            />
    
            <AbsoluteItemDetails
                accentColor='#219653' leftPercentPosition='25%' profit='30' riched={true} title='Junior' pointsCount='300'
            />
    
            <AbsoluteItemDetails
                accentColor='#F2C94C' leftPercentPosition='50%' profit='80' riched={false} title='Middle' pointsCount='1501'
            />
    
            <AbsoluteItemDetails
                accentColor='#F4A72A' leftPercentPosition='75%' profit='150' riched={false} title='Senior' pointsCount='6001'
            />
    
            <AbsoluteItemDetails
                accentColor='#EB5757' leftPercentPosition='100%' profit='200' riched={false} title='Lead' pointsCount='15001'
            />
     <SizeBox height='50px' />
        </div>
       
      </div>
    );
};


type AbsoluteItemDetailsProps = {
    title: string;
    profit: string;
    pointsCount?: string;   
    accentColor: string; 
    riched: boolean;
    leftPercentPosition: string;
}
const AbsoluteItemDetails = ({pointsCount,profit,title,accentColor,riched,leftPercentPosition}:AbsoluteItemDetailsProps) => {
    return (
        <div style={{opacity: riched ? '1' : '0.3',left: leftPercentPosition}} className={styles.abs_item_details}>

            <div className={styles.round_circle}>
                <Typography textLineHeight='1' variant='body5' fontWeight='500'>${profit}+</Typography>
            </div>
            <SizeBox height='10px'/>

            <Typography textLineHeight='1' color={accentColor} variant='body3' fontWeight='500'>
            {title}
            </Typography>

            <SizeBox height='40px'/>
            <Typography textLineHeight='1' variant='body4' fontWeight='500' color={pointsCount ? accentColor : 'transparent'}>{pointsCount} Points</Typography>
        </div>
    )
}

export default LevelProgress;