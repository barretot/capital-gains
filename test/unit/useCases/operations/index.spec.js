import { expect, it, describe, afterEach } from 'vitest'
import operationUseCaseWrapper from '../../../../src/useCases/operations/operationsUseCase'
import motherObject from './MotherObject'
import { ALL_CASES } from '../@shared/mocks/cases.js'

describe('Operations Use Case', () => {
  afterEach(() => {
    const { inMemoryOperationsRepository } = motherObject.success
    inMemoryOperationsRepository().items.length = 0 // Clean array
  })

  it('should correctly return the tax when calling the method with #Case1', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case1 })

    expect(result).toEqual([[{ tax: 0 }, { tax: 0 }, { tax: 0 }]])
  })

  it('should correctly return the tax when calling the method with #Case2', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case2 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 10000.00 }, { tax: 0.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case1 + #Case2', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case1Sum2 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }],
      [{ tax: 0.00 }, { tax: 10000.00 }, { tax: 0.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case3', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case3 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 1000.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case4', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case4 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case5', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case5 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }, { tax: 10000.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case6', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case6 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }, { tax: 3000.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case7', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case7 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }, { tax: 0.00 }, { tax: 3000.00 },
      { tax: 0.00 }, { tax: 0.00 }, { tax: 3700.00 }, { tax: 0.00 }]])
  })

  it('should correctly return the tax when calling the method with #Case8', async () => {
    const { inMemoryOperationsRepository, helpers } = motherObject.success

    const result = await operationUseCaseWrapper({
      inMemoryOperationsRepository: inMemoryOperationsRepository(),
      helpers
    }).execute({ data: ALL_CASES.case8 })

    expect(result).toEqual([[{ tax: 0.00 }, { tax: 80000.00 }, { tax: 0.00 }, { tax: 60000.00 }]])
  })
})
