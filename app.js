/* =====================================================================
   PORTFOLIO JAVASCRIPT - OPTIMISÉ & MODULAIRE (8 PROJETS)
   ==================================================================== */

// --- PROJECT DATA (1 à 8) ---
const projectsData = {
  "1": {
    title: "Plateforme de Réservation — Géomancie Astrale",
    category: "Application Web",
    metric: "Vercel Deployment",
    image: "images/geomancie.jpg",
    desc1: "Application web interactive de consultation et de réservation en ligne, conçue et déployée pour une expérience utilisateur fluide et intuitive.",
    desc2: "Mise en place d'une interface responsive et optimisée pour garantir des temps de chargement rapides et une accessibilité multiplateforme.",
    skills: ["HTML/CSS/JS", "Vercel", "UI/UX", "Intégration Web"],
    deliverables: ["Application web fonctionnelle", "Code source hébergé", "Responsive design"]
  },
  "2": {
    title: "Landing Page — Méditation sur la vie",
    category: "Landing Page / Code Web",
    metric: "GitHub Pages",
    image: "images/meditation.jpg",
    desc1: "Landing page immersive dédiée au langage et à la méditation de l'homme, intégrant un design épuré, soigné et responsive.",
    desc2: "Structure HTML/CSS propre optimisée pour le référencement naturel et un parcours utilisateur captivant.",
    skills: ["HTML5", "CSS3", "GitHub Pages", "Responsive Design"],
    deliverables: ["Landing page en ligne", "Design épuré", "Optimisation mobile"]
  },
  "3": {
    title: "Campagne Instagram 12 Carousels — Vocal Coach Factory",
    category: "Social Media & Multimédia",
    metric: "HTML/CSS/JS",
    image: "assets/slide1.jpg",
    desc1: "Création d'une série de 12 carrousels HTML/CSS pour la promotion de la méthodologie ISPO avec une identité visuelle cohérente et percutante.",
    desc2: "Design orienté conversion et engagement social pour maximiser l'interaction de la communauté sur Instagram.",
    skills: ["Social Media", "Design Carrousel", "HTML/CSS", "Identité Visuelle"],
    deliverables: ["Série de 12 visuels/slides", "Charte graphique", "Stratégie d'engagement"]
  },
  "4": {
    title: "Production SEO Affiliate — Casinos Canada",
    category: "Content SEO & Affiliate",
    metric: "+50 articles",
    image: "images/casinos.jpg",
    desc1: "Rédaction et optimisation de plus de 50 articles long-format en français ciblant le marché québécois des jeux en ligne.",
    desc2: "Recherche approfondie de mots-clés transactionnels, optimisation sémantique rigoureuse et intégration respectant les meilleurs standards SEO.",
    skills: ["Rédaction SEO", "Affiliation", "Stratégie Sémantique", "Audit de mots-clés"],
    deliverables: ["50+ articles optimisés", "Dossier Google Drive structuré", "Stratégie de mots-clés"]
  },
  "5": {
    title: "Lancement de Plateforme & Architecture SEO — LEXAFRIQUE",
    category: "SEO & Gestion de projet",
    metric: "Indexation Rapide",
    image: "images/lexafrique.jpg",
    desc1: "Participation active à la mise en place du site internet et au lancement officiel de la structure Lexafrique avec une architecture optimisée.",
    desc2: "Création et structuration d'une base de données ciblée de clients et partenaires, et alignement complet de la ligne éditoriale.",
    skills: ["Architecture SEO", "Gestion de Projet", "Rédaction Institutionnelle", "Base de données"],
    deliverables: ["Structure sémantique du site", "Contenus institutionnels", "Base de données structurée"]
  },
  "6": {
    title: "Déploiement de la Communication Digitale — ROYAL ASSIST AFRICA",
    category: "Content Management",
    metric: "Visibilité B2B Accrue",
    image: "images/royalassist.jpg",
    desc1: "Élaboration et mise en œuvre globale des stratégies de communication pour valoriser l'image de marque et asseoir l'autorité B2B.",
    desc2: "Création, diffusion et suivi de supports de communication multicanaux cohérents et gestion des relations partenaires.",
    skills: ["Stratégie Éditoriale", "Content Management", "Relations Partenaires", "B2B"],
    deliverables: ["Supports multicanaux", "Charte éditoriale B2B", "Plan de communication"]
  },
  "7": {
    title: "Création de Formations & Dynamisation Sociale — LES MONDES DE L'INVISIBLE",
    category: "Rédaction & Multimédia",
    metric: "Forte Rétention & Engagement",
    image: "images/mondesinvisible.jpg",
    desc1: "Rédaction approfondie de formations et animation stratégique des réseaux sociaux (Instagram et Facebook) pour créer une communauté engagée.",
    desc2: "Conception de visuels percutants et montage vidéo calibré pour maximiser l'interactivité et la mémorisation des contenus.",
    skills: ["Rédaction Pédagogique", "Animation Social Media", "Montage Vidéo", "Création Visuelle"],
    deliverables: ["Supports pédagogiques", "Calendrier éditorial", "Vidéos & Visuels"]
  },
  "8": {
    title: "Campagne de Référencement Naturel — DJABOO",
    category: "Expertise SEO",
    metric: "Trafic Organique Durable",
    image: "images/djaboo.jpg",
    desc1: "Optimisation sémantique et campagnes de mots-clés ciblées pour la plateforme Djaboo afin de maximiser le trafic organique durable.",
    desc2: "Rédaction d'articles optimisés à forte valeur ajoutée, amélioration technique de la structure du site et maillage interne intelligent.",
    skills: ["Optimisation Sémantique", "Recherche de Mots-clés", "Maillage Interne", "Veille Algorithmique"],
    deliverables: ["Articles de blog SEO", "Audit de mots-clés", "Rapport de maillage"]
  }
};

