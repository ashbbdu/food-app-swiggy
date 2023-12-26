import { sum } from "../sum"

test("calculate the sum of two numbers" , () => {
    const result = sum(3,4);
    expect(result).toBe(7)
    expect(sum(5,4)).toBe(9)
    expect(sum(5,1)).toBe(6)
})