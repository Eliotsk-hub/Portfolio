document.addEventListener('DOMContentLoaded', function () {
    const toggleMode = document.getElementById('toggle-mode');
    const toggleLangBtn = document.getElementById('toggle-lang');
    const body = document.body;

    // Appliquer le thème sombre si stocké
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark');
        if (toggleMode) toggleMode.checked = true;
    }

    if (toggleMode) {
        toggleMode.addEventListener('change', () => {
            body.classList.toggle('dark');
            localStorage.setItem('dark-mode', body.classList.contains('dark'));
        });
    }
    if (toggleLangBtn) {
    const translations = {
        fr: {
            welcome: "Bienvenue sur mon portfolio",
            intro: "Découvrez mon parcours, mes compétences et mes projets !",
            about: "À propos",
            experience: "Expériences",
            projects: "Projets",
            company: "Entreprise",
            interests: "Intérêts",
            contact: "Contact",
            discover: "Découvrir mes projets",
            see_more: "Voir plus",
            send: "Envoyer",
            about_text: "Actuellement étudiant en BUT Informatique (Bachelor Universitaire de Technologie) spécialisation Réalisation d'Applications à l'IUT de Nice Côte d’Azur, je développe une expertise polyvalente en développement logiciel, gestion de bases de données, qualité logicielle et nouvelles technologies (IoT, Intelligence Artificielle, DevOps). Curieux, méthodique et passionné par l'innovation, je m'intéresse particulièrement à l'optimisation des processus de validation, aux architectures distribuées et à la transformation numérique des entreprises.",
            interests_text1: "Passionné par l’informatique et les nouvelles technologies, j'aime comprendre le fonctionnement interne des systèmes et découvrir sans cesse de nouvelles innovations.",
            interests_text2: "En dehors du numérique, je pratique la natation, le badminton et la musculation, ce qui m'aide à conserver une discipline et un équilibre de vie.",
            interests_text3: "J'aime également voyager, découvrir de nouvelles cultures et sortir de ma zone de confort à travers de nouvelles expériences humaines et professionnelles."
        },
        en: {
            welcome: "Welcome to my portfolio",
            intro: "Discover my journey, skills, and projects!",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            company: "Company",
            interests: "Interests",
            contact: "Contact",
            discover: "Discover my projects",
            see_more: "See more",
            send: "Send",
            about_text: "Currently studying a Bachelor's degree in Computer Science (BUT) specialized in Application Development at the IUT of Nice Côte d'Azur, I am developing versatile expertise in software development, database management, software quality assurance and new technologies (IoT, Artificial Intelligence, DevOps). Curious, methodical and passionate about innovation, I am particularly interested in optimizing validation processes, distributed architectures and the digital transformation of companies.",
            interests_text1: "Passionate about computer science and new technologies, I enjoy understanding how systems work internally and constantly discovering new innovations.",
            interests_text2: "Outside of technology, I practice swimming, badminton and weight training, which helps me maintain discipline and a balanced life.",
            interests_text3: "I also love to travel, discover new cultures and step out of my comfort zone through new human and professional experiences."
        }
    };

    let currentLang = 'fr';

    toggleLangBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = translations[currentLang][key];
        });
        toggleLangBtn.textContent = currentLang === 'fr' ? '🇬🇧' : '🇫🇷';
    });
}

    // Graphe radar des compétences
    const ctx = document.getElementById('skillsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'Java', 'HTML', 'SQL', 'Selenium', 'JUnit', 'Git', 'Agile', 'DevOps'],
                datasets: [{
                    label: 'Compétences',
                    data: [90, 85, 80, 75, 70, 80, 85, 75, 70],
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        ticks: { stepSize: 10 }
                    }
                }
            }
        });
    }
});

 // Scroll progress bar
 window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + "%";
});

// Animation d'apparition des sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


  let typedInstance = null;
  let nameState = "full";

  function startTyped(text) {
    const typedEl = document.getElementById("typed-name");
    if (typedInstance) typedInstance.destroy();

    typedInstance = new Typed("#typed-name", {
      strings: [text],
      typeSpeed: 50,
      backSpeed: 25,
      showCursor: false,
    });
  }

  // Tape "Eliot Skinner" dès que la page est chargée
  document.addEventListener("DOMContentLoaded", () => {
    startTyped("Eliot Skinner");
  });

  // Morph en E.S au scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 100 && nameState !== "initials") {
      startTyped("E.S");
      nameState = "initials";
    } else if (scrollY <= 100 && nameState !== "full") {
      startTyped("Eliot Skinner");
      nameState = "full";
    }
  });






