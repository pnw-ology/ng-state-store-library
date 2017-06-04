import { ObjectError } from './object-error';

describe('ObjectError', () => {
  it('should create an instance', () => {
    expect(new ObjectError()).toBeTruthy();
  });
});
