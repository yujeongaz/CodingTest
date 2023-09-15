function solution(array) {
    array.sort((a, b) => {
        return a - b;
    })
    
    return array[~~(array.length / 2)];
}