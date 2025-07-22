const games = {
  happy: [
    {
      name: "Stardew Valley",
      image: "images/stardew.jpg",
      link: "https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley"
    },
    {
      name: "Overcooked 2",
      image: "images/overcooked2.jpg",
      link: "https://play.google.com/store/search?q=overcooked%202&c=apps"
    }
  ],
  sad: [
    {
      name: "Journey",
      image: "images/journey.jpg",
      link: "https://play.google.com/store/search?q=journey&c=apps"
    }
  ],
  angry: [
    {
      name: "DOOM Eternal",
      image: "images/doometernal.jpg",
      link: "https://play.google.com/store/search?q=doom%20eternal&c=apps"
    }
  ],
  bored: [
    {
      name: "Minecraft",
      image: "images/minecraft.jpg",
      link: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"
    }
  ],
  adventurous: [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "images/zelda.jpg",
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
