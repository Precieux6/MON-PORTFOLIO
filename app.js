/* =====================================================================
   PORTFOLIO JAVASCRIPT - VERSION FINALE
   Contenu complet des 6 articles + Formulaire Web3Forms opérationnel
   ==================================================================== */

// --- PROJECTS DATA (1 à 9) ---
const projectsData = {
  "1": {
    title: "Plateforme de Réservation — Géomancie Astrale",
    category: "Application Web",
    metric: "Vercel Deployment",
    image: "assets/geomancie.jpg",
    desc1: "Application web interactive de consultation et de réservation en ligne, conçue et déployée pour une expérience utilisateur fluide et intuitive.",
    desc2: "Mise en place d'une interface responsive et optimisée pour garantir des temps de chargement rapides et une accessibilité multiplateforme.",
    skills: ["HTML/CSS/JS", "Vercel", "UI/UX", "Intégration Web"],
    deliverables: ["Application web fonctionnelle", "Code source hébergé", "Responsive design"],
    link: "https://reservation-sa-consultation.vercel.app/"
  },
  "2": {
    title: "Landing Page — Méditation sur la vie",
    category: "Landing Page / Code Web",
    metric: "GitHub Pages",
    image: "assets/meditation.jpg",
    desc1: "Landing page immersive dédiée au langage et à la méditation de l'homme, intégrant un design épuré, soigné et responsive.",
    desc2: "Structure HTML/CSS propre optimisée pour le référencement naturel et un parcours utilisateur captivant.",
    skills: ["HTML5", "CSS3", "GitHub Pages", "Responsive Design"],
    deliverables: ["Landing page en ligne", "Design épuré", "Optimisation mobile"],
    link: "https://precieux6.github.io/meditation-destin-homme/"
  },
  "3": {
    title: "Campagne Instagram 12 Carousels — Vocal Coach Factory",
    category: "Social Media & Multimédia",
    metric: "HTML/CSS/JS",
    image: "assets/slide1.jpg",
    desc1: "Création d'une série de 12 carrousels HTML/CSS pour la promotion de la méthodologie ISPO avec une identité visuelle cohérente et percutante.",
    desc2: "Design orienté conversion et engagement social pour maximiser l'interaction de la communauté sur Instagram.",
    skills: ["Social Media", "Design Carrousel", "HTML/CSS", "Identité Visuelle"],
    deliverables: ["Série de 12 visuels/slides", "Charte graphique", "Stratégie d'engagement"],
    pdfLink: "assets/vocal-coach-factory-carrousel.pdf" // PDF à charger
  },
  "4": {
    title: "Production SEO Affiliate — Casinos Canada",
    category: "Content SEO & Affiliate",
    metric: "+50 articles",
    image: "assets/casinos.jpg",
    desc1: "Rédaction et optimisation de plus de 50 articles long-format en français ciblant le marché québécois des jeux en ligne.",
    desc2: "Recherche approfondie de mots-clés transactionnels, optimisation sémantique rigoureuse et intégration respectant les meilleurs standards SEO.",
    skills: ["Rédaction SEO", "Affiliation", "Stratégie Sémantique", "Audit de mots-clés"],
    deliverables: ["50+ articles optimisés", "Dossier Google Drive structuré", "Stratégie de mots-clés"],
     link: "https://drive.google.com/drive/folders/1PLFi-crpHZulVRq5938ymfeZh3WgmV2W?usp=drive_link"
   },
  "5": {
    title: "Lancement de Plateforme & Architecture SEO — LEXAFRIQUE",
    category: "SEO & Gestion de projet",
    metric: "Indexation Rapide",
    image: "assets/projet1_seo.jpg",
    desc1: "Participation active à la mise en place du site internet et au lancement officiel de la structure Lexafrique avec une architecture optimisée.",
    desc2: "Création et structuration d'une base de données ciblée de clients et partenaires, et alignement complet de la ligne éditoriale.",
    skills: ["Architecture SEO", "Gestion de Projet", "Rédaction Institutionnelle", "Base de données"],
    deliverables: ["Structure sémantique du site", "Contenus institutionnels", "Base de données structurée"]
  },
  "6": {
    title: "Déploiement de la Communication Digitale — ROYAL ASSIST AFRICA",
    category: "Content Management",
    metric: "Visibilité B2B Accrue",
    image: "assets/projet3_copywriting.jpg",
    desc1: "Élaboration et mise en œuvre globale des stratégies de communication pour valoriser l'image de marque et asseoir l'autorité B2B.",
    desc2: "Création, diffusion et suivi de supports de communication multicanaux cohérents et gestion des relations partenaires.",
    skills: ["Stratégie Éditoriale", "Content Management", "Relations Partenaires", "B2B"],
    deliverables: ["Supports multicanaux", "Charte éditoriale B2B", "Plan de communication"]
  },
  "7": {
    title: "Création de Formations & Dynamisation Sociale — LES MONDES DE L'INVISIBLE",
    category: "Rédaction & Multimédia",
    metric: "Forte Rétention & Engagement",
    image: "assets/projet4_ebook.jpg",
    desc1: "Rédaction approfondie de formations et animation stratégique des réseaux sociaux (Instagram et Facebook) pour créer une communauté engagée.",
    desc2: "Conception de visuels percutants et montage vidéo calibré pour maximiser l'interactivité et la mémorisation des contenus.",
    skills: ["Rédaction Pédagogique", "Animation Social Media", "Montage Vidéo", "Création Visuelle"],
    deliverables: ["Supports pédagogiques", "Calendrier éditorial", "Vidéos & Visuels"]
  },
  "8": {
    title: "Campagne de Référencement Naturel — DJABOO",
    category: "Expertise SEO",
    metric: "Trafic Organique Durable",
    image: "assets/projet2_social.jpg",
    desc1: "Optimisation sémantique et campagnes de mots-clés ciblées pour la plateforme Djaboo afin de maximiser le trafic organique durable.",
    desc2: "Rédaction d'articles optimisés à forte valeur ajoutée, amélioration technique de la structure du site et maillage interne intelligent.",
    skills: ["Optimisation Sémantique", "Recherche de Mots-clés", "Maillage Interne", "Veille Algorithmique"],
    deliverables: ["Articles de blog SEO", "Audit de mots-clés", "Rapport de maillage"]
  },
  "9": {
    title: "Campagne Instagram — Académie du Spirituel",
    category: "Social Media & Esotérique",
    metric: "Contenu Holistique",
    image: "assets/carrousel_fred.png",
    desc1: "Création d'une série de visuels Instagram immersifs pour l'Académie du Spirituel, combinant des textes inspirants avec une identité visuelle ésotérique et mystique.",
    desc2: "Chaque carousel intègre des symboles sacrés, des géométries saintes et des philosophies de transformation personnelle pour une audience en quête de croissance spirituelle.",
    skills: ["Social Media Design", "Copywriting Spirituel", "Esotérique", "Branding Holistique"],
    deliverables: ["Série de visuels Instagram", "Guide de méditation visuelle", "Livre blanc PDF"],
    pdfLink: "assets/academie-spirituel-carrousel.pdf" // PDF à charger
  }
};

