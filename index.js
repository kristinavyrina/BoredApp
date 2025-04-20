const titleNode = document.querySelector('.js-title');
const activityNode = document.querySelector('.js-activity');
const btnNode = document.querySelector('.js-button');
const bodyNode = document.querySelector('body');



btnNode.addEventListener('click', function() {
  updateEmoji();
  getActivity();
  updateBackground();
  updateTitle()
});


//запрос на сервер
function getActivity() { 
  
  fetch("https://apis.scrimba.com/bored/api/activity")  
  .then(response => response.json())

    .then((data) => {
      console.log(data);
      activityNode.innerText = data.activity;
    })
}

function updateTitle() {
    titleNode.innerText = `Hooray, now it's not boring 🔥`;
}

function updateBackground() {
    bodyNode.classList.add('body_modified') 
}


// Массив с Unicode-кодами позитивных эмодзи
const positiveEmojis = [
0x1F600, 0x1F601, 0x1F602, 0x1F603, 0x1F604,
0x1F605, 0x1F609, 0x1F60A, 0x1F60B,
0x1F60C, 0x1F60D, 0x1F60E, 0x1F618,
0x1F638, 0x1F63B, 0x1F44D, 0x1F44F, 0x1F495, 0x1F496, 0x1F497,
0x1F9E1, 0x1F4A1, 0x1F917,
0x1F389, 0x1F38A, 0x1F3B5, 0x1F3B6, 0x1F3A7,
0x1F3C6
];

// Функция для получения случайного эмодзи
function getRandomEmoji() {
  const index = Math.floor(Math.random() * positiveEmojis.length);
  return String.fromCodePoint(positiveEmojis[index]);

}

function updateEmoji() {
  const emojiDisplay = document.querySelector('.js-emojiDisplay');
  emojiDisplay.textContent = getRandomEmoji(); 
}

