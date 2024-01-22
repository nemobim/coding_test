// function solution(intStrs, k, s, l) {
//     return intStrs.map((item) => +item.substr(s,l)).filter(x => x > k)
// }

function solution(intStrs, k, s, l) {
    return intStrs.map((item) => +item.slice(s,s+l)).filter(x => x > k)
}