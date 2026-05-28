<template>
  <SectionWrapper id="home">
    <div class="hero">
      <div class="hero-text">
        <p class="hero-greeting">Hi, I'm</p>
        <h1>Eduardo Freitas Fernandes</h1>
        <p class="hero-role">Software Engineering Student</p>
        <p class="hero-tagline">
          Focused on systems, algorithms, and performance &mdash; from elegant
          code to close-to-the-metal behaviour.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="hero-cta">View my work</a>
          <div class="hero-icons">
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
                class="icon-link icon-link--academic"
                aria-label="Academic GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.06.77 2.14v3.17c0 .31.21.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
                  />
                </svg>
              </a>
              <span class="tooltip">Academic projects &amp; coursework</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo -->
      <div class="hero-image">
        <div class="hero-image-ring">
          <img src="/me.jpeg" alt="Photo of Eduardo Freitas Fernandes" />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 5rem 1rem 4rem;
}

.hero-text {
  flex: 1;
}

.hero-greeting {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-accent);
  margin: 0 0 0.4rem 0;
  letter-spacing: 0.02em;
}

.hero-text h1 {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.6rem 0;
  color: var(--color-text);
}

.hero-role {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin: 0 0 1rem 0;
}

.hero-tagline {
  color: var(--color-text-subtle);
  font-size: 0.975rem;
  line-height: 1.7;
  max-width: 480px;
  margin: 0 0 2rem 0;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.4rem;
  background: var(--color-accent);
  color: var(--color-surface);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 2px 12px
    color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.hero-cta:hover {
  background: var(--color-accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 18px
    color-mix(in srgb, var(--color-accent) 40%, transparent);
}

.hero-icons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Photo */
.hero-image {
  flex-shrink: 0;
}

.hero-image-ring {
  position: relative;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-accent),
    color-mix(in srgb, var(--color-accent) 40%, transparent)
  );
  box-shadow:
    0 0 0 4px var(--color-surface),
    var(--shadow-lg);
}

.hero-image-ring img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
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

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem 0;
    gap: 2rem;
  }

  .hero-tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image-ring img {
    width: 160px;
    height: 160px;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }
}
</style>
