
import { userModel } from '@common/models/user';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import InputCommon from '../ui/inputs/InputCommon';
import DynamicPadding from '../ui/DynamicPadding';
import CommentComponent from './components/CommentComponent';

export type CommentsSectionProps = {
    comments: comment[];
}

export type comment = {
    user: userModel;
    comment: string;
    likesPercent: number;
    isSolution: boolean;
    isBestReplay: boolean;
    answeredUserComment?: comment[];
    depth?: number;
    money?: string;
}
const CommentsSection = ({comments}:CommentsSectionProps) => {

    return (
        <div>
            <div className={styles.flex_center}>
                <Typography variant="body3" fontWeight="500">
                    Replies
                </Typography>
                <div className={styles.dark_wrapper}>
                    <Typography
                        variant='body9'
                        color="white">{comments.length}</Typography>
                </div>
            </div>

            <DynamicPadding desktop='30px' mobile='20px'/>

            <InputCommon 
                padding='13px 20px'
                rightPadding={20}
                callback={() => {}}
                placeholder='Add reply'
            />
            <DynamicPadding mobile='20px' desktop='30px' />
            {
                comments.map((item,index) =>
                   <div>
                        <CommentComponent
                            money={item.money}
                            comment={item.comment}
                            depth={0}
                            isBestReplay={item.isBestReplay}
                            isSolution={item.isSolution}
                            likesPercent={item.likesPercent}
                            user={item.user}
                            answeredUserComment={item.answeredUserComment}
                        />
                        <DynamicPadding mobile='20px' desktop='30px'/>
                   </div>
                )
            }
        </div>
    )
};


export default CommentsSection;