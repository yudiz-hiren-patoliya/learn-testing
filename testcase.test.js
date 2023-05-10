


const expect = require('chai').expect
const { getCubesideLength, getCubesurfaceArea, getCubevolume } = require('./function')


describe('Testing Cube functions', () => {
    it('length of cube', (done) => {
        expect(getCubesideLength(5)).to.eq(5)
        done()
    })

    it('surfaceArea of cube', (done) => {
        expect(getCubesurfaceArea(5)).to.eql(150)
        done()
    })

    it('volume of cube', (done) => {
        expect(getCubevolume(5)).to.eqls(125)
        done()
    })

})

