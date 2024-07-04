
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DropdownList from './components/DropdownList';
import PostCard, { PostCardProps } from './components/PostCard';
import { fakeUserConstant } from '@common/models/user';
import { useState } from 'react';
import { NavBarLine } from '@common/components/ui/DetailsTable/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useScreenSize } from '@common/helpers/useScreenSize';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import { Link } from 'react-router-dom';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';
import AddPost from '@common/components/ui/ButtonsPlus/AddPost/index';

type postsContentType = {
    title: string;
    posts: PostCardProps[];
}
const postsContent:postsContentType[] = [
    {
        title: 'Registration',
        posts: [
            {
                user: fakeUserConstant,
                comments: ['aaa','aaa','aaa'],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago',
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: true,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: false,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: ['aaa','aaa','aaa'],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago',
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: true,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: false,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: ['aaa','aaa','aaa'],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago',
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: true,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: false,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: ['aaa','aaa','aaa'],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago',
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: false,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: true,
                createdAgo: '1 min ago'
            },
            {
                user: fakeUserConstant,
                comments: [],
                created: true,
                description: 'Id viverra penatibus amet nunc, accumsan sem leo malesuada ame',
                title: 'New to Uniano, Need assistance ',
                saved: false,
                createdAgo: '1 min ago'
            }
        ]
    }
]
const CommunityPosts = () => {
    const [currentActiveTitle,setCurrentActiveTitle] = useState('');
    let currentPost = postsContent.find(item => item.title == currentActiveTitle);
    const [currentPage,setCurrentPage] = useState(0);
    const {width,height} = useScreenSize();
    if(currentPost == null) {
        currentPost = {
            title: '',
            posts: [],
        }
    }
    return (
        <div>
        <Header />
        <NavigationBar
            activePageIndex={0}
            currentCategoryTitle="Community"
        />
        <div className={styles.wrapper}>
            <PageDetails
                pageTitle={currentActiveTitle != '' ? currentActiveTitle : 'Search'}
                historyNode={

                    currentActiveTitle != ''
                    ?
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Community','Posts', currentActiveTitle]}
                    />
                    :
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Community','Posts']}
                    />
                }
                endNode={
                    <div className={styles.flex_center}>
                        
                        <ButtonDropdownSelect
                            text='All posts' variants={['All posts', 'Save posts', 'my posts']}
                        />
                        <AddPost />
                    </div>
                }
            />

            <DynamicPadding />
            
            <SearchFilterBar callback={(item) => {setCurrentActiveTitle(item)}} currentActiveTitle={currentActiveTitle} recent={true} />
            
            <DynamicPadding />
            <div className={styles.main_part}>
                <div className={styles.left_part}>
                    <div>
                    </div>
                    {width > 768 &&  <div className={styles.dropdown_wrapper}>
                        <DropdownList 
                            title='Getting Started'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={['Registration', 'Password recovery', 'Verification', 'Changing my username']}
                        />
                        <DropdownList 
                            title='Subscription'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                        <DropdownList 
                            title='Services'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                        <DropdownList 
                            title='Orders'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                        <DropdownList 
                            title='Crowdfreelance'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                        <DropdownList 
                            title='Partnership'
                            callback={(item) => setCurrentActiveTitle(item)}
                           items={[]}
                        />
                        <DropdownList 
                            title='Missions'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                        <DropdownList 
                            title='Payments'
                            callback={(item) => setCurrentActiveTitle(item)}
                            items={[]}
                        />
                    </div>}
                </div>
                <div className={styles.right_part}>
                    <div>
                        {currentPost.posts.slice(currentPage*4,(currentPage+1)*4).map((post,index) =>
                            <Link to={'/community/post'}>
                                <PostCard
                                    comments={post.comments}
                                    created={post.created}
                                    description={post.description}  
                                    saved={post.saved}
                                    title={post.title}
                                    user={post.user}
                                    indexInParent={index}
                                    createdAgo={post.createdAgo}
                                />
                            </Link>
                        )}
                        {currentPost.posts.length > 0 && <div className={styles.bottom_nav}>
                            <div className={styles.flex}>
                                <Typography variant='body4' fontWeight='500'>{currentPost.posts.length} </Typography>
                                <Typography color='transparent'>.</Typography>
                                <Typography variant='body4' fontWeight='400'>posts</Typography>
                            
                            </div>
                            <NavBarLine 
                                maxCountPage={currentPost.posts.length/4}
                                callback={(item) => setCurrentPage(item-1)}
                            />
                        </div>}
                    </div>
                </div>
            </div>
            <AskedQuestion/>
        </div>
           <Footer/>
      </div>
    );
};

type SearchFilterBarProps = {
    recent?: boolean;
    currentActiveTitle:string;
    callback: (item:string) => void;
}
const SearchFilterBar = ({recent,currentActiveTitle,callback}:SearchFilterBarProps) => {

    const {width,height} = useScreenSize();
    const [currentActiveCategory,setCurrentActiveCategory] = useState('Getting Started');
    const [isActive,setIsActive] = useState(false);

    function handleOpen(event) {
        event.preventDefault();
        setIsActive(prev => !prev)
    }
    return (
      <div className={styles.wrapper_filter}>
           <InputCommon 
               callback={() => {}}
               placeholder='Search'
           />

           {
            width <= 768 &&
            <div className={styles.flex_full}>
                <div className={styles.flex_item_filter_text}>
                    <div className={styles.flex_item_filter_text} onClick={(e) => {handleOpen(e)}}>
                        <Typography textLineHeight='0' variant='body3' fontWeight='500'>{currentActiveCategory}</Typography>
                        <Typography textLineHeight='0' variant='body4' fontWeight='500' color={AppColor.orange}>{currentActiveTitle}</Typography>
                        {   isActive 
                            ? <AppColor.chevronTop fill={AppColor.transparentBlack} width={'15px'} height={'10px'}/>
                            : <AppColor.chevronBottom fill={AppColor.transparentBlack} width={'15px'} height={'10px'}/>}
                    </div>

                    <div style={{display: isActive ? 'flex' : 'none'}} className={styles.dropdown_wrapper_filter}>
                    <div onClick={() => {setCurrentActiveCategory('Getting Started');}}>
                        <DropdownList 
                            title='Getting Started'
                            callback={(item) => callback(item)}
                            items={['Registration', 'Password recovery', 'Verification', 'Changing my username']}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Subscription');}}>
                        <DropdownList 
                            title='Subscription'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Services');}}>
                        <DropdownList 
                            title='Services'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Orders');}}>
                        <DropdownList 
                            title='Orders'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Crowdfreelance');}}>
                        <DropdownList 
                            title='Crowdfreelance'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Partnership');}}>
                        <DropdownList 
                            title='Partnership'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Missions');}}>
                        <DropdownList 
                            title='Missions'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                        <div onClick={() => {setCurrentActiveCategory('Payments');}}>
                        <DropdownList 
                            title='Payments'
                            callback={(item) => callback(item)}
                            items={[]}
                        />
                        </div>

                    </div>
    
                </div>
                <div className={styles.line}>
                    <DynamicPadding desktop='0px' mobile='15px' />
                    <HorizontalLine />
                </div>
            </div>
           }

           <div className={styles.filters_wrapper}>
               <div className={styles.flex_item_filter}>
                    <AppColor.filter />
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
               </div>
               {recent
               && <div className={styles.flex_item_filter}>
                         <AppColor.recent />
                         <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Most recent</Typography>
                    </div>
               }
               <div className={styles.flex_item_filter}>
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>12</Typography>
                    <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
               </div>
           </div>
      </div>
    );
};

export default CommunityPosts;