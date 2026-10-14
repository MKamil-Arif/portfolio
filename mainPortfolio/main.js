/* ============================================================
   PROJECT DATA
   Add, remove or reorder projects here. Each CV-style row and
   its details pop-up are generated from this list.
   - stack / year: shown under the orange title (year is optional)
   - categories: used by the filter buttons ('web', 'desktop')
   - repo / live: optional links
   ============================================================ */
const PROJECTS = [
    {
        id: 'careerflow',
        title: 'CareerFlow AI',
        stack: 'Python, FastAPI, JavaScript',
        year: '2026',
        categories: ['web'],
        summary: 'Upload a PDF résumé and get an editable profile, role suggestions with a transparent match score, skill-gap analysis, a 7-day learning plan, and scored interview practice.',
        highlights: [
            'Turns an uploaded PDF résumé into an editable profile. Files are processed in memory and never stored.',
            'Suggests roles that fit the CV in any field, with a transparent score you can steer, regenerate, or override with your own target role.',
            'Career Coach chat, a CV builder with 4 templates and PDF download, and a 7-day learning plan linked to official documentation.',
            'Interview practice at Easy, Medium or Hard levels with scored feedback.',
            'Calls Groq with Gemini as a fallback, and every feature still works offline with rule-based logic when no API keys are set.',
        ],
        tech: ['Python', 'FastAPI', 'JavaScript', 'Groq', 'Gemini', 'Docker'],
        repo: 'https://github.com/MKamil-Arif/CareerFlow-AI',
        live: 'https://careerflow-ai-rose.vercel.app',
    },
    {
        id: 'anonymous-chat',
        title: 'Anonymous Chat',
        stack: 'Node.js, Express, MongoDB',
        year: '2026',
        categories: ['web'],
        summary: 'An NGL-style anonymous chat with two-way conversations: create a room, share the link on your status or story, and chat with visitors who join with any name and their relation to you.',
        highlights: [
            'No signup: creating a room returns a secret owner key, and a private owner link opens the dashboard on any device. Only a SHA-256 hash of the key is stored.',
            'Owner dashboard lists every visitor and chat, and flags when a returning visitor switches to a new name or relation.',
            'Visitor detection with a persistent device ID plus a browser fingerprint. IP addresses are never stored, only salted hashes.',
            'Live updates: typing indicators, sent and seen ticks, online status, unread counts, and message edits and deletes.',
            'Installable as a PWA with web push notifications, hardened with Helmet, rate limiting and a profanity filter.',
        ],
        tech: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Web Push', 'PWA'],
        repo: 'https://github.com/MKamil-Arif/chat_webApp/tree/anonymous-chat-rooms',
        live: 'https://anonymous-chat-kappa.vercel.app',
    },
    {
        id: 'compliancesphere',
        title: 'ComplianceSphere',
        stack: 'React, TypeScript, Express',
        year: '2025',
        categories: ['web'],
        summary: 'A full-stack showcase platform for FDA 21 CFR Part 11 compliant software used in pharmaceutical, biotech and medical-device manufacturing.',
        highlights: [
            'Product showcases for an Environmental Monitoring System and a Microbial Assay Zone Reader.',
            'In-depth compliance section covering electronic records, e-signatures, audit trails and data security.',
            'Contact and demo-request forms validated on both client and server with Zod and React Hook Form.',
            'CMS-driven regulatory blog, per-page SEO metadata, and Framer Motion transitions.',
        ],
        tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'TanStack Query', 'Express', 'Drizzle ORM'],
        repo: 'https://github.com/MKamil-Arif/ComplianceSphereReact',
    },
    // ---- Projects below follow the CV (Kamil-CV.pdf) ----
    {
        id: 'employee',
        title: 'Employee Management',
        stack: 'C# (.NET)',
        year: '2023',
        categories: ['desktop'],
        summary: 'Keeps employee records and assigns employees to departments, with an admin who controls the whole system. A CRUD project built with beginner-level C# concepts.',
        highlights: [
            'Create, read, update and delete employee records.',
            'Employees are organized by department.',
            'Admin role with access to the whole system.',
        ],
        tech: ['C#', '.NET'],
    },
    {
        id: 'attendance',
        title: 'Attendance System',
        stack: 'PHP, MySQL',
        year: '2023',
        categories: ['web'],
        summary: 'Three roles: Admin, Teacher and Student. Only the admin can create teachers and students. Teachers take attendance daily, and once it is taken, no one can change it.',
        highlights: [
            'Role-based access for Admin, Teacher and Student.',
            'Teacher and student accounts can only be created by the admin.',
            'Daily attendance is locked after it is taken.',
            'Later expanded into Attendix: class, section and course management, audit logs, a student portal with JSON APIs, and PDF reports with dompdf.',
        ],
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        repo: 'https://github.com/MKamil-Arif/Attendix.co',
    },
    {
        id: 'countdown',
        title: 'Countdown Timer Desktop App',
        stack: 'Python (Tkinter)',
        categories: ['desktop'],
        summary: 'Interactive desktop utility with customizable countdown timers, notification alerts, and future support planned for task automation.',
        highlights: [
            'Customizable countdown timers.',
            'Notification alerts when a timer finishes.',
            'Task automation support planned for a future version.',
        ],
        tech: ['Python', 'Tkinter'],
    },
    {
        id: 'activity-log',
        title: 'Activity Log Dashboard',
        stack: 'React, Node.js, Express, SQL Server',
        categories: ['web'],
        summary: 'A full-stack web dashboard to visualize user activity logs stored in the Nazar database. Fetches data via a REST API and renders usage analytics.',
        highlights: [
            'REST API built with Node.js and Express on top of SQL Server.',
            'React front end that fetches activity data and renders usage analytics.',
            'Brings activity monitoring and review into a single view.',
        ],
        tech: ['React', 'Node.js', 'Express', 'SQL Server'],
    },
    {
        id: 'pdf-reports',
        title: 'PDF Report Generator',
        stack: 'C#, PdfSharp, OxyPlot',
        categories: ['desktop'],
        summary: 'Automated, structured PDF reports with formatted tables, charts, and categorized sensor/module logs. Customized layout styling for professional report generation.',
        highlights: [
            'Automated, structured PDF output with formatted tables.',
            'Charts rendered with OxyPlot and embedded in each report.',
            'Sensor and module logs grouped into categories for easier review.',
        ],
        tech: ['C#', '.NET', 'PdfSharp', 'OxyPlot'],
        repo: 'https://github.com/MKamil-Arif/HplcPrototype_PDF_Generator',
    },
    {
        id: 'hospital',
        title: 'Hospital Management',
        stack: 'PHP, MySQL',
        year: '2023',
        categories: ['web'],
        summary: 'A CRUD website in which doctors communicate with patients through appointments.',
        highlights: [
            'Appointment-based communication between doctors and patients.',
            'Full CRUD workflow backed by a MySQL database.',
        ],
        tech: ['PHP', 'MySQL'],
    },
];

