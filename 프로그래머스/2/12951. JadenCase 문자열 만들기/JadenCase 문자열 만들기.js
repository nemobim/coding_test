function solution(s) {
    return s
        .split(" ")
        .map(x => 
            x 
                ? x[0].toUpperCase() + x.slice(1).toLowerCase() 
                : "" // 빈 문자열은 그대로 유지
        )
        .join(" ");
}