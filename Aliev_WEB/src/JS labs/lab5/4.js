class MovieDatabase {
    constructor() {
        this.movies = [];
    }

    processCommand(command) {
        if (command.startsWith('addMovie')) {
            const name = command.substring(9).trim();
            this.movies.push({ name });
        }
        else if (command.includes(' directedBy ')) {
            this._updateMovieAttribute(command, 'directedBy', 'director');
        }
        else if (command.includes(' onDate ')) {
            this._updateMovieAttribute(command, 'onDate', 'date');
        }
    }

    _updateMovieAttribute(command, separator, attribute) {
        const [name, value] = command.split(separator).map(part => part.trim());
        const movie = this.movies.find(m => m.name === name);
        if (movie) movie[attribute] = value;
    }

    getCompleteMovies() {
        return this.movies.filter(movie => movie.director && movie.date);
    }
}

const input = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

const db = new MovieDatabase();
input.forEach(command => db.processCommand(command));
db.getCompleteMovies().forEach(movie => console.log(JSON.stringify(movie)));