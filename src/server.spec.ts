import { somador } from './server'

// Placeholder test, to test jest

describe('Main functionality somador', () => {
  test('should return 5 with inpurt 2 and 3', () => {
    expect(somador(2, 3)).toBe(5)
  })
})
