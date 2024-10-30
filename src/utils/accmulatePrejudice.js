export const accumulatePrejudice = (acc, totalProfit) => {
  if (totalProfit < 0) {
    acc.prejudice += Math.abs(totalProfit)
  }
}
