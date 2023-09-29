function solution(str) {
    let arr = [];
    
    str.map((v, i) => {
        arr.push(v.length);
    })
    
    return arr;
}