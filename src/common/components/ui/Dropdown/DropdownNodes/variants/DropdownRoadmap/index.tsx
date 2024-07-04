
import AppColor from '@common/styles/variables-static';
import DropdownNode from '../..';
import styles from './style.module.scss';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import Typography from '@common/components/ui/Typography/Typography';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useState } from 'react';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';
import HoverDotsBox from '@common/components/ui/HoverDotsBox/index';

type DropdownNodeRoadmapProps = {
    roadmapItems: RoadMapItemProps[];
    filters: {
      hasChildren: boolean;
      title: string;
  }[];
    countNotification: number;
  };
  
  const DropdownNodeRoadmap = ({ roadmapItems, countNotification,filters }: DropdownNodeRoadmapProps) => {
    const [activeCategory,setActiveCategory] = useState('All');
    const [showItemsCount,setShowItemsCount] = useState(3);

    return (
      <DropdownNode
        countNotifications={countNotification}
        filters={filters}
        noneIcon={<AppColor.news fill={AppColor.text} />}
        noneText='Find suitable missions and guides for you'
        noneTitle='No Roadmap Yet'
        noneButton={<MyButtonOrange onClick={() => {}}>Missions</MyButtonOrange>}
        title='Roadmap'
        callback={(item) => { setActiveCategory(item)}}
        dropnodes={
        <div className={styles.node_wrapper}>
            {
            (() => {
              const displayedItems = [];

              for (let index = 0; index < roadmapItems.length && index + 1 <= showItemsCount; index++) {
                const item = roadmapItems[index];
                if (activeCategory === 'All' || item.filter === activeCategory) {
                  displayedItems.push(<RoadMapItem  key={index} {...item} />);
                }
              }

              return displayedItems;
            })()
          }
            {roadmapItems.length > showItemsCount
            ? <div className={styles.absolute_show}> <MyButtonTransparentBlack onClick={() => {setShowItemsCount(prev => prev+4)}} >Show more +4</MyButtonTransparentBlack> </div>
            : <></>}
        </div>}
      />
    );
  };
  

type RoadMapItemProps = {
    icon: any;
    title: string;
    text: string;
    user: React.ReactNode;
    stepsCompleted: string;
    amount: string;
    filter: string;
}
const RoadMapItem = ({amount,icon,text,title,user,stepsCompleted}:RoadMapItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top_part}>
                <div className={styles.icon_text}>
                  {icon}
                  <div>
                      <Typography variant='body4' fontWeight='500'>
                          {title} <Typography color={AppColor.orange}>{stepsCompleted}</Typography>
                      </Typography>
                      <DynamicPadding desktop='10px' mobile='10px' />
                     <div className='gap_5' style={{alignItems: 'end'}}>
                        <Typography variant='body4' color={AppColor.transparentBlack}>
                            {text}
                        </Typography>
                        <div style={{display: 'flex',marginBottom: '2px'}}>
                        <HoverDotsBox />
                        </div>
                     </div>
                      <DynamicPadding mobile='10px' desktop='0px' />
                      <div className={styles.mobile}>
     
     {user}

   <div className={styles.flex_end}>
     <AppColor.pigCoins />
     <Typography variant='body4'>{amount}</Typography>
   </div>
</div>
                  </div>
                </div>
              <div className={styles.desktop}>
    <div className={styles.icon_wrapper}>
      
                    {user}
          
    </div>
                <div className={styles.flex_end}>
                  <AppColor.pigCoins />
                  <Typography variant='body4'>{amount}</Typography>
                </div>
              </div>
            </div>
        </div>
    )
}

export default DropdownNodeRoadmap;