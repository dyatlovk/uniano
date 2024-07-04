
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type CategorySelectProps = {
    title: string;
    icon: React.ReactNode;
    callback: (item:string) => void;
    activeSelect: string;
}
const CategorySelect = ({activeSelect,callback,icon,title}:CategorySelectProps) => {

    return (
      <div style={{backgroundColor: activeSelect == title ? AppColor.white : 'white'}}
      onClick={() => {callback(title)}}
      className={`${styles.category_select} cursor`}>
           {icon}
           <Typography variant='body4' fontWeight={activeSelect == title ? '500' : '400'}>
            {title}
           </Typography>
           <AppColor.chevronRight 
            style={{opacity: activeSelect == title ? '1' : '0',marginLeft: 'auto'}}
            fill={AppColor.text}
            width={'9px'} height={'15px'}
           />
      </div>
    );
};

export default CategorySelect;