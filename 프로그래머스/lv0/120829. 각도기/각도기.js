function solution(a) {
    if(a < 90) {
        return 1;
    } else if(a === 90) {
        return 2;
    } else if(a > 90 && a < 180) {
        return 3;
    } else {
        return 4;
    }
}