import AppColor from "@common/styles/variables-static";



type linkType = {
    title: string;
}
export type nav_categorys = {
    title: nav_var_categorys_titles | any,
    text: string
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    activeImage: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    index: number
    links:linkType[];
};

export type nav_var_categorys_titles = 'Dashboard' | 'Teams' | 'Subscriptions' | 'Messenger' | 'Community' | 'Team' | 'Settings' | 'Payments';

export const nav_var_categorys:nav_categorys[] = [
    {
        title: "Dashboard",
        text: 'Your account center you progress',
        image: AppColor.dashboard,
        activeImage: AppColor.dashboard,
        index: 0,
        links: [
            { title: 'home',  },
            { title: 'account',  },
            { title: 'missions',  },
            { title: 'rewards',  },
            { title: 'upgrades',  },
            { title: 'activity',  },
        ],
    },
    {
        title: "Teams",
        text: 'Build or join to existing team ',
        image: AppColor.teams,
        activeImage: AppColor.teamsWhite,
        index: 1,
        links: [
            { title: 'my-teams',  },
        ],
    },
    {
        title: "Subscriptions",
        text: 'Your new privileges',
        image: AppColor.subscriptions,
        activeImage: AppColor.subscriptionsWhite,
        index: 2,
        links: [
            
            {title: 'plans'},
            {title: 'my subscriptions'},
        ],
    },
    {
        title: "Messenger",
        text: 'Stay in touch ',
        image: AppColor.messengerBlack,
        activeImage: AppColor.messageWhite,
        index: 3,
        links: [
            {title: 'solutions'},
            {title: 'direct  '},
            {title: 'groups'},
            {title: 'management'},
            {title: 'general help'},
            {title: 'contact us'}
        ],
    },
    {
        title: "Community",
        text: 'Share yourself ',
        image: AppColor.community,
        activeImage: AppColor.communityWhite,
        index: 4,
        links:  [
            {title: 'posts'},
            {title: 'faq'}
        ],
    },
    
];