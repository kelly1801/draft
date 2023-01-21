import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas template string', () => {
 
    test('getSaludo has to return "Hola kelly"', () => {
        const name = 'kelly'
        const message = getSaludo(name)
    
    expect(message).toBe(`Hola ${name}`)
    })
})