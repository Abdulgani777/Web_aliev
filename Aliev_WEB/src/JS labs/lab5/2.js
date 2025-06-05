function parseLocationData(entries) {
    return entries.map(entry => {
        const [city, lat, long] = entry.split('|').map(item => item.trim());

        return {
            city,
            latitude: Number(lat).toFixed(2),
            longitude: Number(long).toFixed(2)
        };
    });
}

const locationData = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];

parseLocationData(locationData).forEach(location =>
    console.log(location)
);