import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas con async', () => { 

    test('getImage has to return url', async () => { 

        const url = await getImagen()
        
        expect(url).toStrictEqual(expect.any(String))
     
    })
 })