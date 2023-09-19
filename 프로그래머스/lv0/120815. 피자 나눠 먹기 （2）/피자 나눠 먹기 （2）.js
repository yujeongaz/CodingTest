function solution(n) {
    let result = 1;
    if(n % 6 === 0) {
        return n / 6;
    }
    
    while(1) {
        if((result * 6) % n === 0) {
            return result;
        }
        result++;
    }
}