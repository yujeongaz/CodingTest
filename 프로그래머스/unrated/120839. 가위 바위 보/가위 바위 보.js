const solution = rsp => {
    let arr = rsp.split('');
    let str = '';
    
    arr.map(v => {
        if(v === '2') str += '0';
        else if(v === '0') str += '5';
        else str += '2';
    })
    
    return str;
}