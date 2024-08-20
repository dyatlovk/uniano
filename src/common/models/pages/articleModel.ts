class ArticleModel {
  #items: TextPage.ArticleGroup[]

  constructor() {
    this.clear()
  }

  public getAll(): TextPage.ArticleGroup[] {
    return this.#items
  }

  public replace(group: TextPage.ArticleGroup[]): void {
    this.clear()
    this.#items = group
  }

  public append(groupTitle: string, article: TextPage.ArticleItem): void {
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

  public static MakeFake(): TextPage.ArticleGroup[] {
    return [
      {
        title: "Coming Soong",
        items: [
          {
            title: "Egoods markerplace",
            body: "<p>In a land where the sky kissed the emerald hills and the rivers danced joyfully, there existed a place known as the Whispering Woods. Thriving with ancient trees that stood taller than castles, this forest harbored untold secrets and sentient flora that could share stories with those who dared to listen.</p>"
          },
          {
            title: "Invest opportunities",
            body: "<p>One dappled afternoon, a curious young girl named Elara wandered away from her meadow of wildflowers. With eyes full of wonder, she pulled away twigs and branches until the wide, winding path before her revealed itself. As Elara stepped into the woods, she felt an ember of magic crackling through the air.</p>"
          },
        ],
      },
      {
        title: "Previous Release",
        items: [
          {
            title: "Release 1.3",
            body: "<p>Determined to bring this elusive color to life, Elara decided to embark on a quest. She sought out the wise old woman who lived at the edge of the village, a keeper of ancient secrets. The woman spoke of a particular night in spring, where the moon's glow was at its strongest and the waters of the lake merged with the sky's colors.</p><p>Elara adored the blend of colors as they danced together on her canvas, but there was one shade she had not yet captured—one hauntingly beautiful color whispered about in local lore: the elusive Moonlight Blue. Its rarity fascinated the villagers; it was said to be the color one would see only under a full moon as it leapt across the lake, shimmering like liquid silver.</p>"
          }
        ]
      }
    ]
  }

  public findGroupByName(title: string): TextPage.ArticleGroup | null {
    const found = this.#items.find(el => el.title === title)
    if (!found) return null
    return found
  }

  public findGroupByArticleTitle(title: string): TextPage.ArticleItem | null {
    let found: TextPage.ArticleItem | null = null
    this.#items.forEach((group: TextPage.ArticleGroup, id: number) => {
      found = group.items.find(article => article.title === title)
    })
    return found
  }

  public findArticleInGroup(group: TextPage.ArticleGroup, article: string): TextPage.ArticleItem | null {
    const found = group.items.find(el => el.title === article)
    if (!found) return null
    return found
  }

  public buildNavTree(): TextPage.ArticleNavTree[] {
    let result: TextPage.ArticleNavTree[] = []
    this.#items.forEach((group: TextPage.ArticleGroup) => {
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
