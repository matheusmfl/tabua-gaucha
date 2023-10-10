import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import produto from './schemas/produto'
import descriptions from './schemas/descriptions'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [produto, category, blockContent, descriptions],
}
