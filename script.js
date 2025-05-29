const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: 0
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      answer: 1
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: 1
    },
    {
      question: "What does HTTP stand for?",
      options: ["Hyper Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Page", "None of the above"],
      answer: 0
    },
    {
      question: "What is the default port of HTTP?",
      options: ["80", "443", "22", "21"],
      answer: 0
    },
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
      answer: 1
    },
    {
      question: "Which of the following is not a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: 1
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: 2
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "/* */", "**"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerBtns = document.querySelectorAll(".answer-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    answerBtns.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.style.backgroundColor = ""; // reset button color
      btn.disabled = false;
    });
  }
  
  answerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.dataset.index);
      const correct = quizData[currentQuestion].answer;
  
      if (selected === correct) {
        btn.style.backgroundColor = "lightgreen";
        score++;
      } else {
        btn.style.backgroundColor = "salmon";
        // Highlight correct answer
        answerBtns[correct].style.backgroundColor = "lightgreen";
      }
  
      // Disable all buttons after selection
      answerBtns.forEach(b => b.disabled = true);
    });
  });
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed 🎉</h2>
      <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
  
  // Load the first question initially
  loadQuestion();
  