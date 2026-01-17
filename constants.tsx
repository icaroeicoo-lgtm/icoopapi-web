
import React from 'react';
import { Product, MegaMenuCategory } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Apex Canyonwall Eco Jacket",
    price: "$19.00",
    imageUrl: "https://image2url.com/r2/default/images/1768577808120-5b1b3cf6-2d6f-4482-8abf-76e351924562.jpg",
    hoverImageUrl: "https://image2url.com/r2/default/images/1768577808120-5b1b3cf6-2d6f-4482-8abf-76e351924562.jpg",
    badge: 'New Arrival',
  },
  {
    id: 2,
    name: "Women's Antora 2 Rain Jacket",
    price: "$30.00",
    imageUrl: "https://image2url.com/r2/default/images/1768595169398-1a31088c-0589-4836-ad20-75ba394e3cb5.png",
    hoverImageUrl: "https://image2url.com/r2/default/images/1768595169398-1a31088c-0589-4836-ad20-75ba394e3cb5.png",
  },
  {
    id: 3,
    name: "Base Camp Duffel—M",
    price: "$35.00",
    imageUrl: "https://i.pinimg.com/736x/5e/c4/18/5ec4180e52b14486fd93adc06ebf7933.jpg",
    hoverImageUrl: "https://i.pinimg.com/736x/5e/c4/18/5ec4180e52b14486fd93adc06ebf7933.jpg",
    badge: 'Sale',
  },
  {
    id: 4,
    name: "VECTIV Fastpack Hiking Shoes",
    price: "$39.00",
    imageUrl: "https://i.pinimg.com/1200x/1a/5a/34/1a5a34cc33ae2db8091c4d5058da1c83.jpg",
    hoverImageUrl: "https://i.pinimg.com/1200x/1a/5a/34/1a5a34cc33ae2db8091c4d5058da1c83.jpg",
  },
    {
    id: 5,
    name: "Youth Freedom Insulated Jacket",
    price: "$25.00",
    imageUrl: "https://i.pinimg.com/736x/0f/3a/b4/0f3ab402d2d061aa7b5887aca1c237ef.jpg",
    hoverImageUrl: "https://i.pinimg.com/736x/0f/3a/b4/0f3ab402d2d061aa7b5887aca1c237ef.jpg",
  },
  {
    id: 6,
    name: "Wawona 6-Person Tent",
    price: "$29.00",
    imageUrl: "https://i.pinimg.com/1200x/1b/4c/62/1b4c62854896d31c357673d6058eedcb.jpg",
    hoverImageUrl: "https://i.pinimg.com/1200x/1b/4c/62/1b4c62854896d31c357673d6058eedcb.jpg",
    badge: 'New Arrival',
  },
  {
    id: 7,
    name: "Recon Backpack",
    price: "$29.00",
    imageUrl: "https://i.pinimg.com/1200x/e3/b5/6d/e3b56d768bd0a584230de7c063ca9d8d.jpg",
    hoverImageUrl: "https://i.pinimg.com/1200x/e3/b5/6d/e3b56d768bd0a584230de7c063ca9d8d.jpg",
  },
  {
    id: 8,
    name: "Women's ThermoBall™ Traction Mules V",
    price: "$29.00",
    imageUrl: "https://i.pinimg.com/736x/78/d8/02/78d802ecc25e9cc28b34c47e3de3c385.jpg",
    hoverImageUrl: "https://i.pinimg.com/736x/78/d8/02/78d802ecc25e9cc28b34c47e3de3c385.jpg",
    badge: 'Sale',
  },
];

