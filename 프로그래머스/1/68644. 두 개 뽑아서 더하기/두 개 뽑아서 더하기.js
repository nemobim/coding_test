function solution(numbers) {
    const uniqueSums = new Set(); // 중복 제거용 Set

    const n = numbers.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            uniqueSums.add(numbers[i] + numbers[j]); // 바로 Set에 추가
        }
    }

    // Set을 배열로 변환 후 정렬
    return [...uniqueSums].sort((a, b) => a - b);
}

// 테스트
console.log(solution([2, 1, 3, 4, 1]));  // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7]));    // [2, 5, 7, 9, 12]
