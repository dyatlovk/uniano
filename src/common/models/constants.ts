export type countries = 'Ukraine'

export type userRoles = 'customer' | 'freelancer' | 'manager'



export type NavItemType = {
    title: string;
    items: SubNavItemsType[]
}

type SubNavItemsType = {
    title: string;
    links: string[]; 
}

export const developmentDropdown:NavItemType[] = [
    {
        title: 'Development',
        items: [
            {
                title: 'Web Development',
                links: ['WordPress', 'Website Builders & CMS', 'Website Builders & CMS', 'Web Programming']
            },
            {
                title: 'NFT, Blockchain & Cryptocurrency',
                links: ['NFT Development', 'Crypto Wallet Development', 'Crypto Coins & Tokens', 'Blockchain Development']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            }
        ]
    },
    {
        items: [],
        title: 'Design'
      },
      {
        items: [],
        title: 'Marketing'
      },
      {
        items: [],
        title: 'Writing'
      },
      {
        items: [],
        title: 'Management'
      },
      {
        items: [],
        title: 'Consulting'
      }
]


export const crowdfreelancerNav:NavItemType[] = [
    {
        title: 'Business',
        items: [
            {
                title: 'Web Development',
                links: ['WordPress', 'Website Builders & CMS', 'Website Builders & CMS', 'Web Programming']
            },
            {
                title: 'NFT, Blockchain & Cryptocurrency',
                links: ['NFT Development', 'Crypto Wallet Development', 'Crypto Coins & Tokens', 'Blockchain Development']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            },
            {
                title: 'Other',
                links: ['Chatbots', 'Databases', 'Trading Apps', 'Databases']
            }
        ]
    },
    {
        items: [],
        title: 'Creation'
      },
      {
        items: [],
        title: 'it'
      },
      {
        items: [],
        title: 'tech'
      },
      {
        items: [],
        title: 'public'
      },
]