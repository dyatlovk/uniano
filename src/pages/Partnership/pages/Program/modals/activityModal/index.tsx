
import { ActivityItem } from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';

const ActivityModal = () => {

    return (
      <>
           <div style={{width: '100%'}}></div>
               <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />,
            <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />,
            <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />

            <DynamicPadding desktop='20px' mobile='10px'/>

            <div className='justify_center'>
                <MyButtonTransparentBlack onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                Show more +2
                </MyButtonTransparentBlack>
            </div>
            <DynamicPadding desktop='20px' mobile='10px'/>
      </>
    );
};

export default ActivityModal;