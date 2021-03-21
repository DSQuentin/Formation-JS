class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

const questions = [
  new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", ['indexOf()', 'map()', 'filter()', 'reduce()'], 'filter()'),
  new Question('Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau', ['isNaN()', 'includes()', 'findIndex()', 'isOdd()'], 'includes()'),
  new Question('Quelle méthode transforme du JSON en un objet Javascript ?', ['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.toJS'], 'JSON.parse()'),
  new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", ['Math.ceil()', 'Math.floor()', 'Math.round()', 'Math.random()'], 'Math.round()'),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score += 1;
    }
    this.currentQuestionIndex += 1;
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// CREATE QUIZ
const quiz = new Quiz(questions);

// REGROUP ALL FUNCTIONS RELATIVE TO THE APP DISPLAY
const display = {
  elementShown(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz() {
    endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown('quiz', endQuizHTML);
  },
  question() {
    this.elementShown('question', quiz.getCurrentQuestion().text);
  },
  choices() {
    const { choices } = quiz.getCurrentQuestion();
    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    for (let i = 0; i < choices.length; i += 1) {
      this.elementShown(`choice${i}`, choices[i]);
      guessHandler(`guess${i}`, choices[i]);
    }
  },
  progress() {
    const currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown('progress', `Question ${currentQuestionNumber} sur ${quiz.questions.length}`);
  },
};

// GAME LOGIC
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    // LOGIC
    display.question();
    display.choices();
    display.progress();
  }
};

quizApp();
