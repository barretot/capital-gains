import CONSTS from '../constants/index.js'

export const isExemptFromTax = (totalTransactionValue) => totalTransactionValue <= CONSTS.TOTAL_OPERATION /* 20000.00 */
