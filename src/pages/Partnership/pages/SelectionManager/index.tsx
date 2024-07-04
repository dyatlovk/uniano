
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import { useScreenSize } from '@common/helpers/useScreenSize';
import Typography from '@common/components/ui/Typography/Typography';
import { useState } from 'react';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import CardManager from '@common/components/cards/CardStatiscticsPartnership/variants/CardManager/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const SelectionManager = () => {
    const { width, height } = useScreenSize()
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Artem Markevych WordPress Partnership';
    const [activeSelection,setActiveSelection] = useState('New');
    return (
        <div>
        <Header />

        <NavigationBarSelection
           allItemsProgress={['Program', 'Selection', 'Progress', 'Completed']}
           currentItemProgress='Program'
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                            <AppColor.refreshA/>
                }
            />

            <DynamicPadding />

            <ResponsiveLayoutTwo
            gap='120px'
            item1MaxWidth='830px'
            item2MaxWidth='250px'
                item1={
                    <div>
                    <div className={styles.flex_center_column}><AppColor.searchingWaitingImage width={'fit-content'} /></div>
                    <DynamicPadding />

                    <div className={styles.selection_item_wrapper}>
                    <SelectionItem
                        icon={<AppColor.newIcon width={'34px'} />}
                        text='New'
                        color={AppColor.text}
                        onClick={(item) => {setActiveSelection(item)}}
                        activeItem={activeSelection}
                    />
                        <SelectionItem
                        icon={<AppColor.shortlisted width={'34px'} />}
                        text='Shortlisted'
         
                        color={AppColor.orange}
                        onClick={(item) => {setActiveSelection(item)}}
                        activeItem={activeSelection}
                    />
                        <SelectionItem
                        icon={<AppColor.close width={'34px'} height={'32px'} fill={AppColor.red} />}
                        text='Cancelled'
                        color={AppColor.red}
                        onClick={(item) => {setActiveSelection(item)}}
                        activeItem={activeSelection}
                    />
                     <SelectionItem
                        icon={<AppColor.hired width={'34px'} />}
                        text='Hired'
                        color={AppColor.green}
                        onClick={(item) => {setActiveSelection(item)}}
                        activeItem={activeSelection}
                    />
                    </div>
                    <DynamicPadding />
                    <div className={styles.box_text}>
                        <Typography variant='body4'>
                        You are in <span style={{fontWeight: '500'}}>new list</span>. This means freelancer decieded nothing yet about you. Try to engage his attention.
                        </Typography>
                    </div>
                    <DynamicPadding />

                    <div className={'flex_space_between desktop'}>
                        <ChevronMoveTo variant='left' onClick={() => {}} 
                            text='Step back' title='program'/>

                        <ChevronMoveTo disabled={true} variant='right' onClick={() => {}} 
                            text='Next step' title='progress'/>
                    </div>

                    <DynamicPadding />
         
                    </div>
                }
                item2={ 
                <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                    <CardManager
                        showCardManagerActions={false}
                        disableAbsoluteItems={true}
                        borderTopRadius='20px'
                        tags={['Logo', 'Logo Design', 'Logo Maker', 'Logo Create']}
                        programs={<Typography variant='body5' fontWeight='500'>3</Typography>}
                        sales={<Typography variant='body5' fontWeight='500'>450</Typography>}
                        leads={<Typography variant='body5' fontWeight='500'>918</Typography>}
                        earned={<Typography variant='body5' fontWeight='500'>$45K</Typography>}
                        title=''
                        user={fakeUserConstant}
                    />
                    <DynamicPadding desktop='0px' mobile='30px'/>
                     <div className={'flex_space_between mobile'}>
                        <ChevronMoveTo variant='left' onClick={() => {}} 
                            text='Step back' title='program'/>

                        <ChevronMoveTo disabled={true} variant='right' onClick={() => {}} 
                            text='Next step' title='progress'/>
                    </div>

                </div>}

                ></ResponsiveLayoutTwo>
            
                
            </div>
            

            <CardsSliderRelated />
            <div className={styles.wrapper}><AskedQuestion/></div>
                    <Footer/>
           
      </div>
    );
};

type SelectionItemProps = {
    icon: any;
    text: string;
    color: string;
    onClick: (item:string) => void;
    activeItem: string;
}
const SelectionItem = ({icon,text,color,onClick,activeItem   }:SelectionItemProps) => {
    return (
        <div style={{backgroundColor: activeItem == text ? AppColor.white : 'white'}} onClick={() => {onClick(text)}} className={styles.selection_item}>
            {icon}
            <div style={{display: 'flex',alignItems: 'center'}}>
                <Typography variant='body4' color={color} fontWeight='500'>{text}</Typography>
    
            </div>
        </div>
    )
}


export default SelectionManager;