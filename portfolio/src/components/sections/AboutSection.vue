<template>
  <SectionWrapper id="about">
    <h2>About Me</h2>
    <p>
      My name is <strong>Eduardo Freitas Fernandes</strong>, and I am a Software
      Engineering student at Universidade do Minho with a strong interest in
      both high-level abstractions and low-level systems. I enjoy learning new
      technologies and solving meaningful problems.
    </p>

    <p>
      I enjoy working at the intersection of elegant algorithms and system-level
      performance, aiming to understand not just how software works, but how it
      behaves close to the hardware.
    </p>

    <ul class="about-list">
      <li>
        <strong>Low-Level Systems:</strong> Deep interest in Linux internals,
        operating systems, and C programming.
      </li>
      <li>
        <strong>Algorithms & Data Structures:</strong> Passionate about
        functional programming (Haskell), advanced data structures, and
        algorithmic complexity analysis.
      </li>
      <li>
        <strong>Security & Networking:</strong> Exploring network security
        concepts and the fundamentals of digital communication.
      </li>
    </ul>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
</script>

<style scoped>
#about p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-subtle);
  margin-bottom: 1.25rem;
}

#about p strong {
  color: var(--color-text);
  font-weight: 600;
}

.about-list {
  margin-top: 1.75rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.about-list li {
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.65;
  color: var(--color-text-subtle);
  font-size: 0.975rem;
}

.about-list li strong {
  color: var(--color-text);
  font-weight: 600;
}

.about-list li::before {
  content: "";
  position: absolute;
  left: 0.15rem;
  top: 0.55rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 2.5px
    color-mix(in srgb, var(--color-accent) 20%, transparent);
}
</style>
