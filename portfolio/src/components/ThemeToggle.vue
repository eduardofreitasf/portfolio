<template>
    <button
        class="theme-fab"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <!-- Sun icon (shown in dark mode) -->
        <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path stroke-linecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
        <!-- Moon icon (shown in light mode) -->
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js';
const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-fab {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 200;

    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text-nav);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: var(--shadow-md);
    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.theme-fab svg {
    width: 20px;
    height: 20px;
}

.theme-fab:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
}
</style>
