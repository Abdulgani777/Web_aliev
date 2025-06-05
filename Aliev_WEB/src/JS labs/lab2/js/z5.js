const validateAndConvertBinary = (binaryStr) => {
    const isValid = binaryStr.length === 8 && [...binaryStr].every(char => char === '0' || char === '1');

    if (isValid) {
        console.log(parseInt(binaryStr, 2));
    } else {
        console.log("Неправильное значение");
    }
};

validateAndConvertBinary('11110000'); // 240
validateAndConvertBinary('0000100');  // Неправильное значение