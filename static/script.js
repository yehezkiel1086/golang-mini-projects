// Fetch and display albums
const fetchAlbums = async () => {
  const response = await fetch("/albums");
  const albums = await response.json();

  const albumsList = document.getElementById("albums");
  albumsList.innerHTML = ""; // Clear the list

  albums.forEach((album) => {
    const li = document.createElement("li");
    li.textContent = `${album.title} by ${
      album.artist
    } - $${album.price.toFixed(2)}`;
    albumsList.appendChild(li);
  });
};

// Add a new album
document
  .getElementById("album-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const price = parseFloat(document.getElementById("price").value);

    const newAlbum = { title, artist, price };

    await fetch("/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAlbum),
    });

    fetchAlbums();
    event.target.reset(); // Clear the form
  });

// Initialize
fetchAlbums();
