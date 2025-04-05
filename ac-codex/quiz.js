document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
      {
        question: "Who trained Ezio?",
        options: ["Leonardo da Vinci", "Mario Auditore", "Altaïr"],
        correct: "Mario Auditore"
      },
      {
        question: "Which assassin came from Egypt?",
        options: ["Bayek", "Connor", "Edward"],
        correct: "Bayek"
      },
      {
        question: "What is the motto of the Assassins?",
        options: ["Requiescat in pace", "Nothing is true, everything is permitted", "We work in the dark to serve the light"],
        correct: "Nothing is true, everything is permitted"
      },
      {
        question: "What is the name of the first assassin?",
        options: ["Ezio", "Bayek", "Altair"],
        correct: "Altair",
    },
    {
        question: "What city was Alexios born in?",
        options: ["Athens", "Sparta", "Rome"],
        correct: "Sparta",
    },
    {
        question: "Who adopted Arno and raised him?",
        options: ["Napoleon", "Pierre Bellec", "François de la Serre"],
        correct: "François de la Serre",
    },
    {
        question: "Who is Shao's Mentor (current and former)?",
        options: ["Ezio Auditore", "Alexios", "François de la Serre"],
        correct: "Ezio Auditore",
    }
    ];
  
    const quizContainer = document.getElementById("quizContainer");
  
    quizData.forEach((q, index) => {
      const qDiv = document.createElement("div");
      qDiv.classList.add("quiz-question");
  
      const question = document.createElement("h3");
      question.textContent = `${index + 1}. ${q.question}`;
      qDiv.appendChild(question);
  
      // Check if options exist and are an array
      if (Array.isArray(q.options)) {
        q.options.forEach(option => {
          const label = document.createElement("label");
          label.innerHTML = `
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          `;
          qDiv.appendChild(label);
          qDiv.appendChild(document.createElement("br")); // spacing
        });
      } else {
        const warning = document.createElement("p");
        warning.textContent = "⚠️ No options provided for this question.";
        qDiv.appendChild(warning);
      }
  
      quizContainer.appendChild(qDiv);
    });
  
    // Handle quiz submission
    document.getElementById("submitQuiz").addEventListener("click", () => {
      let score = 0;
  
      quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.correct) {
          score++;
        }
      });
  
      document.getElementById("quizResult").textContent = `You got ${score}/${quizData.length} correct!`;
    });
  });
  