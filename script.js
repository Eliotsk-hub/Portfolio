document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        window.scrollTo({
            top: document.querySelector('#portfolio').offsetTop,
            behavior: 'smooth'
        });
    });

    // Initialisation du graphique de compétences
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'Java', 'HTML', 'SQL', 'Selenium', 'JUnit', 'Git', 'Agile', 'DevOps'],
            datasets: [{
                label: 'Compétences',
                data: [90, 80, 85, 75, 70, 80, 85, 75, 70],
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
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });

    // Animation des drapeaux de langue
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        const percentage = flag.dataset.percentage;
        flag.style.filter = `grayscale(${100 - percentage}%)`;
        if (percentage == 100) {
            flag.classList.add('animated-flag');
        }
    });

    // Animation des sections lors du défilement
    const slides = document.querySelectorAll('.slide');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, options);

    slides.forEach(slide => {
        observer.observe(slide);
    });
});

// CSS pour l'animation du drapeau
const style = document.createElement('style');
style.innerHTML = `
    @keyframes wavingFlag {
        0% { transform: rotate(0); }
        50% { transform: rotate(10deg); }
        100% { transform: rotate(0); }
    }

    .animated-flag {
        animation: wavingFlag 2s infinite;
    }
`;
document.head.appendChild(style);
