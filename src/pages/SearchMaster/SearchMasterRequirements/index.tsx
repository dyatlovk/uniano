
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import { developmentDropdown } from '@common/models/constants';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import { Link, useNavigate } from 'react-router-dom';

const SearchMasterRequirements = () => {
    const [activeTitle,setActiveTitle] = useState('');

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: 0,behavior: 'smooth'});
        },0)
    },[]) 
    const navigate = useNavigate();
    return (
      <div>
           <HeaderSearch 
            allItemsProgress={['Category', 'Requirements', 'Skills', 'Budget & Delivery ', 'Results']}
            currentItemProgress='Requirements'
           />

          <div className={styles.wrapper}>
               <DynamicPadding />
               <div className={styles.text_flex}>
                    <Typography variant='titleBig' textTransform='uppercase'>Requirements</Typography>
                    <div className={styles.template_icon}>
                    <AppColor.template />
                    </div>
               </div>
    
               <DynamicPadding desktop='25px' mobile='20px'/>
               <div style={{textAlign: 'center'}} className='justify_center'>
                <Typography variant='body4' color={AppColor.transparentBlack}>Choose the specific features and functionalities you want to implement.</Typography></div>
                <DynamicPadding />

                <div className={styles.switch_wrapper}>
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                    <SelectItem 
                        title='Creating a website'
                        icon={<AppColor.news height={'25px'}/>}
                        activeTitle={activeTitle}
                        callback={(item) => {setActiveTitle(item)}}
                    />
                </div>
        

                <DynamicPadding />
                <div style={{maxWidth: '530px',margin: '0 auto'}} className={'flex_space_between'}>
                        <ChevronMoveTo variant='left' onClick={() => {
                             navigate(-1);
                        }} text='Step back' title='category' />
                       <Link to={'/search-master/skills'}>
                       <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='skills' />
                       </Link>
                </div>
          </div>


      </div>
    );
};

type SelectItemProps = {
    title: string;
    icon: React.ReactNode;
    activeTitle: string
    callback: (item: string) => void
}
const SelectItem = ({activeTitle,callback,icon,title}:SelectItemProps) => {
    const [isActiveItem,setIsActiveItem] = useState(false);
    const handleSwitch = (item:boolean) => {
        if(item) {
            callback(title);
            return
        }
        callback('');
    }
    const isActive = activeTitle == title;
    return (
        <div onClick={() => {setIsActiveItem(prev => !prev)}} className={styles.select_item_switch}>
            <div className='gap_10'>
                <MyCheckbox
                    height='14px'
                    width='14px'
                    basicValue={isActiveItem}
                    callback={(item) => {handleSwitch(item)}}
                />
                <div className={isActive ? styles.active_icon : styles.disabled}>
                {icon}
                </div>
                <Typography variant='body4' fontWeight={isActive ? '500' : '400'} color={isActive ? AppColor.orange : AppColor.text} >
                    {title}
                </Typography>
            </div>
        </div>
    )
}

export default SearchMasterRequirements;