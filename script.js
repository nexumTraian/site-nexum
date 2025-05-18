// Scroll animat între secțiuni (pentru single-page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Calculator economie
const form = document.getElementById("calc-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const consum = parseFloat(document.getElementById("consum").value);
    const rezultat = document.getElementById("rezultat");

    if (isNaN(consum) || consum <= 0) {
      rezultat.innerText = "Te rugăm să introduci un consum valid (mai mare de 0).";
      return;
    }

    const acoperire = 0.9;
    const pret = 1.5;
    const economie = consum * 12 * acoperire * pret;

    rezultat.innerHTML = `<p><strong>Estimare economie anuală:</strong> ${Math.round(economie)} lei</p>`;
  });
}
