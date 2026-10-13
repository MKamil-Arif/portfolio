/* ============================================================
   PROJECT DATA
   Add, remove or reorder projects here. Each card and its
   details modal are generated from this list.
   - categories: used by the filter buttons ('web', 'desktop')
   - colors: the two gradient stops for the generated cover art
   - icon: any Font Awesome 6 class
   - repo / live: optional links
   ============================================================ */
const PROJECTS = [
    {
        id: 'careerflow',
        title: 'CareerFlow AI',
        label: 'AI · Full-Stack',
        year: '2026',
        categories: ['web'],
        icon: 'fa-solid fa-route',
        colors: ['#7c3aed', '#06b6d4'],
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
    },
    {
        id: 'compliancesphere',
        title: 'ComplianceSphere',
        label: 'Full-Stack · TypeScript',
        year: '2025',
        categories: ['web'],
        icon: 'fa-solid fa-shield-halved',
        colors: ['#2563eb', '#14b8a6'],
        summary: 'A full-stack showcase platform for FDA 21 CFR Part 11 compliant software used in pharmaceutical, biotech and medical-device manufacturing.',
        highlights: [
            'Product showcases for an Environmental Monitoring System and a Microbial Assay Zone Reader.',
            'In-depth compliance section covering electronic records, e-signatures, audit trails and data security.',
            'Contact and demo-request forms validated on both client and server with Zod and React Hook Form.',
            'CMS-driven regulatory blog, per-page SEO metadata, and Framer Motion transitions.',
        ],
        tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'TanStack Query', 'Express', 'Drizzle ORM'],
        repo: 'https://github.com/MKamil-Arif/ComplianceSphereReact',
        live: 'https://compliance-sphere.vercel.app',
    },
    {
        id: 'attendix',
        title: 'Attendix',
        label: 'Web App · PHP',
        year: '2025',
        categories: ['web'],
        icon: 'fa-solid fa-clipboard-user',
        colors: ['#9333ea', '#ec4899'],
        summary: 'A student attendance management system with separate admin, teacher and student areas, PDF reports, and audit logs.',
        highlights: [
            'Admin panel to manage classes, sections, courses, teachers, students, sessions, reports and audit logs.',
            'Teacher dashboard to take attendance for assigned classes and review student and class reports.',
            'Student portal where students sign in with their seat number and view their profile and attendance through JSON API endpoints.',
            'Role-based login routing and PDF report export with dompdf.',
        ],
        tech: ['PHP 8', 'MySQL / MariaDB', 'JavaScript', 'Bootstrap', 'dompdf'],
        repo: 'https://github.com/MKamil-Arif/Attendix.co',
        live: 'https://attendix-co.vercel.app',
    },
    {
        id: 'activity-log',
        title: 'Activity Log Dashboard',
        label: 'Full-Stack · Dashboard',
        year: '2023',
        categories: ['web'],
        icon: 'fa-solid fa-chart-line',
        colors: ['#0ea5e9', '#6366f1'],
        summary: 'A full-stack web dashboard that visualizes user activity logs stored in the Nazar database and turns them into usage analytics.',
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
        label: 'Desktop · C#',
        year: '2023',
        categories: ['desktop'],
        icon: 'fa-solid fa-file-pdf',
        colors: ['#dc2626', '#f59e0b'],
        summary: 'Automatically generates structured PDF reports with formatted tables, charts, and categorized sensor and module logs.',
        highlights: [
            'Automated, structured PDF output with formatted tables.',
            'Charts rendered with OxyPlot and embedded in each report.',
            'Sensor and module logs grouped into categories for easier review.',
            'Custom layout styling for professional-looking reports.',
        ],
        tech: ['C#', '.NET', 'PdfSharp', 'OxyPlot'],
        repo: 'https://github.com/MKamil-Arif/HplcPrototype_PDF_Generator',
    },
    {
        id: 'chat',
        title: 'Chat Web App',
        label: 'Web App · Node.js',
        year: '2026',
        categories: ['web'],
        icon: 'fa-solid fa-comments',
        colors: ['#10b981', '#3b82f6'],
        summary: 'A personal chat app: visitors join with their name and how they know me, then send messages, while an admin dashboard tracks users and conversations.',
        highlights: [
            'Quick onboarding: visitors enter a name and pick their relation (friend, family, colleague, student).',
            'Chat screen for sending and reading messages.',
            'Admin dashboard with a user count for managing people and conversations.',
            'Node.js back end with MongoDB, deployed on Vercel.',
        ],
        tech: ['JavaScript', 'Node.js', 'MongoDB', 'HTML & CSS'],
        repo: 'https://github.com/MKamil-Arif/chat_webApp',
        live: 'https://chat-web-app-inky.vercel.app',
    },
    {
        id: 'employee',
        title: 'Employee Management',
        label: '.NET · CRUD',
        year: '2023',
        categories: ['desktop'],
        icon: 'fa-solid fa-users-gear',
        colors: ['#4f46e5', '#a855f7'],
        summary: 'An employee records system organized by department, with an admin role that oversees everything.',
        highlights: [
            'Create, read, update and delete employee records across departments.',
            'Admin role with access to every department and record.',
            'An early project for practicing C# and .NET fundamentals.',
        ],
        tech: ['C#', '.NET'],
    },
    {
        id: 'hospital',
        title: 'Hospital Management',
        label: 'Web App · PHP',
        year: '2023',
        categories: ['web'],
        icon: 'fa-solid fa-hospital',
        colors: ['#0891b2', '#22c55e'],
        summary: 'A CRUD web app where doctors and patients communicate through appointments.',
        highlights: [
            'Appointment-based communication between doctors and patients.',
            'Full CRUD workflow backed by a relational database.',
            'PHP server-side logic with MySQL.',
        ],
        tech: ['PHP', 'MySQL'],
    },
    {
        id: 'countdown',
        title: 'Countdown Timer',
        label: 'Desktop · Python',
        year: '2023',
        categories: ['desktop'],
        icon: 'fa-solid fa-stopwatch',
        colors: ['#f97316', '#e11d48'],
        summary: 'An interactive desktop utility with customizable countdown timers and notification alerts.',
        highlights: [
            'Customizable countdown timers.',
            'Notification alerts when a timer finishes.',
            'Task automation support planned for a future version.',
        ],
        tech: ['Python', 'Tkinter'],
    },
];

