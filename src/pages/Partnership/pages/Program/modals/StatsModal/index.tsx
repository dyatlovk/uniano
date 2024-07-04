
import { StatisticText } from '@pages/Dashboard/pages/Account/index';
import { PreviewItem } from '../partnershipModal';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
const statistic = [
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
]
const StatsModal = () => {

    return (
      <>
            <div className={styles.flex_row}>
                <PreviewItem />
                <PreviewItem />
                <PreviewItem />
           </div>
           <DynamicPadding desktop='30px' mobile='20px'/>
           <div className={styles.statistic_text_wrapper}>
                {statistic.map(item =>
                    <StatisticText text={item.text} title={item.title} />
                )}
            </div>
      </>
    );
};

export default StatsModal;