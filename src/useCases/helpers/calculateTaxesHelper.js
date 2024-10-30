import CONSTS from '../../constants/index.js'
import utils from '../../utils/index.js'
import { getActualTaxesHelper } from './getActualTaxesHelper.js'

export const calculateTaxesHelper = ({ operations }) => {
  const getOperations = operations.operations

  const result = getOperations.reduce((acc, item) => {
    if (item.operation === CONSTS.OPERATIONS.BUY) {
      utils.getCurrentWeightedAverage(item, acc)
    }

    getActualTaxesHelper(item, acc)

    return acc
  }, { currentWeightedAverage: 0, quantityOfCurrentActions: 0, prejudice: 0, results: [] })

  return result.results
}
