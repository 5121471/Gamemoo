const games = {
  happy: [
    {
      name: "Stardew Valley",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtlURqA9c41cX4TbqLfiMfQ-mCWkVwZ_X26v5VgMoMhyBDBoQSucIWrJrWTxWuUulbDUFeg",
      link: "https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley"
    },
    {
      name: "Overcooked 2",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUpr-GhMj1OcRXGrS3hf-2DyauxGEGwJdZ4ez8xzuUgfJs8d8xFcyYxrz6NcJWidEEzxFEuA",
      link: "https://play.google.com/store/search?q=overcooked%202&c=apps"
    }
  ],
  sad: [
    {
      name: "Journey",
      image: "https://s3.amazonaws.com/gameopedia_covers/covers/313161/19b7855570aa47598e67d96db7077583.jpeg",
      link: "https://play.google.com/store/search?q=journey&c=apps"
    }
  ],
  angry: [
    {
      name: "DOOM Eternal",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvZcfTRV7HhomN0-2pG-cBZ6VREhe2Yx21RE9YKGoYsv-TWGhrT0ruDwfm_OcL-kvvvA0iYw",
      link: "https://play.google.com/store/search?q=doom%20eternal&c=apps"
    }
  ],
  bored: [
    {
      name: "Minecraft",
      image: "https://i.pcmag.com/imagery/reviews/05OVdVevn5X6gC6uMIOcsLN-1.fit_scale.size_400x225.v1569481779.jpg",
      link: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
    }
  ],
  adventurous: [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
      link: "https://play.google.com/store/search?q=zelda&c=apps"
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
