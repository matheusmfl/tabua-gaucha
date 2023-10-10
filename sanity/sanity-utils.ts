import imageUrlBuilder from '@sanity/image-url'
import { Category, Product } from './types/Product'
import { createClient, groq } from 'next-sanity'
import { clientConfig } from './schemas/config/client-config'



export const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
})

export async function getProducts(): Promise<Product[]> {
  const client = createClient(clientConfig)

  try {
    const products = await client.fetch(groq`*[_type == 'produto']`)
    return products
  }
  catch (error) {
    console.log('Erro ao buscar produtos')
    throw error
  }
}

export async function getPage(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "produto" && slug.current == $slug][0]`,
    { slug },
  )
}

export async function getDescriptions(slug: string) {
  const client = createClient(clientConfig)

  try {
    const query = `*[_type == "produto" && slug.current == $slug][0].descriptions[] -> {   
        title,
        body
    }`

    const product = await client.fetch(query, { slug });

    // Retorna o resultado da consulta
    return product;
  } catch (error) {
    console.error('Erro ao buscar o produto:', error);
    throw error;
  }
}

export async function getCategories(slug: string): Promise<Category[]> {
  const product = await createClient(clientConfig).fetch(
    groq`*[_type == "produto" && slug.current == $slug][0]`,
    { slug }
  );

  if (product && product.categories) {
    const categoryRefs = product.categories.map((category: Category) => category._ref);
    return createClient(clientConfig).fetch(
      groq`*[_type == "category" && _id in $categoryRefs]`,
      { categoryRefs }
    );
  }

  return [];
}
