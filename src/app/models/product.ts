export interface Product {
  _id: string,
  slug?: string,
  name: string,
  description: string,
  additional_info?: string,
  vendor_info?: string,
  reviews?: string,
  color?: string[],
  size?: string[],
  stock?: string,
  category: string[],
  imageUrl: string[],
  sold_price: number,
  regular_price: number,
  created_at: Date,
  updated_at?: Date
}
