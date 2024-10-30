import CONSTS from '../../constants/index.js'
import utils from '../../utils/index.js'

export const getActualTaxesHelper = (item, acc) => {
  if (item.operation === CONSTS.OPERATIONS.SELL) {
    acc.quantityOfCurrentActions -= item.quantity

    const { totalProfit, totalTransactionValue } = utils.getTotals({ atualAcumulator: acc, transaction: item })

    if (utils.isExemptFromTax(totalTransactionValue)) {
      acc.results.push({ tax: 0.00 })
      utils.accumulatePrejudice(acc, totalProfit)
      return acc
    }

    if (totalProfit < 0) {
      acc.prejudice += Math.abs(totalProfit)
      acc.results.push({ tax: 0.00 })
      return acc
    }

    const profitAfterLoss = Math.max(0, totalProfit - acc.prejudice)
    const taxes = profitAfterLoss * CONSTS.TOTAL_TAXES_APLIED /* 0.20 */

    acc.prejudice = Math.max(0, acc.prejudice - totalProfit)

    acc.results.push({ tax: utils.roundNumber(taxes) })
  }
}
