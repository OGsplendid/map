import ErrorRepository from '../main';

test('should return an error', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorsArray.set('35', 'Inappropriate symbol');
  errorRepository.errorsArray.set('112', 'Invalid symbol');
  expect(errorRepository.translate('112')).toBe('Invalid symbol');
});

test('should return an Unknown Error', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorsArray.set('35', 'Inappropriate symbol');
  errorRepository.errorsArray.set('112', 'Invalid symbol');
  expect(errorRepository.translate('55')).toBe('Unknown error');
});
