<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <Navbar />

    <main id="main-content" class="content" aria-label="Portfolio content">
        <!-- Hero -->
        <SectionWrapper id="home">
            <div class="hero">
                <div class="hero-text">
                    <h1>Eduardo Freitas Fernandes</h1>
                    <h2>Software Developer</h2>
                    <p>
                        Software Engineering Student focused on systems,
                        algorithms, and performance
                    </p>

                    <div class="hero-links">
                        <a
                            href="https://www.linkedin.com/in/eduardoffernandes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon-link"
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.78v2.32h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-8.25c0-1.97-.04-4.5-2.74-4.5-2.75 0-3.17 2.15-3.17 4.37V24h-5V7z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/eduardofreitasf"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon-link"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
                                />
                            </svg>
                        </a>

                        <div class="tooltip-wrapper">
                            <a
                                href="https://github.com/eduardo106919"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="icon-link"
                                aria-label="Academic GitHub"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
                                    />
                                </svg>
                            </a>

                            <span class="tooltip">
                                Academic projects, coursework, and university
                                work
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Image -->
                <div class="hero-image">
                    <img
                        src="/me.jpeg"
                        alt="Photo of Eduardo Freitas Fernandes"
                    />
                </div>
            </div>
        </SectionWrapper>

        <!-- About -->
        <SectionWrapper id="about">
            <h2>About Me</h2>
            <p>
                My name is <strong>Eduardo Freitas Fernandes</strong>, and I am
                a Software Engineering student at Universidade do Minho with a
                strong interest in both high-level abstractions and low-level
                systems. I enjoy learning new technologies and solving
                meaningful problems.
            </p>

            <p>
                I enjoy working at the intersection of elegant algorithms and
                system-level performance, aiming to understand not just how
                software works, but how it behaves close to the hardware.
            </p>

            <ul class="about-list">
                <li>
                    <strong>Low-Level Systems:</strong> Deep interest in Linux
                    internals, operating systems, and C programming.
                </li>
                <li>
                    <strong>Algorithms & Data Structures:</strong> Passionate
                    about functional programming (Haskell), advanced data
                    structures, and algorithmic complexity analysis.
                </li>
                <li>
                    <strong>Security & Networking:</strong> Exploring network
                    security concepts and the fundamentals of digital
                    communication.
                </li>
            </ul>
        </SectionWrapper>

        <!-- Projects -->
        <SectionWrapper id="projects">
            <h2>Projects</h2>
            <div class="grid">
                <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
            </div>
        </SectionWrapper>

        <!-- Skills -->
        <SectionWrapper id="skills">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div v-for="group in skillGroups" :key="group.id" class="skill-group">
                    <div class="skill-group-header">
                        <svg class="skill-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                            <path :d="group.icon" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 class="skill-group-title">{{ group.category }}</h3>
                    </div>
                    <div class="skill-tags">
                        <span v-for="skill in group.skills" :key="skill" class="skill-tag">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>

        <!-- Education -->
        <SectionWrapper id="education">
            <h2>Education</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <div>
                                <p class="timeline-degree">Bachelor's degree in Computer Engineering</p>
                                <p class="timeline-institution">Universidade do Minho</p>
                            </div>
                            <span class="timeline-date">2023 - ongoing</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot timeline-dot--past"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <div>
                                <p class="timeline-degree">Secondary Education: Science and Technology</p>
                                <p class="timeline-institution">Escola Secundária Francisco de Holanda</p>
                            </div>
                            <span class="timeline-date">2020 - 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>

        <!-- Contact -->
        <SectionWrapper id="contact">
            <h2>Contacts</h2>

            <div class="contact-grid">
                <!-- Personal Email -->
                <div class="contact-item">
                    <svg class="contact-icon" viewBox="0 0 24 24">
                        <path
                            d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 16h16V8l-8 7-8-7v12z"
                        />
                    </svg>
                    <div>
                        <p class="contact-label">Personal Email</p>
                        <a href="mailto:ef05238@gmail.com" class="contact-link">
                            ef05238@gmail.com
                        </a>
                    </div>
                </div>

                <!-- Academic Email -->
                <div class="contact-item">
                    <svg class="contact-icon" viewBox="0 0 24 24">
                        <path
                            d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 16h16V8l-8 7-8-7v12z"
                        />
                    </svg>
                    <div>
                        <p class="contact-label">Academic Email</p>
                        <a
                            href="mailto:a106919@alunos.uminho.pt"
                            class="contact-link"
                        >
                            a106919@alunos.uminho.pt
                        </a>
                    </div>
                </div>

                <!-- LinkedIn -->
                <div class="contact-item">
                    <svg class="contact-icon" viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.78v2.32h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-8.25c0-1.97-.04-4.5-2.74-4.5-2.75 0-3.17 2.15-3.17 4.37V24h-5V7z"
                        />
                    </svg>
                    <div>
                        <p class="contact-label">LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/eduardoffernandes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="contact-link"
                        >
                            eduardoffernandes
                        </a>
                    </div>
                </div>

                <div class="contact-item">
                    <svg class="contact-icon" viewBox="0 0 24 24">
                        <path
                            d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM17.25 6.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                    </svg>

                    <div>
                        <p class="contact-label">Instagram</p>
                        <a
                            href="https://www.instagram.com/edufreitas114"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="contact-link"
                        >
                            edufreitas114
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects.js";
import { skillGroups } from "../data/skills.js";
</script>


