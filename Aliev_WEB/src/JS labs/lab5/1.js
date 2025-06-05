const employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

const generateEmployeeRecords = (names) =>
    names.map(fullName => ({
        fullName,
        id: fullName.replace(/\s/g, '').length 
    }));

generateEmployeeRecords(employees).forEach(({ fullName, id }) => {
    console.log(`Name: ${fullName} -- Personal ID: ${id}`);
});