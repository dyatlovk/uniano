class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Details', url: '/create-partnership/details', disabled: false },
      {
        title: 'Negotiation',
        url: '/create-partnership/negotiation',
        disabled: false,
      },
      {
        title: 'Posting',
        url: '/create-partnership/posting',
        disabled: false,
      }
    ]
  }
}

export default StatesModel
