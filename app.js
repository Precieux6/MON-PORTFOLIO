/* =====================================================================
   PORTFOLIO JAVASCRIPT - OPTIMISÉ & MODULAIRE
   ==================================================================== */

// --- PROJECT DATA ---
const projectsData = {
  "1": {
    title: "Lancement de Plateforme & Architecture SEO — LEXAFRIQUE",
    category: "SEO & Gestion de Projet",
    metric: "Indexation Rapide",
    image: "https://via.placeholder.com/700x400/8b5cf6/ffffff?text=LEXAFRIQUE",
    desc1: "Participation active à la mise en place du site internet et au lancement officiel de la structure LEXAFRIQUE. Ce projet a nécessité une planification rigoureuse pour poser des bases saines en matière de référencement naturel et d'organisation.",
    desc2: "Création et structuration d'une base de données ciblée de clients et partenaires, rédaction initiale des contenus institutionnels et internes, et alignement complet de la ligne éditoriale avec les objectifs de développement de la direction.",
    skills: ["Architecture SEO", "Gestion de Projet", "Rédaction Institutionnelle", "Base de données"],
    deliverables: ["Structure sémantique du site", "Contenus institutionnels", "Base de données structurée", "Optimisation des flux"]
  },
  "2": {
    title: "Déploiement de la Communication Digitale — ROYAL ASSIST AFRICA",
    category: "Content Management",
    metric: "Visibilité B2B Accrue",
    image: "https://via.placeholder.com/700x400/3b82f6/ffffff?text=ROYAL+ASSIST",
    desc1: "Élaboration et mise en œuvre globale des stratégies de communication de l'entreprise pour Royal Assist Africa. Nous avons structuré la présence digitale pour valoriser l'image de marque et asseoir l'autorité dans le secteur B2B.",
    desc2: "Création, diffusion et suivi de supports de communication multi-canaux cohérents. Gestion étroite des relations partenaires et organisation d'événements professionnels pour fidéliser le réseau.",
    skills: ["Stratégie Editoriale", "Content Management", "Relations Partenaires", "Événementiel"],
    deliverables: ["Supports de communication multi-canaux", "Charte éditoriale B2B", "Plan d'événements professionnels"]
  },
  "3": {
    title: "Création de Formations & Dynamisation Sociale — LES MONDES DE L'INVISIBLE",
    category: "Rédaction & Multimédia",
    metric: "Forte Rétention & Engagement",
    image: "https://via.placeholder.com/700x400/10b981/ffffff?text=LES+MONDES",
    desc1: "Rédaction approfondie de formations et de documentations pédagogiques spécialisées. Animation stratégique et régulière des réseaux sociaux (principalement Instagram et Facebook) pour créer une communauté active.",
    desc2: "Conception de visuels percutants et montage vidéo calibré pour maximiser l'engagement, augmentant de manière significative l'interactivité et la mémorisation des contenus pédagogiques.",
    skills: ["Rédaction Pédagogique", "Animation Multicanal", "Montage Vidéo", "Création Visuelle"],
    deliverables: ["Supports pédagogiques", "Calendrier éditorial Social Media", "Vidéos & Visuels d'engagement"]
  },
  "4": {
    title: "Campagne de Référencement Naturel — DJABOO",
    category: "Expertise SEO",
    metric: "Trafic Organique Durable",
    image: "https://via.placeholder.com/700x400/ec4899/ffffff?text=DJABOO",
    desc1: "Optimisation sémantique et campagnes de mots-clés ciblées pour la plateforme Djaboo. Recherche approfondie des tendances de recherche et des requêtes des utilisateurs pour concevoir un plan de contenu ultra-ciblé.",
    desc2: "Rédaction d'articles optimisés à forte valeur ajoutée, amélioration technique de la structure du site (balises HTML, maillage interne intelligent) et veille algorithmique constante pour pérenniser les performances SEO.",
    skills: ["Optimisation Sémantique", "Recherche de mots-clés", "Maillage interne", "Veille algorithmique"],
    deliverables: ["Articles de blog optimisés SEO", "Audit de mots-clés", "Rapport de maillage interne"]
  }
};

// --- EMAILJS CONFIGURATION (À ADAPTER) ---
// Instructions : 
// 1. Créer un compte sur emailjs.com
// 2. Remplacer 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' par vos vraies clés
// const EMAIL_CONFIG = {
//   serviceID: 'YOUR_SERVICE_ID',
//   templateID: 'YOUR_TEMPLATE_ID',
//   publicKey: 'YOUR_PUBLIC_KEY'
// };

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

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Active menu link highlighting on scroll
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

