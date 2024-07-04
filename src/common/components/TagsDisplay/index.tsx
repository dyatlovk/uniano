
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';

const TagsDisplay = ({tags}: {tags:string[]}) => {

    return (
        <div className={styles.tags_wrapper}>
            {tags.map(item =>
                <div className={styles.tag}> <Typography color='white' variant='body4' fontWeight='500'>{item}</Typography>    </div>
            )}
           
        </div>
    );
};

export default TagsDisplay;