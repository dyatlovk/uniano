type Group = TextPage.ArticleGroup
type Article = TextPage.ArticleItem

class ArticleModel {
  #items: Group[]

  constructor() {
    this.clear()
  }

  public getAll(): Group[] {
    return this.#items
  }

  /**
   * All content will be replace by group variable
   */
  public replace(group: Group[]): void {
    this.clear()
    this.#items = group
  }

  /**
   * Append one article to group
   */
  public append(groupTitle: string, article: Article): void {
    const group = this.findGroupByName(groupTitle)
    if (!group) {
      this.#items.push({ title: groupTitle, items: [article] })
      return
    }

    const ar = this.findArticleInGroup(group, article.title)
    if (!ar) {
      group.items.push(article)
      return
    }
  }

  public clear(): void {
    this.#items = []
  }

  public count(): number {
    return this.#items.length
  }

  public static MakeFake(): Group[] {
    return [
      {
        title: "Coming Soong",
        items: [
          {
            title: "Egoods markerplace",
            body: `<p>In a land where the sky kissed the emerald hills and the rivers danced joyfully,
            there existed a place known as the Whispering Woods.
            Thriving with ancient trees that stood taller than castles,
            this forest harbored untold secrets and sentient
            flora that could share stories with those who dared to listen.</p>`
          },
          {
            title: "Invest opportunities",
            body: `<p>One dappled afternoon, a curious young girl named Elara
            wandered away from her meadow of wildflowers.
            With eyes full of wonder, she pulled away twigs and branches until the wide,
            winding path before her revealed itself.
            As Elara stepped into the woods, she felt an ember of magic
            crackling through the air.</p>`
          },
        ],
      },
      {
        title: "Previous Release",
        items: [
          {
            title: "Release 1.3",
            body: `<p>Determined to bring this elusive color to life,
            Elara decided to embark on a quest. She sought out the wise old woman
            who lived at the edge of the village, a keeper of ancient secrets.
            The woman spoke of a particular night in spring, where the moon's glow
            was at its strongest and the waters of the lake merged with the sky's colors.</p>

            <p>Elara adored the blend of colors as they danced together on her canvas,
            but there was one shade she had not yet captured—one hauntingly beautiful
            color whispered about in local lore: the elusive Moonlight Blue.
            Its rarity fascinated the villagers; it was said to be the color one
            would see only under a full moon as it leapt across the lake,
            shimmering like liquid silver.</p>`
          }
        ]
      }
    ]
  }

  public findGroupByName(title: string): Group | null {
    const found = this.#items.find(el => el.title === title)
    if (!found) return null
    return found
  }

  public findGroupByArticleTitle(title: string): Article | null {
    let found: Article | null = null
    this.#items.forEach((group: Group, _: number) => {
      found = group.items.find(article => article.title === title)
    })
    return found
  }

  public findArticleInGroup(group: Group, article: string): Article | null {
    const found = group.items.find(el => el.title === article)
    if (!found) return null
    return found
  }

  /**
   * Navigation tree ready
   */
  public buildNavTree(): TextPage.ArticleNavTree[] {
    let result: TextPage.ArticleNavTree[] = []
    this.#items.forEach((group: Group) => {
      let item: TextPage.ArticleNavTree = { group: '', sections: [] }
      item.group = group.title
      group.items.forEach(article => {
        item.sections.push({ title: article.title })
      })
      result.push(item)
    })
    return result
  }
}

export default ArticleModel

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test("append", () => {
    const instance = new ArticleModel()
    expect(instance.count()).toEqual(0)
    instance.append("Group", { title: "Article", body: "content" })
    expect(instance.count()).toEqual(1)
  })

  test("find_group", () => {
    const instance = new ArticleModel()
    const fixtures = ArticleModel.MakeFake()
    instance.replace(fixtures)
    const actual = instance.findGroupByName("Coming Soong")
    expect(actual).not.toBeNull()
  })

  test("build_nav_tree", () => {
    const instance = new ArticleModel()
    const fixtures = ArticleModel.MakeFake()
    instance.replace(fixtures)
    const actual = instance.buildNavTree()
    expect(actual.length).toEqual(2)
    expect(actual[0].group).toEqual("Coming Soong")
    expect(actual[0].sections[0].title).toEqual("Egoods markerplace")
  })
}