const EMAIL = 'urfik0005@gmail.com';
const LINKS = {
    github: 'https://github.com/MKamil-Arif',
    linkedin: 'https://www.linkedin.com/in/kamil-arif-b99956331/',
    codepen: 'https://codepen.io/KAMI-AURFI',
    resume: 'assets/Muhammad-Kamil-Arif-Resume.pdf',
};
const TYPED_PHRASES = [
    'full-stack web apps.',
    'AI-powered tools.',
    'C# / .NET desktop software.',
    'dashboards that make data readable.',
];

const root = document.documentElement;
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

/* ======================= */
/* THEME                   */
/* ======================= */
const themeColorMeta = $('meta[name="theme-color"]');

function setTheme(theme) {
    root.dataset.theme = theme;
    themeColorMeta.setAttribute('content', theme === 'light' ? '#f6f7fb' : '#0b0d14');
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
    window.dispatchEvent(new Event('themechange'));
}

function toggleTheme() {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
}

$('.theme-toggle').addEventListener('click', toggleTheme);
themeColorMeta.setAttribute('content', root.dataset.theme === 'light' ? '#f6f7fb' : '#0b0d14');

/* ======================= */
/* HEADER & NAVIGATION     */
/* ======================= */
const header = $('.site-header');
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

let lastScroll = 0;
let scrollTicking = false;

function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    header.classList.toggle('is-scrolled', y > 10);
    const menuOpen = navLinks.classList.contains('is-open');
    header.classList.toggle('is-hidden', !menuOpen && y > lastScroll && y > 160);
    lastScroll = y;
    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(onScroll);
        scrollTicking = true;
    }
}, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const navMap = new Map($$('a', navLinks).map(a => [a.getAttribute('href').slice(1), a]));
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navMap.forEach(a => a.classList.remove('is-active'));
        const link = navMap.get(entry.target.id);
        if (link) link.classList.add('is-active');
    });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sectionObserver.observe(s));

/* ======================= */
/* REVEAL ON SCROLL        */
/* ======================= */
function animateCount(el) {
    const target = Number(el.dataset.count);
    if (reducedMotion) { el.textContent = target; return; }
    const start = performance.now();
    const duration = 1200;
    const tick = now => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
}

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        $$('[data-count]', entry.target).forEach(animateCount);
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

