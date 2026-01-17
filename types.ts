
export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
  badge?: 'New Arrival' | 'Sale';
}

export interface MegaMenuLink {
  title: string;
  href: string;
}

export interface MegaMenuCategory {
  title: string;
  href: string;
  sections: {
    title: string;
    links: MegaMenuLink[];
  }[];
  promo: {
    imageUrl: string;
    title: string;
    description: string;
    href: string;
  };
}
