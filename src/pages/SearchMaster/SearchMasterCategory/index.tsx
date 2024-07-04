
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import { useEffect, useState } from 'react';
import SizeBox from '@common/components/ui/SizeBox/index';
import { developmentDropdown } from '@common/models/constants';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import { Link, useNavigate } from 'react-router-dom';

const SearchMasterCategory = () => {
    const [activeCategory,setActiveCategory] = useState('Development');
    const [selectedSubCategory,setSelectedSubCategory] = useState('');
    const currentList = developmentDropdown.find(item => item.title == activeCategory);
    
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
            currentItemProgress='Category'
           />

          <div className={styles.wrapper}>
               <DynamicPadding />
               <div className={styles.text_flex}>
                    <Typography variant='titleBig' textTransform='uppercase'>Category</Typography>
                    <div className={styles.template_icon}>
                    <AppColor.template />
                    </div>
               </div>
    
               <DynamicPadding desktop='25px' mobile='20px'/>
               <div style={{textAlign: 'center'}} className='justify_center'>
                <Typography variant='body4' color={AppColor.transparentBlack}>Describe your project, and we will help you find the best-suited solutions. Or pick it by yourself.</Typography></div>
                <DynamicPadding />

                <InputCommon
                    icon={<AppColor.search />}
                    placeholder='Full site development'
                    padding='12px 20px'
                    rightPadding={20}
                    callback={() => {}}
                />

                <DynamicPadding />

                <div className={styles.category_wrapper}>
                    <CategorySelect 
                        itemIcon={<AppColor.development />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Development'
                    />
                    <CategorySelect 
                        itemIcon={<AppColor.desing />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Design'
                    />
                    <CategorySelect 
                        itemIcon={<AppColor.marketing />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Marketing'
                    />
                    <CategorySelect 
                        itemIcon={<AppColor.writing />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Writing'
                    />
                    <CategorySelect 
                        itemIcon={<AppColor.managment />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Management'
                    />
                    <CategorySelect 
                        itemIcon={<AppColor.consulting />}
                        activeCategory={activeCategory}
                        callback={(item) => {setActiveCategory(item)}}
                        title='Consulting'
                    />
                </div>
                <SizeBox height='20px'/>

                <div className={styles.search_result}>
                {currentList.items.map(item =>
                    <div style={{whiteSpace: 'nowrap'}}>
                        <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{item.title}</Typography>
                        <DynamicPadding desktop='20px' mobile='20px'/>
                       <div className={styles.gap_20}>
                            {item.links.map(item =>
                                <div className='gap_5' onClick={() => {setSelectedSubCategory(item)}}>
                                    <div className={`${styles.select_box} ${selectedSubCategory == item ? styles.select_box_active : styles.select_box_disabled}`}></div>
                                    <Typography color={selectedSubCategory == item ? AppColor.orange : AppColor.text} variant='body4'>{item}</Typography>    
                                </div>
                            )}
                       </div>
                    </div>    
                )}
                </div>

                <DynamicPadding />
                <div className={'flex_space_between'}>
                        <ChevronMoveTo variant='left' onClick={() => {
                            navigate(-1);
                        }} text='Step back' title='cancel' />
                        <Link to={'/search-master/requirements'}>
                            <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='Requirement' />
                        </Link>
                </div>
          </div>


      </div>
    );
};


type CategorySelectProps = {
    itemIcon: React.ReactNode;

    activeCategory: string;
    callback: (item:string) => void;
    title: string;
}
const CategorySelect =({itemIcon,title,activeCategory,callback}:CategorySelectProps) => {
    
    return(
        <div onClick={() => {callback(title)}} className={`gap_5 ${styles.category_select} ${title == activeCategory && styles.category_active}`}>
            {itemIcon}
            <Typography variant='body4' fontWeight={activeCategory == title ? '500' : '400'}>{title}</Typography>
        </div>
    )
}

export default SearchMasterCategory;