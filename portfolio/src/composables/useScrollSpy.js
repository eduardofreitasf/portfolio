import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy(sectionIds, options = {}) {
  const activeSection = ref("");

  const { rootMargin = "-20% 0px -70% 0px", threshold = 0 } = options;

  let observer = null;

  const init = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      { rootMargin, threshold },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  };

  onMounted(init);

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { activeSection };
}
