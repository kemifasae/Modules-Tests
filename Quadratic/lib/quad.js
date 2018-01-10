module.exports =  quad = (a,b,c) => {
    let results = [];
    let discriminant = Math.pow(b,2)-(4*a*c)

    res1 = (-b + Math.sqrt(discriminant))/(2*a)
    res2 = (-b - Math.sqrt(discriminant))/(2*a)

    if((isNaN(res1)) || (isNaN(res2))){
        throw new Error('One or both result(s) is a complex no')
    }

    results.push(res1, res2)
    return results
}

