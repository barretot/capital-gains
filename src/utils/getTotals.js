export const getTotals = ({ atualAcumulator: acc, transaction }) => {
  const profitUnit = transaction['unit-cost'] - acc.currentWeightedAverage

  return {
    totalProfit: profitUnit * transaction.quantity,
    totalTransactionValue: transaction['unit-cost'] * transaction.quantity
  }
}
