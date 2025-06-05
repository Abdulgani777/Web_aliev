function calculateTripCost(size, type, day) {
    const rates = {
        Студенты: {
            Пятница: 8.45,
            Суббота: 9.80,
            Воскресенье: 10.46
        },
        Корпоративная: {
            Пятница: 10.90,
            Суббота: 15.60,
            Воскресенье: 16.00
        },
        Обычная: {
            Пятница: 15.00,
            Суббота: 20.00,
            Воскресенье: 22.50
        }
    };

    if (!rates[type]) return "Тип группы указан неверно";
    if (!rates[type][day]) return "Указан некорректный день";

    let costPerPerson = rates[type][day];
    let total = size * costPerPerson;

    // Применение скидок
    total = applyDiscounts(type, size, costPerPerson, total);

    return `Итоговая стоимость: ${total.toFixed(2)}`;
}

function applyDiscounts(type, size, rate, totalSum) {
    if (type === "Студенты" && size >= 30) {
        return totalSum * 0.85;
    }
    if (type === "Корпоративная" && size >= 100) {
        return totalSum - (10 * rate);
    }
    if (type === "Обычная" && size >= 10 && size <= 20) {
        return totalSum * 0.95;
    }
    return totalSum;
}

// Примеры вызова
console.log(calculateTripCost(30, "Студенты", "Воскресенье"));    // Студенты со скидкой
console.log(calculateTripCost(40, "Обычная", "Суббота"));         // Без скидки
