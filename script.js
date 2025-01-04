// Code for fetching details..........
async function fetchTracks(clientId, searchTerm) {
    const response = await fetch(`https://api.jamendo.com/v3.0/tracks?client_id=${clientId}&format=json&limit=10&search=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    return data.results; // Returns an array of tracks
}

(async () => {
    const clientId = '2dbd26d8'; 
    const searchTerm = 'badshah'; 

    const tracks = await fetchTracks(clientId, searchTerm);
    console.log(tracks)
    // tracks.forEach((track, index) => {
    //     console.log(`${index + 1}. ${track.name} by ${track.artist_name}`);
    //     console.log(`Play URL: ${track.audio}`);
    // });
})();
