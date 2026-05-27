<template>
    <div class="card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p class="tech">{{ project.tech.join(" • ") }}</p>

        <div class="links">
            <a :href="project.github" target="_blank">GitHub</a>
            <a v-if="project.demo" :href="project.demo" target="_blank">
                Live
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    project: Object,
});
</script>

<style scoped>
.card {
    padding: 1.5rem;
    border-radius: var(--radius-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.tech {
    font-size: 0.85rem;
    color: var(--color-text-subtle);
}

.links {
    margin-top: 1rem;
}

.links a {
    margin-right: 1rem;
    color: var(--color-accent);
}
</style>
