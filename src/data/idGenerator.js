import { v4 as uuidv4 } from 'uuid';

export default function idGenerator(products) {
  let productsList = products
  for (let product of productsList) {
    product.id = uuidv4()
  }
  return productsList
}

