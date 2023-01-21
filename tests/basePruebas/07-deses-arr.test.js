import { object } from "prop-types"
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"
describe('Pruebas en arrays', () => { 
    test('should return a string and a number', () => {

        const arr = retornaArreglo()
        
        expect(arr[0]).toStrictEqual(expect.any(String))
        expect(arr[1]).toStrictEqual(expect.any(Number))
        expect(arr).toStrictEqual(expect.any(Array))
    })
    
 })