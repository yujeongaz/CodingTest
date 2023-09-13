function solution(numbers) {
    numbers.map((v, i) => {
        numbers[i] = v * 2;
    })
    
    return numbers;
}