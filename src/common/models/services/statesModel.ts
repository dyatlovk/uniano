class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Service', url: '/service', disabled: false },
      {
        title: 'Selection',
        url: '/service/selection',
        disabled: false,
      },
      {
        title: 'Negotiation',
        url: '/partnership/freelancer/progress',
        disabled: false,
      },
      {
        title: 'Progress',
        url: '/partnership/freelancer/progress',
        disabled: false,
      },
      {
        title: 'Completed',
        url: '/service/completed',
        disabled: false,
      },
    ]
  }
}

export default StatesModel
