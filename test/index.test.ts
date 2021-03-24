import { func } from '../index';

describe('sample test suite', () => {
  test('func should return hello world', () => {
    expect(func()).toBe('Hello, World!');
  });
});
