
import { Link } from 'react-router-dom';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import { useState } from 'react';
import AppColor from '@common/styles/variables-static';
import MyButtonBlack from '../ui/MyButton/variants/MyButtonBlack';
import DynamicPadding from '../ui/DynamicPadding';

type RelatedPostsProps = {
    relatedPosts: relatedPostsItem[];
    popularLinks: popularPostsItem[];
}

type relatedPostsItem = {
    title:string;
    id:string;
}
type popularPostsItem = {
    place: number;
    title:string;
    id:string;
}
const RelatedPosts = ({popularLinks,relatedPosts}:RelatedPostsProps) => {

    const showItemsCount = 4;
    const [relatedShowItems,setRelatedShowItems] = useState(showItemsCount);
    const [popularShowItems,setPopularShowItems] = useState(showItemsCount);

    return (
        <div className={styles.wrapper}>
            <div className={styles.realated_content_wrapper}>
                <div className={styles.post_recomends_wrapper}>
                   <div className={styles.title_wrapper}>
                        <Typography variant="body4" fontWeight="500">
                            Related Posts
                        </Typography>
                   </div>
                    {relatedPosts.slice(0,relatedShowItems).map((item) => (
                        <Link to={`/community/post/${item.id}`}>
                            <Typography variant="body4">
                                {item.title}
                            </Typography>
                        </Link>
                    ))}
                    {relatedPosts.length > relatedShowItems && <div className={styles.chevron}
                        onClick={() => {
                            setRelatedShowItems(
                                (prev) => prev + showItemsCount
                            )
                        }}>
                        <AppColor.chevronBottom
                            fill={AppColor.text}
                            width={'15px'}
                            height={'7.5px'}
                        />
                    </div>}
                </div>


                <div className={styles.post_recomends_wrapper}>
                  <div className={styles.title_wrapper}>
                        <Typography variant="body4" fontWeight="500">
                            Popular Links
                        </Typography>
                  </div>
                    {popularLinks.slice(0,popularShowItems).map((item) => (
                        <Link to={`/community/post/${item.id}`}>
                            <div className={styles.flex_popular}>
                                <div className={styles.popular_place}>
                                    <Typography
                                        fontSizeStatic="0.75rem"
                                        fontWeight="400">
                                        {item.place}
                                    </Typography>
                                </div>
                                <Typography variant="body4">
                                    {item.title}
                                </Typography>
                            </div>
                        </Link>
                    ))}
                    {popularLinks.length > popularShowItems && <div className={styles.chevron}
                        onClick={() => {
                            setPopularShowItems(
                                (prev) => prev + showItemsCount
                            )
                        }}>
                        <AppColor.chevronBottom
                            fill={AppColor.text}
                            width={'15px'}
                            height={'7.5px'}
                        />
                    </div>
                
                }
                </div>
            </div>
            <DynamicPadding desktop='30px' mobile='20px'/>
            <div className={styles.last_items}>
                <div className={styles.flex_center}>
                    <Typography
                    fontWeight='500'
                        variant="body4"
                        color={AppColor.green}
                        textTransform="uppercase">
                        Show Solution
                    </Typography>
                    <AppColor.greenCheckTrue/>
                </div>
                <MyButtonBlack textTransform='uppercase' onClick={() => {}}>Show best reply</MyButtonBlack>
            </div>
        </div>
    )
};

export default RelatedPosts;