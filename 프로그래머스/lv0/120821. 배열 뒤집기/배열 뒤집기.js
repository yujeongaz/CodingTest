function solution(num) {
    let arr = [];
    
    num.map((v) => {
        arr.unshift(v);
    })
    
    return arr;
}