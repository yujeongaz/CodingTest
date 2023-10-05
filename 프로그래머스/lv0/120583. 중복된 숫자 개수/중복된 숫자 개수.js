function solution(arr, n) {
    let count = 0;
    
    arr.map((v) => {
        if(v === n) count++;
    })
    
    return count;
}