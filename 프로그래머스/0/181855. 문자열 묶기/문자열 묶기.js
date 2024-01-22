function solution(strArr) {
    const obj ={}
    strArr.forEach((x,i) => {
        obj[x.length] = obj[x.length] + 1 || 1 
    })
    console.log(obj)
    return Math.max(...Object.values(obj))
}