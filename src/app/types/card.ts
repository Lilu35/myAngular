import {Observable} from "rxjs";

export interface Product {
  id: number
  image?: string
  name: string
  model: string
  cost: number
  discount: boolean
  available: boolean
}

export interface ProductSB {
  id: number
  company: string
  title: string
  price: number
  image: string
  rating: number
  category: string
}
export interface ProductInfo {
  items: Array<ProductSB>
  meta: Info
}
export interface Info {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
export interface ProductColor {
  color?: string
  image?: string
}
export interface Toggle {
  value?: 'actionPrice' | 'available' | 'none'
  label: string
}



