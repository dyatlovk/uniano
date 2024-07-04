
import Typography from '@common/components/ui/Typography/Typography';
import { userModel, fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DetailsTable from '../..';
import DynamicPadding from '../../../DynamicPadding';
import HorizontalLine from '../../../Lines/HorizontalLine';
import SizeBox from '../../../SizeBox';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
import SwitchButton from '../../../SwitchButton';
import InputCommon from '../../../inputs/InputCommon';

type DetailsTablePagesListProps = {
    information: DetailsTablePagesListItem[];
}

export type DetailsTablePagesListItem = {
   user: userModel;
   page: string;
   group: string;
   link: string;
  
}

const DetailsTablePagesList = ({information}:DetailsTablePagesListProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    
    return (
      <DetailsTable
        removeNavBar={true}
        removeThreeLines={true}
        endIcon={<AppColor.edit fill={AppColor.text} />}
        titleEnd='pages'
        projectsCount='3'
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={[]}
        page={currentPage}

        dropdownNode={
            <div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <div className={styles.fields_grid}>
                   <div style={{width: '100%'}}>
                       <div className={styles.field_wrapper}>
                            <InputField
                                initText={currentItem.page}
                                title='Title'
                            />
                          
                            <GroupSelect/>
                           
                            <InputField
                                initText={'Freelance Services'}
                                title='Meta-title'
                            />
                            
                            <InputField
                                initText={'freelance, freelance service, freelance marketplace'}
                                title='Meta-keywords'
                            />
                       </div>
                   </div>

                    <div className={styles.field_wrapper}>
                        <InputField
                            initText={'/'}
                            title='Link'
                        />
                         <InputField
                            initText={'/'}
                            title='Redirect'
                        />
                        <InputField
                        multiLine={true}
                            initText={`Uniano's mission is to change how the world works together. Uniano connects businesses with freelancers offering digital services in 500+ categories.`}
                            title='Meta-description'
    
                        />
                    </div>

                </div>
                <DynamicPadding desktop='30px' mobile='20px' />

                <HorizontalLine />
            </div>
        }
        details={
            currentItem != null ? [
                {
                    title: 'Page',
                    selecrable: true,   
                    maxWidth: '250px',
                    child: <div className='gap_5'>
                        <Typography variant='body4'>{currentItem.page}</Typography>
                        <AppColor.openInBrowser />
                    </div>
                },
                {
                    title: 'Group',
                    maxWidth: '110px',
                    child: <div style={{opacity: currentItem.group.toLowerCase() == 'no group' ? '0.3' : '1'}} className={styles.category_wrapper}>
                    <Typography textLineHeight='1' textTransform='uppercase' fontSizeStatic='13px' color='white'>{currentItem.group}</Typography>
                </div>
                },
                {
                    title: 'Link',
                    maxWidth: '130px',
                    child:  <Typography variant='body4'>{currentItem.link}</Typography>
                },
                {
                    title: 'New Tab',
                    child:  <SwitchButton width='44px' height='24px' />
                },
                {
                    title: 'Indexing',
                    child: <SwitchButton width='44px' height='24px' />
                },
                {
                    title: 'Active',
                    child: <SwitchButton width='44px' height='24px' />
                },
            
            ] : [
                {
                    title: 'Page',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Group',
                    child: <></>
                },
                {
                    title: 'Link',
                    child: <></>
                },
                {
                    title: 'New Tab',
                    child: <></>
                },
                {
                    title: 'Indexing',
                    child: <></>
                },
                {
                    title: 'Active',
                    child: <></>
                },
              
               
            ]
        }
      />
    );
};

type InputFieldProps = {
    title: string;
    initText: string;
    multiLine?: boolean
}

type GroupSelectProps = {

}

const tmpCategorys = [
    'no group',
    'footer',
]
const GroupSelect = () => {

    const [group,setGroup] = useState('no group');
    const [showDropdown,setShowDropdown] = useState(false);

    const borderStyles = {
        borderTopLeftRadius: showDropdown ? '20px' : '20px',
        borderTopRightRadius: showDropdown ? '20px' : '20px',
        borderBottomLeftRadius: showDropdown ? '0px' : '20px',
        borderBottomRightRadius: showDropdown ? '0px' : '20px',
    };


    return (
        <div>
            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Group</Typography>
            <SizeBox height='8px'/>
            <div className={styles.dropdown_relative}>
                <div onClick={() => {setShowDropdown(prev => !prev)}} style={{...borderStyles}} className={styles.select_field}>
                    <div style={{width: 'fit-content',padding: '4px 14px',opacity: group.toLocaleLowerCase() == 'no group' ? '0.3' : '1'}} className={styles.category_wrapper}>
                        <Typography textLineHeight='1' fontSizeStatic='13px' fontWeight='500' color={'white'}>{group.toUpperCase()}</Typography>
                    </div>
                    {showDropdown
                    ? <AppColor.chevronTop className="icon"  fill={AppColor.text}/>
                    : <AppColor.chevronBottom  className="icon" fill={AppColor.text}/>}
                </div>

                <div style={{display: showDropdown ? 'grid' : 'none'}} className={styles.absolute_dropdown_field}>
                        {tmpCategorys.map(item =>
                      <div onClick={() => {setGroup(item);setShowDropdown(false)}} className={styles.dropdown_child}>
                            <div style={{width: 'fit-content',padding: '4px 14px',opacity: item.toLocaleLowerCase() == 'no group' ? '0.3' : '1'}} className={styles.category_wrapper}>
                                 <Typography textLineHeight='1' fontSizeStatic='13px' fontWeight='500' color={'white'}>{item.toUpperCase()}</Typography>
                             </div>
                      </div>
                        )}
                </div>
               
            </div>
        </div>
    )
}
const InputField = ({initText,title,multiLine}:InputFieldProps) => {
    return (
        <div style={multiLine ? {height:'100%',maxHeight: '120px'} : {}}>
            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{title}</Typography>
            <SizeBox height='8px'/>
            <InputCommon
                callback={() => {}}
                initText={initText}
                multiLine={multiLine}
                padding={multiLine ? '9px 14px 50px 14px' :'9px 14px'}
                rightPadding={14}
                placeholder=''
            />
        </div>
    )
}
export default DetailsTablePagesList;