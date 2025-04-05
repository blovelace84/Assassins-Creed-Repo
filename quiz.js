let originalQuizData = [];

// Load quiz data once and store it
document.addEventListener("DOMContentLoaded", () => {
  fetch("quiz-data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load quiz data");
      }
      return response.json();
    })
    .then(data => {
      originalQuizData = data;
      startQuiz();
    })
    .catch(error => {
      console.error("Error loading quiz:", error);
    });
});

function shuffleArray(array) {
  const arr = [...array]; // clone to avoid modifying original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz() {
  const shuffledData = shuffleArray(originalQuizData).slice(0, 3); // Pick 3 random questions
  displayQuiz(shuffledData);
}

function displayQuiz(quizData) {
  if (!Array.isArray(quizData)) {
    console.error("Quiz data is not an array:", quizData);
    return;
  }
  
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");

    const question = document.createElement("h3");
    question.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(question);

    q.options.forEach(option => {
      const label = document.createElement("label");
      label.classList.add("quiz-option");

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${index}`;
      radio.value = option;

      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });

  // Submit answers
  document.getElementById("submitQuiz").onclick = () => {
    let score = 0;

    quizData.forEach((q, i) => {
      const selected = document.querySelector(`input[name="question${i}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      }
    });

    document.getElementById("quizResult").textContent = `You got ${score} out of ${quizData.length} correct.`;
  };

  // Reset quiz
  document.getElementById("resetQuiz").onclick = () => {
    document.getElementById("quizResult").textContent = "";
    startQuiz(); // re-shuffle and re-display
  };
}
