function solution(n) {
    let result = [0, 0];
    
    n.map((v) => {
        if(v % 2 === 0) result[0]++;
        else result[1]++;
    })
    
    return result;
}