import AppColor from "@common/styles/variables-static";
import CardStatistics from "..";
import Typography from "@common/components/ui/Typography/Typography";
import styles from './style.module.scss';
import { userModel } from "common/models/user";
const fakeUser:userModel = {
    country: 'Ukraine',
    image: '',
    name: 'Artem M.',
    roles: 'Customer',
    lvl: '100',
    isActive: false,
    statistic: {
      comments_count: 55,
      sponsorship_count: 55,
      rating: 98,
      responses_count: 900
    }
  }
  
const CardStatisticTest = () => {

    return (
        <CardStatistics 
        title='Logo by sample in vector in maximum quality' 
        tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
        user={fakeUser}

        price={ 
            <div className={styles.statistic_flex}>
                <AppColor.fourOfFive />
                <Typography fontWeight="500" textLineHeight="1" variant='body4'>
                    from $5 K <Typography textDecoration='line-through' color={AppColor.transparentBlack}>$6K</Typography>
                </Typography>
            </div> 
        }
        payments= {
            <div className={styles.statistic_flex}>
                <AppColor.flag />
                <AppColor.puzle />
            </div>
        }
        delivery= {
            <Typography fontWeight="500" textLineHeight="1" variant='body4'>
                avg. 3 days
            </Typography>
        }
        queue= {
            <Typography fontWeight="500" textLineHeight="1" variant='body4'>
                35
            </Typography>
        }
        
    />
    );
};

export default CardStatisticTest;