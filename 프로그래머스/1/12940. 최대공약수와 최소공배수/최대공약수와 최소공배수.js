let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)]; //최대공약수, 최소공배수
}