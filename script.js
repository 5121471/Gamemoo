const games = {
  happy: [
    {
      name: "Stardew Valley",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtlURqA9c41cX4TbqLfiMfQ-mCWkVwZ_X26v5VgMoMhyBDBoQSucIWrJrWTxWuUulbDUFeg",
      link: "https://www.stardewvalley.net/"
    },
    {
      name: "Overcooked 2",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUpr-GhMj1OcRXGrS3hf-2DyauxGEGwJdZ4ez8xzuUgfJs8d8xFcyYxrz6NcJWidEEzxFEuA",
      link: "https://store.steampowered.com/app/728880/Overcooked_2/"
    }
  ],
  sad: [
    {
      name: "Journey",
      image: "https://s3.amazonaws.com/gameopedia_covers/covers/313161/19b7855570aa47598e67d96db7077583.jpeg",
      link: "https://store.steampowered.com/app/638230/Journey/"
    }
  ],
  angry: [
    {
      name: "DOOM Eternal",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvZcfTRV7HhomN0-2pG-cBZ6VREhe2Yx21RE9YKGoYsv-TWGhrT0ruDwfm_OcL-kvvvA0iYw",
      link: "https://store.steampowered.com/app/782330/DOOM_Eternal/"
    }
  ],
  bored: [
    {
      name: "Minecraft",
      image: "https://i.pcmag.com/imagery/reviews/05OVdVevn5X6gC6uMIOcsLN-1.fit_scale.size_400x225.v1569481779.jpg",
      link: "https://www.minecraft.net/en-us"
    }
  ],
  adventurous: [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "images/zelda.jpg",
      link: "https://www.zelda.com/breath-of-the-wild/"
    }
  ]
};

function showGames(mood) {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";
  games[mood].forEach(game => {
    gameList.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" alt="${game.name}" />
        <p>${game.name}</p>
        <a href="${game.link}" target="_blank" class="download-btn">Download</a>
      </div>
    `;
  });
}
function searchGames() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";

  if (!query) return;

  Object.values(games).flat().forEach(game => {
    if (game.name.toLowerCase().includes(query)) {
      gameList.innerHTML += `
        <div class="game-card">
          <img src="${game.image}" alt="${game.name}" />
          <p>${game.name}</p>
          <a href="${game.link}" target="_blank" class="download-btn">Download</a>
        </div>
      `;
    }
  });
}
