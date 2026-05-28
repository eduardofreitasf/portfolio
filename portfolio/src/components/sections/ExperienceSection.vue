<template>
  <SectionWrapper id="experience">
    <h2>Experience</h2>
    <div class="timeline">
      <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
        <div
          class="timeline-dot"
          :class="{ 'timeline-dot--past': !exp.current }"
        ></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <p class="timeline-degree">{{ exp.role }}</p>
              <a
                :href="exp.orgUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="timeline-institution timeline-org-link"
                >{{ exp.organization }}</a
              >
            </div>
            <span class="timeline-date">{{ exp.period }}</span>
          </div>
          <p class="timeline-description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
import { experiences } from "../../data/experience.js";
</script>
