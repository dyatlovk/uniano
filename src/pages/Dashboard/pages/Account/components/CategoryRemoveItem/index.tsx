
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';


type CategoryRemoveItemProps = {
    title: string;
    callbackRemove: (item:string) => void;
}
const CategoryRemoveItem = ({callbackRemove,title}:CategoryRemoveItemProps) => {

    return (
      <div className='gap_10 cursor' onClick={() => {callbackRemove(title)}}>
           <AppColor.arrowFour />
           <Typography variant='body4'>{title}</Typography>
           <AppColor.close fill={AppColor.red} width={'15px'} height={'15px'}/>
      </div>
    );
};

export default CategoryRemoveItem;