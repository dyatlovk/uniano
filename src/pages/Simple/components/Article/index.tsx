import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import classNames from 'classnames'
import styles from './style.module.scss'

type ArticleItem = TextPage.ArticleItem
type Group = TextPage.ArticleGroup

interface ArticleProps {
  data: Group[]
}
const Article = ({ data }: ArticleProps): JSX.Element => {
  function isLastArticleInList(id: number): boolean {
    return id + 1 === data.length
  }

  return (
    <>
      <DynamicPadding desktop="10px" />
      {data.map((el: Group, id: number) => (
        <Item data={el} isLastInList={isLastArticleInList(id)} />
      ))}
    </>
  )
}

interface ItemProps {
  data: Group
  isLastInList?: boolean
}

const Item = ({ data, isLastInList = false }: ItemProps): JSX.Element => {
  const childCount: number = data.items.length

  function isLastChild(id: number): boolean {
    return childCount === id + 1
  }

  return (
    <div
      className={classNames('article_section', {
        isLastInList: isLastInList,
      })}
    >
      <Typography className="_article_title" variant="body3">
        {data.title}
      </Typography>
      <DynamicPadding desktop="20px" />
      <div className="_article_child">
        {data.items.map((article: ArticleItem, id: number) => (
          <div className="_article_child_item">
            <Typography variant="body4" className={styles.title}>
              <span className={styles.dot}></span>
              {article.title}
            </Typography>
            <DynamicPadding desktop="20px" />
            <div
              dangerouslySetInnerHTML={{ __html: article.body }}
              className={styles.content}
            ></div>
            {!isLastChild(id) && <DynamicPadding desktop="18px" />}
          </div>
        ))}
      </div>
      {!isLastInList && <DynamicPadding desktop="20px" />}
    </div>
  )
}

export default Article
