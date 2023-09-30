function solution(n) {
    let sum = 0;
    
    String(n).split("").map(v => sum += Number(v));
    
    return sum;
}