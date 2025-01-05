// // Code for fetching details..........
// async function fetchTracks(clientId, searchTerm) {
//     const response = await fetch(`https://api.jamendo.com/v3.0/tracks?client_id=${clientId}&format=json&limit=10&search=${encodeURIComponent(searchTerm)}`);
//     const data = await response.json();
//     return data.results; // Returns an array of tracks
// }

// (async () => {
//     const clientId = '2dbd26d8'; 
//     const searchTerm = 'badshah'; 

//     const tracks = await fetchTracks(clientId, searchTerm);
//     console.log(tracks)
//     // tracks.forEach((track, index) => {
//     //     console.log(`${index + 1}. ${track.name} by ${track.artist_name}`);
//     //     console.log(`Play URL: ${track.audio}`);
//     // });
// })();

// const fetchSongDetails = async (artist, track) => {
//     const apiKey = "b56c78384b44d5af2cb6b85d8af13d0d"; // Replace with your API key
//     const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&format=json`;
  
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log("Track Details:", data);
//       console.log(`Track: ${data.track.name}, Artist: ${data.track.artist.name}`);
//     } catch (error) {
//       console.error("Error fetching track info:", error);
//     }
//   };
  
//   fetchSongDetails("Coldplay", "Yellow");
  

// const apiKey = "2dbd26d8"; // Replace with your Jamendo API key
// const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${apiKey}&format=json&limit=1`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const track = data.results[0];
//     console.log("Track Title:", track.name);
//     console.log("Artist:", track.artist_name);
//     console.log("Audio URL:", track.audio); 
//     // const audio = new Audio(track.audio);
//     // audio.play();
//   })
//   .catch(error => console.error("Error:", error));