// --- MODULE 2: PROJECTS ---
function initProjects() {
  const projectsCarousel = document.getElementById("projects-carousel");
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Modal elements
  const modalImg = document.getElementById("modal-img");
  const modalCategory = document.getElementById("modal-category");
  const modalMetric = document.getElementById("modal-metric-badge");
  const modalTitle = document.getElementById("modal-title-text");
  const modalDescP1 = document.getElementById("modal-desc-p1");
  const modalDescP2 = document.getElementById("modal-desc-p2");
  const modalSkillsTags = document.getElementById("modal-skills-tags");
  const modalDeliverablesTags = document.getElementById("modal-deliverables-tags");

  // Open modal function
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

    // Skills
    modalSkillsTags.innerHTML = "";
    data.skills.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = skill;
      modalSkillsTags.appendChild(tag);
    });

    // Deliverables
    modalDeliverablesTags.innerHTML = "";
    data.deliverables.forEach(item => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = item;
      modalDeliverablesTags.appendChild(tag);
    });

    // Open Modal
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  // Close modal function
  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Project card click
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      openModal(projectId);
    });
  });

  // Close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  // Click outside modal to close
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // Carousel scroll event (passive optimization)
  if (projectsCarousel) {
    let isScrolling = false;

    projectsCarousel.addEventListener("scroll", () => {
      if (isScrolling) return;
      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 100);
    }, { passive: true });

    // Keyboard navigation for accessibility
    projectCards.forEach((card, index) => {
      card.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" && index < projectCards.length - 1) {
          projectCards[index + 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
        if (e.key === "ArrowLeft" && index > 0) {
          projectCards[index - 1].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
      });
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

// --- MODULE 5: CONTACT FORM (ÉTAPE 2) ---
function initContactForm() {
  const contactForm = document.getElementById("portfolio-contact-form");
  
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("btn-submit-form");
    const statusMessage = document.getElementById("form-status-message");
    const originalText = submitBtn.innerHTML;

    const formData = {
      name: document.getElementById("form-name").value,
      email: document.getElementById("form-email").value,
      subject: document.getElementById("form-subject").value,
      message: document.getElementById("form-message").value
    };

    try {
      // Option 1 : AVEC EmailJS (décommentez après configuration)
      // Assurez-vous d'avoir initialisé EmailJS dans le HTML
      // if (typeof emailjs !== 'undefined') {
      //   submitBtn.innerHTML = "Envoi en cours...";
      //   submitBtn.disabled = true;
      //
      //   const response = await emailjs.send(
      //     EMAIL_CONFIG.serviceID,
      //     EMAIL_CONFIG.templateID,
      //     {
      //       to_email: 'tossouprecieux29@gmail.com',
      //       from_name: formData.name,
      //       from_email: formData.email,
      //       subject: formData.subject,
      //       message: formData.message
      //     },
      //     EMAIL_CONFIG.publicKey
      //   );
      //
      //   if (response.status === 200) {
      //     submitBtn.innerHTML = "Message envoyé avec succès !";
      //     submitBtn.style.background = "var(--accent-green)";
      //     submitBtn.style.color = "#fff";
      //     contactForm.reset();
      //
      //     statusMessage.textContent = "✓ Merci ! Votre message a été envoyé. Je vous contacte bientôt.";
      //     statusMessage.classList.add("success");
      //     statusMessage.classList.remove("error");
      //   }
      // } else {
      //   throw new Error('EmailJS non chargé');
      // }

      // Option 2 : SIMULATION (mode développement)
      submitBtn.innerHTML = "Envoi en cours...";
      submitBtn.disabled = true;

      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1500));

      // ✅ Simulation de succès
      console.log("📧 Formulaire simulé (mode développement):", formData);
      
      submitBtn.innerHTML = "Message envoyé avec succès !";
      submitBtn.style.background = "var(--accent-green)";
      submitBtn.style.color = "#fff";
      contactForm.reset();

      statusMessage.textContent = "✓ Merci ! Votre message a été envoyé. Je vous contacte bientôt.";
      statusMessage.classList.add("success");
      statusMessage.classList.remove("error");

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "";
        submitBtn.style.color = "";
        submitBtn.disabled = false;
        statusMessage.textContent = "";
        statusMessage.classList.remove("success");
      }, 3000);

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

// --- UTILITY: Console Helper (development) ---
console.log(
  "%cPortfolio Précieux Trésor Tossou",
  "font-size: 16px; font-weight: bold; color: #8b5cf6; margin: 10px 0;"
);
console.log(
  "%cÉtape 2 - Pour intégrer EmailJS :\n" +
  "1. Créer un compte sur emailjs.com\n" +
  "2. Copier votre SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY\n" +
  "3. Remplacer les valeurs dans EMAIL_CONFIG\n" +
  "4. Décommenter le code EmailJS dans initContactForm()",
  "color: #94a3b8; font-size: 12px;"
);
