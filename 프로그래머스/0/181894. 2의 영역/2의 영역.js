function solution(arr) {
    const first2 = arr.indexOf(2)
    if(first2  === -1) return [-1]
    const last2 = arr.lastIndexOf(2)
    if(last2  === -1) return [2]
    return arr.slice(first2, last2+1)
}