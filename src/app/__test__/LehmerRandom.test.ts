import { LehmerRandom } from "../LehmerRandom"


describe('Lehmer random', () => { 

  const f = LehmerRandom()
  test('test', () => {
    console.log(f)
    expect(f).not.toBeNaN()
  })
 })