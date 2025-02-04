import { digitSum, funFact, isArmstrongNumber, isPerfect, isPrime, checkParity } from "../helpers/helpers.js";

export const classifyNumber = async (req, res) => {
    console.log(typeof req.query.number);

    try {
        
        const num = parseInt(req.query.number);
        
        // validate input.
        if (isNaN(num)) throw new Error("Invalid input. Please provide a number.");

        // assign values.
        const is_prime = isPrime(num);
        const is_perfect = isPerfect(num);
        const is_armstrong = isArmstrongNumber(num);
        const parity = checkParity(num);
        const digit_sum = digitSum(num);
    
        const fun_fact = await funFact(num);

        res.status(200).json({
            number: num,
            is_prime,
            is_perfect,
            properties: is_armstrong === false ? [parity] : ["Armstrong", parity],
            digit_sum,
            fun_fact
        });

    } catch (e) {
        console.error(e);
        res.status(400).json({
            number: "alphabet",
            error: true
        });
    };
};