function observeReveals(scope = document) {
    $$('.reveal:not(.in)', scope).forEach(el => {
        // Small stagger between sibling elements that reveal together
        const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
        el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 5) * 80}ms`);
        revealObserver.observe(el);
    });
}

/* ======================= */
/* TYPED HERO LINE         */
/* ======================= */
(function typedRole() {
    const el = $('.typed');
    if (reducedMotion) { el.textContent = TYPED_PHRASES[0]; return; }
    let phrase = 0;
    let chars = 0;
    let deleting = false;
    const step = () => {
        const text = TYPED_PHRASES[phrase];
        chars += deleting ? -1 : 1;
        el.textContent = text.slice(0, chars);
        let delay = deleting ? 32 : 65;
        if (!deleting && chars === text.length) {
            deleting = true;
            delay = 1800;
        } else if (deleting && chars === 0) {
            deleting = false;
            phrase = (phrase + 1) % TYPED_PHRASES.length;
            delay = 350;
        }
        setTimeout(step, delay);
    };
    setTimeout(step, 600);
})();

/* ======================= */
/* PROJECTS                */
/* ======================= */
const grid = $('#projects-grid');

function projectCard(p) {
    const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tags = p.tech.slice(0, 4).map(t => `<li>${escapeHtml(t)}</li>`).join('');
    const more = p.tech.length > 4 ? `<li>+${p.tech.length - 4}</li>` : '';
    const repo = p.repo
        ? `<a class="icon-btn" href="${p.repo}" target="_blank" rel="noopener" aria-label="Source code for ${escapeHtml(p.title)}" title="Source code"><i class="fab fa-github" aria-hidden="true"></i></a>`
        : '';
    const live = p.live
        ? `<a class="icon-btn" href="${p.live}" target="_blank" rel="noopener" aria-label="Live demo of ${escapeHtml(p.title)}" title="Live demo"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
        : '';
    return `
        <li class="project reveal" data-categories="${p.categories.join(' ')}">
            <div class="project-art" data-open="${p.id}" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">
                ${p.live ? '<span class="art-live">Live</span>' : ''}
                <span class="art-icon"><i class="${p.icon}" aria-hidden="true"></i></span>
                <span class="art-label">~/${slug}</span>
            </div>
            <div class="project-body">
                <p class="project-meta"><span>${escapeHtml(p.label)}</span><span>${p.year}</span></p>
                <h3>${escapeHtml(p.title)}</h3>
                <p class="project-desc">${escapeHtml(p.summary)}</p>
                <ul class="tags">${tags}${more}</ul>
                <div class="project-actions">
                    <button type="button" class="details-btn" data-open="${p.id}">
                        View details <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    ${repo}${live}
                </div>
            </div>
        </li>`;
}

grid.innerHTML = PROJECTS.map(projectCard).join('');
grid.addEventListener('click', e => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) openProject(trigger.dataset.open);
});

