import { add } from '../index.js';

describe('add', () => {
  it('should add 2 numbers together', () => {
    const a = 2;
    const b = 2;
    const expected = 4;
    const actual = add(a, b);
    expect(actual).toBe(expected);
  })
})