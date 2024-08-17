class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Details', url: '/create-sponsorship/details', disabled: false },
      {
        title: 'Negotiation',
        url: '/create-sponsorship/negotiation',
        disabled: false,
      },
      {
        title: 'Posting',
        url: '/create-sponsorship/posting',
        disabled: false,
      }
    ]
  }
}

export default StatesModel
