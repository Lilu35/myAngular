export interface Product {
  id: number
  image?: string
  name: string
  model: string
  cost: number
  discount: boolean
  available: boolean
  colors: {
    one: ProductColor,
    two: ProductColor
  }
}
export interface ProductColor {
  color?: string
  image?: string
}
export interface Toggle {
  value: string | number
  label: string
}


