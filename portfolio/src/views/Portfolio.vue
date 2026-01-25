<template>
    <div class="portfolio">
        <!-- Hero Section -->
        <section id="home" class="section hero">
            <h1>Eduardo Freitas Fernandes</h1>
            <h2>Software Developer</h2>
            <p>
                I build modern web applications and enjoy turning ideas into
                reality.
            </p>
            <div class="hero-actions">
                <a href="#projects" class="btn primary">View Projects</a>
                <a href="/cv.pdf" class="btn secondary" download>Download CV</a>
            </div>
        </section>

        <!-- About Me -->
        <section id="about" class="section">
            <h2>About Me</h2>
            <p>
                I'm a developer with a passion for building clean, efficient,
                and user-friendly applications. I enjoy learning new
                technologies and solving real-world problems through code.
            </p>
            <p>
                Currently, I'm focused on improving my skills in full-stack
                development and software architecture.
            </p>
        </section>

        <!-- Projects -->
        <section id="projects" class="section">
            <h2>Projects</h2>

            <div class="projects-grid">
                <div
                    v-for="project in projects"
                    :key="project.id"
                    class="project-card"
                >
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <p class="tech">
                        <strong>Tech:</strong> {{ project.tech.join(", ") }}
                    </p>
                    <div class="links">
                        <a :href="project.github" target="_blank">GitHub</a>
                        <a
                            v-if="project.demo"
                            :href="project.demo"
                            target="_blank"
                            >Live Demo</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section id="education" class="section">
            <h2>Education</h2>

            <div class="education-item">
                <h3>Bachelor's degree in Computer Engineering</h3>
                <p>Universiade do Minho</p>
                <span>2023 - On Going</span>
            </div>
        </section>

        <!-- Extras -->
        <section id="extras" class="section extras">
            <h2>Extras</h2>

            <div class="extras-grid">
                <div class="extra-card">
                    <h3>CV</h3>
                    <p>Download a full copy of my resume.</p>
                    <a href="/cv.pdf" download class="btn small">Download</a>
                </div>

                <div class="extra-card">
                    <h3>Skills</h3>
                    <ul>
                        <li>Git, Github, Linux</li>
                        <li>C, Haskell, Java, Python</li>
                        <li>HTML, CSS, JavaScript, Vue</li>
                        <li>UML</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section contact">
            <h2>Contact</h2>
            <p>
                Feel free to reach out if you'd like to collaborate or just say
                hi.
            </p>
            <a href="mailto:ef05238@gmail.com" class="btn primary">
                ef05238@gmail.com
            </a>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>© 2026 Eduardo Freitas Fernandes</p>
            <div class="socials">
                <a href="https://github.com/eduardofreitasf" target="_blank"
                    >GitHub</a
                >
                <a
                    href="https://www.linkedin.com/in/eduardoffernandes"
                    target="_blank"
                    >LinkedIn</a
                >
            </div>
        </footer>
    </div>
</template>

<script setup>
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
        description: "Implementation of multiple data structures",
        tech: ["C"],
        github: "https://github.com/eduardofreitasf/data_structures",
    },
];
</script>

<style scoped>
.portfolio {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.section {
    padding: 4rem 2rem;
    max-width: 1000px;
    margin: auto;
}

.hero {
    text-align: center;
    padding-top: 6rem;
}

.hero h1 {
    font-size: 3rem;
}

.hero-actions {
    margin-top: 2rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-right: 1rem;
    border-radius: 4px;
    text-decoration: none;
}

.primary {
    background: #42b883;
    color: white;
}

.secondary {
    border: 1px solid #42b883;
    color: #42b883;
}

.projects-grid,
.extras-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project-card,
.extra-card {
    border: 1px solid #ddd;
    padding: 1.5rem;
    border-radius: 6px;
}

.tech {
    font-size: 0.9rem;
    color: #555;
}

.footer {
    text-align: center;
    padding: 2rem;
    border-top: 1px solid #eee;
}

.socials a {
    margin: 0 0.5rem;
}
</style>
