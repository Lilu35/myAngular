import {Product} from "../types/card";

export const products: Array<Product> = [
  {
    id: 1,
    image: "/assets/id-1-white.jpg",
    name: "FIRST CLASS",
    model: "Стул кухонный",
    cost: 1299,
    discount: false,
    available: true,
  },
  {
    id: 2,
    image: "/assets/id-2-white.jpg",
    name: "MY KIT",
    model: "Стул кухонный",
    cost: 2199,
    discount: true,
    available: false,
  }
];
