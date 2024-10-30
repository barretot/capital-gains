import inMemoryOperationsRepository from '../../repositories/inMemory/inMemoryOperationsRepository.js'
import operationUseCaseWrapper from './operationsUseCase.js'
import helpers from '../helpers/index.js'

function makeOperationsUseCase () {
  const operationsUseCase = operationUseCaseWrapper({
    inMemoryOperationsRepository: inMemoryOperationsRepository(),
    helpers
  })

  return operationsUseCase
}

export default makeOperationsUseCase()
