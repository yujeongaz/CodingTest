function solution(n) {
    let mul = [];
    
    mul.push(Math.max.apply(null, n));
    n.splice(n.indexOf(mul[0]), 1);
    mul.push(Math.max.apply(null, n));
    
    return mul[0] * mul[1];
}