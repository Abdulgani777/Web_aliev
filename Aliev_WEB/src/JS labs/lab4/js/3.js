function generateNumberSquare(size) {
    const row = `${size} `.repeat(size).trim();
    Array.from({ length: size }, () => console.log(row));
}

generateNumberSquare(3);
generateNumberSquare(7);
generateNumberSquare(2);