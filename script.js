// Scroll animat la click pe meniu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Calculator de economie simplu
document.getElementById("calc-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const consum = parseFloat(document.getElementById("consum").value);
  if (isNaN(consum) || consum <= 0) {
    document.getElementById("rezultat").innerText = "Te rugăm să introduci un consum valid.";
    return;
  }
  const economieAnuala = consum * 12 * 0.9; // presupunem 90% din consum acoperit
  document.getElementById("rezultat").innerText =
    `Poți economisi aproximativ ${Math.round(economieAnuala)} lei anual cu un sistem fotovoltaic!`;
});

