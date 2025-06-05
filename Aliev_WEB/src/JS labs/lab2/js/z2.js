function combineChars(char1, char2, char3) {
    const result = [char1, char2, char3].join('');
    console.log(result);
}

combineChars("a", "b", "c");     // abc
combineChars("%", "2", "o");     // %2o
combineChars("1", "5", "p");     // 15p