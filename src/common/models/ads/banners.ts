class AdsBannersProvider {
  constructor() {
  }

  public static getAll(): PartnerShip.AdsBanner[] {
    return [
      {
        imgType: "jpeg",
        imgUrl: "src/assets/images/banner-sample-1.jpg",
        title: "160x600_LOWCOSTER",
        description: "Description",
        htmlCode: "code",
        serviceLink: "link"
      },
      {
        imgType: "gif",
        imgUrl: "src/assets/images/banner-sample-2.gif",
        title: "Title2",
        description: "Descriptin 2",
        htmlCode: `<!-- uniano.banner: vgmyn5kxfid0c6b730f0b6d1781017 160x600_LOWCOSTER --> <a target="_blank" rel="nofollow" href="https://uniano.com/g/vgmyn5kxfid0c6b730f0b6d1781017/?i=4"><img width="160" height="600" border="0" src="https://uniano.com/b/vgmyn5kxfid0c6b730f0b6d1781017/" alt="160x600_LOWCOSTER"/></a> <!-- /uniano.banner -->`,
        serviceLink: "link"
      }
    ]
  }

  public static findOneById(id: number): PartnerShip.AdsBanner | null {
    const items = AdsBannersProvider.getAll()
    return items.find((item, idx) => idx === id)
  }
}

export default AdsBannersProvider
