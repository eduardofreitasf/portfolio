<template>
  <SectionWrapper id="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.id" class="skill-group">
        <div class="skill-group-header">
          <svg
            class="skill-group-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              :d="group.icon"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3 class="skill-group-title">{{ group.category }}</h3>
        </div>
        <div class="skill-tags">
          <span v-for="skill in group.skills" :key="skill" class="skill-tag">{{
            skill
          }}</span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
import { skillGroups } from "../../data/skills.js";
</script>

<style scoped>
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
</style>
