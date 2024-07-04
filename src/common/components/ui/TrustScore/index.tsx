
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import InfoBox from '../InfoBox';
import Typography from '../Typography/Typography';
import { useState } from 'react';
import ModalCenterBasic from '../../ModalPopUps/ModalCenter/components/ModalCenterBasic';
import SizeBox from '../SizeBox';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, AreaChart, Area, TooltipProps } from 'recharts';

const data = [
  { trustScore: 50, completedProjectsPercent: 70 },
  { trustScore: 50, completedProjectsPercent: 65 },
  { trustScore: 50, completedProjectsPercent: 60 },
  { trustScore: 50, completedProjectsPercent: 55 },
  { trustScore: 60, completedProjectsPercent: 50 },
  { trustScore: 60, completedProjectsPercent: 45 },
  { trustScore: 60, completedProjectsPercent: 55 },
  { trustScore: 70, completedProjectsPercent: 90 },
  { trustScore: 70, completedProjectsPercent: 65 },
  { trustScore: 70, completedProjectsPercent: 70 },
  { trustScore: 70, completedProjectsPercent: 75 },
  { trustScore: 80, completedProjectsPercent: 70 },
  { trustScore: 80, completedProjectsPercent: 65 },
  { trustScore: 80, completedProjectsPercent: 60 },
  { trustScore: 80, completedProjectsPercent: 55 },
  { trustScore: 90, completedProjectsPercent: 50 },
  { trustScore: 90, completedProjectsPercent: 45 },
  { trustScore: 90, completedProjectsPercent: 40 },
  { trustScore: 100, completedProjectsPercent: 75 },
  { trustScore: 100, completedProjectsPercent: 80 },
];


const TrustScore = () => {

  

    const [showModal,setShowModal] = useState(false);

    return (
      <>
        {showModal && <ModalCenterBasic desktopMaxWidth='400px' mobileMaxWidth='400px' desktopMinWidth='400px' bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title=''
        nodeAfterTitle={
          <div className='gap_5'>
            <AppColor.likeRounded />
            <Typography variant='body4' fontWeight='500'><span style={{color: AppColor.green}}>96 </span>Trust Score</Typography>
          </div>
        }
        >
          <>

          <Typography variant='body4'>
          <span style={{fontWeight: '500'}}>Trust score</span> indicates the level of confidence to complete the offered service or order.
           This formula consists of different components: 
          </Typography>

          <ul className={styles.list}>
            <li>
            penalty
            </li>
            <li>
            guarantee
            </li>
            <li>
            reviews
            </li>
            <li>
            compliance of skill, user level and price 
            </li>
            <li>
            statistics
            </li>

          </ul>

          <Typography variant='body4'>
            <span style={{color: AppColor.green}}>
            91 and higher Trust Score
            </span>
            is a very high level of reliability to complete a successful project.
          </Typography>
          <SizeBox height='5px'/>
          <Typography variant='body4'>
            <span style={{color: '#B6DE59'}}>
            81-90 Trust Score
            </span>
            is a good probability to have perfect results.
          </Typography>
          <SizeBox height='5px'/>
          
          <Typography variant='body4'>
            <span style={{color: AppColor.yellow}}>
            71-80 Trust Score
            </span>
            is a moderate risk to complete a successful project.
          </Typography>
          <SizeBox height='5px'/>
          <Typography variant='body4'>
            <span style={{color: AppColor.orange}}>
            61-70 Trust Score
            </span>
            is a low chance to get proper results.
          </Typography>
          <SizeBox height='5px'/>
          <Typography variant='body4'>
            <span style={{color: AppColor.red}}>
            60 and lower Trust Score
            </span>
            is the most precarious case to have unsuitable project.
          </Typography>
          <SizeBox height='30px'/>

         <div className={styles.transform_chart}>
         <SimpleLineChart />
         </div>
          <div className={styles.flex_around}>
            <Typography variant='body5'>60</Typography>
            <Typography variant='body5'>70</Typography>
            <Typography variant='body5'>80</Typography>
            <Typography variant='body5'>90</Typography>
            <Typography variant='body5'>100</Typography>
          </div>
         <SizeBox height='30px'/>
          </>
          </ModalCenterBasic>}
        <div className='gap_5 cursor' onClick={() => {setShowModal(true)}}>
             <AppColor.likeRounded />
             <Typography variant='body4' fontWeight='500'><span style={{color: AppColor.green}}>96 </span>Trust Score</Typography>
             <InfoBox />
        </div>
      </>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className={styles.custom_tooltip}>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: 'white' }}>
            {`${entry.value}% completed projects`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;


  return (
    <svg x={cx - 21} y={cy - 21} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1912_107502)">
<ellipse cx="21.0621" cy="18.1543" rx="9.09333" ry="9.11917" fill="white"/>
</g>
<ellipse cx="21.0622" cy="18.1537" rx="6.06222" ry="6.07945" fill="#F4A72A"/>
<defs>
<filter id="filter0_d_1912_107502" x="0.587527" y="0.688926" width="40.949" height="41.0007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.03499"/>
<feGaussianBlur stdDeviation="5.69061"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.364706 0 0 0 0 0.831373 0 0 0 0 0.145098 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1912_107502"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1912_107502" result="shape"/>
</filter>
</defs>
</svg>
  )
};

const SimpleLineChart = () => {
  return (
    <AreaChart width={390} height={180} margin={{
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    }} data={data}>
        <CartesianGrid display={'none'}    strokeDasharray="3 3" />
        <XAxis display={'none'}  dataKey="trustScore" />
        <YAxis display={'none'} dataKey={'completedProjectsPercent'}  type='number'/>
        <Tooltip  content={<CustomTooltip 
        active={false}
        label={''}
        payload={[]}
        />} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#5DD425" stopOpacity={0.44}/>
              <stop offset="99%" stopColor="#5DD425" stopOpacity={0}/>
          </linearGradient>
      </defs>
       ...
        <Area type={'monotone'} activeDot={<CustomizedDot />}  fillOpacity={1} fill="url(#colorUv)" dataKey={'completedProjectsPercent'} strokeWidth={1.5} stroke={'#219653'} />
      </AreaChart>
  );
};

export default TrustScore;