var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right = "0";
    }

    function hideMenu(){
        navLinks.style.right = "-100%"
    }

  
    document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
    });
