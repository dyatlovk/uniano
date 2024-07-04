import AppColor from "@common/styles/variables-static";

import Typography from "@common/components/ui/Typography/Typography";
import styles from './style.module.scss';
import { userModel } from "common/models/user";
import CardStatisticPartnership from "../..";
const fakeUser:userModel = {
    country: 'Ukraine',
    image: '',
    name: 'Artem M.',
    roles: 'Customer',
    isActive: false,
    lvl: '100',
    statistic: {
      comments_count: 55,
      sponsorship_count: 55,
      rating: 98,
      responses_count: 900
    }
  }
  
type CardStatisticsParthnershipConstantProps = {
    navigateTo?: string;
    removeLastElement?: boolean;
    setRemoveLastElement?: (value: boolean) => void;
}
const CardStatisticsParthnershipConstant  = ({navigateTo,removeLastElement,setRemoveLastElement}: CardStatisticsParthnershipConstantProps) => {
    // tmp update
    return (
        <CardStatisticPartnership 
        navigateTo={navigateTo}
        removeLastElementProps={removeLastElement}
        setRemoveLastElementProps={setRemoveLastElement}
        title='Logo by sample in vector in maximum quality' 
        tags={['Logo','Logo Design', 'Logo Maker', 'Logo Create']}
        user={fakeUser}
        cardType="Logo design"

        rate={ 
            <div className={styles.statistic_flex}>
                <Typography textLineHeight="0.6" variant='body4'>
                    5% - 10%
                </Typography>
            </div> 
        }
        EPC= {
            <Typography textLineHeight="0.6" variant='body4'>
                    5$
            </Typography>
        }
        CR= {
            <Typography textLineHeight="0.6" variant='body4'>
                10%
            </Typography>
        }
        CR48hours= {
            <Typography textLineHeight="0.6" variant='body4'>
                8.78%
            </Typography>
        }
        
    />
    );
};

export default CardStatisticsParthnershipConstant;