class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Program', url: '/partnership/program', disabled: false },
      {
        title: 'Selection',
        url: '/partnership/freelancer/selection',
        disabled: false,
      },
      {
        title: 'Progress',
        url: '/partnership/freelancer/progress',
        disabled: false,
      },
      {
        title: 'Completed',
        url: '/partnership/freelancer/completed',
        disabled: false,
      },
    ]
  }
}

export default StatesModel
