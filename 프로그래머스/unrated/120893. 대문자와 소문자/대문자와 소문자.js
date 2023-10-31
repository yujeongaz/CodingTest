const solution = str => {
    let arr = str.split("");
    
    arr.map((v, i) => {
        if(arr[i] === arr[i].toUpperCase()) arr[i] = arr[i].toLowerCase();
        else arr[i] = arr[i].toUpperCase();
    })
    
    return arr.join("");
}