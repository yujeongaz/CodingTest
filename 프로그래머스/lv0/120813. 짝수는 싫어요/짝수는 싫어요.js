function solution(n) {
    let count = 1;
    const arr = [];
    
    while(count <= n) {
        if(count % 2 !== 0) {
            arr.push(count);
        }
        count++;
    }
    
    return arr;
}