// --- MAIN INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
  initSkillsAnimation();
  initContactForm();
  initScrollReveal();
});

// --- MODULE 1: NAVIGATION ---
function initNavigation() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${activeId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

// --- MODULE 2: PROJECTS MODAL ---
function initProjects() {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  const modalImg = document.getElementById("modal-img");
  const modalCategory = document.getElementById("modal-category");
  const modalMetric = document.getElementById("modal-metric-badge");
  const modalTitle = document.getElementById("modal-title-text");
  const modalDescP1 = document.getElementById("modal-desc-p1");
  const modalDescP2 = document.getElementById("modal-desc-p2");
  const modalSkillsTags = document.getElementById("modal-skills-tags");
  const modalDeliverablesTags = document.getElementById("modal-deliverables-tags");

  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalMetric.textContent = data.metric;
    modalTitle.textContent = data.title;
    modalDescP1.textContent = data.desc1;
    modalDescP2.textContent = data.desc2;

    modalSkillsTags.innerHTML = "";
    data.skills.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = skill;
      modalSkillsTags.appendChild(tag);
    });

    modalDeliverablesTags.innerHTML = "";
    data.deliverables.forEach(item => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = item;
      modalDeliverablesTags.appendChild(tag);
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  projectCards.forEach(card => {
    card.addEventListener("click", (e) => {
        if (e.target.closest('.project-link')) {
            return;
        }
        const projectId = card.getAttribute("data-project");
        openModal(projectId);
    });
});

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
}

// --- MODULE 3: SKILLS ANIMATION ---
function initSkillsAnimation() {
  const skillsSection = document.getElementById("a-propos");
  const skillsCards = document.querySelectorAll(".skill-card");

  if (!skillsSection || skillsCards.length === 0) return;

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillsCards.forEach((card, index) => {
          const delay = index * 100;
          setTimeout(() => {
            card.classList.add("active");
          }, delay);
        });
      }
    });
  }, { threshold: 0.5 });

  skillsObserver.observe(skillsSection);
}

// --- MODULE 4: SCROLL REVEAL ANIMATIONS ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealObserverOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      statusMessage.textContent = "❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.";
      statusMessage.classList.add("error");
      statusMessage.classList.remove("success");
    }
  });
}

console.log(
  "%cPortfolio Précieux Trésor Tossou - Prêt pour GitHub !",
  "font-size: 16px; font-weight: bold; color: #8b5cf6; margin: 10px 0;"
);
