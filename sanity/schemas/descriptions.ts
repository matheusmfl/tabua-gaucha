import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'descriptions',
  title: 'Descrições dinâmicas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'string',
    })
  ],
})
