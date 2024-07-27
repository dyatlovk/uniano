class FreelancerStats {
  constructor() {

  }

  public static getAll(): PartnerShip.Stats[] {
    return [
      {
        title: 'Total Projects',
        text: '352',
      },
      {
        title: 'Hire Rate',
        text: '95%',
      },

      {
        title: 'Total Bids',
        text: '2000',
      },
      {
        title: 'Personal Offers',
        text: '26%',
      },

      {
        title: 'Projects in Progress',
        text: '7',
      },
      {
        title: 'Total Spent',
        text: '$355 000',
      },

      {
        title: 'Successful Projects',
        text: '125',
      },
      {
        title: 'Avg Budget',
        text: '$3 564',
      },

      {
        title: 'Cancelled Projects',
        text: '25',
      },
      {
        title: 'Avg Deadline',
        text: '3 days',
      },

      {
        title: 'Arbitrations',
        text: '35',
      },
    ]
  }

  public static regroupByTwo(items: PartnerShip.Stats[]): PartnerShip.Stats[][] {
    let result = []
    items.forEach((item, id) => {
      if (id % 2 === 0) {
        let section = []
        section.push(item)
        if (items[id + 1]) {
          section.push(items[id + 1])
        }
        result.push(section)
      }
    })
    return result
  }
}

export default FreelancerStats


/**
 * Tests
 */
if (import.meta.vitest) {
  const { expect, test, describe } = import.meta.vitest

  const data: PartnerShip.Stats[] = [
    {
      title: 'Total Projects',
      text: '352',
    },
    {
      title: 'Total Bids',
      text: '2000',
    },
    {
      title: 'Projects in Progress',
      text: '7',
    },
    {
      title: 'Successful Projects',
      text: '125',
    },
    {
      title: 'Cancelled Projects',
      text: '25',
    },
    {
      title: 'Arbitrations',
      text: '35',
    },
    {
      title: 'Hire Rate',
      text: '95%',
    },
    {
      title: 'Personal Offers',
      text: '26%',
    },
    {
      title: 'Total Spent',
      text: '$355 000',
    },
    {
      title: 'Avg Budget',
      text: '$3 564',
    },
    {
      title: 'Avg Deadline',
      text: '3 days',
    },
  ]

  test("regroup", () => {
    const actual = FreelancerStats.regroupByTwo(data)
    expect(actual).toHaveLength(6)
    expect(actual[0]).toHaveLength(2)
  })
}
