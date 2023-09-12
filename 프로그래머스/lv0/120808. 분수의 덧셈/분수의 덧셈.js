// 1-1. 분모가 같을 때: 분자 + 분자
    // 2. 기약분수로 만들기: 분모와 분자의 최대공약수로 나누기
// 1-2. 분모가 다를 때: 분모들의 최소공배수 구하기
    // 2. 각 분모에게 곱해진 값을 분자도 곱하기
    // 3. 분자 + 분자
    // 4. 기약분수로 만들기: 분모와 분자의 최대공약수로 나누기

function solution(numer1, denom1, numer2, denom2) {
    if(denom1 === denom2){
        numer1 += numer2;
        
        const gcd = getGCD(numer1, denom1);
        
        return [numer1 / gcd, denom1 / gcd];
    }
    
    const lcm = getLCM(denom1, denom2);
    
    numer1 *= lcm / denom1;
    numer2 *= lcm / denom2;
    numer1 += numer2;
    
    const gcd = getGCD(numer1, lcm);
    
    return [numer1 / gcd, lcm / gcd];
}

// 최대공약수
const getGCD = (n, d) => {
    let gcd = 1;
    
    for(let i = 2; i <= Math.min(n, d); i++) {
        if(n % i === 0 && d % i === 0) {
            gcd = i;
        }
    }
    
    return gcd;
}

// 최소공배수
const getLCM = (d1, d2) => {
    let lcm = 1;
    
    while(1) {
        if((lcm % d1 == 0) && (lcm % d2 == 0)) {
            break;
        }
        lcm++;
    }
    
    return lcm;
}