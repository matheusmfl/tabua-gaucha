import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'produto',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do produto',
      type: 'string',
    }),
    defineField({
      name: 'homeTitle',
      title: 'Descrição do produto que deverá aparecer na homepage',
      type: 'string',
    }),
    defineField({
      name: 'madeira',
      title: 'Tipo da madeira do produto',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Preço do produto',
      type: 'string',
    }),
    defineField({
      name: 'dimension',
      title: 'Dimensões do produto',
      type: 'string',
    }),
    defineField({
      name: 'peso',
      title: 'Peso do produto',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        }
      ]
    }),

    defineField({
      name: 'images',
      type: 'array',
      title: 'Mais imagens do produto',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto descritivo da imagem',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Corpo',
      type: 'blockContent',
    }),
    defineField({
      name: 'descriptions',
      title: 'Descrições dinâmicas',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'descriptions' } }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
