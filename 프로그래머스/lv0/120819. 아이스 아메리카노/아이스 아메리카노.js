const solution = money => {
    let price = 0;
    while(price <= money) {
        price += 5500;
    }
    price -= 5500;
    
    if(money % 5500 === 0) {
        return [price / 5500, 0];
    } else {
        return [price / 5500, money - price];
    }
}