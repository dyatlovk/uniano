import fakeUserImage from '@assets/images/user-fake.png'
import UkraineFlag from '@assets/svg/flags/Ukraine.svg'

class PartnersModel {
  private list: PartnerShip.Manager[] = []

  constructor() {
  }

  public static makeFakeData(): PartnerShip.Manager[] {
    return [
      {
        avatarUrl: fakeUserImage,
        countryFlagUrl: UkraineFlag,
        date: "15 hr 59 min ago",
        fullName: 'Deny Loran',
        isOnline: false,
        position: 'manager',
        id: crypto.randomUUID()
      },
      {
        avatarUrl: fakeUserImage,
        countryFlagUrl: UkraineFlag,
        date: "1hr 10 min ago",
        fullName: 'Artem M.',
        isOnline: true,
        position: 'manager',
        id: crypto.randomUUID()
      }
    ]
  }

  public getAll(): PartnerShip.Manager[] {
    this.list = PartnersModel.makeFakeData()
    return this.list
  }

  public findByUuid(id: string): PartnerShip.Manager | null {
    const found = this.list.find(el => el.id == id)
    if (!found) return null
    return found
  }
}

export default PartnersModel
