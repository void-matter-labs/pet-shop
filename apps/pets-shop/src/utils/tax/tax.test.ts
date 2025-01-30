import { calculateIGV } from './tax';

describe('calculateIGV', () => {
  it('should calculate IGV (18%) correctly', () => {
    expect(calculateIGV(100)).toBe(18);
  });
});