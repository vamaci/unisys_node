const pi = Math.PI
const area = function name(r) {
    return (r * r * pi).toFixed(2)
}

const circumf = function name(r) {
    return (2 * r * pi).toFixed(2)
}

exports.area = area
module.exports.circumf = circumf