const EMAIL = 'urfik0005@gmail.com';
// Contact form submissions are emailed to EMAIL via FormSubmit (no backend needed).
// The first message sent triggers a one-time "Activate Form" email to that inbox.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
const LINKS = {
    github: 'https://github.com/MKamil-Arif',
    linkedin: 'https://www.linkedin.com/in/kamil-arif-b99956331/',
    codepen: 'https://codepen.io/KAMI-AURFI',
    cv: 'assets/Kamil-CV.pdf',
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ======================= */
/* HELPERS                 */
/* ======================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let toastTimer;
function showToast(message) {
    const toast = $('.toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        const input = document.createElement('textarea');
        input.value = text;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const ok = document.execCommand('copy');
        input.remove();
        return ok;
    }
}

async function copyEmail() {
    const ok = await copyText(EMAIL);
    showToast(ok ? 'Email copied to clipboard' : EMAIL);
}

function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
}

function downloadCv() {
    const a = document.createElement('a');
    a.href = LINKS.cv;
    a.download = 'Muhammad-Kamil-Arif-CV.pdf';
    a.click();
}

/* ======================= */
/* NAVIGATION              */
/* ======================= */
const navLinks = $('#nav-links');
const menuToggle = $('.menu-toggle');
const progressBar = $('.scroll-progress');

function setMenu(open) {
    navLinks.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    const icon = $('i', menuToggle);
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
}

menuToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
$$('a', navLinks).forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', e => {
    if (navLinks.classList.contains('is-open') && !e.target.closest('.nav')) setMenu(false);
});

let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        scrollTicking = false;
    });
}, { passive: true });

// Highlight the nav link for the section in view (the CV's extra sections count as Skills)
const NAV_FOR = { expertise: 'skills', software: 'skills', interests: 'skills' };
const navMap = new Map($$('a', navLinks).map(a => [a.getAttribute('href').slice(1), a]));
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navMap.forEach(a => a.classList.remove('is-active'));
        const link = navMap.get(NAV_FOR[entry.target.id] || entry.target.id);
        if (link) link.classList.add('is-active');
    });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('.cv-section[id]').forEach(s => sectionObserver.observe(s));

/* ======================= */
/* REVEAL ON SCROLL        */
/* ======================= */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* ======================= */
/* SKILL SQUARES (out of 7) */
/* ======================= */
$$('.skill').forEach(skill => {
    const level = Number(skill.dataset.level);
    const squares = document.createElement('span');
    squares.className = 'squares';
    squares.setAttribute('role', 'img');
    squares.setAttribute('aria-label', `${level} out of 7`);
    squares.innerHTML = Array.from({ length: 7 }, (_, i) => `<i class="${i < level ? 'on' : ''}"></i>`).join('');
    skill.appendChild(squares);
});

