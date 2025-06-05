function findMinimumValue(...numbers) {
    if (numbers.length === 0) {
        console.log("Не передано ни одного числа");
        return;
    }

    const minValue = Math.min(...numbers);
    console.log(`Минимальное значение: ${minValue}`);
}

findMinimumValue(2, 5, 3);       // Минимальное значение: 2
findMinimumValue(600, 342, 123); // Минимальное значение: 123
findMinimumValue(25, 21, 4);     // Минимальное значение: 4