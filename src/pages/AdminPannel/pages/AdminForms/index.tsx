
import DetailsPartnershipsAdmin from '@common/components/ui/DetailsTable/variants/DetailsPartnershipsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsTableFormsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableFormsAdmin/index';

const AdminForms = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    return (    
      <div className={styles.wrapper}>
           <div className={styles.scroll_bar}>
                <div className={styles.top_gap_30_15}>
                <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                    </div>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.development />} title='Development'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.desing />} title='Design'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.marketing />} title='Marketing'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.writing />} title='Writing'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.managment />} title='Management'/>
                    <TopItem activeSelect={selectedCategory} callbackSelect={(item) => {setSelectedCategory(item)}}
                        icon={<AppColor.consulting />} title='Consulting'/>
                        <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                        </div>
                </div>
           </div>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className='center_mobile_text'>
                <div className='gap_10'>
                    <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Logo design specification forms</Typography></div>
                    <div className={styles.orange}>
                        <AppColor.plus stroke='white' width={'fit-content'}/>
                    </div>
                </div>
               </div>
    
               <DynamicPadding />
    
               <div className={styles.top_part}>
                    <div className={styles.buttons_top}>
                        <div className='gap_10'>
                            <Typography variant='body4'>Create</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                        <div className='gap_10'>
                            <Typography variant='body4'>Active</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                    </div>
    
                    <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>Form settings</Typography>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableFormsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Logo design',
                            creactor: fakeUserConstant,
                            status: 'Active'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

type TopItemProps = {
    icon: React.ReactNode;
    title: string;
    activeSelect: string;
    callbackSelect: (item:string) => void;
}
const TopItem = ({icon,title,activeSelect,callbackSelect}:TopItemProps) => {
    const isActive = activeSelect == title;
    return (
        <div onClick={() => {if(!isActive) {callbackSelect(title)}}} className='gap_10'>
            {icon}
            <Typography variant='body4' fontWeight={isActive ? '500' : '400'}>{title}</Typography>
        </div>
    )
}

export default AdminForms;