/* ======================= */
/* PROJECTS (CV rows)      */
/* ======================= */
const list = $('#projects-list');

function projectRow(p) {
    const links = [];
    if (p.live) links.push(`<a href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Live demo</a>`);
    if (p.repo) links.push(`<a href="${p.repo}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Source code</a>`);
    links.push(`<button type="button" data-open="${p.id}">Details <i class="fas fa-arrow-right" aria-hidden="true"></i></button>`);
    return `
        <article class="cv-row project" data-categories="${p.categories.join(' ')}">
            <div class="cv-label">
                <h3 class="cv-key">${escapeHtml(p.title)}</h3>
                <span class="cv-meta">${escapeHtml(p.stack)}</span>
                ${p.year ? `<span class="cv-meta">${p.year}</span>` : ''}
                ${p.live ? '<span class="live-tag">Live</span>' : ''}
            </div>
            <div class="cv-body">
                <p>${escapeHtml(p.summary)}</p>
                <div class="project-links">${links.join('')}</div>
            </div>
        </article>`;
}

list.innerHTML = PROJECTS.map(projectRow).join('');
list.addEventListener('click', e => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) openProject(trigger.dataset.open);
});

$$('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        $$('.filter').forEach(b => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', String(active));
        });
        $$('.project', list).forEach(row => {
            const show = filter === 'all' || row.dataset.categories.split(' ').includes(filter);
            row.hidden = !show;
            row.classList.remove('is-entering');
            if (show) {
                void row.offsetWidth; // restart the fade
                row.classList.add('is-entering');
            }
        });
    });
});

/* ======================= */
/* PROJECT MODAL           */
/* ======================= */
const modal = $('#project-modal');

function openProject(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    $('#modal-title').textContent = p.title;
    $('#modal-meta').textContent = [p.stack, p.year].filter(Boolean).join(' · ');
    $('#modal-summary').textContent = p.summary;
    $('#modal-highlights').innerHTML = p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('');
    $('#modal-tech').innerHTML = p.tech.map(t => `<li>${escapeHtml(t)}</li>`).join('');

    const links = [];
    if (p.live) links.push(`<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Live demo</a>`);
    if (p.repo) links.push(`<a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i> Source code</a>`);
    if (!links.length) links.push(`<a class="btn btn-ghost" href="#contact" data-close-modal><i class="fas fa-comment-dots" aria-hidden="true"></i> Ask me about this project</a>`);
    $('#modal-links').innerHTML = links.join('');

    if (palette.open) palette.close();
    modal.showModal();
    $('.modal-inner', modal).scrollTop = 0;
}

$('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
    if (e.target === modal) modal.close();             // backdrop click
    if (e.target.closest('[data-close-modal]')) modal.close();
});

/* ======================= */
/* COMMAND PALETTE         */
/* ======================= */
const palette = $('#palette');
const paletteInput = $('#palette-input');
const paletteList = $('#palette-list');

const COMMANDS = [
    { label: 'Go to Summary', group: 'Navigate', icon: 'fa-user', run: () => scrollToId('summary') },
    { label: 'Go to Education', group: 'Navigate', icon: 'fa-graduation-cap', run: () => scrollToId('education') },
    { label: 'Go to Projects', group: 'Navigate', icon: 'fa-folder-open', run: () => scrollToId('projects') },
    { label: 'Go to Skills', group: 'Navigate', icon: 'fa-code', run: () => scrollToId('skills') },
    { label: 'Go to Contact', group: 'Navigate', icon: 'fa-envelope', run: () => scrollToId('contact') },
    ...PROJECTS.map(p => ({ label: `Open ${p.title}`, group: 'Project', icon: 'fa-cube', run: () => openProject(p.id) })),
    { label: 'Download CV', group: 'Action', icon: 'fa-download', run: downloadCv },
    { label: 'Copy email address', group: 'Action', icon: 'fa-copy', run: copyEmail },
    { label: 'Print this page', group: 'Action', icon: 'fa-print', run: () => window.print() },
    { label: 'Open GitHub', group: 'Link', icon: 'fa-arrow-up-right-from-square', run: () => window.open(LINKS.github, '_blank', 'noopener') },
    { label: 'Open LinkedIn', group: 'Link', icon: 'fa-arrow-up-right-from-square', run: () => window.open(LINKS.linkedin, '_blank', 'noopener') },
    { label: 'Open CodePen', group: 'Link', icon: 'fa-arrow-up-right-from-square', run: () => window.open(LINKS.codepen, '_blank', 'noopener') },
];

