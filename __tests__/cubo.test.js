import Cubo from "../model/cubo.js"

describe("Testes da classe Cubo", ()=>{
    test("Teste da area total cubo", ()=>{
        const aresta = 4
        areaTotalEsperada = 6 * (aresta * aresta)
        const cubo = new Cubo(aresta)

        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })

    test("Teste do volume do cubo", ()=>{
        const aresta = 4
        volumeEsperado = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})