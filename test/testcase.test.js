


const expect = require('chai').expect
const { getCubesideLength, getCubesurfaceArea, getCubevolume } = require('../function')


describe('Testing Cube functions', () => {
    it('length of cube', function(){
        expect(getCubesideLength(5)).to.eq(5) 
    })

    it('surfaceArea of cube', function(){
        expect(getCubesurfaceArea(5)).to.eql(150)
    })

    it('volume of cube', function(){
        expect(getCubevolume(5)).to.eqls(125) 
    })

})

