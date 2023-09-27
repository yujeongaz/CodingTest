function solution(str, letter) {
    let i = 0, n = str.length;
    
    while(i < n) {
        str = str.replace(letter, "");
        i++;
    }
    
    return str;
}