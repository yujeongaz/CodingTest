const solution = (str, n) => {
    let arr = str.split("");
    let new_str = "";
    let count;
    
    arr.map((v) => {
        count = 0;
        while(n > count) {
            new_str += v;
            count++;
        }
    });
    
    return new_str;
}