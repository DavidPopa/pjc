"use strict";
const text = document.getElementsByClassName("text")[0];

const speeds = {
  pause: 500,
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10,
};

const into = [
  { speed: speeds.slow, string: "Embark on a jumping adventure in Jump King!" },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      " Reach new heights, conquer obstacles, and become the ultimate champion.",
  },
  { speed: speeds.fast, string: "Can you jump your way to victory?" },
];
const movements = [
  {
    speed: speeds.slow,
    string: "Master the art of movement in Jump King with precise controls! ",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Use the W, A, S, and D keys to navigate the treacherous platforms. Jump with W, move left with A, right with D, and crouch down with S.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Remember, every move counts, so use your skills wisely to overcome the challenges that await you",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string: "Get ready to leap, dodge, and conquer your way to greatness!",
  },
];
const gameWorks = [
  {
    speed: speeds.slow,
    string:
      "In Jump King, your goal is to ascend the Tower of Trials and reach the Smoking Hot Babe at the top.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "To do this, you must carefully time your jumps and navigate a series of platforms and obstacles.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "With each jump, you'll need to gauge the distance and height to land on the next platform.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Be cautious, as falling means starting from the bottom again! It's a test of precision, patience, and perseverance.",
  },
];
const attack = [
  {
    speed: speeds.slow,
    string:
      "To eliminate enemies in Jump King, you'll need to utilize your trusty space bar.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "When facing an enemy, position yourself within striking distance and press the space bar with perfect timing.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Your character will execute a powerful sword attack, capable of defeating the adversaries that stand in your way.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Be sure to time your strikes accurately to vanquish your foes and continue your ascent to victory!",
  },
];
const final = [
  {
    speed: speeds.slow,
    string: "Farewell, brave adventurer of Jump King! ",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "May your jumps always be true, your landings precise, and your victories plentiful.",
  },
  { speed: speeds.pause, string: "", pause: true },
  {
    speed: speeds.fast,
    string:
      "Keep soaring to new heights and embracing the thrill of the game. Until we meet again, may your journey be filled with joy and triumph! Goodbye, and happy jumping!",
  },
];


let characters = [];
function words(words) {
  words.forEach((line, index) => {
    if (index < words.length - 1) {
      line.string += " ";
    }
    line.string.split("").forEach((character) => {
      let span = document.createElement("span");
      span.textContent = character;
      text.appendChild(span);
      characters.push({
        span: span,
        isSpace: character === " " && !line.pause,
        delayAfter: line.speed,
        classes: line.classes || [],
      });
    });
  });
}
// words(into);
words(movements);
// words(gameWorks);
// words(attack);
// words(final);

function revealOneCharacter(list) {
  let next = list.splice(0, 1)[0];
  next.span.classList.add("revealed");
  next.classes.forEach((c) => {
    next.span.classList.add(c);
  });
  let delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

  if (list.length > 0) {
    setTimeout(function () {
      revealOneCharacter(list);
    }, delay);
  }
}

setTimeout(() => {
  revealOneCharacter(characters);
}, 900);
