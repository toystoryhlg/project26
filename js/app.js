/**
 * Studio / Dark Luxury Controller
 * Portfolio: นาย นนทพัทธ์ แสงจันทร์ (Toy)
 */

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

const App = {
    currentTab: 'education',

    init() {
        this.initSplashScreen();
        this.renderAllSections();
        this.initNavigation();
        this.initImageModal();
        DashboardModule.init();
    },

    /* ==========================================================================
       1. SPLASH SCREEN: CINEMATIC LUXURY REVEAL
       ========================================================================== */
    initSplashScreen() {
        const splash = document.getElementById('splash-screen');
        const fill = document.getElementById('splash-loading-fill');
        const enterBtn = document.getElementById('btn-enter-studio');

        if (!splash) return;

        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            if (fill) fill.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(closeSplash, 300);
            }
        }, 50);

        function closeSplash() {
            clearInterval(interval);
            splash.classList.add('hidden');
        }

        if (enterBtn) {
            enterBtn.addEventListener('click', closeSplash);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
                closeSplash();
            }
        });
    },

    /* ==========================================================================
       2. NAVIGATION
       ========================================================================== */
    initNavigation() {
        const items = document.querySelectorAll('.studio-nav-item');
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = item.getAttribute('data-target');
                this.switchTab(target);
            });
        });
    },

    switchTab(tabId) {
        this.currentTab = tabId;

        // Update Nav items
        document.querySelectorAll('.studio-nav-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-target') === tabId);
        });

        // Update Sections
        document.querySelectorAll('.studio-section-view').forEach(sec => {
            sec.classList.remove('active');
        });

        const targetSec = document.getElementById(`section-${tabId}`);
        if (targetSec) {
            targetSec.classList.add('active');
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }

        if (tabId === 'dashboard') {
            setTimeout(() => {
                DashboardModule.renderPublicationsBarChart();
                DashboardModule.renderSkillsRadarChart();
            }, 100);
        }
    },

    /* ==========================================================================
       3. DATA RENDERING (SECTIONS 1 TO 7)
       ========================================================================== */
    renderAllSections() {
        this.renderEducation();
        this.renderContact();
        this.renderHighlights();
        this.renderAcademics();
        this.renderResearch();
        this.renderSpeaker();
    },

    renderEducation() {
        const container = document.getElementById('edu-timeline-container');
        if (!container) return;

        let html = '<div class="luxury-timeline">';
        PORTFOLIO_DATA.education.forEach(edu => {
            html += `
                <div class="luxury-timeline-item">
                    <div class="luxury-card">
                        <div class="edu-year-badge">${edu.period}</div>
                        <h3 class="edu-title">${edu.level}</h3>
                        <div class="edu-school-name">${edu.institution} — ${edu.faculty}</div>
                        <div style="margin-bottom: 8px; color: #ffffff; font-size: 15px;"><strong>สาขาวิชา:</strong> ${edu.major}</div>
                        <div class="edu-badge-gpa">GPA: ${edu.gpa}</div>
                        <ul class="edu-points-list">
                            ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                        ${edu.image ? `
                            <button class="btn-luxury-action view-img-btn" data-img="${edu.image}" data-caption="${edu.caption}">
                                Explore Document &amp; Photo
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },

    renderContact() {
        const container = document.getElementById('contact-container');
        if (!container) return;

        const c = PORTFOLIO_DATA.contact;
        const p = PORTFOLIO_DATA.profile;

        container.innerHTML = `
            <div class="contact-studio-grid">
                <div class="contact-studio-card">
                    <h3 class="contact-card-title">Direct Connection</h3>
                    <div class="contact-line">
                        <span class="lbl">Telephone</span>
                        <span class="val"><a href="tel:${c.phone}">${c.phone}</a></span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Electronic Mail</span>
                        <span class="val"><a href="mailto:${c.email}">${c.email}</a></span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Social Network</span>
                        <span class="val"><a href="${c.facebookUrl}" target="_blank">${c.facebook}</a></span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Current City</span>
                        <span class="val">${c.location}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Studio Address</span>
                        <span class="val">${c.addressDetail}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Operational Hours</span>
                        <span class="val">${c.officeHours}</span>
                    </div>
                </div>

                <div class="contact-studio-card">
                    <h3 class="contact-card-title">Personal Identity &amp; Heritage</h3>
                    <div class="contact-line">
                        <span class="lbl">Father</span>
                        <span class="val">${p.family.father}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Father Contact</span>
                        <span class="val">${p.family.fatherPhone}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Mother</span>
                        <span class="val">${p.family.mother}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Mother Contact</span>
                        <span class="val">${p.family.motherPhone}</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Languages</span>
                        <span class="val">Thai (Native), English (Fluent)</span>
                    </div>
                    <div class="contact-line">
                        <span class="lbl">Collaboration Status</span>
                        <span class="val" style="color:var(--accent-gold);">Available for Keynote &amp; Projects</span>
                    </div>
                </div>
            </div>
        `;
    },

    renderHighlights() {
        const container = document.getElementById('highlights-container');
        if (!container) return;

        let html = '<div class="curated-highlights-grid">';
        PORTFOLIO_DATA.highlights.forEach(item => {
            html += `
                <div class="curated-card">
                    <div class="curated-img-wrapper view-img-btn" data-img="${item.image}" data-caption="${item.title}">
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='475060255_1541910013193398_499097567689687386_n.jpg'">
                        <span class="curated-badge-pill">${item.badge}</span>
                    </div>
                    <div class="curated-card-body">
                        <div class="curated-meta-row">
                            <span>${item.category}</span>
                            <span>ปี ${item.year}</span>
                        </div>
                        <h3 class="curated-card-title">${item.title}</h3>
                        <p class="curated-card-desc">${item.description}</p>
                        <div class="curated-stats-strip">
                            ${Object.entries(item.stats).map(([k, v]) => `<div><strong style="color:var(--accent-gold)">${k.toUpperCase()}:</strong> ${v}</div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },

    renderAcademics() {
        const container = document.getElementById('academic-container');
        if (!container) return;

        let html = '';
        PORTFOLIO_DATA.academics.forEach(item => {
            html += `
                <div class="editorial-paper-card">
                    <div class="editorial-paper-header">
                        <span class="paper-id-tag">${item.code} // ปี ${item.year}</span>
                        <span class="paper-indexing-pill">${item.grade}</span>
                    </div>
                    <h3 class="paper-thai-title">${item.title}</h3>
                    <div class="paper-meta-info">${item.institution} | ประเภท: ${item.type}</div>
                    <div class="paper-abstract-box">${item.summary}</div>
                    <div style="font-size: 13px; color: var(--text-muted);">
                        <strong>KEY COMPETENCIES:</strong> ${item.tools.join(' • ')}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    renderResearch() {
        const container = document.getElementById('research-container');
        if (!container) return;

        let html = '';
        PORTFOLIO_DATA.research.forEach(res => {
            html += `
                <div class="editorial-paper-card">
                    <div class="editorial-paper-header">
                        <span class="paper-id-tag">${res.id} // ${res.year}</span>
                        <span class="paper-indexing-pill">${res.indexing}</span>
                    </div>
                    <h3 class="paper-thai-title">${res.title}</h3>
                    <div class="paper-en-title">${res.englishTitle}</div>
                    <div class="paper-meta-info">ผู้เขียน: <strong>${res.authors}</strong> | ตีพิมพ์ใน: <em>${res.journal}</em> (DOI: ${res.doi})</div>
                    <div class="paper-abstract-box"><strong>ABSTRACT:</strong> ${res.abstract}</div>
                    <div style="font-size: 12.5px; color: var(--accent-gold);">
                        KEYWORDS: ${res.keywords.map(k => `<span style="background:rgba(226,183,116,0.1); border:1px solid rgba(226,183,116,0.2); padding:3px 10px; border-radius:20px; margin-right:6px;">${k}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    renderSpeaker() {
        const container = document.getElementById('speaker-container');
        if (!container) return;

        let html = '<div class="speaker-studio-grid">';
        PORTFOLIO_DATA.speaker.forEach(spk => {
            html += `
                <div class="speaker-studio-card">
                    ${spk.image ? `
                        <div class="curated-img-wrapper view-img-btn" data-img="${spk.image}" data-caption="${spk.topic}" style="height:190px; border-radius:12px;">
                            <img src="${spk.image}" alt="${spk.topic}" onerror="this.src='313126.jpg'">
                        </div>
                    ` : ''}
                    <span class="speaker-date-tag">${spk.date} // ${spk.location}</span>
                    <h3 class="speaker-topic-title">${spk.topic}</h3>
                    <div style="font-size:14px; color:var(--accent-purple);">จัดโดย: ${spk.organization}</div>
                    <div style="font-size:13.5px; color:var(--text-muted);"><strong>กลุ่มผู้ฟัง:</strong> ${spk.audience}</div>
                    <div class="paper-abstract-box" style="margin-bottom:0;">
                        ${spk.highlights}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    },

    /* ==========================================================================
       4. IMAGE MODAL
       ========================================================================== */
    initImageModal() {
        const modal = document.getElementById('studio-image-modal');
        const modalImg = document.getElementById('studio-modal-img');
        const modalCaption = document.getElementById('studio-modal-caption');
        const closeBtn = document.getElementById('btn-close-studio-modal');

        document.addEventListener('click', (e) => {
            const targetBtn = e.target.closest('.view-img-btn');
            if (targetBtn) {
                const src = targetBtn.getAttribute('data-img');
                const caption = targetBtn.getAttribute('data-caption');
                if (src) {
                    modalImg.src = src;
                    modalCaption.textContent = caption || 'Studio Gallery View';
                    modal.classList.add('active');
                }
            }
        });

        if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
        }
    }
};
