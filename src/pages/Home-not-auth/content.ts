import { AdvantagesSectionCardProps, PopularCategorysCatalogCardProps, sixSectionCardProps } from './models';
import catalogServices from '@assets/svg/catalog-services.svg';
import catalogOrders from '@assets/svg/catalog-orders.svg';
import catalogSponsorship from '@assets/svg/catalog-sponsorship.svg';
import advantagesFirstImage from '@assets/svg/home_not_auth_advanatages_1.svg';
import advantagesSecondImage from '@assets/svg/home_not_auth_advanatages_2.svg';
import advantagesThirdtImage from '@assets/svg/home_not_auth_advanatages_3.svg';
import advantagesFourthImage from '@assets/svg/home_not_auth_advanatages_4.svg';
import popularServicesImg1 from '@assets/images/popular-categorys_services_1.png';
import popularServicesImg2 from '@assets/images/popular-categorys_services_2.png';
import popularServicesImg3 from '@assets/images/popular-categorys_services_3.png';
import popularServicesImg4 from '@assets/images/popular-categorys_services_4.png';

import popularServicesSvg1 from '@assets/svg/popular-categorys_services_1svg.svg';
import popularServicesSvg2 from '@assets/svg/popular-categorys_services_2svg.svg';
import popularServicesSvg3 from '@assets/svg/popular-categorys_services_3svg.svg';
import popularServicesSvg4 from '@assets/svg/popular-categorys_services_4svg.svg';

import sixSectionImage1 from '@assets/svg/home-page-six-section1.svg';
import sixSectionImage2 from '@assets/svg/home-page-six-section2.svg';
import sixSectionImage3 from '@assets/svg/home-page-six-section3.svg';
import sixSectionImage4 from '@assets/svg/home-page-six-section4.svg';

import { PopularCategorysServiceCardProps } from './models';

export const six_section_cards_content:sixSectionCardProps[] = [
  {
    title: 'Subscriptions',
    description: 'Pick tailored plans for cost-effective project support',
    image: sixSectionImage1,
    index: 0,
  },

  {
    title: 'Gamification',
    description: 'Enjoy engaging tasks and rewards for efficient collaboration',
    image: sixSectionImage2,
    index: 1,
  },

  {
    title: 'Promo',
    description: 'Access special offers from freelancers to enhance project value',
    image: sixSectionImage3,
    index: 2,
  },

  {
    title: 'Insurance',
    description: 'Choose freelancer-provided insurance for added project protection.',
    image: sixSectionImage4,
    index: 3,
  },

];
export const advantanges_section_card_content:AdvantagesSectionCardProps[] = [
    {
      img: advantagesFirstImage,
      title: 'Customers',
      description: 'Enjoy Commission-Free Projects and Focus on Your Business Growth!'
    },
  
    {
      img: advantagesSecondImage,
      title: 'Freelancers',
      description: 'Keep All Your Earnings, Just 5% Commission!'
    },
    {
      img: advantagesThirdtImage  ,
      title: 'Managers',
      description: 'Streamline Your Project Management with Our Intuitive Tools and Features'
    },
    {
      img: advantagesFourthImage  ,
      title: 'Sponsors',
      description: 'Make a Difference by Sponsoring Innovative and Impactful Projects'
    },
  ]; 

export const popular_categorys_content_services:PopularCategorysServiceCardProps[] = [
  {
    img:popularServicesImg1,
    svg: popularServicesSvg1,
    title: 'Programming',
  },
  {
    img:popularServicesImg2,
    svg: popularServicesSvg2,
    title: 'Design',
  },
  {
    img:popularServicesImg3,
    svg: popularServicesSvg3,
    title: 'Marketing',
  },
  {
    img:popularServicesImg4,
    svg: popularServicesSvg4,
    title: 'Writing',
  },
  {
    img:popularServicesImg1,
    svg: popularServicesSvg1,
    title: 'Programming',
  },
  {
    img:popularServicesImg2,
    svg: popularServicesSvg2,
    title: 'Design',
  },
  {
    img:popularServicesImg3,
    svg: popularServicesSvg3,
    title: 'Marketing',
  },
  {
    img:popularServicesImg4,
    svg: popularServicesSvg4,
    title: 'Writing',
  },
];