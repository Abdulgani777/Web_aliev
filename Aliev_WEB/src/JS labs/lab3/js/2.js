function findCommonElements(firstArray, secondArray) {
    const commonItems = firstArray.filter(element =>
        secondArray.some(item => String(item) === String(element))
            .map(String);

    console.log(commonItems.join('\n'));
}

findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 'hey', 10, 4, 'hello', '2']);
findCommonElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);