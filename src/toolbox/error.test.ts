import {getErrorMessage} from './error';

describe('error', function () {
  describe('getErrorMessage', function () {
    const errors = [
      ['standard Error object', new Error('Lorem ipsum')],
      ['string error', 'Lorem ipsum'],
    ];

    it.each(errors)('should get the message from a %s', function (_, error) {
      expect(getErrorMessage(error)).toBe('Lorem Ipsum');
    });
  });
});
