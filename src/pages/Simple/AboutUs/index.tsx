import AskedQuestion from '@common/components/AskedQuestions/index'
import HeaderNothAuthorized from '@common/components/Header/Header-not-authorized/Header-not-authorized'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import ArticleModel from '@common/models/pages/articleModel'
import { ArticlesNavLinks } from '@common/models/pages/navigation'
import AppColor from '@common/styles/variables-static'
import Article from '../components/Article'
import Tree from '../components/Tree'
import articleStyles from '../shared/article.module.scss'

const AboutUs = (): JSX.Element => {
  return (
    <>
      <HeaderNothAuthorized />
      <NavigationSimpleBar title="" activeId={0} links={ArticlesNavLinks} />

      <div className={articleStyles.breadcrumbs}>
        <DynamicPadding desktop="50px" />
        <NavigationItem image={<AppColor.home />} textList={['About Us']} />
        <DynamicPadding desktop="30px" />
      </div>

      <div className={articleStyles.title}>
        <Typography
          variant="titleBig"
          textTransform="uppercase"
          fontWeight="600"
        >
          About Us
        </Typography>
        <DynamicPadding desktop="18px" />
      </div>

      <div className={articleStyles.layout}>
        <ResponsiveLayoutTwo
          item1={<Article data={articlesManager.getAll()} />}
          item2={<Tree data={articlesManager.buildNavTree()} />}
          orderItem1Desktop={2}
          orderItem2Desktop={1}
          item1MaxWidth={'732px'}
          item2MaxWidth={'388px'}
          orderItem1Mobile={1}
          orderItem2Mobile={2}
          gap={'80px'}
        />
      </div>

      <DynamicPadding desktop="50px" />

      <div className={articleStyles.layout}>
        <AskedQuestion margin="0" />
      </div>
    </>
  )
}

export default AboutUs

const articlesManager = new ArticleModel()
articlesManager.replace(ArticleModel.MakeFake())
articlesManager.append('About Section', {
  title: 'Per curae inceptos',
  body: `<p>Per curae inceptos ante montes nisi conubia at justo. Odio diam sagittis mus congue tellus;
  malesuada hendrerit etiam? Primis tellus inceptos quis himenaeos condimentum primis cubilia sociosqu?
  Fames rhoncus consectetur litora dolor rhoncus. Dolor tristique ipsum habitasse consectetur ullamcorper est.
  Viverra sociosqu natoque tincidunt lacus ut quam pulvinar eleifend.
  Mauris finibus sodales at est elit nec porta amet. Id nec primis nostra,
  vehicula felis per facilisi. Nam class sociosqu efficitur orci ultrices.</p>`,
})
