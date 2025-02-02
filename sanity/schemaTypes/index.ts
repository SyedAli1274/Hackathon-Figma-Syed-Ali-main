// import { type SchemaTypeDefinition } from "sanity";
// import { productSchema } from './products';
// import { categorySchema } from "./categories";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema, categorySchema],
// };
import { type SchemaTypeDefinition } from 'sanity'
// import product from './product'
import { productSchema } from './products2'
import { categorySchema } from './categories'
import order from './order'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema,order],
}
