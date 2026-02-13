<template>
    <Navbar />

    <main class="content">
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
                            rel="noopener"
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
                            rel="noopener"
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
                                rel="noopener"
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

        <!-- Education -->
        <SectionWrapper id="education">
            <h2>Education</h2>
            <p>
                <strong
                    >Secondary Education: Science and Technology Program</strong
                ><br />
                Escola Secundária Francisco de Holanda - 2020-2023
            </p>
            <p>
                <strong>Bachelor's degree in Computer Engineering</strong><br />
                Universidade do Minho - 2023-on going
            </p>
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
                            a106010@alunos.uminho.pt
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
                            rel="noopener"
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
                            rel="noopener"
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

const projects = [
    {
        id: 1,
        title: "Memory Allocator",
        description: "A memory allocation library.",
        tech: ["C"],
        github: "https://github.com/eduardofreitasf/memory_allocator",
    },
    {
        id: 2,
        title: "Build System",
        description: "A simple build system for C projects.",
        tech: ["Python"],
        github: "https://github.com/eduardofreitasf/build_system",
    },
    {
        id: 3,
        title: "Data Structures",
        description: "Implementation of multiple data structures.",
        tech: ["C"],
        github: "https://github.com/eduardofreitasf/data_structures",
    },
];
</script>

<style scoped>
.content {
    padding-top: 80px;
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
    color: #444;
    margin-bottom: 1rem;
}

.hero-text p {
    color: #555;
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
    border: 4px solid white;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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

.contact-link {
    color: #42b883;
    font-size: 1.1rem;
}

.about-list {
    margin-top: 1.5rem;
    padding-left: 1.2rem;
}

.about-list li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.hero-links {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.hero-links a {
    color: #42b883;
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
    color: #444;
    transition:
        transform 0.25s ease,
        color 0.25s easesvg;
}

.icon-link svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

/* Hover animation */
.icon-link:hover {
    color: #42b883;
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
    background: #222;
    color: white;
    font-size: 0.75rem;
    padding: 0.35rem 0.6rem;
    border-radius: 4px;
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
    background-color: #fff;
    padding: 1rem 1.2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    flex: 1 1 280px; /* responsive */
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.contact-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-icon {
    width: 36px;
    height: 36px;
    fill: #42b883; /* accent color */
    flex-shrink: 0;
}

.contact-label {
    font-weight: 600;
    margin: 0 0 0.25rem 0;
}

.contact-link {
    color: #222;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
}

.contact-link:hover {
    color: #42b883;
    text-decoration: underline;
}
</style>
