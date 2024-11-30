function solution(s) {
    return s
        .split(" ")
        .map(x => isNaN(x) ? x[0].toUpperCase() + x.slice(1).toLowerCase() : "")
        .join(" ");
}