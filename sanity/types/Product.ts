import { PortableTextBlock } from "sanity"

interface Image {
  _type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  }
}

interface Slug {
  current: string
  __type: 'slug'
}

export interface Category {
  title: string
  _id: string
  _updatedAt: Date
  _createdAt: Date
  _rev: string
  _type: string
  _ref: string
}

export interface Product {
  title: string
  homeTitle: string
  madeira: string
  price: string
  dimension: string
  peso: string
  slug: Slug
  mainImage: Image
  images: Image[]
  categories: Category[]
  published_at: Date
  body: PortableTextBlock[]
}