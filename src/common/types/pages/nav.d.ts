declare namespace TextPage {
  export interface ArticleItem {
    title: string
    body: string
  }
  export interface ArticleGroup {
    title: string
    items: ArticleItem[]
  }
  export interface ArticleNavSection {
    title: string,
    link?: string
  }
  export interface ArticleNavTree {
    group: string,
    sections: ArticleNavSection[]
  }
}
