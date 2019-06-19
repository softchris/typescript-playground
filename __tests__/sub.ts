import { sub } from '../src/sub';

describe('testing sub', () => {
  it('sub 1 -1 = 0', () => {
    expect(sub(1,1)).toEqual(0);
  })
})