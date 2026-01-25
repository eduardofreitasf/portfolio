<template>
    <section
        ref="sectionRef"
        :id="id"
        class="section"
        :class="{ visible: isVisible }"
    >
        <slot />
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({ id: String });

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.disconnect();
            }
        },
        { threshold: 0.2 },
    );

    observer.observe(sectionRef.value);
});
</script>

<style scoped>
.section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
