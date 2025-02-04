export const funFact = async (num) => {

    const factUrl = `${process.env.NUMBERS_API_URI}/${num}/math`;
    try {
        const resp = await fetch(factUrl);
        if (!resp.ok) throw new Error('Failed to fetch fact');

        const fact = await resp.text();

        // return fact.
        return fact;
    } catch (e) {
        console.error(e);
    };
};

export const isArmstrongNumber = (num) => {
    const stringNumber = num.toString().split('').map(Number);
    const power = stringNumber.length;
    let sum = 0;

    stringNumber.forEach(number => sum += Math.pow(number, power));
    if (num === sum) {
        return true;
    } else {
        return false;
    };
};

export const checkParity = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd";
    };
};

export const digitSum = (num) => {
    const stringNumber = num.toString().split('').map(Number);
    let sum = 0;

    for (let number of stringNumber) {
        // sum.
        sum += number;
    };
    return sum;
};

export const isPrime = (num) => {
    if (num < 2) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; // even numbers are not prime

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // If divisible, it's not prime
    }
    
    return true;
};

export const isPerfect = (num) => {
    if (num < 2) return false; // Perfect numbers start from 6

    let sum = 0;
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        };
    };

    if (sum === num) {
        return true;
    } else {
        return false;
    };
};