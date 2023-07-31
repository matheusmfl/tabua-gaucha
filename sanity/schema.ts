import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import produto from './schemas/produto'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [produto, category, blockContent],
}
