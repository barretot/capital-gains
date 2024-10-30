import { randomUUID } from 'node:crypto'

export default () => {
  const items = []

  const create = async ({ operations }) => {
    const gains = operations.map(setOfOperations => {
      const id = randomUUID()
      const operations = setOfOperations.map(item => ({
        operation: item.operation,
        'unit-cost': item['unit-cost'],
        quantity: item.quantity
      }))

      const operation = {
        id,
        operations
      }

      items.push(operation)

      return operation
    })
    return gains
  }

  return {
    create,
    items
  }
}
