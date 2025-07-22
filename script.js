const games = {
  happy: [
    {
      name: "Candy Crush Saga",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
    },
    {
      name: "Subway Surfers",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"
    }
  ],
  sad: [
    {
      name: "Monument Valley",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley"
    }
  ],
  angry: [
    {
      name: "Angry Birds 2",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.rovio.baba"
    }
  ],
  bored: [
    {
      name: "Ludo King",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.ludo.king"
    }
  ],
  adventurous: [
    {
      name: "PUBG MOBILE",
      image: "https://play-lh.googleusercontent.com/8QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.tencent.ig"
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
