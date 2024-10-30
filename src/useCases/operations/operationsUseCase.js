export default ({
  inMemoryOperationsRepository,
  helpers
}) => {
  const execute = async ({ data }) => {
    const operations = await inMemoryOperationsRepository.create({ operations: data })

    return operations.map(items => helpers.calculateTaxesHelper({ operations: items }))
  }

  return {
    execute
  }
}
