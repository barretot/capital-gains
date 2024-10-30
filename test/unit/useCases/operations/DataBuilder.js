import helpers from '../../../../src/useCases/helpers/index.js'
import inMemoryOperationsRepository from '../../../../src/repositories/inMemory/inMemoryOperationsRepository.js'

class DataBuilder {
  constructor () {
    this.mockDependencies = {
      inMemoryOperationsRepository,
      helpers
    }
  }

  success () {
    return this
  }

  build () {
    return this.mockDependencies
  }
}

export default DataBuilder
