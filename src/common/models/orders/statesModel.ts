class StatesModel {
  constructor() {

  }

  public static getAll(): Navigation.State[] {
    return [
      { title: 'Order', url: '/orders/order', disabled: false },
      {
        title: 'Selection',
        url: '/orders/selection',
        disabled: false,
      },
      {
        title: 'Negotiation',
        url: '/orders/negotiation',
        disabled: false,
      },
      {
        title: 'Progress',
        url: '/orders/progress',
        disabled: false,
      },
      {
        title: 'Completed',
        url: '/orders/completed',
        disabled: false,
      },
    ]
  }
}

export default StatesModel
