// Project data for modal popups
const projectsData = {
  "1": {
    title: "Lancement de Plateforme & Architecture SEO — LEXAFRIQUE",
    category: "SEO & Gestion de Projet",
    metric: "Indexation Rapide",
    image: "assets/projet1_seo.jpg",
    desc1: "Participation active à la mise en place du site internet et au lancement officiel de la structure LEXAFRIQUE. Ce projet a nécessité une planification rigoureuse pour poser des bases saines en matière de référencement naturel et d'organisation.",
    desc2: "Création et structuration d'une base de données ciblée de clients et partenaires, rédaction initiale des contenus institutionnels et internes, et alignement complet de la ligne éditoriale avec les objectifs de développement de la direction.",
    skills: ["Architecture SEO", "Gestion de Projet", "Rédaction Institutionnelle", "Base de données"],
    deliverables: ["Structure sémantique du site", "Contenus institutionnels", "Base de données structurée", "Optimisation des flux"]
  },
  "2": {
    title: "Déploiement de la Communication Digitale — ROYAL ASSIST AFRICA",
    category: "Content Management",
    metric: "Visibilité B2B Accrue",
    image: "assets/projet2_social.jpg",
    desc1: "Élaboration et mise en œuvre globale des stratégies de communication de l'entreprise pour Royal Assist Africa. Nous avons structuré la présence digitale pour valoriser l'image de marque et asseoir l'autorité dans le secteur B2B.",
    desc2: "Création, diffusion et suivi de supports de communication multi-canaux cohérents. Gestion étroite des relations partenaires et organisation d'événements professionnels pour fidéliser le réseau.",
    skills: ["Stratégie Editoriale", "Content Management", "Relations Partenaires", "Événementiel"],
    deliverables: ["Supports de communication multi-canaux", "Charte éditoriale B2B", "Plan d'événements professionnels"]
  },
  "3": {
    title: "Création de Formations & Dynamisation Sociale — LES MONDES DE L'INVISIBLE",
    category: "Rédaction & Multimédia",
    metric: "Forte Rétention & Engagement",
    image: "assets/projet3_copywriting.jpg",
    desc1: "Rédaction approfondie de formations et de documentations pédagogiques spécialisées. Animation stratégique et régulière des réseaux sociaux (principalement Instagram et Facebook) pour créer une communauté active.",
    desc2: "Conception de visuels percutants et montage vidéo calibré pour maximiser l'engagement, augmentant de manière significative l'interactivité et la mémorisation des contenus pédagogiques.",
    skills: ["Rédaction Pédagogique", "Animation Multicanal", "Montage Vidéo", "Création Visuelle"],
    deliverables: ["Supports pédagogiques", "Calendrier éditorial Social Media", "Vidéos & Visuels d'engagement"]
  },
  "4": {
    title: "Campagne de Référencement Naturel — DJABOO",
    category: "Expertise SEO",
    metric: "Trafic Organique Durable",
    image: "assets/projet4_ebook.jpg",
    desc1: "Optimisation sémantique et campagnes de mots-clés ciblées pour la plateforme Djaboo. Recherche approfondie des tendances de recherche et des requêtes des utilisateurs pour concevoir un plan de contenu ultra-ciblé.",
    desc2: "Rédaction d'articles optimisés à forte valeur ajoutée, amélioration technique de la structure du site (balises HTML, maillage interne intelligent) et veille algorithmique constante pour pérenniser les performances SEO.",
    skills: ["Optimisation Sémantique", "Recherche de mots-clés", "Maillage interne", "Veille algorithmique"],
    deliverables: ["Articles de blog optimisés SEO", "Audit de mots-clés", "Rapport de maillage interne"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // 2. Active Menu Link highlighting on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

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

  // 3. Scroll Reveal Animations
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
        revealObserver.unobserve(entry.target); // Stop observing after anim triggers
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Modal management
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Modal elements to fill
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

    // Fill data
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
    document.body.style.overflow = "hidden"; // Prevent scrolling behind
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
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

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  // 5. Contact Form Simulation
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById("btn-submit-form");
      const originalText = submitBtn.innerHTML;
      
      // Simulate loading state
      submitBtn.innerHTML = "Envoi en cours...";
      submitBtn.disabled = true;
      
      setTimeout(() => {
        // Switch to success
        submitBtn.innerHTML = "Message envoyé avec succès !";
        submitBtn.style.background = "var(--accent-green)";
        submitBtn.style.color = "#fff";
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = "";
          submitBtn.style.color = "";
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
