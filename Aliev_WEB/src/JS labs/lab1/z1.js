function determineAgeGroup(years) {
    const ageGroups = [
        { min: 0, max: 2, label: "младенец" },
        { min: 3, max: 13, label: "ребенок" },
        { min: 14, max: 19, label: "подросток" },
        { min: 20, max: 65, label: "взрослый" },
        { min: 66, max: Infinity, label: "пожилой" }
    ];

    if (years < 0) {
        console.log("нет");
        return;
    }

    const foundGroup = ageGroups.find(group => years >= group.min && years <= group.max);
    console.log(foundGroup ? foundGroup.label : "нет");
}

// Проверка работы функции
determineAgeGroup(-5);   // "нет"
determineAgeGroup(1);    // "младенец"
determineAgeGroup(15);   // "подросток"
determineAgeGroup(70);   // "пожилой"