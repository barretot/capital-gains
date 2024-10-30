import readline from 'readline'
import makeOperationUseCase from './useCases/operations/factory.js'
import { JsonUnformattedException } from './errors/jsonUnformatterException.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Insira as operações em formato JSON: ', (input) => {
  processInput(input).then(() => rl.close())
})

const processInput = async (input) => {
  try {
    const data = JSON.parse(input)

    const response = await makeOperationUseCase.execute({ data })

    console.log('\nTaxas calculadas:')
    console.log(response)
  } catch (error) {
    throw new JsonUnformattedException()
  }
}
