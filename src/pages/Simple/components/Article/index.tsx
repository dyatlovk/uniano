import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'

interface Props {
  data: TextPage.ArticleGroup
  isLastInList?: boolean
}

const Article = ({ data, isLastInList = false }: Props): JSX.Element => {
  return (
    <div className="article_section">
      <Typography variant="body3">{data.title}</Typography>
      <DynamicPadding desktop="20px" />
      <div>
        {data.items.map((article, id) => (
          <>
            <Typography variant="body4" className={styles.title}>
              <span className={styles.dot}></span>
              {article.title}
            </Typography>
            <DynamicPadding desktop="20px" />
            <div
              dangerouslySetInnerHTML={{ __html: article.body }}
              className={styles.content}
            ></div>
            {!isLastInList && <DynamicPadding desktop="18px" />}
          </>
        ))}
      </div>
      {!isLastInList && <DynamicPadding desktop="20px" />}
    </div>
  )
}

export default Article
