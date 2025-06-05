function shiftArray(array, shiftCount) {
    shiftCount = shiftCount % array.length;

    const result = array.reduce((acc, _, index) => {
        const newPosition = (index + shiftCount) % array.length;
        acc[newPosition] = array[index];
        return acc;
    }, new Array(array.length));

    console.log(result.join(' '));
}

shiftArray([51, 47, 32, 61, 21], 2);
shiftArray([32, 21, 61, 1], 4);
shiftArray([2, 4, 15, 31], 5);