let paletteResults = [];
let paletteIndex = 0;

function renderPalette() {
    const q = paletteInput.value.trim().toLowerCase();
    paletteResults = COMMANDS.filter(c => !q || `${c.label} ${c.group}`.toLowerCase().includes(q));
    paletteIndex = Math.min(paletteIndex, Math.max(paletteResults.length - 1, 0));
    if (!paletteResults.length) {
        paletteList.innerHTML = '<li class="palette-empty">No matching commands</li>';
        paletteInput.removeAttribute('aria-activedescendant');
        return;
    }
    paletteList.innerHTML = paletteResults.map((c, i) => `
        <li class="palette-item" role="option" id="cmd-${i}" data-index="${i}" aria-selected="${i === paletteIndex}">
            <i class="fas ${c.icon}" aria-hidden="true"></i>
            <span>${escapeHtml(c.label)}</span>
            <span class="palette-group">${c.group}</span>
        </li>`).join('');
    paletteInput.setAttribute('aria-activedescendant', `cmd-${paletteIndex}`);
    const active = $(`#cmd-${paletteIndex}`, paletteList);
    if (active) active.scrollIntoView({ block: 'nearest' });
}

function runCommand(cmd) {
    if (!cmd) return;
    palette.close();
    cmd.run();
}

function openPalette() {
    if (modal.open) modal.close();
    setMenu(false);
    paletteInput.value = '';
    paletteIndex = 0;
    renderPalette();
    palette.showModal();
    paletteInput.focus();
}

$('.palette-trigger').addEventListener('click', openPalette);
paletteInput.addEventListener('input', () => { paletteIndex = 0; renderPalette(); });
paletteInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!paletteResults.length) return;
        const dir = e.key === 'ArrowDown' ? 1 : -1;
        paletteIndex = (paletteIndex + dir + paletteResults.length) % paletteResults.length;
        renderPalette();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        runCommand(paletteResults[paletteIndex]);
    }
});
paletteList.addEventListener('click', e => {
    const item = e.target.closest('.palette-item');
    if (item) runCommand(paletteResults[Number(item.dataset.index)]);
});
palette.addEventListener('click', e => {
    if (e.target === palette) palette.close();
});

document.addEventListener('keydown', e => {
    const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        palette.open ? palette.close() : openPalette();
    } else if (e.key === '/' && !typing && !palette.open && !modal.open) {
        e.preventDefault();
        openPalette();
    } else if (e.key === 'Escape') {
        setMenu(false);
    }
});

/* ======================= */
/* CONTACT                 */
/* ======================= */
$$('.copy-email').forEach(btn => btn.addEventListener('click', copyEmail));

const form = $('#contact-form');
const formNote = $('.form-note', form);
const defaultNote = formNote.textContent;
const submitBtn = $('button[type="submit"]', form);
const submitBtnHtml = submitBtn.innerHTML;

function setNote(text, state) {
    formNote.textContent = text;
    formNote.classList.toggle('is-error', state === 'error');
    formNote.classList.toggle('is-success', state === 'success');
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    let firstInvalid = null;
    $$('.field input, .field textarea', form).forEach(field => {
        const value = field.value.trim();
        const invalid = !value || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        field.closest('.field').classList.toggle('has-error', invalid);
        field.setAttribute('aria-invalid', String(invalid));
        if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
        setNote('Please fill in every field with a valid email address.', 'error');
        firstInvalid.focus();
        return;
    }

    // Spam bots fill the hidden honeypot field; pretend success and drop it
    if (data._honey) {
        form.reset();
        setNote('Thanks! Your message has been sent.', 'success');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    setNote('Sending your message...');

    try {
        const res = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                name: data.name.trim(),
                email: data.email.trim(),           // FormSubmit uses this as the reply-to address
                _subject: `Portfolio: ${data.subject.trim()}`,
                message: data.message.trim(),
                _template: 'table',
                _captcha: 'false',
            }),
        });
        const result = await res.json().catch(() => ({}));
        if (!res.ok || String(result.success) !== 'true') throw new Error(result.message || `HTTP ${res.status}`);

        form.reset();
        setNote("Thanks! Your message has been sent. I'll get back to you soon.", 'success');
        showToast('Message sent');
    } catch (err) {
        console.error('Contact form failed:', err);
        setNote(`Sorry, the message couldn't be sent. Please email me directly at ${EMAIL}.`, 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnHtml;
    }
});

form.addEventListener('input', e => {
    const field = e.target.closest('.field');
    if (field && field.classList.contains('has-error') && e.target.value.trim()) {
        field.classList.remove('has-error');
        e.target.removeAttribute('aria-invalid');
        if (!$('.has-error', form)) setNote(defaultNote);
    }
});

$('#year').textContent = new Date().getFullYear();
