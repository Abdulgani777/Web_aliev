function isLeap(y) {
    const divisibleBy4 = y % 4 === 0;
    const notDivisibleBy100 = y % 100 !== 0;
    const divisibleBy400 = y % 400 === 0;

    const leap = (divisibleBy4 && notDivisibleBy100) || divisibleBy400;

    console.log(leap ? "yes" : "no");
}

isLeap(1984);  // yes
isLeap(2003);  // no
isLeap(4);     // yes
