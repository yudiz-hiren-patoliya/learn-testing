const cube = {}

cube.getCubesideLength = (length) => {
    return length
}

cube.getCubesurfaceArea = (length) => {
    return length*length*6
}

cube.getCubevolume = (length) => {
    return Math.pow(length,3)
}
    
module.exports = cube