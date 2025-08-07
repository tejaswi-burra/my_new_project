const moodSelect = document.getElementById('moodSelect');
const quoteDiv = document.getElementById('quote');
const playerDiv = document.getElementById('player');

const moods = {
  happy: {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    playlist: "https://www.youtube.com/embed/5qap5aO4i9A", // Lofi girl
    bgColor: "#fffacd"
  },
  sad: {
    quote: "Tough times never last, but tough people do.",
    playlist: "https://www.youtube.com/embed/KWZGAExj-es", // Sad songs
    bgColor: "#d3d3d3"
  },
  relaxed: {
    quote: "Relax, refresh, recharge.",
    playlist: "https://www.youtube.com/embed/MkNeIUgNPQ8", // Calm music
    bgColor: "#e0ffff"
  },
  angry: {
    quote: "For every minute you remain angry, you give up sixty seconds of peace.",
    playlist: "https://www.youtube.com/embed/1q6JnjkLZcU", // Metal/Rock
    bgColor: "#f08080"
  }
};

moodSelect.addEventListener('change', () => {
  const mood = moodSelect.value;
  if (moods[mood]) {
    document.body.style.backgroundColor = moods[mood].bgColor;
    quoteDiv.textContent = moods[mood].quote;
    playerDiv.innerHTML = `<iframe src="${moods[mood].playlist}" allowfullscreen></iframe>`;
  } else {
    quoteDiv.textContent = "";
    playerDiv.innerHTML = "";
    document.body.style.backgroundColor = "#f0f8ff";
  }
});
