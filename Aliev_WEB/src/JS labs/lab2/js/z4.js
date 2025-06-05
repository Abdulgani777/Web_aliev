const compute = (x, action, y) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b === 0 ? 'Ошибка, деление на ноль' : a / b
    };

    const handler = operations[action] || (() => 'Неверный оператор');
    const output = handler(x, y);

    if (typeof output === 'number') {
        console.log(output.toFixed(2));
    } else {
        console.log(output);
    }
};

compute(5, "+", 10);      // 15.00
compute(25.5, "-", 3);    // 22.50
compute(10, "/", 0);      // Ошибка