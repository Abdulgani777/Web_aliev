function preciseRound(value, decimalPlaces) {
    const maxDecimals = Math.min(decimalPlaces, 15); 

    const multiplier = 10 ** maxDecimals;
    const roundedValue = Math.round(value * multiplier) / multiplier;

    
    const trimmedResult = roundedValue.toFixed(maxDecimals).replace(/\.?0+$/, '');

    console.log(trimmedResult.includes('.') ? trimmedResult : parseFloat(trimmedResult));
}

// Тестовые вызовы
preciseRound(3.1415926535897932384626433832795, 2); // 3.14
preciseRound(10.5, 3); // 10.5
preciseRound(2.789123456789, 10); // 2.7891234568
preciseRound(5.1234567890123456, 20); // 5.123456789012346 (ограничено 15 знаками)