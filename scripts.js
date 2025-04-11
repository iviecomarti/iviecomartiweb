// CookieConsent
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#2e3a59",
        text: "#ffffff"
      },
      button: {
        background: "#00bfff",
        text: "#ffffff"
      }
    },
    theme: "classic",
    position: "bottom-right",
    content: {
      message: "Este sitio web utiliza cookies para asegurarte la mejor experiencia.",
      dismiss: "Entendido",
      link: "Política de privacidad",
      href: "privacy.html"
    }
  });
});

// Language Switcher
let currentLang = 'en';

function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  document.getElementById('lang-en').classList.toggle('underline', lang === 'en');
  document.getElementById('lang-en').classList.toggle('font-semibold', lang === 'en');
  document.getElementById('lang-es').classList.toggle('underline', lang === 'es');
  document.getElementById('lang-es').classList.toggle('font-semibold', lang === 'es');
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  document.getElementById('lang-es').addEventListener('click', () => updateLanguage('es'));
});
