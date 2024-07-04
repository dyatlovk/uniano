
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import ButtonsSelectList from '@common/components/ButtonsSelectList/index';
import { Link, useNavigate } from 'react-router-dom';

const SearchMasterSkills = () => {
    const [activeTitle,setActiveTitle] = useState('');
    const [selectedSkills,setSelectedSkills] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: 0,behavior: 'smooth'});
        },0)
    },[]) 
    const navigate = useNavigate();
    
    return (
      <div>
           <HeaderSearch 
            allItemsProgress={['Category', 'Requirements', 'Skills', 'Budget & Delivery', 'Results']}
            currentItemProgress='Skills'
           />

          <div className={styles.wrapper}>
               <DynamicPadding />
               <div className={styles.text_flex}>
                    <Typography variant='titleBig' textTransform='uppercase'>skills</Typography>
                    <div className={styles.template_icon}>
                    <AppColor.template />
                    </div>
               </div>
    
               <DynamicPadding desktop='25px' mobile='20px'/>
               <div style={{textAlign: 'center'}} className='justify_center'>
                <Typography variant='body4' color={AppColor.transparentBlack}>Select the specific skills you require for your project</Typography></div>
                <DynamicPadding />

                <ButtonsSelectList
                    
                    callback={(item) => {setSelectedSkills(item)}}
                    gap='20px'
                    text={[
                        "HTML/CSS",
                        "React",
                        "Angular",
                        "PostgreSQL",
                        "JavaScript",
                        "Vue.js",
                        "MongoDB",
                        "Web Application Security",
                        "WordPress",
                        "Joomla",
                        "PHP",
                        "Python",
                        "Ruby",
                        "Java",
                        "C#",
                        "Django",
                        "Git",
                        "RESTful API",
                        "Laravel",
                        "Web Servers",
                        "SEO",
                        "Spring",
                        "MySQL",
                        "Cross-browser Compatibility",
                        "Testing and Debugging",
                        "Drupal",
                        "Frontend Development",
                        "Backend Development"
                      ]}
                />


                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className="gap_5">
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Selected</Typography>
                    <Typography variant='body4' fontWeight='500' color={AppColor.orange}>{selectedSkills.length} skill</Typography>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div style={{maxWidth: '530px',margin: '0 auto'}} className={'flex_space_between'}>
                <ChevronMoveTo variant='left' onClick={() => {
                            navigate(-1);
                        }} text='Step back' title='requirement' />
                        <Link to={'/search-master/budget-and-delivery'}>
                        <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='budget & Delivery' />
                        </Link>
                </div>
          </div>


      </div>
    );
};

export default SearchMasterSkills;