// --- BLOG DATA (6 articles complets extraits des DOCX) ---
const blogData = [
  {
    id: 1,
    title: "Comment j'ai conçu un carrousel Instagram responsive en HTML/CSS",
    description: "Tutoriel & Retour d'expérience : passer de Figma au code HTML/CSS pour créer des carrousels Instagram parfaitement cadrés et réutilisables.",
    category: "Projets & Tech",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["HTML", "CSS", "UI/UX", "Community Management", "Tutoriel"],
    excerpt: "Créer des carrousels Instagram ultra-performants et réutilisables grâce au HTML/CSS...",
    content: `<h2>Créer des carrousels Instagram ultra-performants et réutilisables grâce au HTML/CSS</h2>
<p>Dans le quotidien d'un Community Manager, la création visuelle est souvent synonyme de répétition fastidieuse sur des outils de design graphique classiques. Si ces logiciels conviennent aux besoins ponctuels, ils montrent rapidement leurs limites lorsqu'il s'agit de produire des campagnes récurrentes, d'assurer une cohérence typographique stricte ou d'automatiser le déclinage de contenus. C'est précisément là que l'approche du Web Design appliqué aux réseaux sociaux prend tout son sens.</p>

<p>Concevoir des carrousels sociaux directement en HTML/CSS offre un contrôle pixel-perfect absolu sur la mise en page. En exploitant la puissance des variables CSS, de la typographie fluide et des architectures de composants, vous transformez votre processus créatif en un système de design industriel. Vous gagnez un temps précieux lors de la rédaction des textes, éliminez les erreurs d'alignement et garantissez une identité visuelle d'une rigueur mathématique.</p>

<h3>La préparation des maquettes & contraintes de ratios</h3>
<p>Avant de coder la moindre ligne de style, il est fondamental d'établir le cadre géométrique exact imposé par les réseaux sociaux, notamment Instagram. Le format portrait 4:5 (1080 × 1350 pixels) s'est imposé comme le standard indiscutable, car il occupe la surface d'écran maximale sur smartphone sans risquer d'être rogné dans le fil d'actualité.</p>

<p>La préparation technique impose de définir des zones d'exclusion strictes. Sur une hauteur totale de 1350 pixels, les 150 pixels supérieurs et inférieurs accueillent respectivement l'en-tête du profil et les boutons d'interaction de la plateforme. Votre contenu stratégique (titres, illustrations et appels à l'action) doit impérativement s'inscrire dans un conteneur central sécurisé de 1080 × 1050 pixels avec un rembourrage généreux sur les côtés.</p>

<h3>La structure HTML & le CSS</h3>
<p>Pour structurer le carrousel, nous créons un conteneur global qui englobe l'ensemble des slides. Chaque slide est une carte indépendante possédant les dimensions exactes du format portrait Instagram. Voici la structure HTML minimale :</p>

<p>Du côté du style CSS, la magie opère grâce à l'utilisation des variables personnalisées pour piloter la palette de couleurs, combinée aux propriétés de tableau d'affichage ou d'alignement pour garantir un centrage vertical et horizontal irréprochable sans débordement. Grâce à ce paramétrage clair, il devient extrêmement facile de modifier la charte graphique globale en ne changeant que quelques lignes de variables CSS dans votre feuille de style.</p>

<h3>La méthode d'exportation haute résolution & réutilisation pour les campagnes</h3>
<p>Une fois le rendu HTML/CSS validé dans votre navigateur, vient l'étape de la conversion en fichiers images haute définition destinés à la publication. Grâce aux outils de développement modernes comme Puppeteer ou des extensions de capture de fenêtres à échelle réelle (device pixel ratio de 2x), chaque slide HTML est capturée instantanément au format PNG sans aucune perte de qualité.</p>

<p>L'intérêt majeur de cette méthode réside dans sa réutilisabilité infinie. Pour une nouvelle campagne de contenu, il vous suffit d'ouvrir le fichier source, de remplacer le texte Markdown ou HTML et d'exécuter un script d'export automatique. Vous obtenez un carrousel complet prêt à poster en moins de deux minutes, avec la garantie absolue qu'aucun décalage de mise en page ne viendra altérer votre image de marque.</p>

<h3>Conclusion & Appel à l'action</h3>
<p>Allier le développement Front-End au Community Management permet de franchir un cap décisif dans la production de contenus sociaux. En traitant vos carrousels comme de véritables composants Web modernes, vous combinez rigueur technique, rapidité d'exécution et esthétique haut de gamme.</p>

<p>Pour déployer cette méthodologie sur vos propres réseaux sociaux, voici l'inventaire des étapes clés à suivre :</p>

<p><strong>Définition du cadre géométrique :</strong> Configurez un canevas strict au format 1080 × 1350 pixels en respectant les marges de sécurité applicatives.</p>

<p><strong>Création du système de design CSS :</strong> Centralisez vos couleurs, typographies et espacements dans des variables CSS globales réutilisables.</p>

<p><strong>Structuration sémantique des diapositives :</strong> Découpez chaque carte avec un en-tête, un corps de texte principal et un pied de page identifiant votre profil.</p>

<p><strong>Automatisation de l'exportation d'images :</strong> Utilisez un script d'export headless pour transformer vos pages HTML en fichiers PNG haute définition.</p>

<p><strong>Déclinaison rapide de vos campagnes :</strong> Mettez simplement à jour les textes pour générer de nouveaux carrousels en un temps record.</p>

<p>Vous souhaitez moderniser l'image de marque de votre entreprise et automatiser la création de vos visuels sociaux ? En tant que Développeur Front-End & Community Manager, je conçois des templates de carrousels sur-mesure et réutilisables, taillés pour maximiser l'engagement de votre communauté. Découvrez mes réalisations sur mon portfolio et commandez vos templates HTML/CSS personnalisés pour transformer votre présence sur les réseaux sociaux.</p>`
  },
  {
    id: 2,
    title: "Étude de cas : Comment j'ai structuré la stratégie de contenu pour un projet ambitieux",
    description: "Découvrez les coulisses stratégiques, la méthodologie SEO et les résultats obtenus lors du déploiement éditorial d'un projet web.",
    category: "Étude de Cas",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["Case Study", "Stratégie Editorial", "SEO", "ROI"],
    excerpt: "Étude de cas SEO : Multiplier par 3 le trafic qualifié et générer 45 % de leads B2B en plus en 6 mois...",
    content: `<h2>Étude de cas SEO : Multiplier par 3 le trafic qualifié en 6 mois</h2>
<p>Lorsqu'un acteur B2B en forte croissance m'a sollicité début 2026, la situation était aussi classique que frustrante. Malgré un produit à haute valeur ajoutée et une expertise métier incontestable, leur plateforme web peinait à attirer des prospects qualifiés. Le site enregistrait un trafic stagnant, composé quasi exclusivement de recherches de marque, tandis que les concurrents préemptaient les mots-clés stratégiques du secteur.</p>

<p>L'objectif fixé était ambitieux mais clair : structurer une stratégie éditoriale sur mesure capable de positionner la marque en référence incontournable sur son marché, tout en créant un canal d'acquisition organique prédictible et rentable. Il ne s'agissait pas simplement de publier des articles pour alimenter un blog, mais de construire une véritable machine à conversion sémantique.</p>

<p><em>Enseignement clé : Un contenu sans intention stratégique n'est qu'un coût d'exploitation. L'alignement entre le besoin sémantique du prospect et l'architecture du site est le seul moteur durable du ROI éditorial.</em></p>

<h3>L'état des lieux & l'analyse du marché</h3>
<p>L'audit initial a rapidement révélé les causes profondes du blocage. Le site souffrait d'une cannibalisation sémantique sévère, avec plusieurs pages se disputant maladroitement les mêmes expressions clés génériques. De plus, la structure technique manquait de clarté pour les robots de Google, et les contenus existants répondaient à une logique purement auto-centrée plutôt qu'aux intentions de recherche réelles des décideurs B2B.</p>

<p>En analysant le paysage concurrentiel, j'ai identifié une opportunité majeure. Alors que les concurrents directs produisaient des contenus superficiels générés à la chaîne, les décideurs du secteur recherchaient des guides méthodologiques approfondis, des études opérationnelles et des réponses concrètes à leurs problématiques métiers. La faille stratégique était béante : il fallait miser sur l'autorité sémantique et la profondeur d'expertise.</p>

<h3>Le plan d'action éditorial</h3>
<p>Pour capter l'attention des algorithmes et des prospects, j'ai conçu une stratégie articulée autour de trois piliers thématiques fondamentaux. L'architecture globale a été pensée sous forme de cocons sémantiques étanches afin de maximiser le transfert de jus SEO et de guider naturellement le lecteur vers la conversion.</p>

<p><strong>Cartographie précise des intentions de recherche :</strong> Tri minutieux des mots-clés par typologies (informationnelle, commerciale, transactionnelle) pour attribuer un rôle précis à chaque page.</p>

<p><strong>Création de pages piliers à haute valeur ajoutée :</strong> Rédaction de guides d'autorité de plus de 2 500 mots centralisant les enjeux stratégiques du secteur.</p>

<p><strong>Déploiement de clusters satellites :</strong> Production d'articles spécialisés répondant aux questions connexes identifiées dans les blocs People Also Ask de Google.</p>

<p><strong>Maillage interne contextuel et descendant :</strong> Mise en place d'un réseau de liens fluides reliant les articles satellites aux pages piliers, puis vers les pages de conversion.</p>

<p><strong>Optimisation continue de l'expérience de lecture :</strong> Mise en page aérée, hiérarchisation claire des balises HTML et intégration d'éléments de preuve sociale.</p>

<p><em>Enseignement clé : La puissance d'un cocon sémantique réside dans la discipline du maillage interne. Chaque lien doit apporter une valeur contextuelle évidente au lecteur pour que Google valide l'autorité de la page mère.</em></p>

<h3>Le processus d'exécution & optimisation HTML/SEO</h3>
<p>La phase d'exécution a été conduite avec une rigueur militaire. Un calendrier éditorial strict a permis de maintenir un rythme de deux publications hebdomadaires à fort impact. Chaque texte a fait l'objet d'un travail d'optimisation sémantique poussé, utilisant des outils d'analyse lexicale pour garantir une couverture exhaustive du champ sémantique cible.</p>

<p>Sur le plan technique et HTML, chaque détail a été pensé pour maximiser le taux de clic et l'engagement. Les balises Title et méta-descriptions ont été rédigées avec des accroches copywritées percutantes. L'arborescence des balises H2 et H3 a été conçue pour capturer les micro-intentions de recherche, tandis que des extraits optimisés sous forme de tableaux et de synthèses ont été intégrés pour cibler les Position Zero de Google.</p>

<h3>Les résultats & enseignements clés</h3>
<p>Les retombées de cette réorganisation éditoriale ne se sont pas fait attendre. Dès le troisième mois, les premiers signaux positifs sont apparus sur la Google Search Console, avant une accélération exponentielle au cours du second trimestre de déploiement.</p>

<p>Au terme des 6 mois de mission, les métriques clés ont confirmé la réussite de la stratégie. Le trafic organique global a bondi de +215 %, passant d'une visibilité marginale à un flux constant de plus de 35 000 visiteurs uniques mensuels qualifiés. Plus impressionnant encore, le nombre de demandes de démonstration et de devis attribuables au canal SEO a progressé de +45 %, prouvant que le trafic capté correspondait exactement aux cibles décisionnelles visées.</p>

<p><em>Enseignement clé : Le positionnement sur des mots-clés à fort volume ne sert à rien si l'intention d'achat n'est pas qualifiée. La rentabilité d'une campagne SEO B2B se mesure à la qualité des leads générés, non au simple volume de visites.</em></p>

<h3>Conclusion & Appel à l'action</h3>
<p>Cette étude de cas démontre qu'une stratégie de contenu B2B performante ne relève pas du hasard ou de la chance. En combinant une analyse sémantique rigoureuse, une architecture technique sans faille et une exécution rédactionnelle d'excellence, il est possible de transformer un site web discret en un levier d'acquisition majeur et pérenne.</p>

<p>Vous souhaitez obtenir des résultats similaires et libérer le potentiel organique de votre entreprise ? Ne laissez plus vos concurrents capter vos futurs clients sur Google. Réservez dès aujourd'hui votre appel découverte stratégique offert pour analyser votre écosystème actuel et définir la feuille de route éditoriale adaptée à vos ambitions.</p>`
  },
  {
    id: 3,
    title: "Recherche d'intention de recherche : La méthode pas à pas pour doubler son trafic organique",
    description: "Découvrez comment identifier l'intention de recherche Google (Search Intent) pour positionner vos articles en 1ère page et captiver vos prospects.",
    category: "SEO & Rédaction",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["SEO", "Search Intent", "Stratégie de contenu", "Rédaction Web"],
    excerpt: "Intention de recherche SEO : Le guide ultime pour captiver Google et transformer vos lecteurs en clients...",
    content: `<h2>Intention de recherche SEO : Le guide ultime pour captiver Google</h2>
<p>Vous publiez régulièrement des articles de blog ultra-détaillés, vous investissez du temps et des ressources dans votre stratégie de contenu, pourtant vos positions stagnent désespérément en page 2 ou 3 de Google. Rien n'est plus frustrant que de constater un trafic organique quasi nul après avoir rédigé des milliers de mots sur un sujet fondamental pour votre entreprise.</p>

<p>Le problème sous-jacent ne réside pas dans la longueur de vos textes ni même dans le nombre de vos backlinks. En réalité, vous ignorez probablement la priorité absolue de Google : satisfaire avec une précision chirurgicale la requête de l'internaute. Ignorer cette exigence équivaut à bâtir une maison sur des fondations de sable. Si votre contenu ne répond pas exactement à l'attente profonde de l'utilisateur, les algorithmes vous pénaliseront en reléguant votre site dans l'oubli numérique.</p>

<p>La solution consiste à maîtriser l'alignement sémantique et stratégique avec ce que les spécialistes nomment le Search Intent. Dans ce guide pratique, vous allez découvrir la méthode exacte pour décoder l'intention de recherche SEO, optimiser vos structures sémantiques et multiplier votre trafic qualifié.</p>

<h3>Les 4 grands types d'intentions de recherche à maîtriser</h3>
<p>Comprendre la psychologie de l'internaute exige d'analyser la typologie de ses requêtes. L'intention de recherche se divise traditionnellement en quatre grandes catégories distinctes :</p>

<p><strong>L'intention informationnelle :</strong> L'utilisateur cherche à apprendre ou à résoudre un problème précis (ex. "comment optimiser sa balise title" ou "définition du SEO sémantique").</p>

<p><strong>L'intention navigationnelle :</strong> L'internaute souhaite se rendre sur un site ou une page spécifique qu'il connaît déjà (ex. "connexion Google Search Console" ou "blog Semrush").</p>

<p><strong>L'intention commerciale :</strong> Le prospect compare plusieurs options avant de prendre une décision d'achat (ex. "meilleurs outils SEO 2026" ou "Ahrefs vs Semrush avis").</p>

<p><strong>L'intention transactionnelle :</strong> L'utilisateur est prêt à passer à l'acte et cherche à acheter un produit ou réserver un service (ex. "acheter logiciel SEO en ligne" ou "tarif audit SEO B2B").</p>

<p>Chaque type d'intention impose un format de contenu spécifique. Proposer un guide théorique de 3 000 mots à un internaute recherchant une intention transactionnelle provoquera un rebond immédiat, signalant à Google que votre page n'est pas pertinente.</p>

<h3>La méthode en 3 étapes pour analyser la SERP Google avant de rédiger</h3>
<p>Pour identifier avec certitude l'attente de Google, l'analyse manuelle des premiers résultats de recherche reste votre arme la plus puissante. Avant de poser le moindre mot sur votre document, vous devez appliquer un processus rigoureux.</p>

<p><strong>La première étape</strong> consiste à examiner l'intention dominante dans le TOP 3 de la SERP. Saisissez votre mot-clé principal en navigation privée et observez la nature des contenus positionnés. Observez si Google met en avant des guides complets, des comparatifs, des pages produits ou des vidéos. Si la première page est monopolisée par des articles sous forme de listes, rédiger une étude de cas isole votre page et détruit vos chances de positionnement.</p>

<p><strong>La deuxième étape</strong> impose le décorticage des fonctionnalités enrichies de la SERP. Analysez attentivement les blocs People Also Ask, les carrousels d'images, les extraits optimisés (Featured Snippets) ou les modules d'actualités. Ces éléments visuels sont autant d'indices laissés par Google pour vous indiquer les sous-thématiques incontournables et les questions connexes que vous devez absolument traiter dans votre texte.</p>

<p><strong>La troisième étape</strong> réside dans l'analyse de l'angle d'attaque et de la fraîcheur du contenu. Identifiez la promesse centrale des concurrents les mieux classés. Cherchent-ils à séduire des débutants ou des experts ? Mettent-ils en avant des méthodes rapides, des check-lists ou des modèles téléchargeables ? Identifiez les faiblesses ou omissions des articles concurrents pour proposer un contenu supérieur, plus précis et véritablement différenciant.</p>

<h3>Comment aligner la structure HTML sur l'attente réelle de l'utilisateur</h3>
<p>Une fois l'intention cernée et l'angle stratégique validé, la structuration sémantique de votre document devient le levier de conversion majeur. Votre balisage HTML doit offrir un fil conducteur fluide pour l'utilisateur tout en envoyant des signaux de pertinence clairs aux robots d'indexation.</p>

<p>Vos balises H2 et H3 doivent refléter directement la logique de pensée de votre cible. Chaque sous-titre doit répondre à une sous-intention identifiée lors de votre analyse de la SERP. Au lieu d'utiliser des titres génériques et vagues, préférez des intitulés explicites intégrant des expressions clés sémantiquement proches. Cela permet aux moteurs de recherche de saisir la profondeur thématique de votre travail.</p>

<p>L'intégration d'une section FAQ structurée en bas d'article constitue une opportunité d'optimisation exceptionnelle. En regroupant les questions récurrentes capturées dans les blocs PAA, vous capturez du trafic complémentaire sur des requêtes de longue traîne tout en améliorant la lisibilité globale de votre page.</p>

<h3>Conclusion & Appel à l'action</h3>
<p>Le succès d'une stratégie de contenu moderne ne repose plus sur la simple répétition d'un mot-clé, mais sur l'adéquation parfaite entre votre réponse et le besoin fondamental de l'utilisateur. En analysant la SERP, en identifiant les intentions dominantes et en alignant rigoureusement votre structure HTML, vous construisez une visibilité durable et hautement qualifiée.</p>

<p>Vos articles actuels ne génèrent pas le trafic ni les leads qu'ils méritent ? Il est fort probable qu'ils ne répondent pas exactement à l'intention de recherche SEO attendue par Google. Contactez-moi dès aujourd'hui pour réaliser un audit SEO approfondi de vos contenus et transformer votre site en un puissant aimant à prospects.</p>

<h3>FAQ sur l'intention de recherche SEO</h3>
<p><strong>Comment identifier facilement l'intention de recherche d'un mot-clé ambigu ?</strong> Lorsqu'un mot-clé présente une intention mixte dans la SERP, étudiez la majorité des résultats organiques du TOP 5. Si trois résultats sur cinq sont des articles de blog et deux des pages de vente, privilégiez le format éducatif tout en intégrant un appel à l'action clair vers vos services.</p>

<p><strong>Quelle est l'erreur la plus fréquente liée à l'intention de recherche ?</strong> L'erreur la plus dévastatrice consiste à vouloir vendre un produit sur un mot-clé à forte intention informationnelle. Un prospect qui cherche à comprendre un concept n'est pas prêt à acheter.</p>

<p><strong>L'intention de recherche Google peut-elle évoluer avec le temps ?</strong> Oui, l'intention de recherche est dynamique et s'adapte aux tendances du marché, à la saisonnalité et aux mises à jour des algorithmes de Google. Il est essentiel de réanalyser périodiquement les SERP de vos mots-clés stratégiques.</p>`
  },
  {
    id: 4,
    title: "Pourquoi et comment adapter son ton de marque sur Instagram vs LinkedIn",
    description: "Même marque, deux audiences : découvrez la méthode pour adapter votre ligne éditoriale entre Instagram et LinkedIn sans perdre votre identité.",
    category: "Social Media",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["Community Management", "Copywriting", "LinkedIn", "Instagram", "Branding"],
    excerpt: "Instagram vs LinkedIn : Le guide stratégique pour décliner son ton de marque...",
    content: `<h2>Instagram vs LinkedIn : Le guide stratégique pour décliner son ton de marque</h2>
<p>Beaucoup de marques commettent encore l'erreur monumentale de dupliquer à l'identique leurs publications entre Instagram et LinkedIn. Publier le même visuel accompagné du même texte sur les deux plateformes part d'une intention d'optimisation du temps, mais produit en réalité un résultat catastrophique. Cette approche ignore totalement la psychologie des utilisateurs et les codes culturels propres à chaque réseau social.</p>

<p>Chaque canal possède son propre écosystème d'attention, sa grammaire visuelle et ses attentes implicites. Vouloir parler de la même manière à un professionnel en quête d'opportunités sur LinkedIn et à un utilisateur en recherche d'inspiration visuelle ou de divertissement sur Instagram équivaut à porter un costume trois pièces à une soirée de plage. Pour bâtir une présence digitale forte et engageante, vous devez conserver l'ADN profond de votre marque tout en adaptant son registre de discours.</p>

<h3>Anatomie des deux plateformes : Décoder la psychologie des utilisateurs</h3>
<p>Sur LinkedIn, l'utilisateur est dans une posture de développement professionnel, de veille stratégique et de valorisation de son image de marque personnelle. Il cherche des contenus qui enrichissent son expertise, déclenchent des réflexions métiers ou apportent des solutions concrètes à des enjeux business. L'attention y est plus cérébrale, axée sur le storytelling managérial, l'analyse d'échecs transformés en succès et la preuve d'autorité.</p>

<p>À l'inverse, sur Instagram, l'expérience est avant tout esthétique, émotionnelle et instantanée. L'utilisateur scrolle son fil d'actualité pour s'évader, découvrir les coulisses d'un univers créatif ou s'inspirer. Les contenus y sont jugés en une fraction de seconde sur la qualité visuelle, l'authenticité et la capacité à susciter une émotion immédiate comme la curiosité, la joie ou l'esthétisme.</p>

<h3>Adapter la ligne éditoriale : Matrice de déclinaison opérationnelle</h3>
<p><strong>Format Roi</strong> - Instagram : Carrousel esthétique, Reel dynamique, Story interactive | LinkedIn : Document PDF (Carrousel B2B), Post texte long avec image</p>

<p><strong>Angle & Ton</strong> - Instagram : Léger, inspirant, visuel, axé sur l'émotion et les coulisses | LinkedIn : Analytique, pédagogique, axé sur la valeur business et le ROI</p>

<p><strong>Accroche (Hook)</strong> - Instagram : Mise en scène visuelle percutante et phrase courte intrigante | LinkedIn : Déclaration à contre-courant, chiffre choc ou question métier</p>

<p><strong>Call-To-Action</strong> - Instagram : Enregistrement du post, partage en Story, commentaire dynamique | LinkedIn : Débat sous le post, message privé (DM), lien vers un livre blanc</p>

<h3>Cas pratique : Transformer 1 idée clé pour les deux réseaux</h3>
<p>Imaginons que l'idée centrale de votre marque soit de démontrer l'importance de la régularité pour obtenir des résultats durables dans son secteur. Voici la déclinaison concrète à opérer.</p>

<p>Pour Instagram, le sujet se transforme en un carrousel visuel de 5 slides intitulé '3 habitudes simples pour transformer vos résultats en 30 jours'. La couverture mise sur une typographie imposante avec un contraste de couleurs fort. Les slides suivantes égrènent des conseils synthétiques sous forme de schémas épurés. Le texte accompagnant la publication reste très court, renvoyant à l'interaction en Story.</p>

<p>Pour LinkedIn, l'approche privilégie le storytelling managérial. L'accroche débute par une anecdote personnelle ou un constat d'échec : 'Il y a un an, nous avons failli abandonner ce projet stratégique par manque de discipline'. Le corps du texte détaille ensuite les blocages opérationnels rencontrés, la méthode de structuration mise en place et les leçons tirées pour l'organisation. Le ton est transparent, vulnérable et orienté vers le partage d'expérience managériale.</p>

<h3>Conclusion & Appel à l'action</h3>
<p>Savoir adapter sa ligne éditoriale entre Instagram et LinkedIn est la condition sine qua non pour construire une marque ombrelle puissante. En respectant la personnalité propre de chaque plateforme tout en maintenant l'essence de votre proposition de valeur, vous maximisez votre engagement sans diluer votre image.</p>

<p>La gestion croisée et stratégique de vos réseaux sociaux demande du temps, de la méthode et une maîtrise parfaite des techniques de copywriting moderne. Voici l'unique règle d'or à conserver : Conservez 100 % de votre identité de marque, mais modifiez 80 % du format et du registre de langue selon le réseau ciblé.</p>

<p>Vous souhaitez déléguer votre stratégie Social Media & Community Management à un expert capable d'inciter à l'action sur LinkedIn comme sur Instagram ? Contactez-moi dès aujourd'hui pour concevoir votre ligne éditoriale sur mesure et accélérer votre croissance digitale.</p>

<h3>FAQ : Les questions fréquentes sur la gestion multi-réseaux</h3>
<p><strong>Quel est le rythme de publication idéal sur Instagram et LinkedIn ?</strong> Sur LinkedIn, la qualité prime largement sur la quantité : 2 à 3 publications à haute valeur ajoutée par semaine suffisent. Sur Instagram, la régularité en Story doit être quotidienne, tandis que 3 publications ou Reels par semaine maintiennent un niveau d'engagement optimal.</p>

<p><strong>Comment recycler un contenu LinkedIn pour Instagram sans faire de copier-coller ?</strong> Extraire l'idée principale d'un post textuel LinkedIn sous forme de citation percutante ou de schéma graphique. Vous pouvez ensuite transformer cette illustration en slide de couverture d'un carrousel Instagram ou en accroche visuelle pour un Reel court.</p>

<p><strong>Faut-il utiliser les mêmes hashtags sur les deux plateformes ?</strong> Absolument pas. Sur LinkedIn, limitez-vous à 3 à 5 hashtags très ciblés et professionnels. Sur Instagram, sélectionnez entre 8 et 15 hashtags pertinents combinant votre secteur, votre cible et la thématique exacte du visuel.</p>`
  },
  {
    id: 5,
    title: "Pourquoi le combo HTML/CSS épuré + Markdown bat la plupart des CMS lourds en SEO",
    description: "Vitesse, sobriété du code et balisage sémantique : analyse de l'impact des architectures légères (Astro, JAMstack) sur le référencement naturel.",
    category: "Tech & SEO",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["Web Performance", "HTML/CSS", "Markdown", "Astro", "SEO Technique"],
    excerpt: "Pourquoi le combo HTML/CSS épuré + Markdown surpasse les CMS lourds en SEO technique...",
    content: `<h2>Pourquoi le combo HTML/CSS épuré + Markdown surpasse les CMS lourds</h2>
<p>Pendant des années, le réflexe quasi universel des entreprises pour créer un blog ou un site vitrine consistait à installer un CMS monolithique traditionnel. Si cette approche permettait de déployer rapidement une interface d'administration basique, elle s'accompagnait d'une dette technique invisible mais dévastatrice pour le référencement naturel : un encombrement massif du code source, une surcouche de scripts inutiles et un temps de réponse serveur médiocre.</p>

<p>Aujourd'hui, les exigences des moteurs de recherche ont profondément changé. Avec la généralisation de l'indexation mobile-first et le déploiement rigoureux des Core Web Vitals (INP, LCP, CLS), Google privilégie ouvertement les sites web d'une réactivité exemplaire. La vitesse d'affichage et la propreté du balisage ne sont plus de simples détails techniques, mais des critères de classement décisifs pour dominer la SERP.</p>

<h3>Les 3 faiblesses majeures des CMS lourds pour le SEO</h3>
<p>Lorsqu'un moteur de recherche explore un site construit sur un CMS classique surchargé, il se heurte à des obstacles majeurs qui dégradent le budget d'exploration et ralentissent l'expérience de navigation.</p>

<p><strong>Premièrement, la pollution du DOM et le DOM Size excessif.</strong> Les constructeurs de pages visuels génèrent une imbrication sans fin de balises HTML génériques (la fameuse 'divite'). Des dizaines de conteneurs superflus entourent un simple paragraphe, alourdissant la structure documentaire et obligeant le navigateur à exécuter des calculs complexes pour restituer la page.</p>

<p><strong>Deuxièmement, l'accumulation incontrôlée de plugins et de scripts bloquants.</strong> Chaque extension ajoutée au CMS injecte ses propres fichiers CSS et JavaScript sur l'ensemble des pages, y compris celles où ils ne servent strictement à rien. Ce traitement bloquant ralentit considérablement la métrique LCP (Largest Contentful Paint) et altère l'interactivité mesurée par le score INP (Interaction to Next Paint).</p>

<p><strong>Troisièmement, le temps de réponse serveur (TTFB) fortement dégradé.</strong> À chaque requête d'un internaute, le serveur doit interroger une base de données MySQL, exécuter des scripts PHP et assembler dynamiquement le code HTML. Cette chaîne de traitement serveur crée un délai inévitable au chargement de la première ligne de code, là où un fichier HTML statique est servi quasi instantanément via un CDN.</p>

<h3>La puissance du HTML/CSS épuré combiné au Markdown</h3>
<p>Face aux lourdeurs des architectures traditionnelles, le retour à des fondations Web épurées propulsées par des générateurs de sites statiques modernes comme Astro ou la JAMstack réinvente les performances SEO. L'idée est simple : rédiger en Markdown, compiler en HTML statique ultra-léger et livrer une expérience de lecture fluide.</p>

<p>Dans ce modèle, la rédaction des contenus s'effectue directement en fichiers Markdown (.md) lisibles et épurés, intégrant un bloc d'en-tête structuré (Frontmatter). Une fois le fichier Markdown compilé par un framework moderne, le code HTML produit à la sortie est d'une sobriété remarquable, totalement dénué de scripts bloquants.</p>

<p>Ce niveau de sobriété logicielle permet d'obtenir sans effort un score parfait de 100/100 sur Google Lighthouse, tant sur mobile que sur ordinateur, garantissant un respect irréprochable des critères Core Web Vitals.</p>

<h3>Pourquoi ce choix technique rend vos contenus imbattables</h3>
<p>Au-delà de la simple mesure des temps de chargement, l'association du Markdown et d'une architecture HTML/CSS épurée offre un avantage concurrentiel majeur pour le référencement naturel. Les robots d'indexation de Google parcourent un code d'une lisibilité totale, où chaque balise H1, H2 ou H3 joue exactement son rôle sémantique de structuration de la pensée.</p>

<p>Puisque la structure HTML ne contient aucun bruit visuel ni script parasite, les algorithmes analysent le champ lexical et la densité sémantique de vos textes avec une efficacité maximale. Le ratio texte/code est exceptionnellement élevé, ce qui signale immédiatement à Google la grande densité d'information de vos pages.</p>

<h3>Conclusion & Appel à l'action</h3>
<p>Adopter une architecture HTML/CSS épurée couplée au Markdown, c'est faire le choix de l'efficience technique, de la durabilité et de la performance SEO absolue. En éliminant le superflu technique, vous offrez à vos visiteurs une vitesse de navigation inégalée et à Google un contenu d'une clarté exemplaire.</p>

<p>Pour réussir la transition vers ces architectures ultra-performantes :</p>

<p><strong>Un générateur de site statique performant :</strong> Utilisez un framework moderne comme Astro pour convertir vos fichiers Markdown en HTML pur zéro JavaScript par défaut.</p>

<p><strong>Un hébergement sur réseau CDN mondial :</strong> Déployez vos pages statiques sur Cloudflare Pages, Netlify ou Vercel pour garantir un TTFB inférieur à 50 ms.</p>

<p><strong>Une feuille de style CSS minimale :</strong> Privilégiez un style épuré, structuré et responsive ne dépassant pas quelques kilo-octets.</p>

<p><strong>Un balisage sémantique rigoureux :</strong> Assurez-vous d'une hiérarchie parfaite des balises Hn et d'une structuration Schema.org propre.</p>

<p><strong>Une stratégie d'optimisation des images :</strong> Convertissez tous vos visuels au format AVIF ou WebP avec un chargement différé (lazy-loading) natif.</p>

<p>Votre site actuel souffre de lenteurs et pénalise votre visibilité sur Google ? En tant que Rédacteur Web & Intégrateur Front-End spécialisé en Web Performance, je vous accompagne dans la création ou la refonte de plateformes et blogs ultra-rapides. Contactez-moi dès aujourd'hui pour concevoir votre architecture SEO sur mesure et propulser vos positions en première page.</p>`
  },
  {
    id: 6,
    title: "Les clés pour optimiser 50+ articles sans perdre en qualité SEO",
    description: "Méthodologie pas à pas pour auditer, rafraîchir et réoptimiser un grand volume d'articles existants sans compromettre l'expérience lecteur.",
    category: "Stratégie SEO",
    date: "2026-08-04",
    author: "Précieux Trésor Tossou",
    tags: ["Audit SEO", "Content Marketing", "Optimisation Sémantique", "Stratégie de Contenu"],
    excerpt: "La méthode exacte pour optimiser un catalogue de 50+ articles...",
    content: `<h2>La méthode exacte pour optimiser un catalogue de 50+ articles</h2>
<p>La majorité des stratégies éditoriales échouent sur un point critique : l'illusion du toujours plus. Les entreprises investissent massivement dans la rédaction permanente de nouveaux contenus, persuadées que le volume est la clé unique de la croissance SEO. Pourtant, accumuler des dizaines d'articles publiés au fil des années crée inévitablement de la dette éditoriale : contenus obsolètes, cannibalisation des mots-clés et dégradation progressive du trafic organique global.</p>

<p>À l'inverse, le rafraîchissement de contenu (Content Pruning & Optimization) constitue l'un des leviers à plus fort retour sur investissement en référencement naturel. Au lieu de repartir d'une page blanche, optimiser un catalogue existant permet de capitaliser sur l'autorité déjà acquise par votre domaine. L'enjeu stratégique consiste à transformer un actif éditorial dormant en une machine à générer des conversions qualifiées, tout en maintenant une exigence rédactionnelle absolue.</p>

<h3>Étape 1 – L'Audit & la Triangulation des données</h3>
<p>Avant d'écrire la moindre ligne ou de modifier le moindre titre, une phase de diagnostic rigoureuse s'impose. Auditer un volume important de contenus nécessite de croiser au minimum trois sources de données complémentaires : Search Console pour les impressions et requêtes réelles, Google Analytics pour le comportement utilisateur et un outil d'analyse sémantique pour l'évaluation du positionnement.</p>

<p>La triangulation des données permet d'isoler immédiatement trois catégories d'articles clés. La première catégorie regroupe les contenus à fort potentiel : des pages positionnées entre la 4e et la 15e position sur des mots-clés stratégiques. Ces contenus nécessitent une simple réoptimisation ciblée pour basculer en première page. La deuxième catégorie concerne les articles sujets à la cannibalisation sémantique, où plusieurs URLs de votre site se disputent la même intention de recherche. La troisième catégorie rassemble les contenus zombies ou obsolètes, générant zéro trafic depuis plus de douze mois.</p>

<p>À l'issue de cette analyse, chaque URL doit se voir attribuer une décision claire et irréversible : maintenir en l'état, rafraîchir en profondeur, fusionner avec une autre page performante ou supprimer purement et simplement en appliquant une redirection 301 pertinente.</p>

<h3>Étape 2 – La Grille de Réoptimisation Sémantique</h3>
<p>L'optimisation d'un article existant ne se limite pas à ajouter quelques paragraphes à la volée. Elle obéit à une méthodologie structurée visant à moderniser le fond tout en maximisant la pertinence perçue par les moteurs de recherche. La première action consiste à restructurer la hiérarchie des balises Hn pour correspondre à l'évolution de l'intention de recherche actuelle.</p>

<p>Vous devez d'abord mettre à jour les données factuelles et enrichir le champ lexical principal. Intégrez les entités sémantiques secondaires que Google associe désormais à votre sujet principal. Ensuite, répondez directement et clairement aux requêtes émergentes identifiées dans la Search Console. L'objectif est de combler les lacunes d'information tout en éliminant le blabla inutile qui pénalise l'expérience de lecture.</p>

<p>Enfin, ajustez les éléments métadonnées. Récrivez le titre H1 et la balise Title pour améliorer le taux de clic (CTR) dans les résultats de recherche, tout en insérant des appels à l'action contextuels et des liens internes vers vos contenus récents les plus stratégiques.</p>

<h3>Étape 3 – Industrialiser le process sans industrialiser la plume</h3>
<p>Le risque majeur lors de la réoptimisation de plus de 50 articles est la perte de saveur rédactionnelle. Pour éviter de transformer vos textes en assemblages mécaniques de mots-clés, vous devez industrialiser l'organisation opérationnelle, et non l'écriture en elle-même.</p>

<p>Créez des briefs d'optimisation standardisés qui cadrent les attentes sémantiques, mais laissez une totale liberté de style aux rédacteurs. Découpez le travail par lots thématiques pour maintenir une cohérence globale du cocon sémantique. Chaque article réoptimisé doit conserver une voix de marque affirmée, des transitions naturelles et une vraie valeur ajoutée pour l'internaute. Le bon contenu SEO est avant tout un excellent contenu captivant.</p>

<h3>Conclusion & Appel à l'action</h3>
<p>Optimiser un catalogue de 50 articles ou plus ne relève pas de l'improvisation, mais d'une rigueur méthodologique sans faille. En combinant l'analyse statistique des performances, l'enrichissement sémantique ciblé et le maintien d'une qualité rédactionnelle irréprochable, vous transformez vos archives web en un puissant levier d'acquisition durable.</p>

<p>Pour déployer cette méthodologie sur votre propre catalogue :</p>

<p><strong>Triangulation analytique des données :</strong> Identifiez les 20% d'articles à fort potentiel générant 80% des opportunités de croissance rapide.</p>

<p><strong>Nettoyage des contenus cannibalises :</strong> Fusionnez les pages concurrentes et redirigez les URLs obsolètes pour consolider votre autorité sémantique.</p>

<p><strong>Restructuration sémantique des balises Hn :</strong> Alignez la structure des articles sur l'intention de recherche et les requêtes réelles des utilisateurs.</p>

<p><strong>Enrichissement éditorial et contextualisation :</strong> Mettez à jour les données, ajoutez des visuels optimisés et renforcez le maillage interne.</p>

<p><strong>Suivi et mesure de la reprise de trafic :</strong> Analysez l'évolution des positions et du CTR sur une période de 30 à 90 jours post-publication.</p>

<p>Vous souhaitez relancer la croissance de votre trafic organique sans repartir de zéro ? En tant que Lead Content Manager & Consultant SEO spécialisé dans la gestion de grands volumes éditoriaux, je réalise l'audit complet et la réoptimisation sur-mesure de votre catalogue de contenus. Contactez-moi dès aujourd'hui pour planifier l'audit stratégique de vos articles et libérer le potentiel SEO inexploité de votre marque.</p>

<h3>Foire Aux Questions (FAQ)</h3>
<p><strong>À quelle fréquence faut-il planifier le rafraîchissement d'un catalogue de contenus ?</strong> Un audit complet de catalogue doit être effectué au moins une fois par an. Pour les articles positionnés sur des secteurs très concurrentiels, une revue semestrielle est recommandée. Le suivi continu via la Search Console permet de détecter rapidement les baisses d'impressions.</p>

<p><strong>Faut-il modifier l'URL d'un article lors de sa réoptimisation sémantique ?</strong> Non, la règle d'or est de conserver l'URL d'origine afin de préserver l'historique d'indexation et le jus de liens accumulé par la page. Si un changement est inévitable, utilisez une redirection permanente 301.</p>

<p><strong>Comment gérer la date de publication lors du rafraîchissement d'un article ?</strong> Si les modifications apportées sont majeures, actualisez la date de publication et utilisez la balise Schema.org dateModified. Cela indique clairement à Google que le contenu a été révisé.</p>`
  }
];

