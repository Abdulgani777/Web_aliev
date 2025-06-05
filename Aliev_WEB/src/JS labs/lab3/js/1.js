function calculateSums(inputArray) {
    let sumTotal = 0;
    let sumEven = 0;

    for (const item of inputArray) {
        const number = Number(item);
        sumTotal += number;

        if (number % 2 === 0) {
            sumEven += number;
        }
    }

    console.log(sumTotal);
    console.log(sumEven);
}

calculateSums(['5', '15', '23', '56', '35']);