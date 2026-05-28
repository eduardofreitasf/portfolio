<template>
  <a
    class="card"
    :href="project.github"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`View ${project.title} on GitHub`"
  >
    <div class="card-header">
      <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
        />
      </svg>
      <svg
        class="arrow-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 17L17 7M7 7h10v10"
        />
      </svg>
    </div>

    <h3 class="card-title">{{ project.title }}</h3>
    <p class="card-desc">{{ project.description }}</p>

    <div class="tech-tags">
      <span v-for="tag in project.tech" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-left-color 0.2s ease;
  position: relative;
  overflow: hidden;
  gap: 0.5rem;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-left-color: var(--color-accent-dark);
}

/* Top row: GitHub icon left, arrow icon right */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.github-icon {
  width: 22px;
  height: 22px;
  fill: var(--color-text-subtle);
  transition: fill 0.2s ease;
  flex-shrink: 0;
}

.card:hover .github-icon {
  fill: var(--color-accent);
}

.arrow-icon {
  width: 18px;
  height: 18px;
  color: var(--color-border);
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  flex-shrink: 0;
}

.card:hover .arrow-icon {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.card-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin: 0;
  flex: 1;
}

/* Tech badges */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
  color: var(--color-accent-dark);
  border: 1px solid color-mix(in srgb, var(--color-accent) 25%, transparent);
  letter-spacing: 0.02em;
}
</style>
