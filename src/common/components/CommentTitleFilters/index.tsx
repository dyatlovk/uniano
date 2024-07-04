
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';

type CommentTitleFilterProps = {
    title: string;
    notCount: number;
    textAfterTitle: React.ReactNode;

}
const CommentTitleFilter = ({notCount,textAfterTitle,title}:CommentTitleFilterProps) => {

    return (
      <div className={styles.title_wrapper}>
            <div className={styles.top_part}>
               <div className='gap_10'>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    <div className={styles.count_box}><Typography variant='body3' fontWeight='500' color='white'>{notCount}</Typography></div>
               </div>
                {textAfterTitle}
            </div>
            <div className={styles.bottom_part}>
                <div>
                    <div className="gap_5">
                        <AppColor.filter />
                        <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
                    </div>
                </div>
                <div>
                    <div className="gap_5">
                        <AppColor.recent />
                        <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>Most recent</Typography>
                    </div>
                </div>
            </div>  
      </div>
    );
};

export default CommentTitleFilter;