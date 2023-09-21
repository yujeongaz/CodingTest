function solution(numbers) {
    result = 0;
    numbers.map((v) => {
        result += v;
    })
    
    return result / numbers.length;
}