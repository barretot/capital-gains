export const getCurrentWeightedAverage = (operations, acc) => {
  const newQuantity = operations.quantity
  const newCost = operations['unit-cost']

  acc.currentWeightedAverage = ((acc.quantityOfCurrentActions * acc.currentWeightedAverage) + (newQuantity * newCost)) / (acc.quantityOfCurrentActions + newQuantity)
  acc.quantityOfCurrentActions += newQuantity

  acc.results.push({ tax: 0.00 })
}
