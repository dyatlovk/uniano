
import ButtonsSelectList from '@common/components/ButtonsSelectList/index';
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import RadioButton from '@common/components/ui/RadioButton/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import { levelMap } from '@common/components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const SearchMasterBudgetAndDelivery = () => {
    const [selectedSkillsLevel,setSelectedSkillsLevel] = useState<string[]>([])
    const [activePaymentMethod,setActivePaymentMethod] = useState('');
    const [activeDeliveryMethod,setActiveDeliveryMethod] = useState('');

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
            currentItemProgress='Budget & Delivery'
           />

          <div className={styles.wrapper}>
               <DynamicPadding />
               <div className={styles.text_flex}>
                    <Typography variant='titleBig' textTransform='uppercase'>budget & delivery</Typography>
                    <div className={styles.template_icon}>
                    <AppColor.template />
                    </div>
               </div>
    
               <DynamicPadding desktop='25px' mobile='20px'/>
               <div style={{textAlign: 'center'}} className='justify_center'>
                <Typography variant='body4' color={AppColor.transparentBlack}>Tell us your budget and time delivery, and we'll tailor the project options accordingly.</Typography></div>
                <DynamicPadding />

                
                <div className={styles.shadow_box}>
                    <Typography variant='body3' fontWeight='500'>What payment option would you like to choose?</Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <div className={styles.first_grid}>
                        <SelectItem
                            activeItem={activePaymentMethod}
                            callback={(item) => {setActivePaymentMethod(item)}}
                            title='A fixed amount without negotiation'
                        />
                         <SelectItem
                            activeItem={activePaymentMethod}
                            callback={(item) => {setActivePaymentMethod(item)}}
                            title='Negotiable budget'
                            isNegotiation={true}
                        />
                        <SelectItem
                            activeItem={activePaymentMethod}
                            callback={(item) => {setActivePaymentMethod(item)}}
                            title='Need an offer'
                            onlyText='If you are unsure about estimating the budget'
                        />
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                <HorizontalLine />
                <DynamicPadding desktop='30px' mobile='20px'/>

                <Typography variant='body4'>You will see results with <span style={{fontWeight: '500',color: AppColor.orange}}>2 skill levels</span> only</Typography>
                
                <SizeBox height='5px'/>
                <div className={styles.level_wrapper}>
                    <LevelChoose
                        activeSelected={selectedSkillsLevel}
                        callback={(item) => {setSelectedSkillsLevel(item)}}
                        lvl={1}
                        priceRange='$30-$50'
                        title='Beginner'
                        titleColor='#B6DE59'
                    />  
                     <LevelChoose
                        activeSelected={selectedSkillsLevel}
                        callback={(item) => {setSelectedSkillsLevel(item)}}
                        lvl={2}
                        priceRange=' $51 - $100'
                        title='Junior'
                        titleColor='#219653'
                    />  
                     <LevelChoose
                        activeSelected={selectedSkillsLevel}
                        callback={(item) => {setSelectedSkillsLevel(item)}}
                        lvl={3}
                        priceRange='$101 - $300 '
                        title='Middle'
                        titleColor='#F2C94C'
                    />  
                     <LevelChoose
                        activeSelected={selectedSkillsLevel}
                        callback={(item) => {setSelectedSkillsLevel(item)}}
                        lvl={4}
                        priceRange='$301 - $500   '
                        title='Senior'
                        titleColor='#F4A72A'
                    />  
                     <LevelChoose
                        activeSelected={selectedSkillsLevel}
                        callback={(item) => {setSelectedSkillsLevel(item)}}
                        lvl={5}
                        priceRange=' starting at $501  '
                        title='Lead'
                        titleColor='#EB5757'
                    />  

                </div>

                </div>
                
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className={styles.shadow_box}>
                <Typography variant='body3' fontWeight='500'>What is your desired project time delivery?</Typography>
                    <DynamicPadding desktop='30px' mobile='20px'/>
                    <div className={styles.first_grid}>
                        <SelectItem
                            activeItem={activeDeliveryMethod}
                            callback={(item) => {setActiveDeliveryMethod(item)}}
                            title='A fixed delivery'
                            placeholder='* days'
                        />
                         <SelectItem
                            activeItem={activeDeliveryMethod}
                            callback={(item) => {setActiveDeliveryMethod(item)}}
                            title='Negotiable delivery'
                            isNegotiation={true}
                            placeholder='* days'
                        />
                        <SelectItem
                            activeItem={activeDeliveryMethod}
                            callback={(item) => {setActiveDeliveryMethod(item)}}
                            title='Need an offer'
                            onlyText='If you are unsure about estimating the budget'
                        />
                    </div>

                    
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className={styles.text_box}>
                    <Typography variant='body4'>
                    You will see <span style={{fontWeight: '500'}}>1 454 services</span> and <span style={{fontWeight: '500'}}>2 414 freelancers</span> on results page
                    </Typography>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div style={{maxWidth: '570px',margin: '0 auto'}} className={'flex_space_between'}>
                        <ChevronMoveTo variant='left' onClick={() => {
                            navigate(-1);
                        }} text='Step back' title='skills' />
                        <Link to={'/search-master/results'}>
                        <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='results' />
                        </Link>
                </div>
          </div>


      </div>
    );
};  


type SelectItemProps = {
    title: string;
    isNegotiation?: boolean;
    callback: (item:string) => void;
    activeItem: string;
    onlyText?: string;
    placeholder?: string
}
const SelectItem = ({placeholder,activeItem,callback,title,isNegotiation,onlyText}:SelectItemProps) => {
    return (
        <div className={styles.select_item_input} onClick={() => {callback(title)}}>
            <RadioButton activeSelection={activeItem == title} text={title}/>
            <SizeBox height='15px'/>
            {onlyText
            ?<Typography variant='body4' color={AppColor.transparentBlack}>{onlyText}</Typography>
            : !isNegotiation
            ? <InputCommon
            width='115px'
                placeholder={placeholder ?? '$000'}
                callback={(item) => {callback(title);}}
            />
            : <div className={styles.negotiation_box}>
                <InputCommon
                    width='115px'
                        placeholder={placeholder ?? '$000'}
                        callback={(item) => {callback(title);}}
                    />
                    <div className={styles.line}></div>
                    <InputCommon
                    width='115px'
                        placeholder={placeholder ?? '$000'}
                        callback={(item) => {callback(title);}}
                    />    
            </div>}
        </div>
    )
}

type LevelChooseProps = {
    title: string;
    lvl: number;
    priceRange: string;
    titleColor: string;
    activeSelected: string[];
    callback: (item:string[]) => void
}
const LevelChoose = ({titleColor,lvl,priceRange,title,activeSelected,callback}:LevelChooseProps) => {

    const levelItem = levelMap[lvl];

    const handleClick = () => {
        if(activeSelected.includes(title)) {
            const filtered = activeSelected.filter(item => item != title);
            callback(filtered);
            return;
        }
        callback([...activeSelected, title]);
    }
    return (
        <div style={{backgroundColor: activeSelected.includes(title) ? AppColor.white : 'white'}} className={styles.level_choose} onClick={handleClick}>
            {levelItem}
            <Typography color={titleColor} variant='body4' fontWeight='500'>{title}</Typography>
            <Typography variant='body4'>{priceRange}</Typography>
        </div>
    )
}

export default SearchMasterBudgetAndDelivery;