import { ref, onMounted } from 'vue';

const isDark = ref(false);

const applyTheme = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    isDark.value = dark;
};

export function useTheme() {
    onMounted(() => {
        const saved = localStorage.getItem('portfolio-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(saved ? saved === 'dark' : prefersDark);
    });

    const toggleTheme = () => applyTheme(!isDark.value);

    return { isDark, toggleTheme };
}
