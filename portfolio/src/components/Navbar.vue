<template>
    <nav class="navbar">
        <div class="logo">Eduardo Freitas Fernandes</div>
        <button class="menu-toggle" @click="isOpen = !isOpen" aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <ul class="nav-links" :class="{ 'is-open': isOpen }">
            <li><a href="#about" @click="isOpen = false">About</a></li>
            <li><a href="#projects" @click="isOpen = false">Projects</a></li>
            <li><a href="#education" @click="isOpen = false">Education</a></li>
            <li><a href="#contact" @click="isOpen = false">Contacts</a></li>
            <li>
                <a
                    href="/portfolio/cv.pdf"
                    class="cv-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="isOpen = false"
                    >CV</a
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>


<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    border-bottom: 1px solid #eee;
    padding: 1.2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    z-index: 100;
    box-sizing: border-box;
}

.logo {
    font-weight: 700;
    font-size: 1.15rem;
    white-space: nowrap;
}

.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.2rem;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.35rem 0.5rem;
    border-radius: 4px;
    transition:
        color 0.2s ease,
        background-color 0.2s ease;
}

.nav-links a:hover {
    background-color: #f4f4f4;
    color: #000;
}

/* CV Button */
.cv-btn {
    padding: 0.45rem 0.9rem;
    border: 1px solid #42b883;
    border-radius: 999px;
    color: #42b883;
    font-weight: 600;
    transition: all 0.25s ease;
    background: transparent;
}

.cv-btn:hover {
    background: #42b883;
    color: white;
    transform: translateY(-1px);
}

/* Menu Toggle Button */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    padding: 0.5rem;
}

.menu-toggle svg {
    width: 24px;
    height: 24px;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border-bottom: 1px solid #eee;
        padding: 1rem 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .nav-links.is-open {
        display: flex;
    }

    .nav-links li {
        width: 100%;
        text-align: center;
        padding: 0.5rem 0;
    }

    .navbar {
        flex-wrap: wrap;
    }
}
</style>
