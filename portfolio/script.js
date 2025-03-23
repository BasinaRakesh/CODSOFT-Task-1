document.addEventListener("DOMContentLoaded", function () {
  const mainCertificates = [
    "img11.png",
    "img3.png",
    "img8.png",
    "img10.png",
    "img12.png",
  ];

  const allCertificates = [
    ...mainCertificates,
    "img6.png",
    "img7.png",
    "img9.png",
    "img5.png",
    "img4.png"
  ];

  let showingAllCerts = false;

  function renderCertificates() {
    const certGrid = document.getElementById("certGrid");
    if (!certGrid) return;
    const certs = showingAllCerts ? allCertificates : mainCertificates;
    certGrid.innerHTML = certs
      .map(cert => `
        <div class="cert-card">
          <img src="${cert}" alt="Certificate">
        </div>
      `)
      .join("");
  }

  const viewMoreBtn = document.getElementById("viewMoreCerts");
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", function () {
      showingAllCerts = !showingAllCerts;
      this.textContent = showingAllCerts ? "Show Less" : "View All Certificates";
      renderCertificates();
    });
  }

  renderCertificates();

  // Smooth hover effect for contact cards
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach(card => {
    card.style.transition = "transform 0.3s ease";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});

// Hamburger menu toggle function
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}
