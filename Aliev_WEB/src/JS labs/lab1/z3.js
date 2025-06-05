function analyzeDivisibility(value) {
    switch (true) {
        case value % 10 === 0:
            console.log("Делится на 10 без остатка");
            break;
        case value % 6 === 0:
            console.log("Кратно 6");
            break;
        case value % 3 === 0:
            console.log("Число кратно 3");
            break;
        case value % 7 === 0:
            console.log("Можно разделить на 7");
            break;
        case value % 2 === 0:
            console.log("Четное число (делится на 2)");
            break;
        default:
            console.log("Не кратно указанным числам");
    }
}

analyzeDivisibility(30);    // Делится на 10 без остатка
analyzeDivisibility(15);    // Число кратно 3
analyzeDivisibility(12);    // Кратно 6
analyzeDivisibility(1643);  // Не кратно указанным числам
