function checkEqualSums(matrix1, matrix2, matrix3) {
    const sumArray = (arr) => arr.map(Number).reduce((a, b) => a + b, 0);

    const sum1 = sumArray(matrix1);
    const sum2 = sumArray(matrix2);
    const sum3 = sumArray(matrix3);

    const areEqual = sum1 === sum2 && sum2 === sum3;

    console.log(areEqual);
}

checkEqualSums([4, 5, 6], [6, 5, 4], [5, 5, 5]); // true
checkEqualSums([11, 32, 45], [21, 0, 1], [21, 1, 1]); // false
checkEqualSums([1, 0, 0], [0, 0, 1], [0, 1, 0]); // true