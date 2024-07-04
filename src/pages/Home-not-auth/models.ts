export type AdvantagesSectionCardProps = {
    img: string;
    title: string;
    description: string;
};

export type PopularCategorysServiceCardProps = {
  img: string;
  title: string;
  svg: string;
};

export type sixSectionCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
}

export type PopularCategorysCatalogCardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  width: number;
  height: number;
  activeIndex: number;
  cardIndex: number;
  activeIcon?: React.ReactNode;
  callback?: (item:number) => void;
};