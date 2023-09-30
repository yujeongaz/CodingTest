function solution(n) {
    arr = String(n).split("");
    let sum = 0;
    
    arr.map(v => sum += Number(v));
    
    return sum;
}