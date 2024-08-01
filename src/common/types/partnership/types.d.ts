declare namespace PartnerShip {
  export interface AdsBanner {
    imgType: string
    imgUrl: string
    title: string
    description: string
    htmlCode: string
    serviceLink: string
  }
  export interface Stats {
    title: string
    text: string
  }
  export interface Manager {
    id: string
    avatarUrl: string
    isOnline: boolean
    countryFlagUrl: string
    fullName: string
    position: string
    date: string
  }
}
