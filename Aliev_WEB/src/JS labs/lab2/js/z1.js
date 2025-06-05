function calculateDigitSum(number) {
    let remaining = Math.abs(number);
    let result = 0;

    while (remaining > 0) {
        result += remaining % 10;
        remaining = Math.floor(remaining / 10);
    }

    console.log(result);
}

calculateDigitSum(245678);  // 32
calculateDigitSum(97561);   // 28
calculateDigitSum(543);     // 12
