
import TitleUnderlineActive from '@common/components/ui/TitleUnderlineActive/index';
import styles from './style.module.scss';
import FilterList from '@common/components/FilterList/index';
import ImageCardsShow from '@common/components/ImageCardsShow/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import TagsDisplay from '@common/components/TagsDisplay/index';
import Dropdown from '@common/components/ui/Dropdown/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { DropdownItem } from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownPortfolio/index';
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import test4 from '@assets/images/test4.png';
import { useState } from 'react';
import { PreviewItem } from '../partnershipModal';

const dropdownItems = [
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    }
]

const PorftolioModal = () => {

    const [showModal,setShowModal] = useState(false);

    return (
      <>
            {showModal && <ModalCenterBasic
            desktopMaxWidth='calc(40vw + 60px)'
            bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Slick Lane - Social Product Video'
            nodeAfterTitle={<Typography variant='body5' color={AppColor.transparentBlack}>16 Oct - 25 Nov (39 days)</Typography>}
            >
                <div className='flex_space_between'>
                    <div>
                        <UserTopPageInfo user={fakeUserConstant} />
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <TagsDisplay tags={['Video','Social Media']} />
                    </div>

                    <div className={styles.flex_column}>
                        <MyButtonTransparentOrange width='100%' fontWeight='500' textTransform='uppercase' onClick={() => {}} >
                            CReate
                        </MyButtonTransparentOrange>
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <div className='gap_10'>
                            <Typography variant='subtitle' fontWeight='500'>$200</Typography>
                            <AppColor.cart fill={AppColor.text} />
                            <AppColor.flag />
                            <AppColor.homeAccept />
                        </div>
                    </div>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <FilterList filters={['Description', 'Freelancer', 'FAQ (2)']} />
                <DynamicPadding desktop='30px' mobile='20px'/>
                 <ImageCardsShow
                        widthTotalDesktop='40vw'
                        images={[test1,test2,test3,test4]}
                    />                
                    

                <DynamicPadding />
                        <Typography variant='body3' fontWeight='500'>Description</Typography>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <Typography variant='body4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent aliquet venenatis.</Typography>
                    <DynamicPadding desktop='30px' mobile='15px'/> 

                    <DynamicPadding />
                        <div className="gap_10">
                            <Typography variant='body3' fontWeight='500' >FAQ</Typography>
                            <div className={styles.box_black}><Typography color='white' variant='body3' fontWeight='500'>3</Typography></div>
                        </div>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <Dropdown 
                             showLine={false}
                            title="What if your requirements does not meet any of my package?"
                            description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                        />
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <Dropdown 
                             showLine={false}
                            title="What software do you use?                            "
                            description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                        /> 

                        <DynamicPadding />

                        <TitleUnderlineActive title='Other Portfolio' />

                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <SliderByRef buttons={false} nodes={[
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                        ]} />
                        
                </ModalCenterBasic>}

                <div className={styles.flex_row}>
                    <PreviewItem />
                    <PreviewItem />
                    <PreviewItem />
            </div>
            <DynamicPadding desktop='30px' mobile='20px' />

                <div className={styles.grid_4}>
                {dropdownItems.map(item => (
                    <div style={{maxWidth: '190px'}}>
                        <DropdownItem callback={(item) => {setShowModal(item)}} />
                    </div>
                ))}
                </div>
      </>
    );
};

export default PorftolioModal;