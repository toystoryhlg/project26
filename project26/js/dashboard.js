/**
 * Studio / Dark Luxury Dashboard Charts
 * Palette: Warm Gold (#e2b774), Soft Purple (#a855f7), Silver (#94a3b8), Deep Charcoal (#121216)
 */

const DashboardModule = {
    init() {
        this.renderKPIs();
        this.renderPublicationsBarChart();
        this.renderSkillsRadarChart();
        this.renderCareerTimeline();
    },

    renderKPIs() {
        const kpiContainer = document.getElementById('luxury-kpi-container');
        if (!kpiContainer) return;

        const kpis = PORTFOLIO_DATA.dashboard.kpis;
        let html = '';
        kpis.forEach((kpi, index) => {
            const glowClass = index % 2 === 0 ? 'gold-glow' : 'purple-glow';
            html += `
                <div class="luxury-kpi-card ${glowClass}">
                    <div class="luxury-kpi-val">${kpi.value}</div>
                    <div class="luxury-kpi-lbl">${kpi.label}</div>
                    <div class="luxury-kpi-unit">${kpi.unit}</div>
                </div>
            `;
        });
        kpiContainer.innerHTML = html;
    },

    renderPublicationsBarChart() {
        const canvas = document.getElementById('chart-publications');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const data = PORTFOLIO_DATA.dashboard.publicationsByYear;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;
        const padding = { top: 30, right: 25, bottom: 40, left: 40 };

        ctx.clearRect(0, 0, width, height);

        // Grid & Guides
        const maxVal = 7;
        const chartH = height - padding.top - padding.bottom;
        const chartW = width - padding.left - padding.right;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.font = '11px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#64748b';

        for (let i = 0; i <= 5; i++) {
            const y = padding.top + (chartH / 5) * i;
            const val = Math.round(maxVal - (maxVal / 5) * i);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();

            ctx.fillText(val.toString(), padding.left - 24, y + 4);
        }

        // Draw Bars
        const numYears = data.years.length;
        const groupWidth = chartW / numYears;
        const barWidth = groupWidth * 0.22;

        data.years.forEach((year, i) => {
            const groupX = padding.left + i * groupWidth;

            // X-axis Year Label
            ctx.fillStyle = '#cbd5e1';
            ctx.font = '600 12px "Syne", sans-serif';
            ctx.fillText(year, groupX + groupWidth / 2 - 14, height - 12);

            // 1. Research (Soft Purple)
            const rVal = data.researchPapers[i];
            const rH = (rVal / maxVal) * chartH;
            ctx.fillStyle = '#a855f7';
            ctx.beginPath();
            ctx.roundRect(groupX + 8, height - padding.bottom - rH, barWidth, rH, [4, 4, 0, 0]);
            ctx.fill();

            // 2. Academic (Warm Gold)
            const aVal = data.academicProjects[i];
            const aH = (aVal / maxVal) * chartH;
            ctx.fillStyle = '#e2b774';
            ctx.beginPath();
            ctx.roundRect(groupX + 8 + barWidth + 4, height - padding.bottom - aH, barWidth, aH, [4, 4, 0, 0]);
            ctx.fill();

            // 3. Speaker (Silver/White)
            const sVal = data.speakerEvents[i];
            const sH = (sVal / maxVal) * chartH;
            ctx.fillStyle = '#cbd5e1';
            ctx.beginPath();
            ctx.roundRect(groupX + 8 + (barWidth + 4) * 2, height - padding.bottom - sH, barWidth, sH, [4, 4, 0, 0]);
            ctx.fill();
        });
    },

    renderSkillsRadarChart() {
        const canvas = document.getElementById('chart-skills-radar');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const skills = PORTFOLIO_DATA.dashboard.skillsRadar;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(centerX, centerY) - 42;
        const total = skills.length;

        ctx.clearRect(0, 0, width, height);

        // Concentric Rings
        for (let level = 1; level <= 4; level++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            const r = (radius / 4) * level;

            for (let i = 0; i < total; i++) {
                const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
                const x = centerX + Math.cos(angle) * r;
                const y = centerY + Math.sin(angle) * r;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        // Radial Spokes & Labels
        ctx.font = '600 11px "Syne", sans-serif';
        for (let i = 0; i < total; i++) {
            const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();

            const labelX = centerX + Math.cos(angle) * (radius + 24);
            const labelY = centerY + Math.sin(angle) * (radius + 16);
            ctx.fillStyle = '#94a3b8';
            ctx.textAlign = 'center';
            ctx.fillText(skills[i].subject, labelX, labelY);
        }

        // Polygon Fill with Gold Gradient
        ctx.beginPath();
        skills.forEach((skill, i) => {
            const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
            const r = (radius * (skill.value / 100));
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = 'rgba(226, 183, 116, 0.16)';
        ctx.fill();
        ctx.strokeStyle = '#e2b774';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(226, 183, 116, 0.4)';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
    },

    renderCareerTimeline() {
        const container = document.getElementById('luxury-timeline-list');
        if (!container) return;

        const timeline = PORTFOLIO_DATA.dashboard.careerTimeline;
        let html = '<div class="luxury-timeline" style="border-left: 1px solid rgba(255,255,255,0.08);">';
        timeline.forEach(item => {
            html += `
                <div class="luxury-timeline-item" style="margin-bottom: 1.5rem;">
                    <div style="background: var(--bg-charcoal); border: 1px solid var(--border-translucent); border-radius: 10px; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="font-family: var(--font-heading); font-size: 13px; color: var(--accent-gold); font-weight: 700; margin-right: 12px;">${item.year}</span>
                            <span style="color: #ffffff; font-size: 14.5px;">${item.title}</span>
                        </div>
                        <span style="font-family: var(--font-heading); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-purple); background: var(--accent-purple-subtle); border: 1px solid rgba(168,85,247,0.25); padding: 4px 12px; border-radius: 20px;">${item.tag}</span>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }
};

window.addEventListener('resize', () => {
    DashboardModule.renderPublicationsBarChart();
    DashboardModule.renderSkillsRadarChart();
});
