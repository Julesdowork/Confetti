const form = document.getElementById("signupForm");
const formCard = document.getElementById("formCard");
const successCard = document.getElementById("successCard");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formCard.classList.add("hidden");
  successCard.classList.remove("hidden");

  // fire confetti!
  // middle
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // left
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
  }, 200);

  // right
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 200);
});

resetBtn.addEventListener("click", () => {
  successCard.classList.add("hidden");
  formCard.classList.remove("hidden");
  form.reset();
});
