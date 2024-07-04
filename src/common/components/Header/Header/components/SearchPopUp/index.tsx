
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useState } from 'react';
import { results } from './content';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';


const SearchPopUp = () => {

    const [search,setSearch] = useState('');

    const [showDropdown,setShowDropdown] = useState(false);

    const [activeSelection,setActiveSelection] = useState('Services Catalog')

    return (
      <div className={styles.search_popup_wrapper}>
           <div className={styles.padding}>
                <div className='gap_5'>
                    <AppColor.search height={'20px'}/>
                    <input onChange={(item) => {setSearch(item.currentTarget.value)}} value={search} type='text' placeholder='Search' />
                    <div style={{position: 'relative',cursor: 'pointer'}} className='gap_5'>
                        <div className={styles.vertical_line}></div>
                        <div onClick={() => {setShowDropdown(prev => !prev)}} style={{whiteSpace: 'nowrap'}} className='gap_5'>
                            <Typography variant='body5' color={AppColor.transparentBlack}>
                            {activeSelection}
                            </Typography>
                            <AppColor.chevronBottom fill={AppColor.transparentBlack} width={'8px'} height={'5px'}/>
                        </div>
                        <div style={{display: showDropdown ? 'grid' : 'none'}} className={styles.dropdown_wrapper}>
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.searchIconLines fill={AppColor.text} />} title='Search Master' />
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.cart fill={AppColor.text} />} title='Services Catalog' />
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.orders />} title='Create Order' />
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.caseIcon />} title='Sponsorships Catalog' />
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.freelancer fill={AppColor.text} />} title='Freelancers Catalog' />
                            <DropdownItem activeTitle={activeSelection} callback={(item) => {setActiveSelection(item);setShowDropdown(false)}} icon={<AppColor.managers />} title='Contact Managers ' />
                        </div>
                    </div>
                </div>

           </div>
           <HorizontalLine />
           <div className={styles.padding_title}>
                <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Recent</Typography>
           </div>
           <div>
                {results.map(item => <ResultItem resultText={item} search={search} />)}
           </div>
           <div className={styles.padding_title}>
                <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>Related</Typography>
           </div>
           <div>
                <RelatedItem />
                <RelatedItem />
                <RelatedItem />
           </div>


           <SizeBox height='20px'/>
      </div>
    );
};


type DropdownItemProps = {
    icon: React.ReactNode;
    title: string;
    callback: (item:string) => void;
    activeTitle: string;
}
const DropdownItem = ({icon,title,callback,activeTitle}:DropdownItemProps) => {
    return (
        <div className={styles.dropdown_item} onClick={() => {callback(title)}}>
            {icon}
            <Typography fontWeight={activeTitle == title ? '500' : '400'} variant='body5'>{title}</Typography>
        </div>
    )
}
const RelatedItem = () => {
    return (
        <div className={styles.related_wrapper}>
            <img src={fakeUserConstant.image} width={'66px'} height={'53px'} style={{objectFit: 'cover'}} alt="" />

            <div className={styles.flex_column}>
                <Typography textLineHeight='1' variant='body5'>Logo by sample in vector in maximum quality</Typography>
                
                <Typography textLineHeight='1' variant='body5' fontWeight='500'>
                From $50 <span style={{textDecoration: 'line-through',fontWeight: '600',fontSize: '12px',color: AppColor.transparentBlack}}>$100</span>
                </Typography>
            </div>
        </div>
    )
}

type ResultItemProps = {
    search: string;
    resultText: string;
}
const ResultItem = ({resultText,search}:ResultItemProps) => {
    const resultTextArray = resultText.split(' ');
    const searchArray = search.split(' ');
    return (
        <div className={styles.results_item}>
            <Typography variant='body5'>
                {resultTextArray.map(item => {
                    if(!searchArray.includes(item)) return `${item} `
                    return <span style={{fontWeight: '600'}}>{item} </span>
                })}
            </Typography>
        </div>
    )
}
export default SearchPopUp;