export const megaMenuData: MegaMenuCategory[] = [
    {
        title: "Men's",
        href: "#",
        sections: [
            { title: "Featured", links: [{ title: "New Arrivals", href: "#" }, { title: "Bestsellers", href: "#" }, { title: "Sale", href: "#" }] },
            { title: "Jackets", links: [{ title: "Rainwear", href: "#" }, { title: "Fleece", href: "#" }, { title: "Insulated", href: "#" }] },
            { title: "Tops", links: [{ title: "T-Shirts", href: "#" }, { title: "Hoodies", href: "#" }, { title: "Shirts", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/111/400/600", title: "SUMMIT SERIES", description: "The world’s finest alpine equipment.", href: "#" }
    },
    {
        title: "Women's",
        href: "#",
        sections: [
            { title: "Featured", links: [{ title: "New Arrivals", href: "#" }, { title: "Bestsellers", href: "#" }, { title: "Sale", href: "#" }] },
            { title: "Jackets", links: [{ title: "Rainwear", href: "#" }, { title: "Fleece", href: "#" }, { title: "Insulated", href: "#" }] },
            { title: "Bottoms", links: [{ title: "Pants", href: "#" }, { title: "Tights", href: "#" }, { title: "Shorts", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/222/400/600", title: "HIKE COLLECTION", description: "Gear up for the trail.", href: "#" }
    },
    {
        title: "Kids'",
        href: "#",
        sections: [
            { title: "Shop by Age", links: [{ title: "Toddler (2T-5T)", href: "#" }, { title: "Little Kids (6-8)", href: "#" }, { title: "Big Kids (10-16)", href: "#" }] },
            { title: "Categories", links: [{ title: "Jackets & Vests", href: "#" }, { title: "Fleece", href: "#" }, { title: "Snow Gear", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/333/400/600", title: "BACK TO SCHOOL", description: "Styles for the new year.", href: "#" }
    },
    {
        title: "Footwear",
        href: "#",
        sections: [
            { title: "Men's Footwear", links: [{ title: "Hiking", href: "#" }, { title: "Trail Running", href: "#" }, { title: "Casual", href: "#" }] },
            { title: "Women's Footwear", links: [{ title: "Hiking", href: "#" }, { title: "Trail Running", href: "#" }, { title: "Casual", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/444/400/600", title: "VECTIV™ TECHNOLOGY", description: "Power further.", href: "#" }
    },
    {
        title: "Bags & Gear",
        href: "#",
        sections: [
            { title: "Backpacks", links: [{ title: "Hiking", href: "#" }, { title: "Everyday", href: "#" }, { title: "Travel", href: "#" }] },
            { title: "Duffels", links: [{ title: "Base Camp Duffel", href: "#" }, { title: "Rolling Thunder", href: "#" }] },
            { title: "Equipment", links: [{ title: "Tents", href: "#" }, { title: "Sleeping Bags", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/555/400/600", title: "BASE CAMP DUFFEL", description: "The original, tougher than ever.", href: "#" }
    },
    {
        title: "About Us",
        href: "#",
        sections: [
            { title: "Our Story", links: [{ title: "History", href: "#" }, { title: "Athletes", href: "#" }] },
            { title: "Responsibility", links: [{ title: "Sustainability", href: "#" }, { title: "Community", href: "#" }] },
        ],
        promo: { imageUrl: "https://picsum.photos/id/666/400/600", title: "EXPLORE FUND", description: "Supporting exploration and conservation.", href: "#" }
    },
];

// Fix: Changed JSX.Element to React.ReactElement to resolve the "Cannot find namespace 'JSX'" error.
export const ICONS: { [key: string]: React.ReactElement } = {
  search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  user: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  cart: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
  menu: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />,
  close: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />,
  chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />,
  usFlag: (
    <g>
      <path fill="#BF0A30" d="M0 0h40v4H0zM0 8h40v4H0zM0 16h40v4H0zM0 24h40v4H0z" />
      <path fill="#FFFFFF" d="M0 4h40v4H0zM0 12h40v4H0zM0 20h40v4H0z" />
      <path fill="#002868" d="M0 0h20v16H0z" />
      <g fill="#FFFFFF">
        <g id="s10">
          <g id="s5">
            <path id="s" d="M3.333 3.55l-.756 2.327h2.368l-1.916-1.438.29-2.527z" transform="scale(.8)" />
            <use href="#s" x="4" />
            <use href="#s" x="8" />
            <use href="#s" x="12" />
            <use href="#s" x="16" />
          </g>
          <use href="#s5" y="2.667" />
        </g>
        <use href="#s10" y="5.333" />
      </g>
    </g>
  ),
};