// Filters
$$('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        $$('.filter').forEach(b => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', String(active));
        });
        $$('.project', grid).forEach(card => {
            const show = filter === 'all' || card.dataset.categories.split(' ').includes(filter);
            card.hidden = !show;
            card.classList.remove('is-entering');
            if (show) {
                card.classList.add('in');
                void card.offsetWidth; // restart the entry animation
                card.classList.add('is-entering');
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
    const art = $('#modal-art');
    art.style.setProperty('--c1', p.colors[0]);
    art.style.setProperty('--c2', p.colors[1]);
    art.innerHTML = `<span class="art-icon"><i class="${p.icon}"></i></span>`;
    $('#modal-meta').textContent = `${p.label} · ${p.year}`;
    $('#modal-title').textContent = p.title;
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
    { label: 'Go to About', group: 'Navigate', icon: 'fa-user', run: () => scrollToId('about') },
    { label: 'Go to Skills', group: 'Navigate', icon: 'fa-code', run: () => scrollToId('skills') },
    { label: 'Go to Projects', group: 'Navigate', icon: 'fa-folder-open', run: () => scrollToId('projects') },
    { label: 'Go to Education', group: 'Navigate', icon: 'fa-graduation-cap', run: () => scrollToId('education') },
    { label: 'Go to Contact', group: 'Navigate', icon: 'fa-envelope', run: () => scrollToId('contact') },
    ...PROJECTS.map(p => ({ label: `Open ${p.title}`, group: 'Project', icon: 'fa-cube', run: () => openProject(p.id) })),
    { label: 'Toggle light / dark theme', group: 'Action', icon: 'fa-circle-half-stroke', run: toggleTheme },
    { label: 'Copy email address', group: 'Action', icon: 'fa-copy', run: copyEmail },
    { label: 'Download résumé', group: 'Action', icon: 'fa-download', run: () => {
        const a = document.createElement('a');
        a.href = LINKS.resume;
        a.download = '';
        a.click();
    } },
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

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    let firstInvalid = null;
    $$('input, textarea', form).forEach(field => {
        const value = field.value.trim();
        const invalid = !value || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        field.closest('.field').classList.toggle('has-error', invalid);
        field.setAttribute('aria-invalid', String(invalid));
        if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
        formNote.textContent = 'Please fill in every field with a valid email address.';
        formNote.classList.add('is-error');
        firstInvalid.focus();
        return;
    }

    const body = `${data.message.trim()}\n\n${data.name.trim()}\n${data.email.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(data.subject.trim())}&body=${encodeURIComponent(body)}`;
    formNote.classList.remove('is-error');
    formNote.textContent = 'Your email app should open with the message ready. If not, email me directly at ' + EMAIL + '.';
});

form.addEventListener('input', e => {
    const field = e.target.closest('.field');
    if (field && field.classList.contains('has-error') && e.target.value.trim()) {
        field.classList.remove('has-error');
        e.target.removeAttribute('aria-invalid');
        if (!$('.has-error', form)) {
            formNote.textContent = defaultNote;
            formNote.classList.remove('is-error');
        }
    }
});

$('#year').textContent = new Date().getFullYear();

/* ======================= */
/* HERO PARTICLE NETWORK   */
/* ======================= */
(function particles() {
    const canvas = $('.hero-canvas');
    const ctx = canvas.getContext('2d');
    const hero = $('.hero');
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let points = [];
    let rgb = '';
    let running = false;
    let visible = true;

    const readColor = () => { rgb = getComputedStyle(root).getPropertyValue('--particle').trim(); };

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = hero.clientWidth;
        height = hero.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.max(28, Math.min(90, Math.round((width * height) / 15000)));
        points = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6,
        }));
        if (!running) draw();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        const linkDist = 130;
        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            if (running) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            }
            for (let j = i + 1; j < points.length; j++) {
                const q = points[j];
                const d = Math.hypot(p.x - q.x, p.y - q.y);
                if (d < linkDist) {
                    ctx.strokeStyle = `rgba(${rgb}, ${0.16 * (1 - d / linkDist)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
            const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (md < 170) {
                ctx.strokeStyle = `rgba(${rgb}, ${0.45 * (1 - md / 170)})`;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
            ctx.fillStyle = `rgba(${rgb}, 0.55)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function loop() {
        if (!running) return;
        draw();
        requestAnimationFrame(loop);
    }

    function setRunning() {
        const shouldRun = !reducedMotion && visible && !document.hidden;
        if (shouldRun && !running) {
            running = true;
            requestAnimationFrame(loop);
        } else if (!shouldRun) {
            running = false;
        }
    }

    readColor();
    resize();
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resize, 150);
    });
    window.addEventListener('themechange', () => { readColor(); if (!running) draw(); });
    hero.addEventListener('pointermove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; setRunning(); }).observe(hero);
    document.addEventListener('visibilitychange', setRunning);
    setRunning();
})();

/* ======================= */
/* CURSOR RING             */
/* ======================= */
(function cursorRing() {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const ring = $('.cursor-ring');
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let started = false;
    let animating = false;

    document.addEventListener('pointermove', e => {
        target.x = e.clientX;
        target.y = e.clientY;
        if (!started) {
            started = true;
            pos.x = target.x;
            pos.y = target.y;
            document.body.classList.add('has-cursor');
        }
        if (!animating) {
            animating = true;
            requestAnimationFrame(follow);
        }
    });
    document.addEventListener('pointerleave', () => document.body.classList.remove('has-cursor'));
    document.addEventListener('pointerenter', () => { if (started) document.body.classList.add('has-cursor'); });
    document.addEventListener('pointerover', e => {
        ring.classList.toggle('is-hovering', !!e.target.closest('a, button, [data-open], input, textarea'));
    });

    // Ease the ring toward the pointer; stop the loop once it has caught up
    function follow() {
        pos.x += (target.x - pos.x) * 0.2;
        pos.y += (target.y - pos.y) * 0.2;
        ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        if (Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.3) {
            requestAnimationFrame(follow);
        } else {
            animating = false;
        }
    }
})();

/* Start reveals last so generated project cards are included */
observeReveals();
