function solution(slice, n) {
    let result = 1, sum = slice;
    if(n === slice) {
        return 1;
    }
    
    while(1) {
        if(n <= sum) {
            return result;
        }
        result++;
        sum += slice;
    }
}