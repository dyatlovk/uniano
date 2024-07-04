
import AppColor from '@common/styles/variables-static';
import DropdownNode from '../..';
import styles from './style.module.scss';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import Typography from '@common/components/ui/Typography/Typography';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useState } from 'react';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';

type DropdownNodeActivityProps = {
    activityItems: ActivityItemProps[];
    filters: {
      hasChildren: boolean;
      title: string;
  }[];
    countNotification: number;
  };
  
  const DropdownNodeActivity = ({ activityItems, countNotification,filters }: DropdownNodeActivityProps) => {
    const [activeCategory,setActiveCategory] = useState('All');
    const [showItemsCount,setShowItemsCount] = useState(3);

    return (
      <DropdownNode
        countNotifications={countNotification}
        noneIcon={<AppColor.news fill={AppColor.text}  />}
        noneText='Create something useful for the world'
        noneTitle='No Activity Yet'
        noneButton={<MyButtonOrange onClick={() => {}}>Create</MyButtonOrange>}
        filters={filters}
        title='Activity'
        callback={(item) => { setActiveCategory(item)}}
        dropnodes={
        <div className={styles.node_wrapper}>
            {
            (() => {
              const displayedItems = [];

              for (let index = 0; index < activityItems.length && index + 1 <= showItemsCount; index++) {
                const item = activityItems[index];
                if (activeCategory === 'All' || item.filter === activeCategory) {
                  displayedItems.push(<ActivityItem key={index} {...item} />);
                }
              }

              return displayedItems;
            })()
          }
            {activityItems.length > showItemsCount
            ? <div className={styles.absolute_show}> <MyButtonTransparentBlack onClick={() => {setShowItemsCount(prev => prev+4)}} >Show more +4</MyButtonTransparentBlack> </div>
            : <></>}
        </div>}
      />
    );
  };
  

type ActivityItemProps = {
    title: string;
    tag: string[];
    image: any;
    price: string;
    iconNode?: any;
    percent: number;
    filter: string;
    present: string;

}
export const ActivityItem = ({image,percent,price,tag,title,iconNode,filter,present}:ActivityItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top_part}>
                <UserAvatar variant='image' active={true} name={fakeUserConstant.name} url={fakeUserConstant.image} />
                <div>
                    <Typography className='underline_appearance' variant='body4' fontWeight='500'>
                        {title}
                    </Typography>
                    <DynamicPadding desktop='10px' mobile='10px' />
                    <Typography variant='body4'>
                        <span className={styles.hover_text}>{filter}</span> {tag.map(item => <span className={styles.hover_text}> • {item}</span>)}  • <span className={styles.hover_text}>{present}</span>
                    </Typography>
                </div>
               <div className={styles.desktop}>
                    <div className={styles.flex}>
                        <Typography variant='subtitle' fontWeight='500'>
                                ${price}
                        </Typography>
                       {iconNode}
                    </div>
                   <Typography variant='body4' color={AppColor.orange}>
                        Progress
                   </Typography>
               </div>
            </div>
            <div className={styles.mobile}>
                    <Typography variant='subtitle' fontWeight='500'>
                            ${price}
                    </Typography>
                   {iconNode}
                  <div className={styles.mobile_margin}>
                       <Typography fontWeight='500' variant='body4' color={AppColor.orange}>
                            Progress
                       </Typography>
                  </div>
               </div>
               <DynamicPadding desktop='0px' mobile='10px'/>
            <PercentBar currentPercent={percent} height='5px'/>
        </div>
    )
}

export default DropdownNodeActivity;