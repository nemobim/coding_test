function solution(s) {
    return s
        .split(" ")
        .map(x => x.length > 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : "")
        .join(" ");
}