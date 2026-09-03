/**
 * Portfolio Main Application Logic
 * Dynamic rendering, theme management, tab filtering, typewriter effect, modal handling
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure portfolioData is loaded
  const data = typeof portfolioData !== "undefined" ? portfolioData : window.portfolioData;
  if (!data) {
    console.error("portfolioData is missing!");
    return;
  }

  // Application State
  let currentTheme = localStorage.getItem("portfolio-theme") || "dark";
  let activeSkillCategory = "all";
  let activeProjectCategory = "all";

  // Elements
  const navbar = document.getElementById("navbar");
  const themeToggle = document.getElementById("themeToggle");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // SVG Icons Map Helper
  const getIconSvg = (name) => {
    const icons = {
      award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      smile: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      layout: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
      cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      react: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"></ellipse><circle cx="12" cy="12" r="2" fill="currentColor"></circle></svg>`,
      server: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      sparkles: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>`,
      external: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
      github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
      linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
      map: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
      moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    };
    return icons[name] || icons.code;
  };

  // Set Initial Theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggle.innerHTML = currentTheme === "dark" ? getIconSvg("sun") : getIconSvg("moon");

  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("portfolio-theme", currentTheme);
    themeToggle.innerHTML = currentTheme === "dark" ? getIconSvg("sun") : getIconSvg("moon");
  });

  // Mobile Navigation Menu Toggle
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Navbar Scroll Shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 1. Render Hero Personal Details
  const renderHero = () => {
    document.getElementById("heroBadgeText").textContent = data.personal.statusBadge;
    document.getElementById("heroName").textContent = data.personal.name;
    document.getElementById("heroDescription").textContent = data.personal.shortBio;
    document.getElementById("heroAvatarImg").src = data.personal.avatar;

    // Social Links
    const socialContainer = document.getElementById("heroSocials");
    socialContainer.innerHTML = `
      <a href="${data.personal.github}" target="_blank" class="btn-icon" aria-label="GitHub">${getIconSvg('github')}</a>
      <a href="${data.personal.linkedin}" target="_blank" class="btn-icon" aria-label="LinkedIn">${getIconSvg('linkedin')}</a>
    `;

    // Typewriter effect
    const typewriterEl = document.getElementById("typewriterText");
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentTitle = data.personal.dynamicTitles[titleIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % data.personal.dynamicTitles.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    };

    typeEffect();
  };

  // 2. Render Stats Grid
  const renderStats = () => {
    const statsGrid = document.getElementById("statsGrid");
    statsGrid.innerHTML = data.stats.map(stat => `
      <div class="glass-card stat-card">
        <div class="stat-icon">${getIconSvg(stat.icon)}</div>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join("");
  };

  // 3. Render About, Mindset & Focus Areas
  const renderAbout = () => {
    document.getElementById("aboutDetailedBio").innerHTML = `
      <p style="margin-bottom: 1rem;">${data.personal.detailedAbout}</p>
    `;
    
    const mindsetCard = document.getElementById("buildingMindsetCard");
    if (mindsetCard) {
      mindsetCard.innerHTML = `
        <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-emerald); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>💡 Building Mindset</span>
        </div>
        <blockquote style="font-size: 1.25rem; font-weight: 700; font-family: 'Outfit', sans-serif; color: var(--text-primary); margin-bottom: 1rem; line-height: 1.4; border-left: 3px solid var(--accent-emerald); padding-left: 1rem;">
          “Can I build something that makes this easier, smarter, or more secure?”
        </blockquote>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6;">${data.personal.buildingMindset}</p>
        <div style="padding: 0.8rem 1.2rem; background: rgba(16, 185, 129, 0.1); border-radius: var(--radius-md); border: 1px solid rgba(16, 185, 129, 0.25); color: var(--accent-emerald); font-weight: 700; font-family: 'Fira Code', monospace; display: inline-block;">
          🛡️ Learn. Build. Experiment. Secure. Repeat.
        </div>
      `;
    }

    const servicesGrid = document.getElementById("servicesGrid");
    servicesGrid.innerHTML = data.services.map((svc, idx) => `
      <div class="glass-card service-card scroll-3d-reveal delay-${(idx % 4) + 1}">
        <div class="hud-corner-tl"></div>
        <div class="hud-corner-tr"></div>
        <div class="hud-corner-bl"></div>
        <div class="hud-corner-br"></div>
        <div class="service-icon-box">${getIconSvg(svc.icon)}</div>
        <h3 class="service-title">${svc.title}</h3>
        <p class="service-desc">${svc.description}</p>
        <div class="service-tags">
          ${svc.highlights.map(h => `<span class="tag">${h}</span>`).join("")}
        </div>
      </div>
    `).join("");
  };

  // 4. Render Skills Matrix with Filtering
  const renderSkills = () => {
    const filterContainer = document.getElementById("skillsFilter");
    filterContainer.innerHTML = data.skillCategories.map(cat => `
      <button class="filter-btn ${cat.id === activeSkillCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join("");

    const filteredSkills = activeSkillCategory === "all" 
      ? data.skills 
      : data.skills.filter(s => s.category === activeSkillCategory);

    const skillsGrid = document.getElementById("skillsGrid");
    skillsGrid.innerHTML = filteredSkills.map((skill, idx) => `
      <div class="glass-card skill-card scroll-3d-reveal delay-${(idx % 4) + 1}">
        <div class="hud-corner-tl"></div>
        <div class="hud-corner-tr"></div>
        <div class="hud-corner-bl"></div>
        <div class="hud-corner-br"></div>
        <div class="skill-header">
          <div class="skill-name-group">
            <div class="skill-icon">${getIconSvg(skill.icon)}</div>
            <span class="skill-title">${skill.name}</span>
          </div>
          <span class="skill-percent">${skill.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `).join("");

    // Attach click listeners to skill filter buttons
    filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        activeSkillCategory = e.target.dataset.cat;
        renderSkills();
        setup3dScrollObserver();
      });
    });
  };

  // 5. Render Timeline (Experience & Education)
  const renderTimeline = () => {
    const timelineContainer = document.getElementById("experienceTimeline");
    
    const expHTML = data.experience.map((exp, idx) => `
      <div class="timeline-item scroll-3d-reveal delay-${(idx % 3) + 1}">
        <div class="timeline-dot"></div>
        <div class="glass-card timeline-card">
          <div class="hud-corner-tl"></div>
          <div class="hud-corner-tr"></div>
          <div class="hud-corner-bl"></div>
          <div class="hud-corner-br"></div>
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.title}</h3>
              <div class="timeline-company">${exp.company} • ${exp.location}</div>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <p class="service-desc">${exp.description}</p>
          <ul class="timeline-achievements">
            ${exp.achievements.map(a => `<li>${a}</li>`).join("")}
          </ul>
          <div class="service-tags">
            ${exp.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");

    const eduHTML = data.education.map((edu, idx) => `
      <div class="timeline-item scroll-3d-reveal delay-${(idx % 3) + 1}">
        <div class="timeline-dot" style="border-color: var(--accent-cyan); box-shadow: 0 0 12px var(--accent-cyan);"></div>
        <div class="glass-card timeline-card">
          <div class="hud-corner-tl"></div>
          <div class="hud-corner-tr"></div>
          <div class="hud-corner-bl"></div>
          <div class="hud-corner-br"></div>
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${edu.degree}</h3>
              <div class="timeline-company">${edu.institution}</div>
            </div>
            <span class="timeline-period" style="background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan);">${edu.period}</span>
          </div>
          <p class="service-desc">${edu.details}</p>
          <span class="tag" style="color: var(--accent-emerald); border-color: rgba(16, 185, 129, 0.3);">${edu.score}</span>
        </div>
      </div>
    `).join("");

    timelineContainer.innerHTML = expHTML + eduHTML;
  };

  // 6. Render Projects Showcase with Modal Trigger
  const renderProjects = () => {
    const projectsGrid = document.getElementById("projectsGrid");
    
    projectsGrid.innerHTML = data.projects.map((proj, idx) => `
      <div class="glass-card project-card ${proj.status || ''} scroll-3d-reveal delay-${(idx % 4) + 1}" data-proj-id="${proj.id}">
        <div class="hud-corner-tl"></div>
        <div class="hud-corner-tr"></div>
        <div class="hud-corner-bl"></div>
        <div class="hud-corner-br"></div>
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-img" />
          <span class="project-status-badge ${proj.status || 'in-progress'}">${proj.statusText || '🔒 In Development'}</span>
          <div class="project-overlay">
            <button class="btn btn-primary btn-sm view-details-btn" data-proj-id="${proj.id}">
              Quick View
            </button>
          </div>
        </div>
        <div class="project-body">
          <span class="project-category-badge">${proj.category.toUpperCase()}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.subtitle}</p>
          <div class="project-tags">
            ${proj.techStack.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");

    // Attach click events to project cards
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const projId = card.dataset.projId;
        openProjectModal(projId);
      });
    });
  };

  // Open Project Modal
  const openProjectModal = (projId) => {
    const proj = data.projects.find(p => p.id === projId);
    if (!proj) return;

    const modalBody = document.getElementById("modalBody");

    // Red Processing Alert Popup for Locked/Processing Projects
    if (proj.status === "processing") {
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="width: 76px; height: 76px; margin: 0 auto 1.5rem auto; border-radius: 50%; background: rgba(239, 68, 68, 0.15); border: 2px solid #ef4444; color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 2.4rem; box-shadow: 0 0 30px rgba(239, 68, 68, 0.4); animation: pulse 2s infinite;">
            🔒
          </div>
          <div style="display: inline-block; padding: 0.4rem 1.2rem; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; border-radius: 9999px; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.12em; margin-bottom: 1.2rem;">
            🚫 ACCESS RESTRICTED • CLASSIFIED
          </div>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #ef4444; margin-bottom: 0.8rem; font-family: 'Outfit', sans-serif;">
            Processing...
          </h2>
          <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 520px; margin: 0 auto 2rem auto; line-height: 1.6;">
            This project is currently under active engineering and security research. Codebase, live architecture, and documentation are restricted while processing.
          </p>
        </div>
      `;
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      return;
    }

    // Modal Content
    modalBody.innerHTML = `
      <div class="project-modal-header">
        <span class="project-category-badge">${proj.category.toUpperCase()}</span>
        <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-top: 0.4rem; font-family: 'Outfit', sans-serif;">${proj.title}</h2>
      </div>

      ${proj.image ? `
        <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; max-height: 350px; background: rgba(15, 23, 42, 0.6); display: flex; align-items: center; justify-content: center;">
          <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='assets/project-scanner.png';" />
        </div>
      ` : ''}

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.5rem;">Project Overview</h3>
        <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${proj.description}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem;">Key Architecture & Features</h3>
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: 1fr; gap: 0.5rem;">
          ${(proj.keyFeatures || []).map(feat => `
            <li style="display: flex; align-items: flex-start; gap: 0.5rem; color: var(--text-primary); font-size: 0.9rem;">
              <span style="color: var(--accent-emerald); font-weight: 800;">✓</span>
              <span>${feat}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Technologies Used</h3>
        <div class="project-tags">
          ${proj.techStack.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
        ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" class="btn btn-primary btn-sm">Live Application ${getIconSvg('external')}</a>` : ''}
        ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" class="btn btn-outline btn-sm">GitHub Repository ${getIconSvg('github')}</a>` : ''}
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Close Modal
  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // 7. Render Contact Section
  const renderContact = () => {
    const contactInfoContainer = document.getElementById("contactInfoItems");
    contactInfoContainer.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">${getIconSvg('mail')}</div>
        <div>
          <div class="contact-label">Email Address</div>
          <a href="mailto:${data.personal.email}" class="contact-value" style="color: inherit; text-decoration: none;">${data.personal.email}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">${getIconSvg('phone')}</div>
        <div>
          <div class="contact-label">Phone Number</div>
          <a href="tel:${data.personal.phone.replace(/\s+/g, '')}" class="contact-value" style="color: inherit; text-decoration: none;">${data.personal.phone}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">${getIconSvg('map')}</div>
        <div>
          <div class="contact-label">Location</div>
          <div class="contact-value">${data.personal.location}</div>
        </div>
      </div>
    `;

    // Handle Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const successMsg = document.getElementById("contactSuccessMsg");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending Message...";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        contactForm.reset();
        successMsg.style.display = "block";

        setTimeout(() => {
          successMsg.style.display = "none";
        }, 5000);
      }, 1200);
    });
  };

  // 8. Render Arrow Dropdown Certificates Section
  const renderCertificates = () => {
    const certGrid = document.getElementById("certificatesGrid");
    const certDropdownBtn = document.getElementById("certDropdownBtn");
    const certArrowIcon = document.getElementById("certArrowIcon");
    const certDropdownDrawer = document.getElementById("certDropdownDrawer");
    if (!certGrid || !data.certificates) return;

    if (data.certificates.length === 0) {
      certGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📜</div>
          <strong style="display: block; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.3rem;">Ready for Your Certificates</strong>
          <span>Send your certificate photos or details, and they will be displayed here!</span>
        </div>
      `;
    } else {
      certGrid.innerHTML = data.certificates.map((c, idx) => {
        const imgSrc = c.image ? encodeURI(c.image) : '';
        return `
          <div class="glass-card cert-card scroll-3d-reveal delay-${(idx % 4) + 1}" data-cert-id="${c.id}" style="padding: 0; overflow: hidden; height: 100%;">
            <div class="hud-corner-tl"></div>
            <div class="hud-corner-tr"></div>
            <div class="hud-corner-bl"></div>
            <div class="hud-corner-br"></div>
            ${imgSrc ? `
              <div class="project-img-wrapper" style="height: 175px; background: rgba(15, 23, 42, 0.8); display: flex; align-items: center; justify-content: center; padding: 0.4rem;">
                <img src="${imgSrc}" alt="${c.title}" class="project-img" style="object-fit: contain; width: 100%; height: 100%; border-radius: var(--radius-sm);" onerror="this.onerror=null; this.src='assets/project-scanner.png';" />
              </div>
            ` : ''}
            <div style="padding: 1.1rem; display: flex; flex-direction: column; flex-grow: 1;">
              <div class="cert-header" style="margin-bottom: 0.5rem;">
                <span class="cert-badge" style="font-size: 0.72rem; padding: 0.2rem 0.55rem;">${getIconSvg(c.icon || 'award')} ${c.badge}</span>
              </div>
              <h3 class="cert-title" style="font-size: 0.98rem; margin-bottom: 0.25rem; line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${c.title}</h3>
              <div class="cert-issuer" style="font-size: 0.8rem; margin-bottom: 0.6rem; color: var(--accent-cyan);">Issued by ${c.issuer}</div>
              <div style="margin-top: auto; font-size: 0.78rem; color: var(--accent-cyan); font-weight: 600; display: flex; align-items: center; gap: 0.3rem;">
                <span>🔍 Inspect Certificate</span>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Arrow Toggle Dropdown Event (Hidden by default, expands on click)
    if (certDropdownBtn && certDropdownDrawer) {
      certDropdownBtn.addEventListener("click", () => {
        const isOpen = certDropdownDrawer.classList.toggle("open");
        if (certArrowIcon) {
          certArrowIcon.classList.toggle("open", isOpen);
        }
      });
    }

    // Attach Click Listener to Certificate Cards for Modal Deep-Dive
    const certCards = certGrid.querySelectorAll(".cert-card");
    certCards.forEach(card => {
      card.addEventListener("click", () => {
        const certId = card.dataset.certId;
        openCertModal(certId);
      });
    });
  };

  // Open Certificate Modal Inspection Window
  const openCertModal = (certId) => {
    const cert = data.certificates.find(c => c.id === certId);
    if (!cert) return;

    const certImgSrc = cert.image ? encodeURI(cert.image) : '';
    modalBody.innerHTML = `
      ${certImgSrc ? `
        <div class="modal-img-container" style="height: 420px; background: rgba(15, 23, 42, 0.9); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-color); margin-bottom: 1.5rem; padding: 0.5rem;">
          <img src="${certImgSrc}" alt="${cert.title}" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: var(--radius-sm);" />
        </div>
      ` : ''}
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="cert-badge">${getIconSvg(cert.icon || 'award')} ${cert.badge}</span>
        <span class="cert-date">${cert.date}</span>
      </div>
      <h2 class="modal-title" style="font-size: 1.8rem; margin-bottom: 0.4rem;">${cert.title}</h2>
      <div class="cert-issuer" style="font-size: 1.05rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 1.2rem;">
        Issued by ${cert.issuer}
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin-bottom: 1.5rem;">
        ${cert.description}
      </p>
      
      ${cert.skills ? `
        <h4 class="modal-section-heading">Key Skills & Verification</h4>
        <div class="project-tags" style="margin-bottom: 1.5rem;">
          ${cert.skills.map(s => `<span class="tag">${s}</span>`).join("")}
        </div>
      ` : ''}

      <div class="modal-actions">
        ${cert.verificationUrl && cert.verificationUrl !== '#' ? `
          <a href="${cert.verificationUrl}" target="_blank" class="btn btn-primary">
            Verify Credential ${getIconSvg('external')}
          </a>
        ` : ''}
        <button class="btn btn-secondary" onclick="document.getElementById('modalCloseBtn').click()">
          Close Preview
        </button>
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Render TryHackMe Profile & Interactive CTF Diagram
  const renderTryHackMe = () => {
    const container = document.getElementById("tryhackmeContainer");
    if (!container || !data.tryhackme) return;

    const thm = data.tryhackme;
    let activeTab = "3d"; // default view: '3d', 'live', or 'area'
    let liveAnimId = null;

    const renderGraphContent = () => {
      const display = document.getElementById("thmGraphDisplay");
      if (!display) return;

      if (liveAnimId) {
        cancelAnimationFrame(liveAnimId);
        liveAnimId = null;
      }

      if (activeTab === "3d") {
        display.innerHTML = `
          <div class="thm-3d-stage" id="thm3dStage">
            <div class="thm-3d-scene" id="thm3dScene">
              <div class="thm-3d-floor"></div>

              <div class="thm-3d-column">
                <div class="thm-3d-val" style="color: #67e8f9; text-shadow: 0 0 8px #06b6d4;">40</div>
                <div class="thm-3d-bar-front" style="height: 55px; background: linear-gradient(180deg, #06b6d4 0%, #0891b2 100%); box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);">
                  <div class="thm-3d-bar-top" style="background: #67e8f9; box-shadow: 0 0 10px #67e8f9;"></div>
                </div>
                <div class="thm-3d-label">Jan</div>
              </div>

              <div class="thm-3d-column">
                <div class="thm-3d-val" style="color: #93c5fd; text-shadow: 0 0 8px #3b82f6;">85</div>
                <div class="thm-3d-bar-front" style="height: 95px; background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%); box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);">
                  <div class="thm-3d-bar-top" style="background: #93c5fd; box-shadow: 0 0 10px #93c5fd;"></div>
                </div>
                <div class="thm-3d-label">Mar</div>
              </div>

              <div class="thm-3d-column">
                <div class="thm-3d-val" style="color: #c4b5fd; text-shadow: 0 0 8px #8b5cf6;">125</div>
                <div class="thm-3d-bar-front" style="height: 130px; background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%); box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);">
                  <div class="thm-3d-bar-top" style="background: #c4b5fd; box-shadow: 0 0 10px #c4b5fd;"></div>
                </div>
                <div class="thm-3d-label">May</div>
              </div>

              <div class="thm-3d-column">
                <div class="thm-3d-val" style="color: #6ee7b7; text-shadow: 0 0 8px #10b981;">165</div>
                <div class="thm-3d-bar-front" style="height: 165px; background: linear-gradient(180deg, #10b981 0%, #047857 100%); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);">
                  <div class="thm-3d-bar-top" style="background: #6ee7b7; box-shadow: 0 0 10px #6ee7b7;"></div>
                </div>
                <div class="thm-3d-label">Jul</div>
              </div>

              <div class="thm-3d-column">
                <div class="thm-3d-val" style="color: #fef08a; text-shadow: 0 0 10px #f59e0b;">200 👑</div>
                <div class="thm-3d-bar-front" style="height: 190px; background: linear-gradient(180deg, #f59e0b 0%, #b45309 100%); box-shadow: 0 0 25px rgba(245, 158, 11, 0.7);">
                  <div class="thm-3d-bar-top" style="background: #fef08a; box-shadow: 0 0 12px #fef08a;"></div>
                </div>
                <div class="thm-3d-label" style="color: #fef08a;">Sep</div>
              </div>
            </div>
          </div>
        `;

        // Smooth Mouse Tilt Response
        const stage = document.getElementById("thm3dStage");
        const scene = document.getElementById("thm3dScene");
        if (stage && scene) {
          stage.addEventListener("mousemove", (e) => {
            const rect = stage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const rx = 15 - y * 12;
            const ry = x * 16;
            scene.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
          });

          stage.addEventListener("mouseleave", () => {
            scene.style.transform = `rotateX(15deg) rotateY(0deg)`;
          });
        }
      } else if (activeTab === "live") {
        display.innerHTML = `
          <div class="thm-live-stage">
            <div class="thm-live-badge">
              <span class="thm-live-pulse"></span>
              LIVE FEED • 200 ROOMS ACTIVE
            </div>
            <canvas id="thmLiveCanvas" width="480" height="250" style="width: 100%; height: 100%;"></canvas>
          </div>
        `;

        const canvas = document.getElementById("thmLiveCanvas");
        if (canvas) {
          const ctx = canvas.getContext("2d");
          let step = 0;

          const drawLiveStream = () => {
            step += 0.05;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dark grid background
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let x = 0; x < canvas.width; x += 30) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, canvas.height);
              ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += 30) {
              ctx.beginPath();
              ctx.moveTo(0, y);
              ctx.lineTo(canvas.width, y);
              ctx.stroke();
            }

            // Sine waveform live stream
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#10b981";
            for (let x = 0; x < canvas.width; x++) {
              const y = 140 + Math.sin(x * 0.03 + step) * 25 + Math.cos(x * 0.01 + step * 1.5) * 15;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Glow overlay wave
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#06b6d4";
            for (let x = 0; x < canvas.width; x++) {
              const y = 140 + Math.cos(x * 0.02 + step * 2) * 35;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Pulse node marker
            const px = (step * 80) % canvas.width;
            const py = 140 + Math.sin(px * 0.03 + step) * 25 + Math.cos(px * 0.01 + step * 1.5) * 15;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fillStyle = "#f59e0b";
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 2;
            ctx.stroke();

            liveAnimId = requestAnimationFrame(drawLiveStream);
          };

          drawLiveStream();
        }
      } else {
        // Area Curve Graph
        display.innerHTML = `
          <div style="position: relative; width: 100%; height: 250px;">
            <svg viewBox="0 0 500 200" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id="thmChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
                </linearGradient>
                <linearGradient id="thmLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#06b6d4"/>
                  <stop offset="50%" stop-color="#10b981"/>
                  <stop offset="100%" stop-color="#f59e0b"/>
                </linearGradient>
              </defs>

              <line x1="40" y1="30" x2="480" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4"/>
              <line x1="40" y1="75" x2="480" y2="75" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4"/>
              <line x1="40" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4"/>
              <line x1="40" y1="160" x2="480" y2="160" stroke="rgba(255,255,255,0.1)"/>

              <path d="M 50 140 Q 150 110, 250 80 T 450 30 L 450 160 L 50 160 Z" fill="url(#thmChartGrad)"/>
              <path d="M 50 140 Q 150 110, 250 80 T 450 30" fill="none" stroke="url(#thmLineGrad)" stroke-width="4" stroke-linecap="round"/>

              <g fill="#10b981">
                <circle cx="50" cy="140" r="5" stroke="#ffffff" stroke-width="2"/>
                <text x="50" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Jan (40)</text>

                <circle cx="150" cy="110" r="5" stroke="#ffffff" stroke-width="2"/>
                <text x="150" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Mar (85)</text>

                <circle cx="250" cy="80" r="5" stroke="#ffffff" stroke-width="2"/>
                <text x="250" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">May (125)</text>

                <circle cx="350" cy="55" r="5" stroke="#ffffff" stroke-width="2"/>
                <text x="350" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Jul (165)</text>

                <circle cx="450" cy="30" r="7" fill="#f59e0b" stroke="#ffffff" stroke-width="2.5"/>
                <text x="450" y="180" fill="#f59e0b" font-weight="bold" font-size="11" text-anchor="middle">Sep (200)</text>
              </g>
            </svg>
          </div>
        `;
      }
    };

    container.innerHTML = `
      <div class="thm-card scroll-3d-reveal">
        <div class="hud-corner-tl"></div>
        <div class="hud-corner-tr"></div>
        <div class="hud-corner-bl"></div>
        <div class="hud-corner-br"></div>

        <!-- Header Profile Info -->
        <div class="thm-header-row scroll-3d-reveal delay-1">
          <div class="thm-user-info">
            <div class="thm-avatar-circle">
              P
              <span class="thm-online-dot" title="Active CTF Security Researcher"></span>
            </div>
            <div class="thm-user-meta">
              <div class="thm-username">
                <span>${thm.username}</span>
                <span style="font-size: 1.1rem;" title="Verified Profile">👤</span>
              </div>
              <div class="thm-badges-group">
                <span class="thm-tag-guru">⚡ [GURU]</span>
                <span class="thm-tag-sub">${thm.country}</span>
                <span class="thm-tag-sub">[${thm.userType}]</span>
              </div>
              <div class="thm-followers-row" style="margin-top: 0.2rem;">
                <span><strong>${thm.following}</strong> Following</span>
                <span>•</span>
                <span><strong>${thm.followers}</strong> Followers</span>
                <span>•</span>
                <span style="color: var(--accent-emerald); font-weight: 700;">${thm.percentile} Global</span>
              </div>
            </div>
          </div>

          <div class="thm-action-btns">
            <a href="${thm.profileUrl}" target="_blank" class="thm-action-btn">
              <span>🔗</span> [Add Socials]
            </a>
            <a href="${thm.profileUrl}" target="_blank" class="thm-action-btn">
              <span>📅</span> [Add Calendly Link]
            </a>
            <a href="${thm.profileUrl}" target="_blank" class="thm-action-btn" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.4); color: var(--accent-emerald);">
              <span>📤</span> [Share...]
            </a>
          </div>
        </div>

        <!-- Stat Grid (4 Main Boxes matching THM Dashboard) -->
        <div class="thm-stats-grid scroll-3d-reveal delay-2">
          <div class="thm-stat-card" style="border-top: 3px solid var(--accent-primary);">
            <div class="thm-stat-val" style="color: var(--accent-cyan);">#${thm.rank}</div>
            <div class="thm-stat-lbl">Global Rank</div>
          </div>
          <div class="thm-stat-card" style="border-top: 3px solid #f59e0b;">
            <div class="thm-stat-val" style="color: #f59e0b;">${thm.badges}</div>
            <div class="thm-stat-lbl">Badges Earned</div>
          </div>
          <div class="thm-stat-card" style="border-top: 3px solid #ef4444;">
            <div class="thm-stat-val" style="color: #ef4444;">${thm.streak}</div>
            <div class="thm-stat-lbl">Day Streak</div>
          </div>
          <div class="thm-stat-card" style="border-top: 3px solid var(--accent-emerald);">
            <div class="thm-stat-val" style="color: var(--accent-emerald);">${thm.roomsCompleted}</div>
            <div class="thm-stat-lbl">Rooms Completed</div>
          </div>
        </div>

        <!-- Diagram & Skill Breakdown Grid -->
        <div class="thm-diagram-grid scroll-3d-reveal delay-3">
          <!-- Left: Multi-Mode Graph Visualizer (3D / Live / Area) -->
          <div class="thm-graph-card">
            <div class="thm-graph-title">
              <span>📊 CTF Performance Visualizer</span>
              <span style="font-size: 0.82rem; color: var(--accent-emerald); font-weight: 700;">+200 Rooms Completed</span>
            </div>

            <!-- Mode Switcher Tabs -->
            <div class="thm-tab-bar">
              <button class="thm-tab-btn active" data-mode="3d">
                🧊 3D Perspective Chart
              </button>
              <button class="thm-tab-btn" data-mode="live">
                ⚡ Live Stream Feed
              </button>
              <button class="thm-tab-btn" data-mode="area">
                📈 Trajectory Flow
              </button>
            </div>
            
            <div id="thmGraphDisplay"></div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; font-size: 0.8rem; color: var(--text-secondary);">
              <span>🎯 Interactive Perspective Controls</span>
              <span>🏆 Top 1% Global Ranking (#36,335)</span>
            </div>
          </div>

          <!-- Right: Category Room Progress Bars -->
          <div class="thm-categories-card">
            <div class="thm-graph-title" style="margin-bottom: 1rem;">
              <span>🎯 Room Skill Categories</span>
              <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">200 Total</span>
            </div>

            ${thm.categories.map(cat => `
              <div class="thm-cat-item">
                <div class="thm-cat-header">
                  <span style="color: var(--text-primary); font-weight: 600;">${cat.icon || '📌'} ${cat.name}</span>
                  <span style="color: ${cat.color}; font-weight: 700;">${cat.rooms} Rooms</span>
                </div>
                <div class="thm-cat-track">
                  <div class="thm-cat-fill" style="width: ${cat.percent}%; background: ${cat.color}; box-shadow: 0 0 10px ${cat.color};"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Featured Unlocked Badges Showcase Grid -->
        <div class="scroll-3d-reveal delay-4" style="margin-top: 2rem;">
          <div class="thm-graph-title" style="margin-bottom: 0.8rem;">
            <span>🏅 Unlocked TryHackMe Badges (${thm.badges} Total)</span>
            <span style="font-size: 0.82rem; color: var(--accent-emerald); font-weight: 700;">Verified Security Pathways</span>
          </div>

          <div class="thm-badges-grid">
            ${(thm.featuredBadges || []).map(b => `
              <div class="thm-badge-card">
                <div class="thm-badge-icon">${b.icon}</div>
                <div class="thm-badge-name">${b.name}</div>
                <div style="font-size: 0.68rem; color: var(--accent-cyan); margin-top: 0.2rem;">${b.category}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Console Live Activity Log Feed -->
        <div class="thm-terminal-box scroll-3d-reveal delay-4">
          <div class="thm-term-header">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span class="thm-term-dot" style="background: #ef4444;"></span>
              <span class="thm-term-dot" style="background: #f59e0b;"></span>
              <span class="thm-term-dot" style="background: #10b981;"></span>
              <span style="margin-left: 0.5rem; font-weight: 700; color: #94a3b8;">[THM-CONSOLE] Live Activity Stream</span>
            </div>
            <span style="color: #10b981;">● CONNECTED</span>
          </div>

          ${(thm.recentLogs || []).map(log => `
            <div class="thm-term-line">
              <span><strong style="color: #6ee7b7;">pritam@thm:~$</strong> solve --room "${log.room}"</span>
              <span style="color: #fef08a; font-weight: 700;">${log.status} (${log.points})</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Render initial graph view
    renderGraphContent();

    // Tab Switch Event Listener
    const tabBtns = container.querySelectorAll(".thm-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeTab = btn.getAttribute("data-mode");
        renderGraphContent();
      });
    });
  };

  // 3D Bidirectional Scroll Observer (Triggers when entering screen half)
  const setup3dScrollObserver = () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -22% 0px", // Triggers when element crosses into lower-middle half of screen
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          // Reverse animation when leaving screen half!
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-3d-reveal").forEach(el => {
      observer.observe(el);
    });
  };

  // Real-Time 3D Mouse Parallax Tilt for All Portfolio Cards
  const setup3dCardTilt = () => {
    const cardSelectors = ".project-card, .service-card, .skill-card, .timeline-card, .stat-card, .cert-card, .thm-card, .thm-stat-card";
    
    document.querySelectorAll(cardSelectors).forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const rx = -y * 14;
        const ry = x * 14;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px) scale(1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`;
      });
    });
  };

  // 5-Second Hover Hold Focus Mode & 4-Corner Dispersal
  const setup5SecondHoverFocus = () => {
    let activeHoverTimer = null;
    let activeChargingBar = null;
    let activeTimerRing = null;
    let focusedElement = null;
    let dispersedElements = [];

    const exitFocusMode = () => {
      if (focusedElement) {
        focusedElement.classList.remove("is-focused-element");
        focusedElement = null;
      }
      dispersedElements.forEach(el => {
        el.classList.remove("disperse-tl", "disperse-tr", "disperse-bl", "disperse-br");
      });
      dispersedElements = [];
      document.body.classList.remove("cyber-focus-mode");
    };

    // Close on Escape Key or Click Outside
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") exitFocusMode();
    });

    const cardSelectors = ".project-card, .service-card, .skill-card, .timeline-card, .stat-card, .cert-card, .thm-card";

    document.querySelectorAll(cardSelectors).forEach(card => {
      card.addEventListener("mouseenter", () => {
        if (focusedElement) return;

        // Create charging bar & countdown ring indicator
        if (!card.querySelector(".focus-charging-bar")) {
          activeChargingBar = document.createElement("div");
          activeChargingBar.className = "focus-charging-bar";
          card.appendChild(activeChargingBar);
        } else {
          activeChargingBar = card.querySelector(".focus-charging-bar");
        }

        if (!card.querySelector(".focus-timer-ring")) {
          activeTimerRing = document.createElement("div");
          activeTimerRing.className = "focus-timer-ring";
          activeTimerRing.innerHTML = `⚡ <span>5s</span>`;
          card.appendChild(activeTimerRing);
        } else {
          activeTimerRing = card.querySelector(".focus-timer-ring");
        }

        // Start charging bar CSS transition
        requestAnimationFrame(() => {
          if (activeChargingBar) activeChargingBar.classList.add("charging");
        });

        // 5-second countdown display update
        let timeLeft = 5;
        const countdownInterval = setInterval(() => {
          timeLeft--;
          if (activeTimerRing && timeLeft > 0) {
            activeTimerRing.innerHTML = `⚡ <span>${timeLeft}s</span>`;
          } else {
            clearInterval(countdownInterval);
          }
        }, 1000);

        // 5-second trigger timer
        activeHoverTimer = setTimeout(() => {
          focusedElement = card;
          card.classList.add("is-focused-element");
          document.body.classList.add("cyber-focus-mode");

          // Disperse surrounding sibling cards into 4 corners!
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;

          const container = card.closest(".projects-grid, .services-grid, .skills-grid, .experience-timeline, .certificates-grid, .stats-grid, .thm-stats-grid, .thm-card") || document.body;
          const siblings = container.querySelectorAll(cardSelectors);

          dispersedElements = [];

          siblings.forEach(sib => {
            if (sib !== card) {
              const sibRect = sib.getBoundingClientRect();
              const sibCenterX = sibRect.left + sibRect.width / 2;
              const sibCenterY = sibRect.top + sibRect.height / 2;

              const isLeft = sibCenterX < cardCenterX;
              const isTop = sibCenterY < cardCenterY;

              if (isLeft && isTop) sib.classList.add("disperse-tl");
              else if (!isLeft && isTop) sib.classList.add("disperse-tr");
              else if (isLeft && !isTop) sib.classList.add("disperse-bl");
              else sib.classList.add("disperse-br");

              dispersedElements.push(sib);
            }
          });

          if (activeChargingBar) activeChargingBar.remove();
          if (activeTimerRing) activeTimerRing.remove();
        }, 5000);

        // Store interval reference on card
        card._countdownInterval = countdownInterval;
      });

      card.addEventListener("mouseleave", () => {
        if (activeHoverTimer) {
          clearTimeout(activeHoverTimer);
          activeHoverTimer = null;
        }

        if (card._countdownInterval) {
          clearInterval(card._countdownInterval);
        }

        const bar = card.querySelector(".focus-charging-bar");
        if (bar) bar.remove();

        const ring = card.querySelector(".focus-timer-ring");
        if (ring) ring.remove();

        exitFocusMode();
      });
    });
  };

  // 5-Second Profile Pic Hover & Click Story Showcase: Code -> IoT -> Hacker Avatar
  const setup5SecondProfileCinematicStory = () => {
    const avatarEl = document.querySelector(".hero-avatar-card") || document.querySelector(".hero-avatar-inner") || document.getElementById("heroAvatarImg");
    if (!avatarEl) return;

    let overlay = document.getElementById("cyberCinematicOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "cyberCinematicOverlay";
      overlay.innerHTML = `
        <div class="cinematic-hud-header" id="cinematicCloseBtn">
          <span>🎬 5s CINEMATIC CYBER SHOWCASE</span>
          <span>•</span>
          <span style="color: #cbd5e1;">[ Click or Press ESC to Exit ]</span>
        </div>

        <!-- Stage 1: Animated Code Stream -->
        <div class="cinematic-stage-box" id="cinematicStage1">
          <div style="font-size: 1rem; font-weight: 800; color: #34d399; margin-bottom: 0.8rem; font-family: 'Fira Code', monospace; letter-spacing: 0.08em;">
            💻 STAGE 1: ANIMATED CYBER CODE STREAM
          </div>
          <div class="code-matrix-stream" id="codeMatrixConsole">
            <div style="color: #6ee7b7; margin-bottom: 0.4rem;">// Pritam Security Engine v3.0 -- Initializing...</div>
            <div style="color: #93c5fd;">import socket, sys, time, threading</div>
            <div style="color: #c4b5fd;">from security.crypto import ZeroTrustBoundary</div>
            <div style="margin-top: 0.6rem; color: #fef08a;">[+] Establishing encrypted TLS tunnel to THM Lab...</div>
            <div style="color: #34d399;">[+] Target IP: 10.10.165.42 | Port: 4444 (AUTHORIZED)</div>
            <div style="color: #f87171; margin-top: 0.6rem;">>>> Executing exploit payload check... OK</div>
            <div style="color: #34d399; font-weight: 700;">>>> SUCCESS: FLAG{pritam_cyber_guru_top36k_2026}</div>
          </div>
        </div>

        <!-- Stage 2: IoT Device & Network Nodes -->
        <div class="cinematic-stage-box" id="cinematicStage2">
          <div style="font-size: 1rem; font-weight: 800; color: #06b6d4; margin-bottom: 0.8rem; font-family: 'Fira Code', monospace; letter-spacing: 0.08em;">
            📡 STAGE 2: IOT DEVICES & SMART NETWORK PROTOCOLS
          </div>
          <div class="iot-nodes-grid">
            <div class="iot-node-card">
              <div style="font-size: 2.6rem; margin-bottom: 0.4rem;">📡</div>
              <div style="font-weight: 800; color: #06b6d4; font-size: 1rem;">Smart IoT Gateway</div>
              <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.2rem;">MQTT / CoAP Protocol</div>
            </div>
            <div class="iot-node-card" style="border-color: #f59e0b; box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);">
              <div style="font-size: 2.6rem; margin-bottom: 0.4rem;">🎛️</div>
              <div style="font-weight: 800; color: #f59e0b; font-size: 1rem;">Microcontroller Hub</div>
              <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.2rem;">ARM / Linux Kernel</div>
            </div>
            <div class="iot-node-card" style="border-color: #10b981; box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);">
              <div style="font-size: 2.6rem; margin-bottom: 0.4rem;">🔐</div>
              <div style="font-weight: 800; color: #10b981; font-size: 1rem;">Packet Inspector</div>
              <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.2rem;">Zero-Trust Telemetry</div>
            </div>
          </div>
        </div>

        <!-- Stage 3: Hacker Avatar & Security Badge -->
        <div class="cinematic-stage-box" id="cinematicStage3">
          <div style="font-size: 1rem; font-weight: 800; color: #ef4444; margin-bottom: 0.8rem; font-family: 'Fira Code', monospace; letter-spacing: 0.08em;">
            ⚔️ STAGE 3: ETHICAL HACKER & CTF GURU CORE
          </div>
          <div class="hacker-avatar-card">
            🥷
          </div>
          <div style="margin-top: 1.4rem; background: rgba(239, 68, 68, 0.18); border: 1px solid #ef4444; color: #fca5a5; padding: 0.6rem 1.6rem; border-radius: 9999px; font-weight: 800; font-family: 'Fira Code', monospace; font-size: 0.9rem; box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);">
            🛡️ ACCESS GRANTED • ETHICAL HACKER MASTER
          </div>
        </div>

        <!-- Timeline Step Indicator -->
        <div class="cinematic-stage-indicator">
          <div class="stage-step" id="stepIndicator1">1. Code Stream 💻</div>
          <span>➔</span>
          <div class="stage-step" id="stepIndicator2">2. IoT Devices 📡</div>
          <span>➔</span>
          <div class="stage-step" id="stepIndicator3">3. Hacker Core ⚔️</div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => exitShowcase());
    }

    let countdownTimer = null;
    let sequenceTimer = null;
    let activeChargingBar = null;
    let activeTimerRing = null;
    let isShowing = false;

    const exitShowcase = () => {
      isShowing = false;
      if (countdownTimer) clearTimeout(countdownTimer);
      if (sequenceTimer) clearInterval(sequenceTimer);

      overlay.classList.remove("active");
      avatarEl.classList.remove("avatar-portal-core");

      document.querySelectorAll(".cinematic-stage-box").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".stage-step").forEach(s => s.classList.remove("active"));

      if (activeChargingBar) activeChargingBar.remove();
      if (activeTimerRing) activeTimerRing.remove();
    };

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") exitShowcase();
    });

    const runCinematicSequence = () => {
      if (isShowing) return;
      isShowing = true;

      // Pic goes back to original place in hero card!
      avatarEl.classList.remove("avatar-portal-core");
      overlay.classList.add("active");

      const s1 = overlay.querySelector("#cinematicStage1");
      const s2 = overlay.querySelector("#cinematicStage2");
      const s3 = overlay.querySelector("#cinematicStage3");

      const i1 = overlay.querySelector("#stepIndicator1");
      const i2 = overlay.querySelector("#stepIndicator2");
      const i3 = overlay.querySelector("#stepIndicator3");

      // Stage 1: Code Stream (0s)
      s1.classList.add("active");
      s2.classList.remove("active");
      s3.classList.remove("active");
      i1.classList.add("active");
      i2.classList.remove("active");
      i3.classList.remove("active");

      // Stage 2: IoT Devices (At 3.2s)
      setTimeout(() => {
        if (!isShowing) return;
        s1.classList.remove("active");
        s2.classList.add("active");
        i1.classList.remove("active");
        i2.classList.add("active");
      }, 3200);

      // Stage 3: Hacker Core (At 6.5s)
      setTimeout(() => {
        if (!isShowing) return;
        s2.classList.remove("active");
        s3.classList.add("active");
        i2.classList.remove("active");
        i3.classList.add("active");
      }, 6500);
    };

    // Instant Click Trigger
    avatarEl.addEventListener("click", () => {
      runCinematicSequence();
    });

    // 5-Second Hover Hold Trigger
    avatarEl.addEventListener("mouseenter", () => {
      if (isShowing) return;

      const innerFrame = avatarEl.querySelector(".hero-avatar-inner") || avatarEl;

      if (!innerFrame.querySelector(".focus-charging-bar")) {
        activeChargingBar = document.createElement("div");
        activeChargingBar.className = "focus-charging-bar";
        innerFrame.appendChild(activeChargingBar);
      } else {
        activeChargingBar = innerFrame.querySelector(".focus-charging-bar");
      }

      if (!innerFrame.querySelector(".focus-timer-ring")) {
        activeTimerRing = document.createElement("div");
        activeTimerRing.className = "focus-timer-ring";
        activeTimerRing.innerHTML = `⚡ <span>5s</span>`;
        innerFrame.appendChild(activeTimerRing);
      } else {
        activeTimerRing = innerFrame.querySelector(".focus-timer-ring");
      }

      requestAnimationFrame(() => {
        if (activeChargingBar) activeChargingBar.classList.add("charging");
      });

      let timeLeft = 5;
      const countInterval = setInterval(() => {
        timeLeft--;
        if (activeTimerRing && timeLeft > 0) {
          activeTimerRing.innerHTML = `⚡ <span>${timeLeft}s</span>`;
        } else {
          clearInterval(countInterval);
        }
      }, 1000);

      countdownTimer = setTimeout(() => {
        if (activeChargingBar) activeChargingBar.remove();
        if (activeTimerRing) activeTimerRing.remove();
        runCinematicSequence();
      }, 5000);

      avatarEl._countInterval = countInterval;
    });

    avatarEl.addEventListener("mouseleave", () => {
      if (countdownTimer) clearTimeout(countdownTimer);
      if (avatarEl._countInterval) clearInterval(avatarEl._countInterval);
      if (activeChargingBar) activeChargingBar.remove();
      if (activeTimerRing) activeTimerRing.remove();
    });
  };

  // Footer Year & Name
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  document.getElementById("footerName").textContent = data.personal.name;

  // Initialize All Components
  renderHero();
  renderStats();
  renderAbout();
  renderSkills();
  renderTryHackMe();
  renderTimeline();
  renderProjects();
  renderCertificates();
  renderContact();
  setup3dScrollObserver();
  setup3dCardTilt();
  setup5SecondHoverFocus();
  setup5SecondProfileCinematicStory();
});
