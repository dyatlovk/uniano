
import { fakeUserConstant, userModel } from '@common/models/user';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import Header from '@common/components/Header/Header/index';
import AppColor from '@common/styles/variables-static';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import { useScreenSize } from '@common/helpers/useScreenSize';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import DropdownList from '../DropdownList';
import { useState } from 'react';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonBlack from '@common/components/ui/MyButton/variants/MyButtonBlack';
import RelatedPosts from '@common/components/RelatedPosts/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import CommentsSection, { comment } from '@common/components/CommentsSection/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import RadioButton from '@common/components/ui/RadioButton/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';
import AddPost from '@common/components/ui/ButtonsPlus/AddPost/index';

const PostPageById = () => {

    const RelatedPostItem = <RelatedPosts 
    popularLinks={[
        {
            id: '12121',
            title: 'The Lure of Geolocation | Mudita',
            place: 12,
        },
        {
            id: '12121',
            title: 'Creepy ‘Geofence’ Finds Anyone',
            place: 12,
        },
        {
            id: '12121',
            title: 'The Lure of Geolocation | Mudita',
            place: 12,
        },
        {
            id: '12121',
            title: 'Creepy ‘Geofence’ Finds Anyone',
            place: 12,
        },
        {
            id: '12121',
            title: 'The Lure of Geolocation | Mudita',
            place: 12,
        },
        {
            id: '12121',
            title: 'Creepy ‘Geofence’ Finds Anyone',
            place: 12,
        },
        {
            id: '12121',
            title: 'The Lure of Geolocation | Mudita',
            place: 12,
        },
        {
            id: '12121',
            title: 'Creepy ‘Geofence’ Finds Anyone',
            place: 12,
        },
    ]}
    relatedPosts={[
        {
            id: '12121',
            title: 'What is Uniano?'
        },
        {
            id: '12121',
            title: 'Getting started on Uniano'
        },
        {
            id: '12121',
            title: 'What is Uniano?'
        },
        {
            id: '12121',
            title: 'Getting started on Uniano'
        },
        {
            id: '12121',
            title: 'What is Uniano?'
        },
        {
            id: '12121',
            title: 'Getting started on Uniano'
        },
        {
            id: '12121',
            title: 'What is Uniano?'
        },
        {
            id: '12121',
            title: 'Getting started on Uniano'
        },
        {
            id: '12121',
            title: 'Getting started on Uniano'
        }
    ]}
/>
    const fakePost =  {
        user: fakeUserConstant,
        comments: ['In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. '],
        created: true,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
        Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent aliquet venenatis.`,
        description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
        title: 'New to Uniano, Need assistance ',
        saved: false,
        createdAgo: '1 min ago',
        category: 'Getting Started',
        subCategory: 'Registration'
    }

    const fakeComment: comment = {
        user: fakeUserConstant,
        comment: 'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. ',
        likesPercent: Math.round(Math.random() * 100),
        isSolution: Math.random() < 0.5,
        isBestReplay: Math.random() < 0.3,
        answeredUserComment: [{
            user: fakeUserConstant,
            comment: '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likesPercent: Math.round(Math.random() * 100),
            isSolution: Math.random() < 0.5,
            isBestReplay: Math.random() < 0.3,
            answeredUserComment: [{
                user: fakeUserConstant,
                comment: '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                likesPercent: Math.round(Math.random() * 100),
                isSolution: Math.random() < 0.5,
                isBestReplay: Math.random() < 0.3,
                answeredUserComment: [],
            },{
                user: fakeUserConstant,
                comment: '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                likesPercent: Math.round(Math.random() * 100),
                isSolution: Math.random() < 0.5,
                isBestReplay: Math.random() < 0.3,
                answeredUserComment: [],
            },],
        },{
            user: fakeUserConstant,
            comment: '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likesPercent: Math.round(Math.random() * 100),
            isSolution: Math.random() < 0.5,
            isBestReplay: Math.random() < 0.3,
            answeredUserComment: [],
        },{
            user: fakeUserConstant,
            comment: '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likesPercent: Math.round(Math.random() * 100),
            isSolution: Math.random() < 0.5,
            isBestReplay: Math.random() < 0.3,
            answeredUserComment: [],
        }],
    };
    
    const fakeComments: comment[] = Array.from({ length: 30 }, () => ({ ...fakeComment }));
    
    const [currentActiveTitle,setCurrentActiveTitle] = useState(fakePost.subCategory);
    const {width,height} = useScreenSize();

    const [radioValue,setRadioValue] = useState(0);

    const [showRateStatistics,setShowRateStatistics] = useState(false);

    return (
       <div>
        <Header />
        <NavigationBar
            activePageIndex={0}
            currentCategoryTitle="Community"
        />
        <div className={styles.wrapper}>
            <PageDetails
                    historyNode=
                    {
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Community', 'Posts','Getting Started', fakePost.category]} 
                        />
                    } 
                    pageTitle={fakePost.title}
                    endNode={
                    <div className={styles.flex_center}>
                           <ButtonDropdownSelect text='All posts' variants={['all posts']} />
                            <AddPost />
                    </div>
                    }            
                />

                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className={styles.desktop}>
                    <UserTopPageInfo
                            user={fakeUserConstant}
                            nodeAfter={
                                <div className={styles.details_post_last}>
            
                                <AppColor.pause/>
                                
                                <Typography variant='body4' color={AppColor.orange}>15% users like this post </Typography>
                                <AppColor.like/>
                                <AppColor.dislike/>
                            </div>
                            }
                        />
                </div>
                <DynamicPadding/>
                <div className={styles.main_part}>
                <div className={styles.left_part}>
                    <div>
                    </div>
                    {width > 768 &&  <div className={styles.dropdown_wrapper}>
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Getting Started'} 
                            title='Getting Started'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={['Registration', 'Password recovery', 'Verification', 'Changing my username']}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Subscription'} 
                            title='Subscription'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Services'} 
                            title='Services'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Orders'} 
                            title='Orders'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList 
                            isOpenOnBeggin={fakePost.category == 'Crowdfreelance'}
                            title='Crowdfreelance'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Partnership'} 
                            title='Partnership'
                            callback={(item) => setCurrentActiveTitle(item)}
                           items={[]}
                           activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Missions'} 
                            title='Missions'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                        <DropdownList
                            isOpenOnBeggin={fakePost.category == 'Payments'} 
                            title='Payments'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                            activeTitle={fakePost.subCategory}
                        />
                    </div>}
                </div>
                <div className={styles.right_part}>
                    <div>
                        <Typography variant='body4'>{fakePost.text}</Typography>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        {!showRateStatistics &&  <div className={styles.radio_wrapper}>
                            <Typography variant='body4' fontWeight='500'>What type of project is best?</Typography>
                            <RadioButton text='Share my profile in social media' activeSelection={radioValue == 0} callback={(item) => {setRadioValue(item)}}
                                indexItem={0} 
                            />
                             <RadioButton text='Buy subscriptions' activeSelection={radioValue ==1} callback={(item) => {setRadioValue(item)}}
                                indexItem={1} 
                            />
                            <MyButtonOrange width='70px' fontWeight='500' onClick={() => {
                                setShowRateStatistics(true);
                            }}>VOTE</MyButtonOrange>
                        </div>}
                        {showRateStatistics && <div style={{maxWidth: '600px'}}>
                            <Typography variant='body4' fontWeight='500'>What type of project is best?</Typography>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <div className='flex_space_between'>
                                <Typography variant='body4'>Share my profile in social media</Typography>
                                <Typography variant='body4' fontWeight='500'>70% (35)</Typography>
                            </div>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <PercentBar height='5px' currentPercent={70}/>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <div className='flex_space_between'>
                                <Typography variant='body4'>Share my profile in social media</Typography>
                                <Typography variant='body4' fontWeight='500'>70% (35)</Typography>
                            </div>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <PercentBar height='5px' currentPercent={70}/>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <div className='flex_space_between'>
                                <Typography variant='body4'>Share my profile in social media</Typography>
                                <Typography variant='body4' fontWeight='500'>70% (35)</Typography>
                            </div>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <PercentBar height='5px' currentPercent={70}/>
                            <DynamicPadding desktop='15px' mobile='10px' />
                            <Typography variant='body4'><span style={{fontWeight: '500'}}>36</span> votes</Typography>
                            </div>}

                        <DynamicPadding desktop='30px' mobile='30px'/>

                        {RelatedPostItem}
                    </div>
                    <DynamicPadding/>
                    <CommentsSection
                        comments={fakeComments}
                    />
                </div>
            </div>

            <AskedQuestion />
                
        </div>
        <Footer />
           
      </div>
    );
};

type PageDetailsProps = {
    pageTitle: string;
    pageTitleIcon?: React.ReactNode;
    historyNode: React.ReactNode;
    endNode?: React.ReactNode;
}
const PageDetails = ({historyNode,pageTitle,endNode,pageTitleIcon}:PageDetailsProps) => {
    const {width,height} = useScreenSize();
    
    return (
      <div>
           <DynamicPadding />
                <div className={styles.top_section_details}>
                    <div className={styles.top_flex_details}>
                        {historyNode}
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center_details}>
                                {pageTitle} <div className={styles.title_icon_details}>{pageTitleIcon}</div>
                            </div>
                        </Typography>
                    </div>
                    <div className={styles.mobile}>
                        <PostDetails
                            user={fakeUserConstant}
                            percentLike={55}
                        />
                    </div>
                    {endNode}
                </div>
                <DynamicPadding mobile='20px' desktop='50px' />
      </div>
    );
};


type PostDetailsProps = {
    user: userModel;
    percentLike: number;
}
const PostDetails = ({user,percentLike}:PostDetailsProps) => {
    return (
        <div className={styles.post_details_wrapper}>
            <div className={styles.post_details_flex}>
                <UserAvatar
                    preventMobileNone={true}
                    activeAgo={user.activeAgo}
                    active={user.isActive} 
                    name={user.name}
                    flag={<AppColor.UkraineFlagIcon />}
                />
                <div className={styles.details_post_boxes}>
                    <div className={styles.post_details_box}>
                        <AppColor.message />
                    </div>
                    <div className={styles.post_details_box}>
                        <AppColor.hearPlus fill={AppColor.text} />
                    </div>
                    <div className={styles.post_details_box}>
                        <AppColor.threePoints />
                    </div>
                </div>
            </div>
            <div className={styles.details_post_last}>
                
                <AppColor.pause/>
                
                <Typography variant='body4' color={AppColor.orange}>{percentLike}% users like this post </Typography>
                <AppColor.like/>
                <AppColor.dislike/>
            </div>
        </div>
    )
}

export default PostPageById;