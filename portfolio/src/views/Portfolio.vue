<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <Navbar />
    <ThemeToggle />

    <main id="main-content" class="content" aria-label="Portfolio content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
    </main>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ThemeToggle from "../components/ThemeToggle.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import ExperienceSection from "../components/sections/ExperienceSection.vue";
import ProjectsSection from "../components/sections/ProjectsSection.vue";
import SkillsSection from "../components/sections/SkillsSection.vue";
import EducationSection from "../components/sections/EducationSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
</script>

<style scoped>
.content {
    padding-top: 80px;
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
</style>
