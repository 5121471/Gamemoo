const games = {
  happy: [
    {
      name: "Stardew Valley",
      image: "images/stardew.jpg",
      link: "https://www.stardewvalley.net/"
    },
    {
      name: "Overcooked 2",
      image: "images/overcooked2.jpg",
      link: "https://store.steampowered.com/app/728880/Overcooked_2/"
    }
  ],
  sad: [
    {
      name: "Journey",
      image: "images/journey.jpg",
      link: "https://store.steampowered.com/app/638230/Journey/"
    }
  ],
  angry: [
    {
      name: "DOOM Eternal",
      image: "images/doometernal.jpg",
      link: "https://store.steampowered.com/app/782330/DOOM_Eternal/"
    }
  ],
  bored: [
    {
      name: "Minecraft",
      image: "images/minecraft.jpg",
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
