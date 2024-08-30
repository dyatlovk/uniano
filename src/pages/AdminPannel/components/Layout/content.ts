export type PageType = {
  title: string
  dropdownTitles: PageType[]
  hasEvent?: boolean
  count?: number
}
export const pagesAdmin: PageType[] = [
  {
    title: 'Analytics',
    dropdownTitles: [],
  },

  {
    title: 'Finance',
    hasEvent: true,
    dropdownTitles: [
      {
        title: 'Operations',
        hasEvent: true,
        dropdownTitles: [
          {
            title: 'Top up',
            count: 2,
            hasEvent: true,
            dropdownTitles: [],
          },
          {
            title: 'Withdraw',
            count: 3,
            hasEvent: false,
            dropdownTitles: [],
          },
        ],
      },
      { title: 'Tax form', dropdownTitles: [] },
    ],
  },
  {
    title: 'Users',
    dropdownTitles: [
      {
        title: 'List',
        dropdownTitles: [],
      },
      {
        title: 'Verification',
        dropdownTitles: [],
      },
    ],
  },
  {
    title: 'Projects',
    dropdownTitles: [
      {
        title: 'Service',
        dropdownTitles: [],
      },
      {
        title: 'Order',
        dropdownTitles: [],
      },
    ],
  },
  {
    title: 'Crowdfreelance',
    dropdownTitles: [],
  },
  {
    title: 'Gamification',
    dropdownTitles: [
      {
        title: 'Accounts',
        dropdownTitles: [
          {
            title: 'Customers',
            dropdownTitles: [],
          },
          {
            title: 'Freelancers',
            dropdownTitles: [],
          },
          {
            title: 'Managers',
            dropdownTitles: [],
          },
          {
            title: 'Sponsors',
            dropdownTitles: [],
          },
        ],
      },
      {
        title: 'Guide',
        dropdownTitles: [
          {
            title: 'Customers',
            dropdownTitles: [],
          },
          {
            title: 'Freelancers',
            dropdownTitles: [],
          },
          {
            title: 'Managers',
            dropdownTitles: [],
          },
          {
            title: 'Sponsors',
            dropdownTitles: [],
          },
          {
            title: 'Moderators',
            dropdownTitles: [],
          },
          {
            title: 'Arbitrators',
            dropdownTitles: [],
          },
        ],
      },
      {
        title: 'Missions',
        dropdownTitles: [],
      },
      {
        title: 'Rewards',
        dropdownTitles: [],
      },
      {
        title: 'Upgrades',
        dropdownTitles: [],
      },
      {
        title: 'Activity',
        dropdownTitles: [],
      },
    ],
  },
  {
    title: 'Subscriptions',
    dropdownTitles: [],
  },
  {
    title: 'Partnerships',
    dropdownTitles: [],
  },
  {
    title: 'Forms',
    dropdownTitles: [],
  },
  {
    title: 'Community',
    dropdownTitles: [
      {
        title: 'Posts',
        dropdownTitles: [],
      },
      {
        title: 'FAQ',
        dropdownTitles: [],
      },
    ],
  },
  {
    title: 'Moderation',
    dropdownTitles: [],
  },
  {
    title: 'Arbitration',
    dropdownTitles: [],
  },
  {
    title: 'Care service',
    dropdownTitles: [
      {
        title: 'Manager chats',
        dropdownTitles: [],
      },
      {
        title: 'Moderators chats',
        dropdownTitles: [],
      },
      {
        title: 'Tickets',
        dropdownTitles: [],
      },
      {
        title: 'Mailing',
        dropdownTitles: [],
      },
    ],
  },
  {
    title: 'Pages',
    dropdownTitles: [
      {
        title: 'List',
        dropdownTitles: [],
      },
      {
        title: 'Categories',
        dropdownTitles: [
          {
            title: 'Services',
            dropdownTitles: [],
          },
          {
            title: 'Orders',
            dropdownTitles: [],
          },
          {
            title: 'Partnerships',
            dropdownTitles: [],
          },
          {
            title: 'Sponsorships',
            dropdownTitles: [],
          },
          {
            title: 'Community',
            dropdownTitles: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Settings',
    dropdownTitles: [],
  },
]
