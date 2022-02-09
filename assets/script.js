const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const HOME_SNIPPET = `<h2>Coding Quiz Challenge</h2>
<p>Try to answer the following code-related questions within time limit</p>
<p>Keep in mind that incorrect answer will penalize your score/time by tenseconds</p>
<button class="btn" id="startBtn">Start Quiz</button>`;
const QUESTION_SNIPPET = `<h2>{questionText}</h2><ul id="options" class="flex flex-c full-width">{options}</ul>`;
const HIGHSCORE_SNIPPET = `<h1>High Score</h1>
<ol id="high-scores"><li>AJ - 23</li></ol>
<div class="flex"><button class="btn">Go Back</button><button class="btn">Clear Highscores</button></div>`;
const ALLDONE_SNIPPET = `<h2>All Done!</h2><p>Your final Score is: {score}</p>
<div><span>Enter initals:</span><input type="text" name="initials" id="initials"><button class="btn">Submit</button></div>`;

const wrapper = document.querySelector(".wrapper");

class Quiz {
  constructor(data) {
    this.timer = 50;
    this.questions = data;
    this.gameStatus = "";
    this.score = 0;
    this.count = 0;
  }

  displayHomeScreen = () => {
    console.log("Display home screen runs");
    wrapper.innerHTML = HOME_SNIPPET;
    wrapper
      .querySelector("#startBtn")
      .addEventListener("click", () => this.displayQuestions());
  };
  displayQuestions() {
    const data = this.questions[this.count];
    let html = QUESTION_SNIPPET;
    html = html.replace("{questionText}", data.questionText);
    let optionsHtml = data.options.reduce((optHtml, opt) => {
      optHtml += `<li > ${opt} </li>`;
      return optHtml;
    }, "");
    html = html.replace("{options}", optionsHtml)
    wrapper.innerHTML = html;
  }
}

function main() {
  const app = new Quiz(questions);
  window.addEventListener("load", app.displayHomeScreen);
}
main();
