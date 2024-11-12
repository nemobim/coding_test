function solution(number) {
    let count = 0;
    const len = number.length;
    
    // 3중 반복문을 사용하여 모든 가능한 조합을 확인
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                // 세 수의 합이 0인 경우 카운트 증가
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}
