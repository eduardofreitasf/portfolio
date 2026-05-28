<template>
  <nav class="navbar" aria-label="Main navigation">
    <div class="logo">
      <span class="logo-full">Eduardo Freitas Fernandes</span>
      <span class="logo-short">Eduardo Fernandes</span>
    </div>

    <button
      class="menu-toggle"
      @click="isOpen = !isOpen"
      aria-label="Toggle menu"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          v-if="!isOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <ul class="nav-links" :class="{ 'is-open': isOpen }">
      <li>
        <a
          href="#about"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'about' }"
          >About</a
        >
      </li>
      <li>
        <a
          href="#experience"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'experience' }"
          >Experience</a
        >
      </li>
      <li>
        <a
          href="#projects"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'projects' }"
          >Projects</a
        >
      </li>
      <li>
        <a
          href="#skills"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'skills' }"
          >Skills</a
        >
      </li>
      <li>
        <a
          href="#education"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'education' }"
          >Education</a
        >
      </li>
      <li>
        <a
          href="#contact"
          @click="isOpen = false"
          :class="{ 'is-active': activeSection === 'contact' }"
          >Contacts</a
        >
      </li>
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
import { ref } from "vue";
import { useScrollSpy } from "../composables/useScrollSpy.js";

const isOpen = ref(false);
const { activeSection } = useScrollSpy([
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
]);
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
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

.logo-short {
  display: none;
}

/* Right-side group: theme toggle + hamburger */
.navbar-end {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-nav);
  border-radius: var(--radius-sm);
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
  padding: 0;
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
}

.theme-toggle:hover {
  color: var(--color-accent);
  background-color: var(--color-surface-alt);
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text-nav);
  font-weight: 500;
  padding: 0.35rem 0.5rem;
  border-radius: var(--radius-sm);
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.nav-links a:hover {
  background-color: var(--color-surface-alt);
  color: var(--color-text);
}

/* Active link (scrollspy) */
.nav-links a.is-active {
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 8%, transparent);
  font-weight: 600;
}

/* CV Button */
.cv-btn {
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-pill);
  color: var(--color-accent);
  font-weight: 600;
  transition: all 0.25s ease;
  background: transparent;
}

.cv-btn:hover {
  background: var(--color-accent);
  color: var(--color-surface);
  transform: translateY(-1px);
}

/* cv-btn should never show the active indicator */
.cv-btn.is-active {
  background: var(--color-accent);
  color: var(--color-surface);
}

/* Menu Toggle Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-nav);
  padding: 0.5rem;
}

.menu-toggle svg {
  width: 24px;
  height: 24px;
}

/* Responsive Rules */
@media (max-width: 1024px) {
  .logo-full {
    display: none;
  }
  .logo-short {
    display: inline;
  }

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
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 0;
    box-shadow: var(--shadow-menu);
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
