
import DynamicPadding from '../DynamicPadding';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

const TitleExampleUl = () => {

    return (
       <div>
            <div className={styles.right_text_box}>
                <Typography variant='body3' fontWeight='500'>Title examples</Typography>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <ul className={styles.ul_wrapper}>
                    <li>
                        <Typography variant='body4'>Build responsive WordPress site with booking/payment functionality</Typography>
                    </li>
                    <li>
                        <Typography variant='body4'>Graphic designer needed to design ad creative for multiple campaigns</Typography>
                    </li>
                    <li>
                        <Typography variant='body4'>Facebook ad specialist needed for product launch</Typography>
                    </li>
                </ul>
        </div>
       </div>
    );
};

export default TitleExampleUl;