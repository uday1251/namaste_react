import { sum } from "../Sum";


test('sum function should calculate the sum of two numbers', () => {
    const res = sum(12,7);
    expect(res).toBe(19);
});