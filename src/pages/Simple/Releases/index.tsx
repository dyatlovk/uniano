import AskedQuestion from '@common/components/AskedQuestions/index'
import HeaderNothAuthorized from '@common/components/Header/Header-not-authorized/Header-not-authorized'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import ArticleModel from '@common/models/pages/articleModel'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

const articlesManager = new ArticleModel()
articlesManager.replace(ArticleModel.MakeFake())

const Releases = (): JSX.Element => {
  return (
    <>
      <HeaderNothAuthorized />
      <NavigationSimpleBar
        title=""
        activeId={3}
        links={[
          {
            title: 'About us',
            link: '/about-us',
          },
          {
            title: 'Privacy policy',
            link: '/privacy-policy',
          },
          {
            title: 'Terms and conditions',
            link: '/terms-conditions',
          },
          {
            title: 'Releases',
            link: '/releases',
          },
        ]}
      />

      <div className={styles.breadcrumbs}>
        <DynamicPadding desktop="50px" />
        <NavigationItem image={<AppColor.home />} textList={['Releases']} />
        <DynamicPadding desktop="30px" />
      </div>

      <div className={styles.title}>
        <Typography
          variant="titleBig"
          textTransform="uppercase"
          fontWeight="600"
        >
          Releases
        </Typography>
        <DynamicPadding desktop="18px" />
      </div>

      <div className={styles.layout}>
        <ResponsiveLayoutTwo
          item1={
            <div className={styles.articles}>
              <DynamicPadding desktop="10px" />
              {articlesManager.getAll().map((el, id) => (
                <Article data={el} isLastInList={id > 0} />
              ))}
            </div>
          }
          item2={
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {articlesManager.buildNavTree().map(el => (
                <NavDropDown data={el} onRootClick={() => {}} />
              ))}
            </div>
          }
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

      <div className={styles.layout}>
        <AskedQuestion margin="0" />
      </div>
    </>
  )
}

interface NavDropDownProps {
  data: TextPage.ArticleNavTree
  onRootClick: () => void
}
const NavDropDown = ({ data, onRootClick }: NavDropDownProps): JSX.Element => {
  const [isOpened, setOpened] = useState<boolean>(false)

  return (
    <div className={isOpened ? styles.nav_group_opened : styles.nav_group}>
      <div
        className={styles.nav_root}
        onClick={() => {
          onRootClick()
          setOpened(prev => !prev)
        }}
      >
        <Typography variant="body3">{data.group}</Typography>
        {isOpened && <AppColor.chevronTop fill={AppColor.text} />}
        {!isOpened && <AppColor.chevronBottom fill={AppColor.text} />}
      </div>
      {isOpened && (
        <div className={styles.nav_child}>
          {data.sections.map(section => (
            <div className={styles.nav_child_item}>{section.title}</div>
          ))}
        </div>
      )}
    </div>
  )
}

interface ArticleProps {
  data: TextPage.ArticleGroup
  isLastInList?: boolean
}
const Article = ({ data, isLastInList = false }: ArticleProps): JSX.Element => {
  return (
    <div className="article_section">
      <Typography variant="body3">{data.title}</Typography>
      <DynamicPadding desktop="20px" />
      <div>
        {data.items.map((article, id) => (
          <>
            <Typography variant="body4" className={styles.nav_child_title}>
              <span className={styles.dot}></span>
              {article.title}
            </Typography>
            <DynamicPadding desktop="20px" />
            <div
              dangerouslySetInnerHTML={{ __html: article.body }}
              className={styles.article_content}
            ></div>
            {!isLastInList && <DynamicPadding desktop="18px" />}
          </>
        ))}
      </div>
      {!isLastInList && <DynamicPadding desktop="20px" />}
    </div>
  )
}

export default Releases
