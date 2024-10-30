const case1 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 100 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 50 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 50 }
]]

const case2 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 5.00, quantity: 5000 }
]]

const case1Sum2 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 100 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 50 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 50 }
],
[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 5.00, quantity: 5000 }
]]

const case3 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 5.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 3000 }
]]

const case4 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'buy', 'unit-cost': 25.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 10000 }
]]

const case5 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'buy', 'unit-cost': 25.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 25.00, quantity: 5000 }
]]

const case6 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 2.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 2000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 2000 },
  { operation: 'sell', 'unit-cost': 25.00, quantity: 1000 }
]]

const case7 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 2.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 2000 },
  { operation: 'sell', 'unit-cost': 20.00, quantity: 2000 },
  { operation: 'sell', 'unit-cost': 25.00, quantity: 1000 },
  { operation: 'buy', 'unit-cost': 20.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 15.00, quantity: 5000 },
  { operation: 'sell', 'unit-cost': 30.00, quantity: 4350 },
  { operation: 'sell', 'unit-cost': 30.00, quantity: 650 }
]]

const case8 = [[
  { operation: 'buy', 'unit-cost': 10.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 50.00, quantity: 10000 },
  { operation: 'buy', 'unit-cost': 20.00, quantity: 10000 },
  { operation: 'sell', 'unit-cost': 50.00, quantity: 10000 }
]]

export const ALL_CASES = {
  case1,
  case2,
  case1Sum2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8
}
