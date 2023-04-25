export default class ErrorRepository {
  constructor() {
    this.errorsArray = new Map();
    this.errorsArray.set('35', 'Inappropriate symbol');
    this.errorsArray.set('112', 'Invalid symbol');
  }

  translate(code) {
    return this.errorsArray.get(code) ? this.errorsArray.get(code) : 'Unknown error';
  }
}
