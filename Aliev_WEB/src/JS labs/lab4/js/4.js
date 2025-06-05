function showProgress(percent) {
    const isValid = percent >= 0 && percent <= 100 && percent % 10 === 0;
    if (!isValid) {
        console.log("Введите значение от 0 до 100, кратное 10");
        return;
    }

    const progressBar = `[${'%'.repeat(percent / 10)}${'.'.repeat(10 - percent / 10)}]`;

    if (percent === 100) {
        console.log(`${percent}% Complete!\n${progressBar}`);
    } else {
        console.log(`${percent}% ${progressBar}\nStill loading...`);
    }
}

showProgress(30);
showProgress(50);
showProgress(100);