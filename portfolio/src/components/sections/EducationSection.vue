<template>
    <SectionWrapper id="education">
        <h2>Education</h2>
        <div class="timeline">
            <div v-for="edu in education" :key="edu.id" class="timeline-item">
                <div class="timeline-dot" :class="{ 'timeline-dot--past': !edu.current }"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div>
                            <p class="timeline-degree">{{ edu.degree }}</p>
                            <p class="timeline-institution">{{ edu.institution }}</p>
                        </div>
                        <span class="timeline-date">{{ edu.period }}</span>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../SectionWrapper.vue";
import { education } from "../../data/education.js";
</script>
