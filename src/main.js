export default class ErrorRepository {
  constructor() {
    this.errorsArray = new Map();
  }

  translate(code) {
    return this.errorsArray.get(code) ? this.errorsArray.get(code) : 'Unknown error';
  }
}
