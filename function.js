const cube = {}

cube.getCubesideLength = (length) => {
    return length
}

cube.getCubesurfaceArea = () => {
    return length*length*6
}

cube.getCubevolume = () => {
    return Math.pow(length,3)
}


module.exports = cube