<style scoped>
.content {
    padding-top: 80px;
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 4rem 1rem;
}

.hero-text {
    flex: 1;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.hero-text h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-text-sub);
    margin-bottom: 1rem;
}

.hero-text p {
    color: var(--color-text-muted);
    max-width: 520px;
}

.hero-image {
    flex-shrink: 0;
}

.hero-image img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--color-surface);
    box-shadow: var(--shadow-lg);
}

h1 {
    font-size: 3rem;
}

h2 {
    margin-bottom: 1rem;
}

.grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Skills Section */
.skills-grid {
    display: grid;
    gap: 1.25rem;
    margin-top: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.skill-group {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 1.25rem;
    transition: box-shadow 0.2s ease;
}

.skill-group:hover {
    box-shadow: var(--shadow-sm);
}

.skill-group-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;
}

.skill-group-icon {
    width: 20px;
    height: 20px;
    color: var(--color-accent);
    flex-shrink: 0;
}

.skill-group-title {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-pill);
    background: var(--color-surface-alt);
    color: var(--color-text-nav);
    border: 1px solid var(--color-border);
    transition: all 0.15s ease;
}

.skill-group:hover .skill-tag {
    border-color: color-mix(in srgb, var(--color-accent) 30%, transparent);
    color: var(--color-text);
}

/* Education Timeline */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 1.5rem;
    padding-left: 1rem;
    border-left: 2px solid var(--color-border);
}

.timeline-item {
    position: relative;
    padding: 0 0 2rem 1.75rem;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {
    position: absolute;
    left: -0.55rem;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--color-accent);
    border: 2px solid var(--color-surface);
    box-shadow: 0 0 0 2px var(--color-accent);
}

.timeline-dot--past {
    background: var(--color-border);
    box-shadow: 0 0 0 2px var(--color-border);
}

.timeline-content {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
    transition: box-shadow 0.2s ease;
}

.timeline-content:hover {
    box-shadow: var(--shadow-sm);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
}

.timeline-degree {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--color-text);
    margin: 0 0 0.25rem 0;
}

.timeline-institution {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin: 0;
}

.timeline-date {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-accent);
    white-space: nowrap;
    padding: 0.2rem 0.6rem;
    background: color-mix(in srgb, var(--color-accent) 10%, transparent);
    border-radius: var(--radius-pill);
    border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
    align-self: flex-start;
}

.contact-link {
    color: var(--color-accent);
    font-size: 1.1rem;
}

#about p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--color-text-subtle);
    margin-bottom: 1.25rem;
}

#about p strong {
    color: var(--color-text);
    font-weight: 600;
}

.about-list {
    margin-top: 1.75rem;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.about-list li {
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.65;
    color: var(--color-text-subtle);
    font-size: 0.975rem;
}

.about-list li strong {
    color: var(--color-text);
    font-weight: 600;
}

.about-list li::before {
    content: "";
    position: absolute;
    left: 0.15rem;
    top: 0.55rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-accent);
    box-shadow: 0 0 0 2.5px color-mix(in srgb, var(--color-accent) 20%, transparent);
}


.hero-links {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.hero-links a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;

    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.hero-links a:hover {
    text-decoration: underline;
}

/* Icon links */
.icon-link {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-sub);
    transition:
        transform 0.25s ease,
        color 0.25s ease;
}

.icon-link svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

/* Hover animation */
.icon-link:hover {
    color: var(--color-accent);
    transform: translateY(-4px);
}

/* Tooltip */
.tooltip-wrapper {
    position: relative;
}

.tooltip {
    position: absolute;
    bottom: -2.2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-tooltip-bg);
    color: var(--color-surface);
    font-size: 0.75rem;
    padding: 0.35rem 0.6rem;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}

.tooltip-wrapper:hover .tooltip {
    opacity: 1;
}

.contact-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-surface);
    padding: 1rem 1.2rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    flex: 1 1 280px;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.contact-item:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

.contact-icon {
    width: 36px;
    height: 36px;
    fill: var(--color-accent);
    flex-shrink: 0;
}

.contact-label {
    font-weight: 600;
    margin: 0 0 0.25rem 0;
}

.contact-link {
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
}

.contact-link:hover {
    color: var(--color-accent);
    text-decoration: underline;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
        padding: 2rem 0;
        gap: 2rem;
    }

    .hero-text p {
        margin: 0 auto;
    }

    .hero-image img {
        width: 180px;
        height: 180px;
    }

    .hero-text h1 {
        font-size: 2.2rem;
    }

    .hero-text h2 {
        font-size: 1.1rem;
    }

    .hero-links {
        justify-content: center;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    .contact-grid {
        flex-direction: column;
    }

    .contact-item {
        flex: 1 1 auto;
    }
}
</style>
