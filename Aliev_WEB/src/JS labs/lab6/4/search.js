function search() {
    const search = document.getElementById('searchText').value.toLowerCase();
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;
    towns.forEach(town => {
        if (town.textContent.toLowerCase().includes(search) && search !== '') {
           town.style.textDecoration = 'underline';
           town.style.fontWeight = 'bold';
            matches++;
        } else {
            town.style.textDecoration = 'none';
           town.style.fontWeight = 'normal';
        }
    });
    document.getElementById('result').textContent = `${matches} matches found`;
}
