<template>
  <SectionWrapper id="contact">
    <h2>Contacts</h2>

    <div class="contact-grid">
      <!-- Personal Email -->
      <a
        href="mailto:ef05238@gmail.com"
        class="contact-item"
        aria-label="Send email to ef05238@gmail.com"
      >
        <div class="contact-icon-wrapper">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 16h16V8l-8 7-8-7v12z"
            />
          </svg>
        </div>
        <div class="contact-details">
          <p class="contact-label">Personal Email</p>
          <span class="contact-value">ef05238@gmail.com</span>
        </div>
        <svg
          class="contact-arrow"
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
      </a>

      <!-- Academic Email -->
      <a
        href="mailto:a106919@alunos.uminho.pt"
        class="contact-item"
        aria-label="Send email to a106919@alunos.uminho.pt"
      >
        <div class="contact-icon-wrapper">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 16h16V8l-8 7-8-7v12z"
            />
          </svg>
        </div>
        <div class="contact-details">
          <p class="contact-label">Academic Email</p>
          <span class="contact-value">a106919@alunos.uminho.pt</span>
        </div>
        <svg
          class="contact-arrow"
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
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/eduardoffernandes/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-item"
        aria-label="Visit Eduardo's LinkedIn profile"
      >
        <div class="contact-icon-wrapper">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.78v2.32h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-8.25c0-1.97-.04-4.5-2.74-4.5-2.75 0-3.17 2.15-3.17 4.37V24h-5V7z"
            />
          </svg>
        </div>
        <div class="contact-details">
          <p class="contact-label">LinkedIn</p>
          <span class="contact-value">eduardoffernandes</span>
        </div>
        <svg
          class="contact-arrow"
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
      </a>

      <!-- Instagram -->
      <a
        href="https://www.instagram.com/edufreitas114"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-item"
        aria-label="Visit Eduardo's Instagram profile"
      >
        <div class="contact-icon-wrapper">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM17.25 6.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
        </div>
        <div class="contact-details">
          <p class="contact-label">Instagram</p>
          <span class="contact-value">edufreitas114</span>
        </div>
        <svg
          class="contact-arrow"
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
      </a>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-surface);
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.contact-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: color-mix(in srgb, var(--color-accent) 30%, transparent);
}

.contact-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
  color: var(--color-accent);
  flex-shrink: 0;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.contact-item:hover .contact-icon-wrapper {
  background: var(--color-accent);
  color: var(--color-surface);
}

.contact-icon {
  width: 22px;
  height: 22px;
  fill: currentColor;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
  min-width: 0; /* Prevents overflow of email addresses */
}

.contact-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-subtle);
  margin: 0;
}

.contact-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-item:hover .contact-value {
  color: var(--color-accent-dark);
}

.contact-arrow {
  width: 14px;
  height: 14px;
  color: var(--color-border);
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  flex-shrink: 0;
}

.contact-item:hover .contact-arrow {
  color: var(--color-accent);
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
