let currentSlide = 0;

function renderSlide() {
  const slide = slidesData[currentSlide];

  // TÍTULO
  document.getElementById("slideTitle").textContent = slide.title;

  // IMAGEM PRINCIPAL
  // se o slide NÃO tiver image, coloca imagem padrão
  document.getElementById("slideImage").src =
    slide.image ||
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Soil_profile.png";

  // TEXTO
  document.getElementById("slideText").textContent = slide.text.trim();

  // PERGUNTAS
  const questionsBox = document.getElementById("questionsBox");
  questionsBox.innerHTML = "";

  slide.questions.forEach((qObj, i) => {
    const div = document.createElement("div");
    div.className = "questionItem";

    div.innerHTML = `
            <p><strong>Pergunta ${i + 1}:</strong> ${qObj.q}</p>
            <img src="${qObj.img}" alt="Imagem da pergunta">
        `;

    questionsBox.appendChild(div);
  });
}

// BOTÕES
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentSlide < slidesData.length - 1) {
    currentSlide++;
    renderSlide();
  }
});

// INICIAR
renderSlide();
