class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Category', url: '/search-master/category', disabled: false },
      {
        title: 'Requirements',
        url: '/search-master/requirements',
        disabled: false,
      },
      {
        title: 'Skills',
        url: '/search-master/skills',
        disabled: false,
      },
      {
        title: 'Budget&Delivery',
        url: '/search-master/budget-and-delivery',
        disabled: false,
      },
      {
        title: 'Results',
        url: '/search-master/results',
        disabled: false,
      },
    ]
  }
}

export default StatesModel
