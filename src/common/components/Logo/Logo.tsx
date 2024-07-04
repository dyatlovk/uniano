import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom';

type LogoProps = {
  color?: string;
  text?: string;
  alignItems?: string
}
const Logo = ({color,text,alignItems}:LogoProps) => {

    return (
     <Link to={'/dashboard/home'}>
        <span style={{alignItems: alignItems ?? 'center'}} className={styles.logo_wrapper}>
          <p style={{color: color,WebkitTextStrokeColor: color}} className={styles.p}>
            UNIANO
          </p>
         <Typography fontWeight='600' fontSizeStatic='12px' color={color ?? AppColor.text} textTransform='uppercase'>
         {text ?? 'WHERE TALENTS UNITE '}
         </Typography>
        </span>
     </Link>
    );
};

export default Logo;