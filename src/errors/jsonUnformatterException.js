export class JsonUnformattedException extends Error {
  constructor () {
    super('Unformatted or badly formatted JSON')
  }
}
