const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});


// Script para atualizar o ano automaticamente
document.getElementById("currentYear").textContent = new Date().getFullYear();

