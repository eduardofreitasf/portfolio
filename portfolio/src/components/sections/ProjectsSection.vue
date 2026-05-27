<template>
    <SectionWrapper id="projects">
        <h2>Projects</h2>
        <div class="grid">
            <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
        </div>
    </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
import ProjectCard from "../ProjectCard.vue";
import { projects } from "../../data/projects.js";
</script>

<style scoped>
.grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
