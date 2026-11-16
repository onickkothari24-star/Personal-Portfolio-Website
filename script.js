const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const lightMode = document.body.classList.contains("light-mode");
  themeButton.textContent = lightMode
    ? "Switch to Dark Mode" : "Switch to Light Mode";
});

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const correctAnswers = {
  q1: "a", q2: "b", q3: "a", q4: "c", q5: "b"
};

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  for (const question in correctAnswers) {
    const selected = quizForm.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }
  quizResult.textContent =
    `Your score: ${score} out of ${totalQuestions}`;
});