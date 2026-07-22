<template>
  <SectionWrapper id="certifications">
    <h2>Certifications</h2>
    <div class="certifications-grid">
      <article
        v-for="cert in certifications"
        :key="cert.id"
        class="cert-card"
        :class="{ 'cert-card--link': cert.link && cert.link !== '#' }"
        tabindex="0"
        role="link"
        :aria-label="`Open certification: ${cert.title}`"
        @click="openCertification(cert.link)"
        @keydown.enter.prevent="openCertification(cert.link)"
        @keydown.space.prevent="openCertification(cert.link)"
      >
        <div class="cert-card__header">
          <span class="cert-badge">{{ cert.category }}</span>
          <span class="cert-date">{{ cert.date }}</span>
        </div>

        <h3 class="cert-title">{{ cert.title }}</h3>
        <p class="cert-issuer">{{ cert.issuer }}</p>
      </article>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
import { certifications } from "../../data/certifications.js";

const openCertification = (link) => {
  if (link && link !== "#") {
    window.open(link, "_blank", "noopener,noreferrer");
  }
};
</script>

<style scoped>
.certifications-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cert-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: default;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    border-color 0.16s ease;
}

.cert-card--link {
  cursor: pointer;
}

.cert-card--link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: color-mix(in srgb, var(--color-accent) 35%, var(--color-border));
}

.cert-card--link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.cert-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.cert-badge,
.cert-date {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cert-badge {
  color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
  padding: 0.22rem 0.55rem;
  border-radius: var(--radius-pill);
}

.cert-date {
  color: var(--color-text-muted);
}

.cert-title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text);
}

.cert-issuer {
  margin: 0;
  color: var(--color-text-subtle);
  font-size: 0.92rem;
}
</style>
