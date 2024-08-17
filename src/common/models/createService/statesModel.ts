class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Details', url: '/create-service/details', disabled: false },
      {
        title: 'Negotiation',
        url: '/create-service/negotiation',
        disabled: false,
      },
      {
        title: 'Posting',
        url: '/create-service/posting',
        disabled: false,
      }
    ]
  }
}

export default StatesModel
