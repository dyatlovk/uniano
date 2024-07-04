import DynamicPadding from '../DynamicPadding';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';

type PageDetailsProps = {
    pageTitle: string;
    pageTitleIcon?: React.ReactNode;
    historyNode: React.ReactNode;
    endNode?: React.ReactNode;
}
const PageDetails = ({historyNode,pageTitle,endNode,pageTitleIcon}:PageDetailsProps) => {

    return (
        <>
        <DynamicPadding />
            <div className={styles.wrapper}>
                
                    <div className={styles.top_flex}>
                        {historyNode}
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className={styles.flex_center}></div>
                        <div className='gap_5'>
                            <Typography
                                variant="titleBig"
                                textTransform="uppercase"
                                fontWeight="600">
                                    {pageTitle}             
                                
                            </Typography>
                            <div className={styles.title_icon}>{pageTitleIcon}</div>
                        </div>
                        </div>
                    
                    {endNode}
                </div>
            </>
    );
};

export default PageDetails;