// --- MAIN INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
  initBlog();
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

// --- MODULE 2: PROJECTS ---
function initProjects() {
  const container = document.getElementById("projects-container");
  
  Object.entries(projectsData).forEach(([id, data]) => {
    const card = document.createElement("div");
    card.className = "project-card scroll-reveal";
    card.setAttribute("data-project", id);
    card.innerHTML = `
      <div class="project-image">
        <img src="${data.image}" alt="${data.title}" loading="lazy" decoding="async">
      </div>
      <div class="project-info">
        <span class="project-category">${data.category}</span>
        <h3 class="project-title">${data.title}</h3>
        <p class="project-metric">${data.metric}</p>
        <button class="btn btn-small" aria-label="Voir les détails du projet">
          Voir les détails
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const projectCards = document.querySelectorAll(".project-card");

  const modalImg = document.getElementById("modal-img");
  const modalCategory = document.getElementById("modal-category");
  const modalMetric = document.getElementById("modal-metric-badge");
  const modalTitle = document.getElementById("modal-title-text");
  const modalDescP1 = document.getElementById("modal-desc-p1");
  const modalDescP2 = document.getElementById("modal-desc-p2");
  const modalSkillsTags = document.getElementById("modal-skills-tags");
  const modalDeliverablesTags = document.getElementById("modal-deliverables-tags");
  const modalCTASection = document.getElementById("modal-cta-section");

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

    // Gérer les liens externes et PDF
    modalCTASection.innerHTML = "";
    if (data.link) {
      const linkBtn = document.createElement("a");
      linkBtn.href = data.link;
      linkBtn.target = "_blank";
      linkBtn.rel = "noopener noreferrer";
      linkBtn.className = "btn";
      linkBtn.innerHTML = `Visiter le projet <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
      modalCTASection.appendChild(linkBtn);
    }
    if (data.pdfLink) {
      const pdfBtn = document.createElement("a");
      pdfBtn.href = data.pdfLink;
      pdfBtn.target = "_blank";
      pdfBtn.rel = "noopener noreferrer";
      pdfBtn.className = "btn btn-secondary";
      pdfBtn.innerHTML = `Consulter le PDF <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
      modalCTASection.appendChild(pdfBtn);
    }

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

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
}

// --- MODULE 3: BLOG ---
function initBlog() {
  const blogContainer = document.getElementById("blog-container");
  const blogSearch = document.getElementById("blog-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const blogModal = document.getElementById("blog-modal");
  const blogModalClose = document.getElementById("blog-modal-close");

  let currentFilter = "all";
  let currentSearch = "";

  const renderBlogPosts = () => {
    blogContainer.innerHTML = "";
    
    let filtered = blogData;
    
    if (currentFilter !== "all") {
      filtered = filtered.filter(post => post.category === currentFilter);
    }
    
    if (currentSearch) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()))
      );
    }

    if (filtered.length === 0) {
      blogContainer.innerHTML = '<p class="no-results">Aucun article ne correspond à votre recherche.</p>';
      return;
    }

    filtered.forEach(post => {
      const article = document.createElement("article");
      article.className = "blog-card scroll-reveal";
      article.innerHTML = `
        <div class="blog-card-header">
          <span class="blog-badge">${post.category}</span>
          <span class="blog-date">${new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.description}</p>
        <div class="blog-tags">
          ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
        </div>
        <button class="btn btn-small blog-read-more" data-blog-id="${post.id}">
          Lire l'article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      `;
      blogContainer.appendChild(article);
    });

    document.querySelectorAll(".blog-read-more").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const blogId = e.currentTarget.getAttribute("data-blog-id");
        openBlogModal(parseInt(blogId));
      });
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderBlogPosts();
    });
  });

  blogSearch.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderBlogPosts();
  });

  const openBlogModal = (blogId) => {
    const post = blogData.find(p => p.id === blogId);
    if (!post) return;

    document.getElementById("blog-modal-category").textContent = post.category;
    document.getElementById("blog-modal-date").textContent = new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("blog-modal-title").textContent = post.title;
    document.getElementById("blog-modal-content").innerHTML = post.content;
    
    const tagsContainer = document.getElementById("blog-modal-tags");
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');

    blogModal.classList.add("active");
    blogModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeBlogModal = () => {
    blogModal.classList.remove("active");
    blogModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  blogModalClose.addEventListener("click", closeBlogModal);
  blogModal.addEventListener("click", (e) => {
    if (e.target === blogModal) {
      closeBlogModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && blogModal.classList.contains("active")) {
      closeBlogModal();
    }
  });

  renderBlogPosts();
}

// --- MODULE 4: SKILLS ANIMATION ---
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

// --- MODULE 5: SCROLL REVEAL ---
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

// --- MODULE 6: CONTACT FORM (Web3Forms) ---
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const submitBtn = document.getElementById("btn-submit-form");
  const statusMessage = document.getElementById("form-status-message");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoader = submitBtn.querySelector(".btn-loader");
    
    submitBtn.disabled = true;
    btnText.style.display = "none";
    btnLoader.style.display = "inline";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form)
      });

      if (response.ok) {
        statusMessage.style.color = "var(--accent-green)";
        statusMessage.textContent = "✓ Message envoyé avec succès ! Je vous recontacterai rapidement.";
        form.reset();
        
        setTimeout(() => {
          statusMessage.textContent = "";
        }, 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      statusMessage.style.color = "var(--accent-red, #ef4444)";
      statusMessage.textContent = "✗ Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.";
      console.error("Form error:", error);
    } finally {
      submitBtn.disabled = false;
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
    }
  });
}

console.log(
  "%cPortfolio Précieux Trésor Tossou - v2 FINALE (Contenu complet des DOCX)",
  "font-size: 16px; font-weight: bold; color: #8b5cf6; margin: 10px 0;"
);
