class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Details', url: '/create-order/details', disabled: false },
      {
        title: 'Negotiation',
        url: '/create-order/negotiation',
        disabled: false,
      },
      {
        title: 'Posting',
        url: '/create-order/posting',
        disabled: false,
      }
    ]
  }
}

export default StatesModel
