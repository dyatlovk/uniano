import AppColor from "@common/styles/variables-static";

export type LinksType = {
    ImageNode: any;
    ImageNodeActive: any;
    text: string;
    showNode?: React.ReactNode;
    activeIndex?: number;
    onClick?: any;
    index?: number;
};

type link = {
    text:string;
    link: string;
}
export type CategoryItemProps = {
    icon: any;
    title: categorysText;
    onHover?: any;
}


type linkCategory = {
    title: string;
    content: link[];
}

export enum categorysText {
    Development = 'Development',
    Design = 'Design',
    Marketing = 'Marketing',
    Writing = 'Writing',
    Management = 'Management',
    Consulting = 'Consulting',
}
type Links = { [key in categorysText]: linkCategory[] };

export const links:Links = {
    [categorysText.Development]: [
        {
            title: 'Web Development',
            content: [
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
                {
                    text: 'WordPress',
                    link: '',
                },
            ],
        },
        {
            title: 'NFT, Blockchain & Cryptocurrency',
            content: [
                {
                    text: 'NFT Development',
                    link: '',
                },
                {
                    text: 'NFT Development',
                    link: '',
                },
                {
                    text: 'NFT Development',
                    link: '',
                },
                {
                    text: 'NFT Development',
                    link: '',
                },
                {
                    text: 'NFT Development',
                    link: '',
                },
              
            ],
        },
        {
            title: 'Other',
            content: [
                {
                    text: 'Chatbots',
                    link: '',
                },
                {
                    text: 'Chatbots',
                    link: '',
                },
            ],
        },
        {
            title: 'Mobile Apps',
            content: [
                {
                    text: 'Android',
                    link: '',
                },
                {
                    text: 'iOS',
                    link: '',
                },
            ],
        },
        {
            title: 'Other',
            content: [
                {
                    text: 'Chatbots',
                    link: '',
                },
                {
                    text: 'Chatbots',
                    link: '',
                },
            ],
        },
        {
            title: 'Mobile Apps',
            content: [
                {
                    text: 'Android',
                    link: '',
                },
                {
                    text: 'iOS',
                    link: '',
                },
            ],
        },
    ],
    [categorysText.Design]: [
    ],
    [categorysText.Marketing]: [
    ],
    [categorysText.Writing]: [
    ],
    [categorysText.Management]: [
    ],
    [categorysText.Consulting]: [
    ],
}