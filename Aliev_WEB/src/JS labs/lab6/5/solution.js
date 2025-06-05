function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchTerm = document.querySelector('#searchField').value.toLowerCase();
        const tableRows = document.querySelectorAll('table tbody tr');

        tableRows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            let matchFound = false;

            for (let cell of cells) {
                if (cell.textContent.toLowerCase().includes(searchTerm)) {
                    matchFound = true;
                    break;
                }
            }

            row.classList.remove('select');
            if (matchFound) {
                row.classList.add('select');
            }
        });
    }
}
