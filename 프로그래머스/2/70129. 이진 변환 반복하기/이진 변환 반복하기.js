function solution(s) {
    //이진 변환 횟수와 변환 과정에서 제거된 0를 배열에 담아라...
    
    let num = s;
    let count = 0; // 이진 변환 횟수
    let removedZero = 0; // 제거한 0의 총 개수
    
    while (num !== "1") {
        //1이 될때까지 계속 반복
    removedZero += num.split("0").length - 1;

    // 0 제거 후 길이 확인
    const newLength = num.replace(/0/g, "").length;

    // 길이를 이진수로 변환
    num = newLength.toString(2);

    count++;
  }
    
    return [count,removedZero ]
}