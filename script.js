async function main() {
    let songLink = "";
    let apiUrl = `https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy`;

    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
}
main();
